import"./vue-124c939f.js";import{u as b}from"./vue-router-6f09dd9a.js";import{c as e,s as A,b as B,a as X,q as T,d as Z,r as j}from"./hook-6ba65076.js";import{E as w,a as F,b as Q,c as q,d as Y,e as H,f as ee}from"./element-plus-df7bc4e3.js";import{l as y}from"./lscache-deb3809a.js";import{d as $,o as t,c as i,a as l,e as r,T as g,u as o,b as _,W as k,aB as x,ah as S,a5 as G,G as P,a9 as M,P as I,aC as te,aD as ne,U as V,V as O,Z as D,X as N,r as J,a1 as oe,w as se,f as ae,n as le}from"./@vue-9340bf27.js";import{_ as L}from"./index-53878eac.js";import{M as K}from"./@element-plus-d6f5acb0.js";import{i as R}from"./isMe-4eb4ad74.js";import"./lodash-es-fd932676.js";import"./@popperjs-c75af06c.js";import"./@ctrl-f8748455.js";import"./@logicflow-922e186c.js";import"./preact-c85490ff.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-1a309c76.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-0225a2a3.js";import"./pinia-0aa78a2b.js";import"./vue-demi-1a095971.js";import"./axios-d2e6824c.js";import"./mockjs-9bbec717.js";const ce={class:"nav-logo"},re=$({__name:"NavLogo",props:{node:null},setup(h){const c=()=>{e.styleChange?y.set("styleChange",!1):y.set("styleChange",!0),e.styleChange=y.get("styleChange")},f=()=>{y.get("stylenavLeft")?y.set("stylenavLeft",!1):y.set("stylenavLeft",!0),e.navLeft=y.get("stylenavLeft")};return(d,n)=>{const a=w;return t(),i("div",ce,[l("p",{class:"item_left",onClick:n[0]||(n[0]=(...s)=>o(A)&&o(A)(...s))},[r(a,{size:15,color:"#fff"},{default:g(()=>[(t(),_(x,null,[(t(),_(k("CaretRight")))],1024))]),_:1})]),l("p",{class:"item_blue item_screen",onClick:n[1]||(n[1]=s=>f())},[r(a,{size:15,color:"#fff"},{default:g(()=>[(t(),_(x,null,[(t(),_(k("More")))],1024))]),_:1})]),l("p",{class:"item_blue",onClick:n[2]||(n[2]=s=>c())},[r(a,{size:12,color:"#fff"},{default:g(()=>[(t(),_(x,null,[(t(),_(k("Switch")))],1024))]),_:1})]),l("p",{onClick:n[3]||(n[3]=s=>o(B)(h.node,!1,.95))},[r(a,{size:12,color:"#fff"},{default:g(()=>[(t(),_(x,null,[(t(),_(k("Minus")))],1024))]),_:1})]),l("p",{onClick:n[4]||(n[4]=s=>o(B)(h.node,!0,1))},[r(a,{size:12,color:"#fff"},{default:g(()=>[(t(),_(x,null,[(t(),_(k("Plus")))],1024))]),_:1})])])}}});const _e=L(re,[["__scopeId","data-v-fe282768"]]),ie={class:"btn-logout"},pe=["onClick"],ue=$({__name:"LayOut",setup(h){const c=b(),f=()=>{y.remove("userName"),y.remove("pass"),y.remove("token"),y.remove("passme"),c.push("/login")};return(d,n)=>{const a=S("Eleme"),s=w,v=F;return t(),i("div",ie,[r(v,{ref:"popover",placement:"right",title:"Title",width:200,trigger:"click",class:"btn-logout"},{reference:g(()=>[r(s,{size:40},{default:g(()=>[r(a)]),_:1})]),default:g(()=>[l("div",null,[l("ul",null,[l("li",{onClick:G(f,["stop"])},"退出登陆",8,pe)])])]),_:1},512)])}}});const W=L(ue,[["__scopeId","data-v-a4825958"]]),de=h=>(te("data-v-b0a928ad"),h=h(),ne(),h),me={class:"left-area"},fe={class:"left-area-nav"},ve=de(()=>l("div",{class:"app-name"},"HELLO!!",-1)),he={class:"nav"},ge=["onClick"],ye=$({__name:"LeftArea",props:{logo:null},setup(h){const c=b(),f=()=>{c.push("/myselt")};return(d,n)=>{const a=Q,s=w;return t(),i("div",me,[l("div",fe,[ve,l("button",{class:"person",onClick:f},[r(a,{class:"personlogo",style:{width:"60px"},src:h.logo},null,8,["src"])]),l("div",he,[(t(),i(P,null,M(["Menu","CaretRight"],(v,p)=>l("div",{key:p},[l("div",{class:I(["nav-item",o(e).activeIndex==p?"active":""]),onClick:m=>o(X)(v,p)},[r(s,{size:40,color:"#fff"},{default:g(()=>[(t(),_(x,null,[(t(),_(k(v)))],1024))]),_:2},1024)],10,ge)])),64))]),r(W)])])}}});const U=L(ye,[["__scopeId","data-v-b0a928ad"]]),Ce={class:"pages"},ke=["onClick"],xe=$({__name:"PageNav",setup(h){const c=b(),f=(d,n)=>{e.currentParent!=d.name&&(e.main_loading=!0,c.push(d.meta.defaultPath))};return(d,n)=>{const a=w;return t(),i("div",Ce,[l("ul",null,[(t(!0),i(P,null,M(o(e).pageList,(s,v)=>{var p,m;return t(),i("div",{key:v},[(p=s.meta)!=null&&p.navshow?(t(),i("li",{key:0,onClick:u=>f(s)},[l("div",{class:I(o(e).currentParent===s.name?"active":"")},[r(a,{size:12,color:"#fff"},{default:g(()=>{var u;return[(t(),_(x,null,[(t(),_(k((u=s==null?void 0:s.meta)==null?void 0:u.icon)))],1024))]}),_:2},1024)],2),V(l("span",null,D((m=s.meta)==null?void 0:m.title),513),[[O,o(e).currentParent==s.name]])],8,ke)):N("",!0)])}),128))])])}}});const $e=L(xe,[["__scopeId","data-v-1ccb8d9d"]]),Le={class:"mobile"},be={class:"drawer_content"},we={class:"left_area_list"},Ie={class:"app-name search_name"},Ne={key:0,class:"nav-list"},Pe=["onClick"],Me=$({__name:"MobileDraw",setup(h){const c=b(),f=()=>{e.isDrawer=!1};let d=(n,a)=>{e.childrenIndex!=n.path&&(e.main_loading=!0,c.push(n.path))};return(n,a)=>{const s=q,v=w,p=H,m=Y;return t(),i("div",Le,[r(m,{modelValue:o(e).isDrawer,"onUpdate:modelValue":a[1]||(a[1]=u=>o(e).isDrawer=u),title:"HELLO!",direction:"ltr","before-close":f,class:"left_view",size:300},{default:g(()=>[l("div",be,[l("div",we,[l("div",Ie,[r(s,{modelValue:o(e).input1,"onUpdate:modelValue":a[0]||(a[0]=u=>o(e).input1=u),class:"m-2 w-50",size:"large",placeholder:"Please Input","suffix-icon":o(K),onChange:o(T)},null,8,["modelValue","suffix-icon","onChange"])]),o(e).pageListChirr[0]?(t(),i("ul",Ne,[(t(!0),i(P,null,M(o(e).pageListChirr,(u,C)=>{var z;return t(),i("li",{class:"item",key:C},[l("div",{class:I(["item",o(e).childrenIndex==u.path?"active":""]),onClick:E=>o(d)(u,C)},[r(v,{size:20},{default:g(()=>{var E;return[(t(),_(x,null,[(t(),_(k((E=u==null?void 0:u.meta)==null?void 0:E.icon)))],1024))]}),_:2},1024),l("p",null,D((z=u.meta)==null?void 0:z.title),1)],10,Pe)])}),128))])):(t(),_(p,{key:1,"image-size":200}))]),r(W)])]),_:1},8,["modelValue"])])}}});const ze=L(Me,[["__scopeId","data-v-bfe25f04"]]),De={class:"app-name search_name"},Ee={key:0,class:"nav-list"},Se={class:"item"},Ve=["onClick"],Oe={key:0},Ae=$({__name:"MianLeft",setup(h){const c=b(),f=(d,n)=>{e.childrenIndex!=d.path&&(e.main_loading=!0,c.push(d.path))};return(d,n)=>{const a=q,s=w,v=H;return t(),i("div",{class:I(["left-area-list",o(e).navLeft?"":"w-50"]),ref:"leftarea"},[l("div",De,[o(e).navLeft?(t(),_(a,{key:0,modelValue:o(e).input1,"onUpdate:modelValue":n[0]||(n[0]=p=>o(e).input1=p),class:"m-2 w-50",size:"large",placeholder:"Please Input","suffix-icon":o(K),onChange:o(T)},null,8,["modelValue","suffix-icon","onChange"])):N("",!0)]),o(e).pageListChirr[0]?(t(),i("ul",Ee,[(t(!0),i(P,null,M(o(e).pageListChirr,(p,m)=>{var u;return t(),i("li",{key:m},[l("div",Se,[V(l("div",{class:I(["item",o(e).childrenIndex==p.path?"active":""]),onClick:C=>f(p)},[r(s,{size:20},{default:g(()=>{var C;return[(t(),_(x,null,[(t(),_(k((C=p==null?void 0:p.meta)==null?void 0:C.icon)))],1024))]}),_:2},1024),o(e).navLeft?(t(),i("p",Oe,D((u=p.meta)==null?void 0:u.title),1)):N("",!0)],10,Ve),[[O,p.meta.isShow||!p.meta.isShow&&o(e).pageListChirr.length<2]])])])}),128))])):(t(),_(v,{key:1,"image-size":200}))],2)}}});const Be=L(Ae,[["__scopeId","data-v-b7529fab"]]),Re={class:"top-scrollbar"},Ue={class:"scrollbar-flex-content"},Te=["onClickCapture"],qe=["onClick"],He=$({__name:"topNav",setup(h){const c=b();J();const f=n=>{var a,s;(a=n.meta)!=null&&a.defaultPath?c.push((s=n.meta)==null?void 0:s.defaultPath):c.push(n.path)},d=(n,a)=>{e.topNav.splice(a,1);let s=e.topNav[e.topNav.length-1];s.meta.hasOwnProperty("parent")?c.push(s.path):c.push(s.meta.defaultPath)};return(n,a)=>{const s=S("Close"),v=w,p=ee;return t(),i("div",Re,[r(p,null,{default:g(()=>[l("div",Ue,[(t(!0),i(P,null,M(o(e).topNav,(m,u)=>{var C;return t(),i("p",{class:"scrollbar-demo-item",key:m.path},[l("div",{class:I(["scrollbar-demo-item-content",(m==null?void 0:m.name)==o(e).currentIndex?"scrollbar-demo-item-content-active":""]),onClickCapture:z=>f(m)},[l("span",null,D((C=m.meta)!=null&&C.defaultPath?m.children[0].meta.title:m.meta.title),1),V(l("span",{class:"scrollbar-demo-item-content-del",onClick:G(z=>d(m,u),["stop"])},[r(v,null,{default:g(()=>[r(s)]),_:1})],8,qe),[[O,m.path!=="/page"]])],42,Te)])}),128))])]),_:1})])}}});const Ge=L(He,[["__scopeId","data-v-6f9fdd71"]]),Je="/template_pc_s/static/mp4/video-1f025c10.mp4",Ke={key:0,class:"main-area"},We={key:0,class:"main-content"},Xe={key:1,class:"main-area"},Ze=["src"],je=$({__name:"MianCont",setup(h){return(c,f)=>{const d=S("router-view");return o(e).activeIndex==0?(t(),i("div",Ke,[r(ze),r(Be),o(e).childrenIndex?(t(),i("div",We,[r(Ge),(t(),_(d,{key:o(e).childrenIndex}))])):N("",!0)])):(t(),i("div",Xe,[l("video",{style:{width:"100%"},src:o(Je),controls:!0},null,8,Ze)]))}}});const Fe=L(je,[["__scopeId","data-v-89ca5584"]]),Qe={class:"apphello base-h bg-1"},Ye=$({__name:"index",setup(h){const c=b();e.pageList=oe(c.options.routes);const f=J(),d=()=>{var n;if(e.topNav=[((n=c==null?void 0:c.options)==null?void 0:n.routes[0].children[0])||void 0],c.currentRoute.value.path!=="/page"){let a=c.currentRoute.value;if(a.hasOwnProperty("children")&&(a!=null&&a.children[0])){let s=a==null?void 0:a.children.filter(v=>v.path===v.meta.defaultPath);e.currentIndex=s[0].meta.parent,e.currentParent=s[0].name}else e.currentIndex=a.name,e.currentParent=a.meta.parent;e.topNav.push(c.currentRoute.value)}};return se(()=>c.currentRoute.value,(n,a)=>{if(e.pageListChirr=n.matched[0].children,e.navListCopy=JSON.stringify(n.matched[0].children),n.meta.hasOwnProperty("parent")){let s=c.options.routes.find(v=>v.name===n.meta.parent)||"";e.topNav.push(n),e.topNav=j(e.topNav,"path"),e.currentIndex=n.name,e.currentParent=s==null?void 0:s.name}e.childrenIndex=n.fullPath},{immediate:!0}),ae(async()=>{d(),await le(()=>{Z()})}),(n,a)=>(t(),i(P,null,[l("div",Qe,[l("div",{class:"content",ref_key:"content",ref:f},[r(_e,{node:f.value},null,8,["node"]),o(e).styleChange?(t(),_(U,{key:0,logo:o(R)},null,8,["logo"])):N("",!0),r(Fe),o(e).styleChange?N("",!0):(t(),_(U,{key:1,logo:o(R)},null,8,["logo"]))],512)]),r($e)],64))}});const $t=L(Ye,[["__scopeId","data-v-765478e8"]]);export{$t as default};
