import{_ as i}from"./DOlvcNeX.js";import{B as p}from"./DKp5B0T4.js";import{_ as c}from"./BI8AzYCd.js";import{_ as u,J as m,r as s,o as d,g as f,v as a,z as o,K as x,x as n,A as l,t as e}from"./D6rGpg6a.js";import"./B6FNxMp5.js";const v={key:0,class:"container-cart"},g={key:1,class:"cart-empty"},k={__name:"cart",setup(C){const r=m();return s(!1),s(null),d(()=>{r.loadCartFromStorage()}),(B,t)=>{const _=f("router-link");return e(),a("div",null,[o(i,{title:"La mia lista della spesa"}),x(r).getCartTotal.toFixed(2)>0?(e(),a("div",v,[o(c)])):(e(),a("div",g,[t[1]||(t[1]=n("p",null,"Il carrello è vuoto",-1)),o(_,{to:"/"},{default:l(()=>[o(p,null,{default:l(()=>t[0]||(t[0]=[n("span",null,"Aggiungi i prodotti alla lista",-1)])),_:1})]),_:1})]))])}}},I=u(k,[["__scopeId","data-v-f3abfbd0"]]);export{I as default};