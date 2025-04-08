import{A as V}from"./AppLayout-CFytxyCO.js";import{P as T}from"./Pagination-DFwdA8Zc.js";import{r as v,T as U,q as M,A,s as y,c as P,w as F,N,o as n,a as e,k as p,x as b,d as r,t as l,e as d,z as h,g as u,F as g,v as C,f as m,b as w,n as O}from"./app-CWfv8roO.js";import{M as S}from"./vue3-multiselect.umd.min-Cs46zxsx.js";import{_ as E}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./DropdownLink-BM-HsMT0.js";const D={name:"Announcement",components:{AppLayout:V,Multiselect:S,Pagination:T},props:{announcements:Object,templates:Object,customers:Object,packages:Object,package_speed:Object,projects:Object,townships:Object,status:Object,errors:Object},setup(a){const s=v(""),i=v(""),o=U({name:null,general:null,template:0,package_except:null,package:null,type:null,township:0,status_except:null,status:null,partner:0,payment:0,deposit_status:0});function _(){o.name=null,o.general=null,o.template=0,o.package_except=null,o.package=null,o.type=null,o.township=0,o.status_except=null,o.status=null,o.partner=0,o.payment=0,o.deposit_status=0}function k(){if(o.template!=0){let t=a.templates.filter(j=>j.id==o.template)[0];o.type=t.type}}const c=()=>{o.post("/announcement",{onSuccess:t=>{Toast.fire({icon:"success",title:t.props.flash.message})},onError:t=>{console.log(t)}})},x=()=>{o.post("/announcement/show")},f=t=>{confirm("Are you sure want to Delete?")&&(t._method="DELETE",N.post("/announcement/"+t.id,t))};return M(()=>{a.packages.map(function(t){return t.item_data=`${t.speed}Mbps - ${t.name} - ${t.contract_period} Months`}),a.package_speed.map(function(t){return t.item_data=`${t.speed} Mbps - ${t.type.toUpperCase()}`})}),A(()=>{a.packages.map(function(t){return t.item_data=`${t.speed}Mbps - ${t.name} - ${t.contract_period} Months`}),a.package_speed.map(function(t){return t.item_data=`${t.speed} Mbps - ${t.type.toUpperCase()}`})}),{deleteRow:f,doSearch:x,template_change:k,sort:i,search:s,createForm:o,saveForm:c,resetCreateForm:_}}},z={class:"py-2"},B={class:"max-w-7xl mx-auto sm:px-6 lg:px-8 flex gap-2 content-center justify-center"},L={class:"mt-1 flex rounded-md shadow-sm w-4/5"},R={key:0,class:"max-w-7xl mx-auto sm:px-6 lg:px-8 text-red-500"},q={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},G={class:"bg-white shadow sm:rounded-t-lg flex justify-between space-x-2 items-end py-2 px-2 md:px-2"},I={class:"grid grid-cols-1 md:grid-cols-4 gap-6 w-full"},H={class:"col-span-1 sm:col-span-1"},J={class:"py-2"},K={class:"mt-1 flex rounded-md shadow-sm"},Q={key:0,class:"text-red-500"},W={class:"py-2"},X={class:"mt-1 flex rounded-md shadow-sm"},Y=["value"],Z={key:0,class:"text-red-500"},$={class:"col-span-1 sm:col-span-1"},ee={class:"py-2"},te={class:"flex justify-between"},se={class:"inline-flex text-sm font-medium text-gray-700"},oe={key:0,class:"mt-1 flex rounded-md shadow-sm"},ae={key:0,class:"text-red-500"},ne={class:"py-2"},re={class:"mt-1 flex rounded-md shadow-sm"},le={key:0,class:"text-red-500"},ie={class:"col-span-1 sm:col-span-1"},de={class:"py-2"},pe={class:"mt-1 flex rounded-md shadow-sm"},me=["value"],ce={key:0,class:"text-red-500"},ue={class:"py-2"},ge={class:"flex justify-between"},xe={class:"inline-flex text-sm font-medium text-gray-700"},fe={key:0,class:"mt-1 flex rounded-md shadow-sm"},ye={key:0,class:"text-red-500"},be={class:"col-span-1 sm:col-span-1"},he={class:"py-2"},we={class:"mt-1 flex rounded-md shadow-sm"},_e=["value"],ke={key:0,class:"text-red-500"},ve={class:"mb-2 py-2 px-2 md:px-2 bg-white shadow rounded-b-lg flex justify-between"},Fe={class:"flex"},Ce={class:"flex"},je={key:0,class:"bg-white overflow-auto shadow-xl sm:rounded-lg"},Ve={class:"min-w-full divide-y divide-gray-200"},Te={class:"bg-white divide-y divide-gray-200 text-sm"},Ue={class:"px-6 py-3 text-xs font-medium whitespace-nowrap"},Me={class:"px-6 py-3 text-xs font-medium whitespace-nowrap"},Ae={class:"px-6 py-3 text-xs font-medium whitespace-nowrap"},Pe={class:"px-6 py-3 text-xs font-medium whitespace-nowrap"},Ne={class:"px-6 py-3 text-xs font-medium whitespace-nowrap"},Oe={class:"px-6 py-3 text-xs font-medium whitespace-nowrap"},Se={key:1,class:"w-full block mt-4"},Ee={class:"text-xs text-gray-600"},De={key:2};function ze(a,s,i,o,_,k){const c=y("multiselect"),x=y("pagination"),f=y("app-layout");return n(),P(f,null,{header:F(()=>s[14]||(s[14]=[e("h2",{class:"font-semibold text-xl text-white leading-tight"},"Announcement",-1)])),default:F(()=>[e("div",z,[e("div",B,[s[15]||(s[15]=e("label",{for:"name",class:"block text-sm font-bold text-gray-700 mt-4"},"Announcement Title ",-1)),e("div",L,[p(e("input",{type:"text","onUpdate:modelValue":s[0]||(s[0]=t=>o.createForm.name=t),name:"name",id:"name",class:"py-2.5 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300",placeholder:"Please Enter Announcement Name"},null,512),[[b,o.createForm.name]])])]),a.$page.props.errors.name?(n(),r("div",R,l(a.$page.props.errors.name),1)):d("",!0),e("div",q,[s[35]||(s[35]=e("label",{for:"name",class:"block text-sm font-bold text-indigo-700 mt-4"},"Announcement Preference",-1)),e("div",G,[e("div",I,[e("div",H,[e("div",J,[s[17]||(s[17]=e("label",{for:"sh_general",class:"block text-sm font-medium text-gray-700"},"General ",-1)),e("div",K,[s[16]||(s[16]=e("span",{class:"z-10 leading-snug font-normal text-center text-gray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-2"},[e("i",{class:"fas fa-user"})],-1)),p(e("input",{type:"text","onUpdate:modelValue":s[1]||(s[1]=t=>o.createForm.general=t),name:"sh_general",id:"sh_general",class:"pl-10 py-2.5 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300",placeholder:"Customer/Company Name etc.",tabindex:"1"},null,512),[[b,o.createForm.general]]),a.$page.props.errors.general?(n(),r("div",Q,l(a.$page.props.errors.general),1)):d("",!0)])]),e("div",W,[s[19]||(s[19]=e("label",{for:"sh_template",class:"block text-sm font-medium text-gray-700"},"Template ",-1)),e("div",X,[p(e("select",{id:"sh_template","onUpdate:modelValue":s[2]||(s[2]=t=>o.createForm.template=t),name:"sh_template",class:"py-2.5 block w-full px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",tabindex:"5",onChange:s[3]||(s[3]=(...t)=>o.template_change&&o.template_change(...t))},[s[18]||(s[18]=e("option",{value:"0"},"-Choose Template -",-1)),(n(!0),r(g,null,u(i.templates,t=>(n(),r("option",{key:t.id,value:t.id},l(t.name),9,Y))),128))],544),[[h,o.createForm.template]]),a.$page.props.errors.template?(n(),r("div",Z,l(a.$page.props.errors.template),1)):d("",!0)])])]),e("div",$,[e("div",ee,[e("div",te,[s[21]||(s[21]=e("label",{for:"sh_package",class:"inline-flex text-sm font-medium text-gray-700"},"Package ",-1)),e("label",se,[p(e("input",{class:"text-indigo-500 w-5 h-5 mr-2 focus:ring-indigo-400 focus:ring-opacity-25 border border-gray-300 rounded",type:"checkbox","onUpdate:modelValue":s[4]||(s[4]=t=>o.createForm.package_except=t)},null,512),[[C,o.createForm.package_except]]),s[20]||(s[20]=m(" Except "))])]),i.package_speed.length!==0?(n(),r("div",oe,[w(c,{"deselect-label":"Selected already",options:i.package_speed,"track-by":"speed",label:"item_data",modelValue:o.createForm.package,"onUpdate:modelValue":s[5]||(s[5]=t=>o.createForm.package=t),"allow-empty":!0,multiple:!0,tabindex:"2"},null,8,["options","modelValue"]),a.$page.props.errors.package?(n(),r("div",ae,l(a.$page.props.errors.package),1)):d("",!0)])):d("",!0)]),e("div",ne,[s[22]||(s[22]=e("label",{for:"sh_type",class:"block text-sm font-medium text-gray-700"},"Type ",-1)),e("div",re,[p(e("input",{type:"text","onUpdate:modelValue":s[6]||(s[6]=t=>o.createForm.type=t),name:"sh_type",id:"sh_type",class:"py-2.5 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300 uppercase",tabindex:"6",disabled:""},null,512),[[b,o.createForm.type]])]),a.$page.props.errors.type?(n(),r("div",le,l(a.$page.props.errors.type),1)):d("",!0)])]),e("div",ie,[e("div",de,[s[25]||(s[25]=e("label",{for:"sh_township",class:"block text-sm font-medium text-gray-700"},"Township ",-1)),e("div",pe,[s[24]||(s[24]=e("span",{class:"z-10 leading-snug font-normal absolute text-center text-gray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-2"},[e("i",{class:"fas fa-user"})],-1)),p(e("select",{id:"sh_township","onUpdate:modelValue":s[7]||(s[7]=t=>o.createForm.township=t),name:"sh_township",class:"pl-10 py-2.5 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",tabindex:"3"},[s[23]||(s[23]=e("option",{value:"0"},"-Choose Township -",-1)),(n(!0),r(g,null,u(i.townships,t=>(n(),r("option",{key:t.id,value:t.id},l(t.name),9,me))),128))],512),[[h,o.createForm.township]]),a.$page.props.errors.township?(n(),r("div",ce,l(a.$page.props.errors.township),1)):d("",!0)])]),e("div",ue,[e("div",ge,[s[27]||(s[27]=e("label",{for:"sh_status",class:"block text-sm font-medium text-gray-700"},"Customer Status ",-1)),e("label",xe,[p(e("input",{class:"text-indigo-500 w-5 h-5 mr-2 focus:ring-indigo-400 focus:ring-opacity-25 border border-gray-300 rounded",type:"checkbox","onUpdate:modelValue":s[8]||(s[8]=t=>o.createForm.status_except=t)},null,512),[[C,o.createForm.status_except]]),s[26]||(s[26]=m(" Except "))])]),i.status.length!==0?(n(),r("div",fe,[w(c,{"deselect-label":"Selected already",options:i.status,"track-by":"id",label:"name",modelValue:o.createForm.status,"onUpdate:modelValue":s[9]||(s[9]=t=>o.createForm.status=t),"allow-empty":!0,multiple:!0},null,8,["options","modelValue"]),a.$page.props.errors.status?(n(),r("div",ye,l(a.$page.props.errors.status),1)):d("",!0)])):d("",!0)])]),e("div",be,[e("div",he,[s[30]||(s[30]=e("label",{for:"sh_partner",class:"block text-sm font-medium text-gray-700"},"Project ",-1)),e("div",we,[s[29]||(s[29]=e("span",{class:"z-10 leading-snug font-normal absolute text-center text-gray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-2"},[e("i",{class:"fas fa-user"})],-1)),p(e("select",{id:"sh_partner","onUpdate:modelValue":s[10]||(s[10]=t=>o.createForm.partner=t),name:"sh_partner",class:"pl-10 py-2.5 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",tabindex:"4"},[s[28]||(s[28]=e("option",{value:"0"},"-Choose Project/Partner -",-1)),(n(!0),r(g,null,u(i.projects,t=>(n(),r("option",{key:t.id,value:t.id},l(t.name),9,_e))),128))],512),[[h,o.createForm.partner]]),a.$page.props.errors.partner?(n(),r("div",ke,l(a.$page.props.errors.partner),1)):d("",!0)])])])])]),e("div",ve,[e("div",Fe,[e("a",{onClick:s[11]||(s[11]=(...t)=>o.doSearch&&o.doSearch(...t)),class:"cursor-pointer inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"},s[31]||(s[31]=[m("Preview "),e("i",{class:"ml-1 fa fa-search text-white",tabindex:"10"},null,-1)])),e("a",{onClick:s[12]||(s[12]=(...t)=>o.resetCreateForm&&o.resetCreateForm(...t)),class:"ml-2 cursor-pointer inline-flex items-center px-4 py-2 bg-gray-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-400 active:bg-gray-500 focus:outline-none focus:border-gray-500 focus:ring focus:ring-gray-200 disabled:opacity-25 transition"},s[32]||(s[32]=[m("Reset "),e("i",{class:"ml-1 fa fa-undo-alt text-white",tabindex:"11"},null,-1)]))]),e("div",Ce,[e("a",{onClick:s[13]||(s[13]=(...t)=>o.saveForm&&o.saveForm(...t)),class:"cursor-pointer inline-flex items-center px-4 py-2 bg-indigo-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-indigo-700 active:bg-indigo-900 focus:outline-none focus:border-indigo-900 focus:ring focus:ring-indigo-300 disabled:opacity-25 transition"},s[33]||(s[33]=[m("Create Announcement"),e("i",{class:"ml-1 fa fa-save text-white",tabindex:"12"},null,-1)]))])]),i.customers.data?(n(),r("div",je,[e("table",Ve,[s[34]||(s[34]=e("thead",{class:"bg-gray-50"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Customer ID"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Order Date"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Name"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Package"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Township"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Status")])],-1)),e("tbody",Te,[(n(!0),r(g,null,u(i.customers.data,t=>(n(),r("tr",{key:t.id,class:O(" text-"+t.color)},[e("td",Ue,l(t.ftth_id),1),e("td",Me,l(t.order_date),1),e("td",Ae,l(t.name),1),e("td",Pe,l(t.package),1),e("td",Ne,l(t.township),1),e("td",Oe,l(t.status),1)],2))),128))])])])):d("",!0),i.customers.total?(n(),r("span",Se,[e("label",Ee,l(i.customers.data.length)+" Customers in Current Page. Total Number of Customers : "+l(i.customers.total),1)])):d("",!0),i.customers.links?(n(),r("span",De,[w(x,{class:"mt-4",links:i.customers.links},null,8,["links"])])):d("",!0)])])]),_:1})}const He=E(D,[["render",ze]]);export{He as default};
