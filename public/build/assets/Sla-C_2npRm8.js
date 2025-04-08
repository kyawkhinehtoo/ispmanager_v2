import{A as U}from"./AppLayout-CFytxyCO.js";import{P as V}from"./Pagination-DFwdA8Zc.js";import{r as u,J as D,q as B,A as L,s as N,c as z,w as P,N as v,o as d,a as e,k as _,x as E,K as F,d as m,F as K,g as R,f as j,h as q,t as f,e as k,y as A,b as J}from"./app-CWfv8roO.js";import{_ as W}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./DropdownLink-BM-HsMT0.js";const Y={name:"Sla",components:{AppLayout:U,Pagination:V},props:{slas:Object,errors:Object},setup(x){u(0),u(0),u(0);const t=D({id:null,percentage:null}),n=u("");let o=u(!1),y=u(!1);function g(){t.percentage=null}function M(){o.value?(t._method="PUT",t._method="PUT",v.post("/sla/"+t.id,t,{onSuccess:s=>{l(),g(),Toast.fire({icon:"success",title:s.props.flash.message})},onError:s=>{l(),console.log("error ..".errors)}})):(t._method="POST",v.post("/sla",t,{preserveState:!0,onSuccess:s=>{l(),g(),Toast.fire({icon:"success",title:s.props.flash.message})},onError:s=>{l(),console.log("error ..".errors)}}))}function S(s){t.id=s.id,t.percentage=s.percentage,o.value=!0,h()}function r(s){confirm("Are you sure want to remove?")&&(s._method="DELETE",v.post("/sla/"+s.id,s),l(),g())}function h(){y.value=!0}const l=()=>{y.value=!1,g(),o.value=!1},O=()=>{console.log("search value is"+n.value),v.get("/sla/",{sla:n.value},{preserveState:!0})};function C(s){let b=s%3600/60,c=s%(24*3600)/3600,i=s/(24*3600),w=null;if(s>=86400){let a=i-Math.floor(i);i=i-a,a=a*24;let p=a-Math.floor(a);a=a-p,p=Math.round(p*60),w=i+" days, "+a+" hour, "+p+" minutes"}else if(s>=1440){let a=c-Math.floor(c),p=c-a;a=Math.round(a*60),w=p+" hour, "+a+" minutes"}else w=Math.round(b)+" minutes";return w}function T(){x.slas.data.map(function(s){let b=604800,c=2592e3,i=31536e3;s.weekly=C(b-s.percentage/100*b),s.monthly=C(c-s.percentage/100*c),s.yearly=C(i-s.percentage/100*i)})}return B(()=>{T()}),L(()=>{T()}),{form:t,submit:M,editMode:o,isOpen:y,openModal:h,closeModal:l,edit:S,deleteRow:r,searchTsp:O,search:n}}},G={class:"py-2"},H={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},I={class:"flex justify-between space-x-2 items-end mb-2 px-1 md:px-0"},Q={class:"relative flex flex-wrap z-0"},X={key:0,class:"bg-white overflow-hidden shadow-xl sm:rounded-lg"},Z={class:"min-w-full divide-y divide-gray-200"},$={class:"bg-white divide-y divide-gray-200"},ee={class:"px-6 py-3 whitespace-nowrap"},te={class:"px-6 py-3 whitespace-nowrap"},se={class:"px-6 py-3 whitespace-nowrap"},oe={class:"px-6 py-3 whitespace-nowrap"},re={class:"px-6 py-3 whitespace-nowrap"},ae={class:"px-6 py-3 whitespace-nowrap text-right text-sm font-medium"},ne=["onClick"],le=["onClick"],ie={key:0,ref:"isOpen",class:"fixed z-10 inset-0 overflow-y-auto ease-out duration-400"},de={class:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"},ce={class:"inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",role:"dialog","aria-modal":"true","aria-labelledby":"modal-headline"},pe={class:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"},ue={class:""},me={class:"mb-4"},fe={key:0,class:"text-red-500"},ge={class:"bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"},xe={class:"flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto"},ye={"wire:click.prevent":"submit",type:"submit",class:"inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"},he={class:"flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto"},be={"wire:click.prevent":"submit",type:"submit",class:"inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"},we={class:"mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto"},ve={key:1};function _e(x,t,n,o,y,g){const M=N("pagination"),S=N("app-layout");return d(),z(S,null,{header:P(()=>t[6]||(t[6]=[e("h2",{class:"font-semibold text-xl text-white leading-tight"},"SLA Chart",-1)])),default:P(()=>[e("div",G,[e("div",H,[e("div",I,[e("div",Q,[t[7]||(t[7]=e("span",{class:"z-10 h-full leading-snug font-normal text-center text-gray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3"},[e("i",{class:"fas fa-search"})],-1)),_(e("input",{type:"text",placeholder:"Search here...",class:"border-0 px-3 py-3 placeholder-gray-300 text-gray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10",id:"search","onUpdate:modelValue":t[0]||(t[0]=r=>o.search=r),onKeyup:t[1]||(t[1]=F((...r)=>o.searchTsp&&o.searchTsp(...r),["enter"]))},null,544),[[E,o.search]])]),e("button",{onClick:t[2]||(t[2]=(...r)=>o.openModal&&o.openModal(...r)),class:"inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"},"Create")]),n.slas.data?(d(),m("div",X,[e("table",Z,[t[9]||(t[9]=e("thead",{class:"bg-gray-50"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," No. "),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Percentage"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Per Week"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Per Month"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Per Year"),e("th",{scope:"col",class:"relative px-6 py-3"},[e("span",{class:"sr-only"},"Action")])])],-1)),e("tbody",$,[(d(!0),m(K,null,R(n.slas.data,(r,h)=>(d(),m("tr",{key:r.id},[e("td",ee,f(n.slas.from+h),1),e("td",te,f(r.percentage),1),e("td",se,f(r.weekly),1),e("td",oe,f(r.monthly),1),e("td",re,f(r.yearly),1),e("td",ae,[e("a",{href:"#",onClick:l=>o.edit(r),class:"text-indigo-600 hover:text-indigo-900"},"Edit",8,ne),t[8]||(t[8]=j(" | ")),e("a",{href:"#",onClick:l=>o.deleteRow(r),class:"text-red-600 hover:text-red-900"},"Delete",8,le)])]))),128))])]),o.isOpen?(d(),m("div",ie,[e("div",de,[t[11]||(t[11]=e("div",{class:"fixed inset-0 transition-opacity"},[e("div",{class:"absolute inset-0 bg-gray-500 opacity-75"})],-1)),t[12]||(t[12]=e("span",{class:"hidden sm:inline-block sm:align-middle sm:h-screen"},null,-1)),t[13]||(t[13]=j("​ ")),e("div",ce,[e("form",{onSubmit:t[5]||(t[5]=q((...r)=>o.submit&&o.submit(...r),["prevent"]))},[e("div",pe,[e("div",ue,[e("div",me,[t[10]||(t[10]=e("label",{for:"percentage",class:"block text-gray-700 text-sm font-bold mb-2"},"Sla Name:",-1)),_(e("input",{type:"text",class:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md",id:"percentage",placeholder:"Enter Sla Name","onUpdate:modelValue":t[3]||(t[3]=r=>o.form.percentage=r)},null,512),[[E,o.form.percentage]]),x.$page.props.errors.percentage?(d(),m("div",fe,f(x.$page.props.errors.percentage[0]),1)):k("",!0)])])]),e("div",ge,[e("span",xe,[_(e("button",ye,"Save",512),[[A,!o.editMode]])]),e("span",he,[_(e("button",be,"Update",512),[[A,o.editMode]])]),e("span",we,[e("button",{onClick:t[4]||(t[4]=(...r)=>o.closeModal&&o.closeModal(...r)),type:"button",class:"inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"},"Cancel")])])],32)])])],512)):k("",!0)])):k("",!0),n.slas.links?(d(),m("span",ve,[J(M,{class:"mt-6",links:n.slas.links},null,8,["links"])])):k("",!0)])])]),_:1})}const Ne=W(Y,[["render",_e]]);export{Ne as default};
