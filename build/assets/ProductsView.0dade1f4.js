import{_ as $,u as x,c as _,r as B,w as D,o as P,a as z,b as a,d as u,e as v,f as o,g as c,I as r,h as t,i as f,j as d,k as p,t as h,l as k,v as w,T as V,m as C}from"./index.3be57b91.js";import{g as N}from"./products.56a6c39c.js";const I={class:"products-breadcrumb flex items-center gap-2"},M={class:"products-breadcrumb__item"},T={class:"products-breadcrumb__item flex items-center gap-2"},S={key:0,class:"products-breadcrumb__item flex items-center gap-2"},j={key:1,class:"products-breadcrumb__item flex items-center gap-2"},E={__name:"ProductsBreadcrumb",setup(y){const i=x(),e=_(()=>i.params),n=B(null),m=_(()=>{var s;return(s=n.value)==null?void 0:s.translateModels}),b=async s=>{try{n.value=await N(s)}catch(g){console.log(g.message)}};return D(_(()=>i.params.product),s=>b(s)),P(()=>b(e.value.product)),(s,g)=>{const l=z("router-link");return a(),u("div",I,[v("div",M,[o(l,{class:"link--hover link--hover-lift-bg",to:"/"},{default:c(()=>[o(r,{name:"home",size:1.5},null,8,["size"])]),_:1})]),o(r,{name:"chevron-right",size:.7},null,8,["size"]),v("div",T,[t(e).product?d("",!0):(a(),f(r,{key:0,name:"arrow-forward",size:.7},null,8,["size"])),o(l,{class:"link--hover link--hover-lift-bg",to:"/products"},{default:c(()=>[p(h(s.$tc("breadcrumb.products",2)),1)]),_:1})]),k(o(r,{name:"chevron-right",size:.7},null,8,["size"]),[[w,t(e).product]]),t(e).product?(a(),u("div",S,[t(e).model?d("",!0):(a(),f(r,{key:0,name:"arrow-forward",size:.7},null,8,["size"])),o(l,{class:"link--hover link--hover-lift-bg",to:`/products/${t(e).product}`},{default:c(()=>[p(h(s.$tc(`breadcrumb.${t(e).product}`,2)),1)]),_:1},8,["to"])])):d("",!0),k(o(r,{name:"chevron-right",size:.7},null,8,["size"]),[[w,t(e).model]]),t(e).model?(a(),u("div",j,[o(r,{name:"arrow-forward",size:.7},null,8,["size"]),o(l,{class:"link--hover link--hover-lift-bg",to:`/products/${t(e).product}/${t(e).model}`},{default:c(()=>[p(h(t(m)?s.$t(`model.${t(e).model}.title`):t(e).model),1)]),_:1},8,["to"])])):d("",!0)])}}},R=$(E,[["__scopeId","data-v-dc63d580"]]),q={class:"catalog page","data-theme":"light"},G={__name:"ProductsView",setup(y){return(i,e)=>{const n=z("router-view");return a(),u("div",q,[v("main",null,[o(R),o(n,null,{default:c(({Component:m})=>[o(V,{name:"fade",mode:"out-in"},{default:c(()=>[(a(),f(C(m)))]),_:2},1024)]),_:1})])])}}};export{G as default};