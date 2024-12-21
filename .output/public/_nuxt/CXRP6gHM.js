import{L as z}from"./BjbNMfkp.js";import{u as b}from"./BmkYHMkT.js";import{d as $,o as x,_ as h,t as d,v as u,x as n,S as M,i as S,T as k,y as _,P,Q as L,g as v,z as m,A as q,B as Q,M as C}from"./J36DYpYB.js";import{u as N}from"./BUiUxpVx.js";import{_ as H}from"./B6FNxMp5.js";const E=$({setup(){let e=null;const o=b();let c="";const i=r=>{o.setSearchQuery(r)},y=()=>{if(!("webkitSpeechRecognition"in window)){alert("La funzionalità di ricerca vocale non è supportata dal tuo browser.");return}const r=new window.webkitSpeechRecognition;r.lang="en-US",r.interimResults=!0,r.start(),r.onresult=s=>{c=s.results[0][0].transcript,e&&(e.value=c),i(c)},r.onerror=s=>{console.error("Errore nel riconoscimento vocale:",s.error)},r.onend=()=>{console.log("Riconoscimento vocale terminato")}};return x(()=>{e=document.getElementById("search-bar")}),{searchQuery:o.searchQuery,updateSearchQuery:i,onVoiceSearch:y}}}),F="data:image/svg+xml,%3csvg%20width='25'%20height='26'%20viewBox='0%200%2025%2026'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M19.168%2019.245C21.2279%2017.2026%2022.5103%2014.3759%2022.5103%2011.2524C22.5062%205.04839%2017.4605%200%2011.2551%200C5.04839%200%200%205.04839%200%2011.2551C0%2017.4619%205.04839%2022.5065%2011.2513%2022.5065C13.5879%2022.5065%2015.7572%2021.791%2017.5579%2020.568L22.8036%2026L24.2966%2024.5583L19.168%2019.245ZM2.07309%2011.2551C2.07309%206.19326%206.19156%202.0734%2011.2548%202.0734C16.3167%202.0734%2020.4327%206.19326%2020.4327%2011.2551C20.4327%2016.317%2016.3129%2020.433%2011.2548%2020.433C6.19537%2020.433%202.07309%2016.3146%202.07309%2011.2551Z'%20fill='%23757373'/%3e%3c/svg%3e",R="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.4.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Livello_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2018%2027'%20style='enable-background:new%200%200%2018%2027;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st1{fill:%23757373;}%20%3c/style%3e%3cg%3e%3cpath%20class='st1'%20d='M8.8,18.2c-1.4,0-2.7-0.5-3.6-1.5c-1-1-1.5-2.3-1.5-3.7V5.2c0-1.4,0.5-2.7,1.5-3.7l0,0c1-1,2.3-1.5,3.6-1.5%20c1.4,0,2.7,0.5,3.6,1.5c1,1,1.5,2.3,1.5,3.7v7.7c0,1.4-0.5,2.7-1.5,3.7C11.4,17.6,10.2,18.2,8.8,18.2z%20M8.8,1.7%20c-0.9,0-1.8,0.4-2.4,1c-0.6,0.7-1,1.5-1,2.5v7.7c0,0.9,0.4,1.8,1,2.5c1.3,1.3,3.5,1.3,4.8,0l0,0c0.6-0.7,1-1.5,1-2.5V5.2%20c0-0.9-0.4-1.8-1-2.5S9.7,1.7,8.8,1.7z'/%3e%3c/g%3e%3cg%3e%3cpath%20class='st1'%20d='M8.4,21.6v-0.5l-0.5,0c-4.2-0.4-7.5-4-7.5-8.4h0l0,0c0-0.1,0-0.1,0-0.1c0,0,0-0.1,0.1-0.1c0,0,0.1-0.1,0.1-0.1%20c0,0,0.1,0,0.1,0c0,0,0.1,0,0.1,0l0.2-0.4L1,12.3c0,0,0.1,0,0.1,0.1c0,0,0.1,0.1,0.1,0.1c0,0,0,0.1,0,0.1h0v0%20c0,4.3,3.4,7.7,7.6,7.7c4.2,0,7.6-3.5,7.6-7.7h0l0,0c0-0.1,0-0.1,0-0.1c0,0,0-0.1,0.1-0.1c0,0,0.1-0.1,0.1-0.1c0,0,0.1,0,0.1,0%20s0.1,0,0.1,0c0,0,0.1,0,0.1,0.1l0.4-0.3L17,12.4c0,0,0.1,0.1,0.1,0.1c0,0,0,0.1,0,0.1h0v0c0,4.4-3.3,8-7.5,8.4l-0.5,0v0.5v3.6v0.5%20h0.5h3.4c0.1,0,0.2,0,0.2,0.1c0.1,0.1,0.1,0.2,0.1,0.3c0,0.1,0,0.2-0.1,0.3c-0.1,0.1-0.1,0.1-0.2,0.1H4.5c-0.1,0-0.2,0-0.2-0.1%20c-0.1-0.1-0.1-0.2-0.1-0.3c0-0.1,0-0.2,0.1-0.3c0.1-0.1,0.1-0.1,0.2-0.1h3.4h0.5v-0.5V21.6z'/%3e%3cpath%20class='st1'%20d='M4.5,27c-0.2,0-0.4-0.1-0.6-0.3c-0.2-0.2-0.2-0.4-0.2-0.6s0.1-0.4,0.2-0.6c0.2-0.2,0.4-0.3,0.6-0.3l3.4,0%20l0-3.6C3.4,21.2,0,17.3,0,12.7c0-0.1,0-0.2,0.1-0.3c0-0.1,0.1-0.2,0.2-0.3c0.1-0.1,0.2-0.2,0.3-0.2c0,0,0.1,0,0.1,0l0-0.1l0.2,0.1%20c0.1,0,0.2,0,0.3,0.1l0,0.1l0-0.1c0.1,0,0.2,0.1,0.3,0.2l0.2,0.1l0,0.1c0,0,0,0.1,0.1,0.1c0,0.1,0.1,0.2,0.1,0.3%20c0,4,3.2,7.2,7.1,7.2c3.9,0,7.1-3.2,7.1-7.2c0-0.1,0-0.2,0.1-0.3c0-0.1,0.1-0.2,0.2-0.3c0.1-0.1,0.2-0.1,0.3-0.2%20c0.2-0.1,0.3-0.1,0.5-0.1l0.1-0.1l0.3,0.3c0,0,0,0,0,0c0,0,0,0,0,0l0.3,0.3l-0.1,0.1c0,0.1,0,0.1,0,0.2c0,4.6-3.4,8.5-7.9,8.9v3.6%20h3.4c0.2,0,0.4,0.1,0.6,0.3c0.2,0.2,0.2,0.4,0.2,0.6s-0.1,0.4-0.2,0.6c-0.2,0.2-0.4,0.3-0.6,0.3H4.5z'/%3e%3c/g%3e%3c/svg%3e",G={class:"search-bar-container"},O=["value"];function A(e,o,c,i,y,r){return d(),u("div",G,[o[3]||(o[3]=n("img",{src:F,alt:"icona lente che indica la ricerca testuale",class:"search-text-icon"},null,-1)),n("input",{value:e.searchQuery,onInput:o[0]||(o[0]=s=>e.updateSearchQuery(s.target.value)),"aria-label":"barra di ricerca dei prodotti",type:"text",placeholder:"Cerca",class:"search-bar",id:"search-bar"},null,40,O),n("button",{class:"voice-search",onClick:o[1]||(o[1]=(...s)=>e.onVoiceSearch&&e.onVoiceSearch(...s))},o[2]||(o[2]=[n("img",{src:R,alt:"icona microfono che indica la ricerca vocale"},null,-1)]))])}const U=h(E,[["render",A],["__scopeId","data-v-077e19b2"]]),w=M("category",{state:()=>({selectedCategory:null,selectedSubcategory:null}),actions:{setCategory(e){this.selectedCategory=e,this.selectedSubcategory=null},setSubcategory(e){this.selectedSubcategory=e},resetCategory(){this.selectedCategory=null,this.selectedSubcategory=null}}}),Z=$({name:"PillowCategoryComponent",setup(){const e=w(),{getCategories:o,getSubcategories:c,getFirstSubcategory:i}=b(),y=S(()=>e.selectedCategory?c(e.selectedCategory):o);return{categoryStore:e,displayedCategories:y,selectCategoryOrSubcategory:t=>{if(e.selectedCategory)e.setSubcategory(t);else{e.setCategory(t);const g=i(t);g&&e.setSubcategory(g)}},isSelected:t=>e.selectedCategory===t||e.selectedSubcategory===t}}}),D={class:"categories-container"},j=["onClick"];function J(e,o,c,i,y,r){return d(),u("div",null,[n("div",D,[n("button",{class:k(["btn",{"btn-selected":!e.categoryStore.selectedCategory}]),onClick:o[0]||(o[0]=(...s)=>e.categoryStore.resetCategory&&e.categoryStore.resetCategory(...s))},_(e.categoryStore.selectedCategory?"← Indietro":"TUTTI"),3),(d(!0),u(P,null,L(e.displayedCategories,s=>(d(),u("button",{key:s,class:k(["btn",{"btn-selected":e.isSelected(s)}]),onClick:t=>e.selectCategoryOrSubcategory(s)},_(s),11,j))),128))])])}const K=h(Z,[["render",J],["__scopeId","data-v-446ed52d"]]),W={name:"HeaderSearch",components:{Logo:z,SearcBar:U,PillowCategories:K}},X={class:"logo-container"};function Y(e,o,c,i,y,r){const s=v("Logo"),t=v("SearcBar"),g=v("PillowCategories");return d(),u("header",null,[n("div",X,[m(s)]),m(t),m(g)])}const B=h(W,[["render",Y],["__scopeId","data-v-fb485f73"]]),ee={name:"BannerCategory",setup(){return{categoryStore:w()}}},te={class:"intestate-category"};function oe(e,o,c,i,y,r){return d(),u("h1",te,_(i.categoryStore.selectedSubcategory?i.categoryStore.selectedSubcategory:"Tutti"),1)}const I=h(ee,[["render",oe],["__scopeId","data-v-cccf886a"]]),ce=$({name:"ListProduct",setup(){const e=w(),o=b(),c=N(),i=S(()=>o.filteredProductsState),y=S(()=>o.searchQuery),r=S(()=>{let a=i.value.length>0?i.value:o.products;return(e.selectedSubcategory||e.selectedCategory)&&(a=a.filter(l=>e.selectedSubcategory?l.subcategory===e.selectedSubcategory:l.category===e.selectedCategory)),y.value&&(a=a.filter(l=>l.name.toLowerCase().includes(y.value.toLowerCase()))),a}),s=a=>{c.addProductToCart(a)},t=a=>{const l=a.id,p=c.cart.find(f=>f.id===l);p&&p.quantity>1?c.updateQuantity(l,p.quantity-1):c.removeProductFromCart(l)},g=(a,l)=>{const p=parseInt(l,10);!isNaN(p)&&p>0&&(c.updateQuantity(a.id,p),cartTotal=c.getCartTotal)},T=a=>{const l=c.cart.find(p=>p.id===a.id);(!l||l.quantity<=0)&&(c.updateQuantity(a.id,1),cartTotal=c.getCartTotal)},V=a=>{const l=a.id,p=c.cart.find(f=>f.id===l);return p?p.quantity:0};return x(()=>{c.loadCartFromStorage()}),{categoryStore:e,filteredProducts:r,increaseQuantity:s,decreaseQuantity:t,updateQuantity:g,validateQuantity:T,getQuantity:V}}}),se={class:"list-product-container"},ne={class:"row-item"},re={key:0},ae={class:"row-item"},ie={key:0},le={key:1},de={key:2},ue={class:"row-item"},ge={class:"row-item"},ye={class:"counter"},pe=["onClick"],_e=["value","onInput","onBlur"],me=["onClick"];function he(e,o,c,i,y,r){const s=v("router-link");return d(),u("div",null,[n("div",se,[n("ul",null,[(d(!0),u(P,null,L(e.filteredProducts,t=>(d(),u("li",{key:t.id,class:"product-item"},[m(s,{to:`/product/${t.id}`},{default:q(()=>[n("div",ne,[Q(_(t.name)+" ",1),t.vigneto?(d(),u("span",re," - "+_(t.vigneto),1)):C("",!0)]),n("div",ae,[t.annata?(d(),u("span",ie,_(t.annata),1)):C("",!0),t.annata&&t.grado_alcolico?(d(),u("span",le," - ")):C("",!0),t.grado_alcolico?(d(),u("span",de,_(t.grado_alcolico)+"% vol. ",1)):C("",!0)])]),_:2},1032,["to"]),n("div",ue,[n("span",ge,[o[0]||(o[0]=n("img",{class:"icon-price",src:H,alt:"icona che indica il prezzo"},null,-1)),Q(" "+_(t.price),1)]),n("span",ye,[n("span",{onClick:g=>e.decreaseQuantity(t)},"-",8,pe),n("span",null,[n("input",{type:"number",value:e.getQuantity(t),onInput:g=>e.updateQuantity(t,g.target.value),onBlur:g=>e.validateQuantity(t),class:"input-quantity"},null,40,_e)]),n("span",{onClick:g=>e.increaseQuantity(t)},"+",8,me)])])]))),128))])])])}const ve=h(ce,[["render",he],["__scopeId","data-v-a02eb93c"]]),Ce={name:"home",components:{HeaderSearch:B,ListProduct:ve,BannerCategory:I}};function Se(e,o,c,i,y,r){const s=B,t=I,g=v("ListProduct");return d(),u("div",null,[m(s),m(t),m(g)])}const Qe=h(Ce,[["render",Se]]);export{Qe as default};