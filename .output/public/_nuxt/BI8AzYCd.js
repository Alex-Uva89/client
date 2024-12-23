import{_ as Q}from"./B6FNxMp5.js";import{B as f}from"./DKp5B0T4.js";import{_ as V,J as q,r as k,o as S,g as D,K as g,t as i,v as l,x as t,Q as h,R as N,B as x,y as c,N as r,z as v,A as m}from"./D6rGpg6a.js";const A="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.4.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Livello_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2026%2028'%20style='enable-background:new%200%200%2026%2028;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23757373;}%20%3c/style%3e%3cg%3e%3cpath%20class='st0'%20d='M16.9,28H8.6c-1.8,0-2.7,0-3.5-0.4c-0.7-0.4-1.3-1-1.7-1.7c-0.4-0.8-0.4-1.8-0.4-3.5v-16H1c-0.6,0-1-0.4-1-1%20s0.4-1,1-1h4.9c0-0.9,0.1-1.4,0.3-1.9c0.4-1,1.2-1.7,2.1-2.1C9,0,9.8,0,11.3,0h2.9c1.5,0,2.2,0,3,0.3c1,0.4,1.7,1.1,2.1,2.1%20c0.2,0.5,0.3,1.1,0.3,1.9h4.9c0.6,0,1,0.4,1,1s-0.4,1-1,1h-1.9v16c0,1.7,0,2.7-0.4,3.5c-0.4,0.7-1,1.3-1.7,1.7%20C19.6,28,18.7,28,16.9,28z%20M4.9,6.3v16c0,1.4,0,2.2,0.2,2.6c0.2,0.4,0.5,0.6,0.8,0.8C6.4,26,7.2,26,8.6,26h8.2c1.4,0,2.2,0,2.6-0.2%20c0.4-0.2,0.7-0.5,0.8-0.8c0.2-0.4,0.2-1.2,0.2-2.6v-16H4.9z%20M7.9,4.3h9.8c0-0.6,0-0.9-0.1-1.2c-0.2-0.5-0.6-0.8-1-1%20C16.1,2,15.4,2,14.2,2h-2.9c-1.2,0-1.9,0-2.2,0.1c-0.5,0.2-0.8,0.6-1,1C7.9,3.4,7.9,3.8,7.9,4.3z%20M15.7,22.2c-0.6,0-1-0.4-1-1V11.1%20c0-0.6,0.4-1,1-1s1,0.4,1,1v10.1C16.7,21.8,16.3,22.2,15.7,22.2z%20M9.8,22.2c-0.6,0-1-0.4-1-1V11.1c0-0.6,0.4-1,1-1s1,0.4,1,1v10.1%20C10.8,21.8,10.4,22.2,9.8,22.2z'/%3e%3c/g%3e%3c/svg%3e",F={key:0,class:"container-cart"},$={class:"list-product-container"},L={class:"row-item"},G={key:0},H={class:"row-item"},E={key:0},W={key:1},J={key:2},K={class:"row-item"},O={class:"row-item"},R={class:"counter"},j=["onClick"],U=["value","onInput","onBlur"],X=["onClick"],Y=["onClick"],Z={class:"cart-total-container"},tt={class:"cart-total"},et={key:0,class:"cart-actions"},ot={key:0,class:"modal-overlay"},nt={class:"modal-content"},at={__name:"ListCartComponent",props:{cartActions:{type:Boolean,default:!0}},setup(w){const n=q(),p=k(!1),u=k(null),b=s=>{u.value=s,p.value=!0},y=()=>{u.value=null,p.value=!1},B=()=>{u.value&&(n.removeProductFromCart(u.value.id),y())},I=s=>{n.addProductToCart(s),_=n.getCartTotal},P=s=>{const o=s.id,a=n.cart.find(e=>e.id===o);a&&a.quantity>1&&(n.updateQuantity(o,a.quantity-1),_=n.getCartTotal)},T=(s,o)=>{const a=parseInt(o,10);!isNaN(a)&&a>0?n.cart.find(d=>d.id===s.id)?n.updateQuantity(s.id,a):n.addProductToCart({...s,quantity:a}):a===0&&n.removeProductFromCart(s.id),_=n.getCartTotal},z=s=>{const o=n.cart.find(a=>a.id===s.id);(!o||o.quantity<=0)&&(n.updateQuantity(s.id,1),_=n.getCartTotal)},C=s=>{const o=s.id,a=n.cart.find(e=>e.id===o);return a?a.quantity:0};S(()=>{n.loadCartFromStorage()});const M=n.getCartWithDetails;let _=n.getCartTotal;return(s,o)=>{const a=D("router-link");return g(_).toFixed(2)>0?(i(),l("div",F,[t("ul",$,[(i(!0),l(h,null,N(g(M),e=>(i(),l("li",{key:e.id,class:"product-item"},[C(e)>0?(i(),l(h,{key:0},[t("div",L,[x(c(e.name)+" ",1),e.vigneto?(i(),l("span",G," - "+c(e.vigneto),1)):r("",!0)]),t("div",H,[e.annata?(i(),l("span",E,c(e.annata),1)):r("",!0),e.annata&&e.grado_alcolico?(i(),l("span",W," - ")):r("",!0),e.grado_alcolico?(i(),l("span",J,c(e.grado_alcolico)+"% vol. ",1)):r("",!0)]),t("div",K,[t("span",O,[o[0]||(o[0]=t("img",{class:"icon-price",src:Q,alt:"icona che indica il prezzo"},null,-1)),x(" "+c(e.price),1)]),t("span",R,[t("span",{onClick:d=>P(e)},"-",8,j),t("span",null,[t("input",{type:"number",value:C(e),onInput:d=>T(e,d.target.value),onBlur:d=>z(e),class:"input-quantity"},null,40,U)]),t("span",{onClick:d=>I(e)},"+",8,X)])]),t("span",{onClick:d=>b(e)},o[1]||(o[1]=[t("img",{class:"icon-delete",src:A,alt:"icona che indica la rimozione del prodotto totale dal carrello"},null,-1)]),8,Y)],64)):r("",!0)]))),128))]),t("div",Z,[t("div",tt,[o[2]||(o[2]=t("span",null,"Subtotale: ",-1)),t("span",null,"€"+c(g(_).toFixed(2)),1)]),w.cartActions?(i(),l("div",et,[v(a,{to:"/"},{default:m(()=>[v(f,{color:"var(--background)"},{default:m(()=>o[3]||(o[3]=[t("span",null,"Aggiungi altro al carrello",-1)])),_:1})]),_:1}),v(a,{to:"/checkout"},{default:m(()=>[v(f,{isLink:"true",link:"/checkout"},{default:m(()=>o[4]||(o[4]=[t("span",null,"Procedi all'acquisto",-1)])),_:1})]),_:1})])):r("",!0)]),p.value?(i(),l("div",ot,[t("div",nt,[t("p",null," Sei sicuro di voler rimuovere tutte le unità ( "+c(u.value.quantity)+' ) di "'+c(u.value.name)+'" dal carrello? ',1),t("div",{class:"modal-buttons"},[t("button",{onClick:B},"Conferma"),t("button",{onClick:y},"Annulla")])])])):r("",!0)])):r("",!0)}}},ct=V(at,[["__scopeId","data-v-b3f5903b"]]);export{ct as _};
