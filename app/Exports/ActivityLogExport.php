<?php

namespace App\Exports;



use App\Models\Invoice;
use App\Models\EmailTemplate;
use App\Models\PublicIpAddress;
use App\Models\ReceiptRecord;
use App\Models\Role;
use App\Models\User;
use Carbon\Carbon;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\FromQuery;
use DateTime;
use Illuminate\Support\Facades\Auth;
use Spatie\Activitylog\Models\Activity;
use Maatwebsite\Excel\Concerns\WithColumnFormatting;
use PhpOffice\PhpSpreadsheet\Style\NumberFormat as StyleNumberFormat;
class ActivityLogExport implements FromQuery, WithMapping,WithHeadings,WithColumnFormatting
{
    use Exportable;
    /**
    * @return \Illuminate\Support\Collection
    */
    protected $request;
    protected $count;

    public function __construct(Request $request)
    {
        $data = Role::join('users', 'users.role', 'roles.id')
            ->where('roles.activity_log', 1)
            ->where('users.id', Auth::id())
            ->first();
        if (!$data) {
            abort(403);
        }
        $this->request = $request;
        $this->count = 1;
    }
    public function query()
    {
            $request = $this->request;
            $activities = Activity::query()
            ->join('users','causer_id','=','users.id')
            ->when($request->option, function ($query, $option) {
                $query->where('activity_log.description', 'LIKE',  '%' . $option . '%');
            })
                ->when($request->general, function ($query, $general) {
                    $query->where('activity_log.description', 'LIKE',  '%' . $general . '%');
                })
                ->when($request->dateRange, function ($query, $dateRange) {
             
                        $startDate = Carbon::parse($dateRange[0])->format('Y-m-d');
                        $endDate = Carbon::parse($dateRange[1])->format('Y-m-d');
                  
                        $query->whereBetween('activity_log.created_at', [$startDate . ' 00:00:00', $endDate . ' 23:59:59']);
                    
                })
                ->select('activity_log.*','users.name as causer_name');
       
        return $activities;
    
    }
    public function headings(): array
    {
        return [
            'No.',
            'Activity',
            'Changed By',
            'Date',
            'Changes',
        ];
    }
    public function columnFormats(): array
    {
        return [
            'D' => StyleNumberFormat::FORMAT_DATE_DDMMYYYY,
        ];
    }
    public function map($activity): array
    {
        
        return [
            $this->count++,
            $activity->description,
            $activity->causer_name,
            $activity->created_at,
            $this->formatJson($activity->properties['changes'] ?? []), // Format the JSON
            
        ];
    }
    private function formatJson($data)
    {
        return json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    }

}
