<?php

namespace App\Traits;

use App\Models\Incident;
use Illuminate\Support\Facades\DB;
use Datetime;
use Mccarlosen\LaravelMpdf\Facades\LaravelMpdf as PDF;
use Illuminate\Support\Facades\Storage;
use AshAllenDesign\ShortURL\Classes\Builder;
trait PdfTrait
{
    public function createPDF($options, $template, $data, $name, $path,$headerHtml = null, $footerHtml = null)
    {
        $headerHtml = $headerHtml?? view('templates.invoiceheader')->render();
        $footerHtml = $footerHtml?? view('templates.footer')->render();

        view()->share($template, $data);

        $pdf = PDF::loadView($template, $data, [], $options);

        $mpdf = $pdf->getMpdf();
        $mpdf->SetHTMLHeader($headerHtml);
        $mpdf->SetHTMLFooter($footerHtml);
        // Optional: Add a new page
        // $mpdf->AddPage();

        // Set display mode
        $mpdf->SetDisplayMode('fullpage', 'default');

        // Write the HTML content
        //$mpdf->WriteHTML(view($template, $data)->render());
        $output = $pdf->output();

        $disk = Storage::disk('public');

        if ($disk->put($path, $output)) {
            // Successfully stored. Return the full path.
            $disk_path =  $disk->path($data->ftth_id . '/' . $name);
            $app_url = getenv('APP_URL', 'http://localhost:8000');
            if (!$app_url)
                $app_url = "http://localhost:8000";
                $shortURLObject = app(Builder::class)
            ->destinationUrl($app_url . '/storage/' . $data->ftth_id . '/' . $name)
            ->make();
           
            $shortURL = $shortURLObject->url_key;
            return ['shortURL' => $shortURL, 'disk_path' => $disk_path, 'status' => 'success'];
        }
        return ['status' => 'fail'];
    }
}
