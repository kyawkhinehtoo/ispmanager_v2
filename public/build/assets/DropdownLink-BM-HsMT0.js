import{j as y,o as r,c as p,w as u,m as n,n as g,I as b,u as o,i as v,r as $,q as C,G as S,d as c,a as d,S as f,k as m,y as w,b as B,P as E}from"./app-CWfv8roO.js";const N={__name:"NavLink",props:{href:String,active:Boolean,isCollapsed:Boolean},setup(t){const a=t,e=y(()=>a.active?"text-blue-600 hover:text-blue-500   bg-blueGray-100 shadow-blueGray-200 shadow-inner  dark:bg-gray-700 dark:text-white ":"text-gray-700 hover:bg-gray-100     bg-white        shadow-gray-900                   dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200");return(s,h)=>t.isCollapsed?(r(),p(o(v),{key:0,href:t.href,class:g(["py-2 text-xs",e.value]),style:b(a.active?{color:s.$page.props.accent_color}:"")},{default:u(()=>[n(s.$slots,"default")]),_:3},8,["href","class","style"])):(r(),p(o(v),{key:1,href:t.href,class:g(["text-xs uppercase py-3 px-4 font-bold block rounded-md mt-1",e.value]),style:b(a.active?{color:s.$page.props.accent_color}:"")},{default:u(()=>[n(s.$slots,"default")]),_:3},8,["href","class","style"]))}},z={class:"relative"},V={__name:"Dropdown",props:{align:{type:String,default:"right"},width:{type:String,default:"48"},contentClasses:{type:Array,default:()=>["py-1","bg-white dark:bg-gray-700"]}},setup(t){const a=t;let e=$(!1);const s=i=>{e.value&&i.key==="Escape"&&(e.value=!1)};C(()=>document.addEventListener("keydown",s)),S(()=>document.removeEventListener("keydown",s));const h=y(()=>({48:"w-48"})[a.width.toString()]),x=y(()=>a.align==="left"?"ltr:origin-top-left rtl:origin-top-right start-0":a.align==="right"?"ltr:origin-top-right rtl:origin-top-left end-0":"origin-top");return(i,l)=>(r(),c("div",z,[d("div",{onClick:l[0]||(l[0]=k=>f(e)?e.value=!o(e):e=!o(e))},[n(i.$slots,"trigger")]),m(d("div",{class:"fixed inset-0 z-40",onClick:l[1]||(l[1]=k=>f(e)?e.value=!1:e=!1)},null,512),[[w,o(e)]]),B(E,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:u(()=>[m(d("div",{class:g(["absolute z-50 mt-2 rounded-md shadow-lg",[h.value,x.value]]),style:{display:"none"},onClick:l[2]||(l[2]=k=>f(e)?e.value=!1:e=!1)},[d("div",{class:g(["rounded-md ring-1 ring-black ring-opacity-5",t.contentClasses])},[n(i.$slots,"content")],2)],2),[[w,o(e)]])]),_:3})]))}},L={key:0,type:"submit",class:"block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition duration-150 ease-in-out"},D=["href"],_={__name:"DropdownLink",props:{href:String,as:String},setup(t){return(a,e)=>(r(),c("div",null,[t.as=="button"?(r(),c("button",L,[n(a.$slots,"default")])):t.as=="a"?(r(),c("a",{key:1,href:t.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition duration-150 ease-in-out"},[n(a.$slots,"default")],8,D)):(r(),p(o(v),{key:2,href:t.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition duration-150 ease-in-out"},{default:u(()=>[n(a.$slots,"default")]),_:3},8,["href"]))]))}};export{V as _,_ as a,N as b};
