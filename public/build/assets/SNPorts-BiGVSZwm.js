import{A as L}from"./AppLayout-CFytxyCO.js";import{P as M}from"./Pagination-DFwdA8Zc.js";import{_ as I}from"./PrimaryButton-CL9gdQP6.js";import{_ as A}from"./DialogModal-DG3vOQeC.js";import{_ as B}from"./SecondaryButton-GKAQREif.js";import{_ as E}from"./DangerButton-kViRIOUG.js";import{_ as J,a as O}from"./TextInput-BQ3Zcv5A.js";import{_ as T}from"./ConfirmationModal-CDe11ALb.js";import{T as D,r as h,s as b,d as a,b as c,w as u,F as U,N as R,o as d,a as t,k as y,x as _,f as x,g as z,e as g,t as i}from"./app-CWfv8roO.js";import{M as q}from"./vue3-multiselect.umd.min-Cs46zxsx.js";import{_ as G}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./DropdownLink-BM-HsMT0.js";const H={name:"dnSnReport",components:{AppLayout:L,Pagination:M,PrimaryButton:I,JetDialogModal:A,JetSecondaryButton:B,JetDangerButton:E,JetConfirmationModal:T,JetInput:J,JetInputError:O,useForm:D,Multiselect:q},props:{overall:Object,sns:Object,dns:Object,sns_all:Object,errors:Object},setup(r){let e=h(null),n=h(!1),s=h(!1),j=h(""),v=h("");const p=D({general:null,dn:null,sn:null,customer_min:null,customer_max:null}),w=()=>{v.value=null,p.reset(),o()},l=D({id:null,sn:null,dn_id:null,name:null,description:null,location:null,input_dbm:null});function k(m){e.value=m}function N(){l.id=null,l.dn_id=null,l.sn=null,l.name=null,l.description=null,l.location=null,l.input_dbm=null}function S(m){l.id=m.id,l.dn_id=r.dns.filter(f=>f.id==m.dn_id)[0],l.sn=r.sns_all.filter(f=>f.name==m.name)[0],l.name=m.name,l.description=m.description,l.location=m.location,l.input_dbm=m.input_dbm,n.value=!0,s.value=!0}function C(){n.value=!1,N()}function o(){R.post("/dnSnReport/",p,{preserveState:!0})}function V(m){F(m.id).then(f=>{console.log(f),f?(p.sn=null,v.value=f):(p.sn=null,v.value=null)})}const F=async m=>{let f="/getDnId/"+m;try{return await(await fetch(f)).json()}catch(P){console.error(P)}};return{id:e,editSN:S,cancelSN:C,showSN:n,form:l,editMode:s,searchForm:p,resetSearch:w,confirmDelete:k,searchPort:o,search:j,DNSelect:V,res_sn:v}}},K={class:"py-2"},Q={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},W={class:"grid grid-cols-1 md:grid-cols-5 gap-2 w-full"},X={class:"col-span-1 sm:col-span-1"},Y={class:"mt-1 flex rounded-md"},Z={class:"col-span-1 sm:col-span-1"},$={class:"mt-1"},ee={class:"col-span-1 sm:col-span-1"},te={key:0,class:"mt-1"},oe={key:1,class:"mt-1"},se={class:"col-span-1 sm:col-span-1 grid grid-cols-2 gap-2"},le={class:"mt-1 flex rounded-md"},ne={class:"mt-1 flex rounded-md"},re={class:"col-span-1 sm:col-span-1 flex self-end mb-1"},ae={key:0,class:"bg-white overflow-hidden shadow-xl sm:rounded-lg"},de={class:"min-w-full divide-y divide-gray-200 table-auto"},ie={class:"bg-white divide-y divide-gray-200 max-h-64"},me={class:"px-6 py-3 font-medium"},ue={class:"px-6 py-3 font-medium"},ce={class:"px-6 py-3 font-medium"},pe={class:"px-6 py-3 font-medium"},fe={class:"px-6 py-3 font-medium"},ge={class:"px-6 py-3 font-medium"},xe={class:"px-6 py-3 font-medium"},be={class:"px-6 py-3 text-xs font-medium text-right"},ye=["onClick"],_e={key:1,class:"w-full block mt-4"},ve={class:"text-xs text-gray-600"},he={key:2},ke={key:0,class:"text-red-500"},we={class:"mt-4 text-sm"},Ne={key:0,class:"mt-1 flex rounded-md shadow-sm"},Se={class:"mb-4 md:col-span-1"},Ce={key:0,class:"text-red-500"},Ve={class:"mb-4 md:col-span-1"},De={key:0,class:"text-red-500"},je={class:"mb-4 md:col-span-1"},Fe={key:0,class:"text-red-500"},Pe={class:"mb-4 md:col-span-1"},Ue={key:0,class:"text-red-500"};function Le(r,e,n,s,j,v){const p=b("multiselect"),w=b("pagination"),l=b("app-layout"),k=b("jet-secondary-button"),N=b("jet-danger-button"),S=b("jet-confirmation-modal"),C=b("jet-dialog-modal");return d(),a(U,null,[c(l,null,{header:u(()=>e[15]||(e[15]=[t("h2",{class:"font-semibold text-xl text-white leading-tight"},"DN SN Report",-1)])),default:u(()=>[t("div",K,[t("div",Q,[t("div",W,[t("div",X,[e[17]||(e[17]=t("label",{for:"sh_general",class:"block text-sm font-medium text-gray-700"},"General ",-1)),t("div",Y,[e[16]||(e[16]=t("span",{class:"z-10 leading-snug font-normal text-center text-gray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-2"},[t("i",{class:"fas fa-user"})],-1)),y(t("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=o=>s.searchForm.general=o),name:"sh_general",id:"sh_general",class:"pl-10 py-2 focus:ring-0 flex-1 block w-full rounded-md sm:text-sm border-gray-200 text-gray-600",placeholder:"Customer/Company Name etc.",tabindex:"1"},null,512),[[_,s.searchForm.general]])])]),t("div",Z,[e[18]||(e[18]=t("label",{for:"sh_dn",class:"block text-sm font-medium text-gray-700"},"DN ",-1)),t("div",$,[c(p,{"deselect-label":"Selected already",options:n.dns,"track-by":"name",label:"name",modelValue:s.searchForm.dn,"onUpdate:modelValue":e[1]||(e[1]=o=>s.searchForm.dn=o),"allow-empty":!0,onSelect:s.DNSelect,placeholder:"Please Choose DN"},null,8,["options","modelValue","onSelect"])])]),t("div",ee,[e[20]||(e[20]=t("label",{for:"sh_sn",class:"block text-sm font-medium text-gray-700"},"SN ",-1)),s.res_sn?(d(),a("div",te,[c(p,{"deselect-label":"Selected already",options:s.res_sn,"track-by":"id",label:"name",modelValue:s.searchForm.sn,"onUpdate:modelValue":e[2]||(e[2]=o=>s.searchForm.sn=o),"allow-empty":!0},null,8,["options","modelValue"])])):(d(),a("div",oe,e[19]||(e[19]=[t("input",{type:"text",class:"py-2 focus:ring-0 flex-1 block w-full rounded-md sm:text-sm border-gray-200 text-gray-400",value:"Please Choose SN",disabled:""},null,-1)])))]),t("div",se,[t("div",null,[e[22]||(e[22]=t("label",{for:"sh_customer",class:"block text-sm font-medium text-gray-700"},"Min Customer ",-1)),t("div",le,[e[21]||(e[21]=t("span",{class:"z-10 leading-snug font-normal text-center text-gray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-2"},[t("i",{class:"fas fa-greater-than-equal"})],-1)),y(t("input",{type:"number","onUpdate:modelValue":e[3]||(e[3]=o=>s.searchForm.customer_min=o),name:"sh_general",id:"sh_general",class:"pl-10 py-2 focus:ring-0 flex-1 block w-full rounded-md sm:text-sm border-gray-200 text-gray-400",tabindex:"4"},null,512),[[_,s.searchForm.customer_min]])])]),t("div",null,[e[24]||(e[24]=t("label",{for:"sh_customer",class:"block text-sm font-medium text-gray-700"},"Max Customer ",-1)),t("div",ne,[e[23]||(e[23]=t("span",{class:"z-10 leading-snug font-normal text-center text-gray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-2"},[t("i",{class:"fas fa-less-than-equal"})],-1)),y(t("input",{type:"number","onUpdate:modelValue":e[4]||(e[4]=o=>s.searchForm.customer_max=o),name:"sh_general",id:"sh_general",class:"pl-10 py-2 focus:ring-0 flex-1 block w-full rounded-md sm:text-sm border-gray-200 text-gray-400",tabindex:"5"},null,512),[[_,s.searchForm.customer_max]])])])]),t("div",re,[t("a",{onClick:e[5]||(e[5]=(...o)=>s.searchPort&&s.searchPort(...o)),class:"cursor-pointer inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"},e[25]||(e[25]=[x("Search "),t("i",{class:"ml-1 fa fa-search text-white",tabindex:"6"},null,-1)])),t("a",{onClick:e[6]||(e[6]=(...o)=>s.resetSearch&&s.resetSearch(...o)),class:"ml-2 cursor-pointer inline-flex items-center px-4 py-2 bg-yellow-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-yellow-700 active:bg-yellow-900 focus:outline-none focus:border-yellow-900 focus:ring focus:ring-yellow-300 disabled:opacity-25 transition"},e[26]||(e[26]=[x("Reset "),t("i",{class:"ml-1 fa fa-eraser text-white",tabindex:"7"},null,-1)]))])]),n.overall.data?(d(),a("div",ae,[t("table",de,[e[27]||(e[27]=t("thead",{class:"bg-gray-50"},[t("tr",{class:"text-left"},[t("th",{scope:"col",class:"px-4 py-3 text-xs font-medium text-gray-500 uppercase"},"No."),t("th",{scope:"col",class:"px-4 py-3 text-xs font-medium text-gray-500 uppercase"},"DN/Port "),t("th",{scope:"col",class:"px-4 py-3 text-xs font-medium text-gray-500 uppercase"},"SN Name "),t("th",{scope:"col",class:"px-4 py-3 text-xs font-medium text-gray-500 uppercase"},"Total Customers "),t("th",{scope:"col",class:"px-4 py-3 text-xs font-medium text-gray-500 uppercase"}," Description"),t("th",{scope:"col",class:"px-4 py-3 text-xs font-medium text-gray-500 uppercase"},"Location "),t("th",{scope:"col",class:"px-4 py-3 text-xs font-medium text-gray-500 uppercase"},"Input dbm "),t("th",{scope:"col",class:"relative px-6 py-3"},[t("span",{class:"sr-only"},"Action")])])],-1)),t("tbody",ie,[(d(!0),a(U,null,z(n.overall.data,(o,V)=>(d(),a("tr",{key:o.id},[t("td",me,i(n.overall.from+V),1),t("td",ue,i(o.dn_name),1),t("td",ce,i(o.name),1),t("td",pe,i(o.ports),1),t("td",fe,i(o.description),1),t("td",ge,i(o.location),1),t("td",xe,i(o.input_dbm),1),t("td",be,[t("a",{href:"#",onClick:F=>s.editSN(o),class:"text-indigo-600 hover:text-indigo-900"},"View Detail",8,ye)])]))),128))])])])):g("",!0),n.overall.total?(d(),a("span",_e,[t("label",ve,i(n.overall.data.length)+" SN Port List in Current Page. Total Number of SN Ports : "+i(n.overall.total),1)])):g("",!0),n.overall.links?(d(),a("span",he,[c(w,{class:"mt-6",links:n.overall.links},null,8,["links"])])):g("",!0)])])]),_:1}),c(S,{show:s.id,onClose:e[8]||(e[8]=o=>s.id=null)},{title:u(()=>e[28]||(e[28]=[x(" Delete Node")])),content:u(()=>e[29]||(e[29]=[x(" Are you sure you would like to delete this API token? ")])),footer:u(()=>[c(k,{onClick:e[7]||(e[7]=o=>s.id=null)},{default:u(()=>e[30]||(e[30]=[x(" Cancel ")])),_:1}),c(N,{class:"ml-2",onClick:r.deleteNode},{default:u(()=>e[31]||(e[31]=[x(" Delete ")])),_:1},8,["onClick"])]),_:1},8,["show"]),c(C,{show:s.showSN,onClose:e[14]||(e[14]=o=>s.showSN=!1)},{title:u(()=>e[32]||(e[32]=[x(" Add New Port ")])),content:u(()=>[r.$page.props.errors[0]?(d(),a("div",ke,i(r.$page.props.errors[0]),1)):g("",!0),t("div",null,[t("div",we,[n.dns.length!==0?(d(),a("div",Ne,[c(p,{"deselect-label":"Selected already",options:n.dns,"track-by":"id",label:"name",modelValue:s.form.dn_id,"onUpdate:modelValue":e[9]||(e[9]=o=>s.form.dn_id=o),"allow-empty":!0},null,8,["options","modelValue"])])):g("",!0),t("div",Se,[e[33]||(e[33]=t("label",{for:"name",class:"block text-gray-700 text-sm font-bold mb-2"},"SN Name :",-1)),y(t("input",{type:"text",class:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md",id:"name",placeholder:"Enter SN Name","onUpdate:modelValue":e[10]||(e[10]=o=>s.form.name=o)},null,512),[[_,s.form.name]]),r.$page.props.errors.name?(d(),a("div",Ce,i(r.$page.props.errors.name),1)):g("",!0)]),t("div",Ve,[e[34]||(e[34]=t("label",{for:"description",class:"block text-gray-700 text-sm font-bold mb-2"},"Description :",-1)),y(t("textarea",{class:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md",id:"description",placeholder:"Enter Description","onUpdate:modelValue":e[11]||(e[11]=o=>s.form.description=o)},null,512),[[_,s.form.description]]),r.$page.props.errors.description?(d(),a("div",De,i(r.$page.props.errors.description),1)):g("",!0)]),t("div",je,[e[35]||(e[35]=t("label",{for:"location",class:"block text-gray-700 text-sm font-bold mb-2"},"SN Location :",-1)),y(t("input",{type:"text",class:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md",id:"location",placeholder:"Enter Location (Lat,Long)","onUpdate:modelValue":e[12]||(e[12]=o=>s.form.location=o)},null,512),[[_,s.form.location]]),r.$page.props.errors.location?(d(),a("div",Fe,i(r.$page.props.errors.location),1)):g("",!0)]),t("div",Pe,[e[36]||(e[36]=t("label",{for:"input_dbm",class:"block text-gray-700 text-sm font-bold mb-2"},"SN Input dbm :",-1)),y(t("input",{type:"text",class:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md",id:"input_dbm",placeholder:"Enter Input Dbm","onUpdate:modelValue":e[13]||(e[13]=o=>s.form.input_dbm=o)},null,512),[[_,s.form.input_dbm]]),r.$page.props.errors.input_dbm?(d(),a("div",Ue,i(r.$page.props.errors.input_dbm),1)):g("",!0)])])])]),footer:u(()=>[c(k,{onClick:s.cancelSN},{default:u(()=>e[37]||(e[37]=[x(" Close ")])),_:1},8,["onClick"])]),_:1},8,["show"])],64)}const Ke=G(H,[["render",Le]]);export{Ke as default};
