import"./vue-124c939f.js";import{l as o}from"./lscache-deb3809a.js";import{a1 as f}from"./@vue-9340bf27.js";const r=f({main_loading:!0,isDrawer:!1,activeIndex:0,navShow:!1,currentIndex:"index",currenttarget:"",currentParent:"",childrenIndex:"",pageList:"",pageListChirr:"",navListCopy:"",input1:"",styleChange:o.get("styleChange")||!1,navLeft:o.get("stylenavLeft")||!1,topNav:[]}),d=(a,e)=>a.filter((n,l,i)=>{let s=[];return i.map(c=>{s.push(c[e])}),s.indexOf(n[e])==l}),m=()=>{document.querySelectorAll(".el-overlay").forEach(e=>{e.style.width="100vw",e.style.height="100vh",e.style.left="50%",e.style.top="50%",e.style.transform="translate(-50%,-50%)"})},p=(a,e,t=1)=>{e?a.style.transform=`scale(${t})`:a.style.transform=`scale(${t})`},g=a=>{let e=JSON.parse(r.navListCopy);r.pageListChirr=e.filter(t=>t.meta.title.indexOf(a)!==-1)},u=a=>{a.onload=function(){r.main_loading=!1,console.log("iframe加载完成")}},L=()=>{r.isDrawer=!0},w=(a,e)=>{r.activeIndex=e};export{w as a,p as b,r as c,m as d,u as i,g as q,d as r,L as s};