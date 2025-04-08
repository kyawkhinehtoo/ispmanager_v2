import{A as j}from"./AppLayout-CFytxyCO.js";import{P as D}from"./Pagination-DFwdA8Zc.js";import{r as h,J as A,s as C,c as B,w as E,N as v,o as l,a as e,k as d,x as g,K as I,d as a,F as N,g as V,f as T,h as J,t as b,e as f,v as z,y as U,b as F}from"./app-CWfv8roO.js";import{_ as K}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./DropdownLink-BM-HsMT0.js";const L={name:"Subcom",components:{AppLayout:j,Pagination:D},props:{subcoms:Object,errors:Object},setup(m){const t=h([{range:"1-200",rate:25e3},{range:"201-300",rate:3e4}]),r=A({id:null,name:null,contact_person:null,email:null,phone:null,disabled:0,rate:t.value}),o=()=>{r.rate.push({range:"",rate:""})},w=n=>{r.rate.splice(n,1)},k=n=>{const p=n.split("-");if(p.length===1)return[0,parseInt(p[0].replace("<","").trim(),10)];{const S=parseInt(p[0].trim(),10),O=parseInt(p[1].trim(),10);return[S,O]}},y=h("");let x=h(!1),s=h(!1);function i(){r.name=null,r.contact_person=null,r.email=null,r.phone=null,r.disabled=0,r.rate=t.value}function c(){x.value?(r._method="PUT",r._method="PUT",v.post("/subcom/"+r.id,r,{onSuccess:n=>{u(),i(),Toast.fire({icon:"success",title:n.props.flash.message})},onError:n=>{u(),console.log("error ..".errors)}})):(r._method="POST",v.post("/subcom",r,{preserveState:!0,onSuccess:n=>{u(),i(),Toast.fire({icon:"success",title:n.props.flash.message})},onError:n=>{u(),console.log("error ..".errors)}}))}function M(n){try{JSON.parse(n)}catch{return!1}return!0}function R(n){r.id=n.id,r.name=n.name,r.contact_person=n.contact_person,r.email=n.email,r.phone=n.phone,r.disabled=n.disabled===1,r.rate=M(n.rate)?JSON.parse(n.rate):t.value,x.value=!0,_()}function P(n){confirm("Are you sure want to remove?")&&(n._method="DELETE",v.post("/subcom/"+n.id,n,{preserveState:!0,onSuccess:p=>{u(),i(),Toast.fire({icon:"success",title:p.props.flash.message})},onError:p=>{u(),console.log("error ..".errors)}}),u(),i())}function _(){s.value=!0}const u=()=>{s.value=!1,i(),x.value=!1};return{form:r,submit:c,editMode:x,isOpen:s,openModal:_,closeModal:u,edit:R,deleteRow:P,searchTsp:()=>{console.log("search value is"+y.value),v.get("/subcom/",{subcom:y.value},{preserveState:!0})},search:y,rateRules:t,addRule:o,removeRule:w,parseRange:k}}},q={class:"py-2"},G={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},H={class:"flex justify-between space-x-2 items-end mb-2 px-1 md:px-0"},Q={class:"relative flex flex-wrap z-0"},W={key:0,class:"bg-white overflow-hidden shadow-xl sm:rounded-lg"},X={class:"min-w-full divide-y divide-gray-200"},Y={class:"bg-white divide-y divide-gray-200"},Z={class:"px-6 py-3 whitespace-nowrap"},$={class:"px-6 py-3 whitespace-nowrap"},ee={class:"px-6 py-3 whitespace-nowrap"},te={class:"px-6 py-3 whitespace-nowrap"},se={class:"px-6 py-3 whitespace-nowrap text-right text-sm font-medium"},oe=["onClick"],re=["onClick"],ne={key:0,ref:"isOpen",class:"fixed z-10 inset-0 overflow-y-auto ease-out duration-400"},le={class:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"},ae={class:"inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",role:"dialog","aria-modal":"true","aria-labelledby":"modal-headline"},ie={class:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"},de={class:""},me={class:"mb-4"},ce={key:0,class:"text-red-500"},ue={class:"mb-4"},pe={key:0,class:"text-red-500"},be={class:"mb-4"},fe={key:0,class:"text-red-500"},ge={class:"mb-4"},xe={key:0,class:"text-red-500"},ye={class:"mb-4"},he={class:"mb-4"},ve=["onUpdate:modelValue"],we=["onUpdate:modelValue"],ke=["onClick"],_e={class:"bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"},Se={class:"flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto"},Ce={"wire:click.prevent":"submit",type:"submit",class:"inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"},Ee={class:"flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto"},Ne={"wire:click.prevent":"submit",type:"submit",class:"inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"},Ve={class:"mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto"},Te={key:1};function Ue(m,t,r,o,w,k){const y=C("pagination"),x=C("app-layout");return l(),B(x,null,{header:E(()=>t[11]||(t[11]=[e("h2",{class:"font-semibold text-xl text-white leading-tight"}," Subcom Setup ",-1)])),default:E(()=>[e("div",q,[e("div",G,[e("div",H,[e("div",Q,[t[12]||(t[12]=e("span",{class:"z-10 h-full leading-snug font-normal absolute text-center text-gray-300 bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3"},[e("i",{class:"fas fa-search"})],-1)),d(e("input",{type:"text",placeholder:"Search here...",class:"border-0 px-3 py-3 placeholder-gray-300 text-gray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10",id:"search","onUpdate:modelValue":t[0]||(t[0]=s=>o.search=s),onKeyup:t[1]||(t[1]=I((...s)=>o.searchTsp&&o.searchTsp(...s),["enter"]))},null,544),[[g,o.search]])]),e("button",{onClick:t[2]||(t[2]=(...s)=>o.openModal&&o.openModal(...s)),class:"inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"}," Create")]),r.subcoms.data?(l(),a("div",W,[e("table",X,[t[14]||(t[14]=e("thead",{class:"bg-gray-50"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," No. "),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Name"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Contact Person"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Status"),e("th",{scope:"col",class:"relative px-6 py-3"},[e("span",{class:"sr-only"},"Action")])])],-1)),e("tbody",Y,[(l(!0),a(N,null,V(r.subcoms.data,(s,i)=>(l(),a("tr",{key:s.id},[e("td",Z,b(r.subcoms.from+i),1),e("td",$,b(s.name),1),e("td",ee,b(s.contact_person),1),e("td",te,b(s.disabled?"Disabled":"Enabled"),1),e("td",se,[e("a",{href:"#",onClick:c=>o.edit(s),class:"text-indigo-600 hover:text-indigo-900"},"Edit",8,oe),t[13]||(t[13]=T(" | ")),e("a",{href:"#",onClick:c=>o.deleteRow(s),class:"text-red-600 hover:text-red-900"},"Delete",8,re)])]))),128))])]),o.isOpen?(l(),a("div",ne,[e("div",le,[t[25]||(t[25]=e("div",{class:"fixed inset-0 transition-opacity"},[e("div",{class:"absolute inset-0 bg-gray-500 opacity-75"})],-1)),t[26]||(t[26]=e("span",{class:"hidden sm:inline-block sm:align-middle sm:h-screen"},null,-1)),t[27]||(t[27]=T("​ ")),e("div",ae,[e("form",{onSubmit:t[10]||(t[10]=J((...s)=>o.submit&&o.submit(...s),["prevent"]))},[e("div",ie,[e("div",de,[e("div",me,[t[15]||(t[15]=e("label",{for:"name",class:"block text-gray-700 text-sm font-bold mb-2"},"Name :",-1)),d(e("input",{type:"text",class:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md",id:"name",placeholder:"Enter Name","onUpdate:modelValue":t[3]||(t[3]=s=>o.form.name=s)},null,512),[[g,o.form.name]]),m.$page.props.errors.name?(l(),a("div",ce,b(m.$page.props.errors.name),1)):f("",!0)]),e("div",ue,[t[16]||(t[16]=e("label",{for:"contact_person",class:"block text-gray-700 text-sm font-bold mb-2"},"Contact Person :",-1)),d(e("input",{type:"text",class:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md",id:"contact_person",placeholder:"Enter Contact Person Name","onUpdate:modelValue":t[4]||(t[4]=s=>o.form.contact_person=s)},null,512),[[g,o.form.contact_person]]),m.$page.props.errors.contact_person?(l(),a("div",pe,b(m.$page.props.errors.contact_person),1)):f("",!0)]),e("div",be,[t[17]||(t[17]=e("label",{for:"email",class:"block text-gray-700 text-sm font-bold mb-2"},"Email :",-1)),d(e("input",{type:"email",class:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md",id:"email",placeholder:"Enter Email","onUpdate:modelValue":t[5]||(t[5]=s=>o.form.email=s)},null,512),[[g,o.form.email]]),m.$page.props.errors.email?(l(),a("div",fe,b(m.$page.props.errors.email),1)):f("",!0)]),e("div",ge,[t[18]||(t[18]=e("label",{for:"phone",class:"block text-gray-700 text-sm font-bold mb-2"},"Phone :",-1)),d(e("input",{type:"text",class:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md",id:"phone",placeholder:"Enter Phone No.","onUpdate:modelValue":t[6]||(t[6]=s=>o.form.phone=s)},null,512),[[g,o.form.phone]]),m.$page.props.errors.phone?(l(),a("div",xe,b(m.$page.props.errors.phone),1)):f("",!0)]),e("div",ye,[t[19]||(t[19]=e("label",{for:"disabled",class:"block text-gray-700 text-sm font-bold mb-2"},"Disabled :",-1)),d(e("input",{class:"text-indigo-500 w-6 h-6 mr-2 focus:ring-indigo-400 focus:ring-opacity-25 border border-gray-300 rounded",type:"checkbox","onUpdate:modelValue":t[7]||(t[7]=s=>o.form.disabled=s)},null,512),[[z,o.form.disabled]])]),t[24]||(t[24]=e("label",{for:"rate",class:"block text-gray-700 text-md font-bold"},"Installation Rate ",-1)),e("div",he,[o.form.rate?(l(!0),a(N,{key:0},V(o.form.rate,(s,i)=>(l(),a("div",{key:i,class:"rule inline-flex items-center"},[t[21]||(t[21]=e("label",{class:"block text-gray-700 text-sm font-bold"},"Range:",-1)),d(e("input",{type:"text","onUpdate:modelValue":c=>s.range=c,pattern:"^(<\\d+|>\\d+|\\d+-\\d+)$",placeholder:"e.g., <200",class:"focus:ring-indigo-500 focus:border-indigo-500 block w-full m-4 shadow-sm sm:text-sm border-gray-300 rounded-md"},null,8,ve),[[g,s.range]]),t[22]||(t[22]=e("label",{class:"block text-gray-700 text-sm font-bold"},"Rate:",-1)),d(e("input",{type:"number","onUpdate:modelValue":c=>s.rate=c,placeholder:"e.g., 25000",class:"focus:ring-indigo-500 focus:border-indigo-500 block w-full m-4 shadow-sm sm:text-sm border-gray-300 rounded-md"},null,8,we),[[g,s.rate]]),e("button",{type:"button",onClick:c=>o.removeRule(i),class:"btn"},t[20]||(t[20]=[e("i",{class:"fas fa-minus-circle text-yellow-600"},null,-1)]),8,ke)]))),128)):f("",!0),e("button",{type:"button",onClick:t[8]||(t[8]=(...s)=>o.addRule&&o.addRule(...s)),class:"btn"},t[23]||(t[23]=[e("i",{class:"fas fa-plus-circle text-indigo-600"},null,-1)]))])])]),e("div",_e,[e("span",Se,[d(e("button",Ce," Save ",512),[[U,!o.editMode]])]),e("span",Ee,[d(e("button",Ne," Update ",512),[[U,o.editMode]])]),e("span",Ve,[e("button",{onClick:t[9]||(t[9]=(...s)=>o.closeModal&&o.closeModal(...s)),type:"button",class:"inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"}," Cancel ")])])],32)])])],512)):f("",!0)])):f("",!0),r.subcoms.links?(l(),a("span",Te,[F(y,{class:"mt-6",links:r.subcoms.links},null,8,["links"])])):f("",!0)])])]),_:1})}const Ae=K(L,[["render",Ue]]);export{Ae as default};
