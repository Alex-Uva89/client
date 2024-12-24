import{L as N}from"./H4EzDj0j.js";import{u as k,_ as q}from"./ZLhS8OnR.js";import{d as x,o as I,_ as h,t as i,v as l,x as r,T as F,i as f,U as P,Q as b,B as w,R as L,y as p,g as v,z as m,J as H,A as R,N as S}from"./BtYcSx_U.js";import{_ as E}from"./B6FNxMp5.js";const G=x({setup(){let e=null;const c=k();let o="";const d=a=>{c.setSearchQuery(a)},_=()=>{if(!("webkitSpeechRecognition"in window)){alert("La funzionalità di ricerca vocale non è supportata dal tuo browser.");return}const a=new window.webkitSpeechRecognition;a.lang="en-US",a.interimResults=!0,a.start(),a.onresult=s=>{o=s.results[0][0].transcript,e&&(e.value=o),d(o)},a.onerror=s=>{console.error("Errore nel riconoscimento vocale:",s.error)},a.onend=()=>{console.log("Riconoscimento vocale terminato")}};return I(()=>{e=document.getElementById("search-bar")}),{searchQuery:c.searchQuery,updateSearchQuery:d,onVoiceSearch:_}}}),O="data:image/svg+xml,%3csvg%20width='25'%20height='26'%20viewBox='0%200%2025%2026'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M19.168%2019.245C21.2279%2017.2026%2022.5103%2014.3759%2022.5103%2011.2524C22.5062%205.04839%2017.4605%200%2011.2551%200C5.04839%200%200%205.04839%200%2011.2551C0%2017.4619%205.04839%2022.5065%2011.2513%2022.5065C13.5879%2022.5065%2015.7572%2021.791%2017.5579%2020.568L22.8036%2026L24.2966%2024.5583L19.168%2019.245ZM2.07309%2011.2551C2.07309%206.19326%206.19156%202.0734%2011.2548%202.0734C16.3167%202.0734%2020.4327%206.19326%2020.4327%2011.2551C20.4327%2016.317%2016.3129%2020.433%2011.2548%2020.433C6.19537%2020.433%202.07309%2016.3146%202.07309%2011.2551Z'%20fill='%23757373'/%3e%3c/svg%3e",U="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.4.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Livello_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2018%2027'%20style='enable-background:new%200%200%2018%2027;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st1{fill:%23757373;}%20%3c/style%3e%3cg%3e%3cpath%20class='st1'%20d='M8.8,18.2c-1.4,0-2.7-0.5-3.6-1.5c-1-1-1.5-2.3-1.5-3.7V5.2c0-1.4,0.5-2.7,1.5-3.7l0,0c1-1,2.3-1.5,3.6-1.5%20c1.4,0,2.7,0.5,3.6,1.5c1,1,1.5,2.3,1.5,3.7v7.7c0,1.4-0.5,2.7-1.5,3.7C11.4,17.6,10.2,18.2,8.8,18.2z%20M8.8,1.7%20c-0.9,0-1.8,0.4-2.4,1c-0.6,0.7-1,1.5-1,2.5v7.7c0,0.9,0.4,1.8,1,2.5c1.3,1.3,3.5,1.3,4.8,0l0,0c0.6-0.7,1-1.5,1-2.5V5.2%20c0-0.9-0.4-1.8-1-2.5S9.7,1.7,8.8,1.7z'/%3e%3c/g%3e%3cg%3e%3cpath%20class='st1'%20d='M8.4,21.6v-0.5l-0.5,0c-4.2-0.4-7.5-4-7.5-8.4h0l0,0c0-0.1,0-0.1,0-0.1c0,0,0-0.1,0.1-0.1c0,0,0.1-0.1,0.1-0.1%20c0,0,0.1,0,0.1,0c0,0,0.1,0,0.1,0l0.2-0.4L1,12.3c0,0,0.1,0,0.1,0.1c0,0,0.1,0.1,0.1,0.1c0,0,0,0.1,0,0.1h0v0%20c0,4.3,3.4,7.7,7.6,7.7c4.2,0,7.6-3.5,7.6-7.7h0l0,0c0-0.1,0-0.1,0-0.1c0,0,0-0.1,0.1-0.1c0,0,0.1-0.1,0.1-0.1c0,0,0.1,0,0.1,0%20s0.1,0,0.1,0c0,0,0.1,0,0.1,0.1l0.4-0.3L17,12.4c0,0,0.1,0.1,0.1,0.1c0,0,0,0.1,0,0.1h0v0c0,4.4-3.3,8-7.5,8.4l-0.5,0v0.5v3.6v0.5%20h0.5h3.4c0.1,0,0.2,0,0.2,0.1c0.1,0.1,0.1,0.2,0.1,0.3c0,0.1,0,0.2-0.1,0.3c-0.1,0.1-0.1,0.1-0.2,0.1H4.5c-0.1,0-0.2,0-0.2-0.1%20c-0.1-0.1-0.1-0.2-0.1-0.3c0-0.1,0-0.2,0.1-0.3c0.1-0.1,0.1-0.1,0.2-0.1h3.4h0.5v-0.5V21.6z'/%3e%3cpath%20class='st1'%20d='M4.5,27c-0.2,0-0.4-0.1-0.6-0.3c-0.2-0.2-0.2-0.4-0.2-0.6s0.1-0.4,0.2-0.6c0.2-0.2,0.4-0.3,0.6-0.3l3.4,0%20l0-3.6C3.4,21.2,0,17.3,0,12.7c0-0.1,0-0.2,0.1-0.3c0-0.1,0.1-0.2,0.2-0.3c0.1-0.1,0.2-0.2,0.3-0.2c0,0,0.1,0,0.1,0l0-0.1l0.2,0.1%20c0.1,0,0.2,0,0.3,0.1l0,0.1l0-0.1c0.1,0,0.2,0.1,0.3,0.2l0.2,0.1l0,0.1c0,0,0,0.1,0.1,0.1c0,0.1,0.1,0.2,0.1,0.3%20c0,4,3.2,7.2,7.1,7.2c3.9,0,7.1-3.2,7.1-7.2c0-0.1,0-0.2,0.1-0.3c0-0.1,0.1-0.2,0.2-0.3c0.1-0.1,0.2-0.1,0.3-0.2%20c0.2-0.1,0.3-0.1,0.5-0.1l0.1-0.1l0.3,0.3c0,0,0,0,0,0c0,0,0,0,0,0l0.3,0.3l-0.1,0.1c0,0.1,0,0.1,0,0.2c0,4.6-3.4,8.5-7.9,8.9v3.6%20h3.4c0.2,0,0.4,0.1,0.6,0.3c0.2,0.2,0.2,0.4,0.2,0.6s-0.1,0.4-0.2,0.6c-0.2,0.2-0.4,0.3-0.6,0.3H4.5z'/%3e%3c/g%3e%3c/svg%3e",A={class:"search-bar-container"},Z=["value"];function D(e,c,o,d,_,a){return i(),l("div",A,[c[3]||(c[3]=r("img",{src:O,alt:"icona lente che indica la ricerca testuale",class:"search-text-icon"},null,-1)),r("input",{value:e.searchQuery,onInput:c[0]||(c[0]=s=>e.updateSearchQuery(s.target.value)),"aria-label":"barra di ricerca dei prodotti",type:"text",placeholder:"Cerca",class:"search-bar",id:"search-bar"},null,40,Z),r("button",{class:"voice-search",onClick:c[1]||(c[1]=(...s)=>e.onVoiceSearch&&e.onVoiceSearch(...s))},c[2]||(c[2]=[r("img",{src:U,alt:"icona microfono che indica la ricerca vocale"},null,-1)]))])}const J=h(G,[["render",D],["__scopeId","data-v-077e19b2"]]),Q=F("category",{state:()=>({selectedCategory:null,selectedSubcategory:null}),actions:{setCategory(e){this.selectedCategory=e,this.selectedSubcategory=null},setSubcategory(e){this.selectedSubcategory=e},resetCategory(){this.selectedCategory=null,this.selectedSubcategory=null}}}),j=x({name:"PillowCategoryComponent",setup(){const e=Q(),{getCategories:c,getSubcategories:o,getFirstSubcategory:d}=k(),_=f(()=>e.selectedCategory?o(e.selectedCategory):c);return{categoryStore:e,displayedCategories:_,selectCategoryOrSubcategory:t=>{if(e.selectedCategory)e.setSubcategory(t);else{e.setCategory(t);const y=d(t);y&&e.setSubcategory(y)}},isSelected:t=>e.selectedCategory===t||e.selectedSubcategory===t}}}),K={class:"categories-container"},W={key:0,src:q,alt:"Indietro"},X=["onClick"];function Y(e,c,o,d,_,a){return i(),l("div",null,[r("div",K,[r("button",{class:P(["btn",{"btn-selected":!e.categoryStore.selectedCategory}]),onClick:c[0]||(c[0]=(...s)=>e.categoryStore.resetCategory&&e.categoryStore.resetCategory(...s))},[e.categoryStore.selectedCategory?(i(),l("img",W)):(i(),l(b,{key:1},[w(" TUTTI ")],64))],2),(i(!0),l(b,null,L(e.displayedCategories,s=>(i(),l("button",{key:s,class:P(["btn",{"btn-selected":e.isSelected(s)}]),onClick:t=>e.selectCategoryOrSubcategory(s)},p(s),11,X))),128))])])}const ee=h(j,[["render",Y],["__scopeId","data-v-e14a4255"]]),te={name:"HeaderSearch",components:{Logo:N,SearcBar:J,PillowCategories:ee}},oe={class:"logo-container"};function ce(e,c,o,d,_,a){const s=v("Logo"),t=v("SearcBar"),y=v("PillowCategories");return i(),l("header",null,[r("div",oe,[m(s)]),m(t),m(y)])}const B=h(te,[["render",ce],["__scopeId","data-v-a3b152eb"]]),se={name:"BannerCategory",setup(){return{categoryStore:Q()}}},ne={class:"intestate-category"};function re(e,c,o,d,_,a){return i(),l("h1",ne,p(d.categoryStore.selectedSubcategory?d.categoryStore.selectedSubcategory:"Tutti"),1)}const T=h(se,[["render",re],["__scopeId","data-v-cccf886a"]]),ae=x({name:"ListProduct",setup(){const e=Q(),c=k(),o=H(),d=f(()=>c.filteredProductsState),_=f(()=>c.searchQuery),a=f(()=>{let n=d.value.length>0?d.value:c.products;return(e.selectedSubcategory||e.selectedCategory)&&(n=n.filter(u=>e.selectedSubcategory?u.subcategory===e.selectedSubcategory:u.category===e.selectedCategory)),_.value&&(n=n.filter(u=>u.name.toLowerCase().includes(_.value.toLowerCase()))),n}),s=n=>{o.addProductToCart(n)},t=n=>{const u=n.id,g=o.cart.find(C=>C.id===u);g&&g.quantity>1?o.updateQuantity(u,g.quantity-1):o.removeProductFromCart(u)},y=(n,u)=>{const g=parseInt(u,10);!isNaN(g)&&g>0?o.cart.find(M=>M.id===n.id)?o.updateQuantity(n.id,g):o.addProductToCart({...n,quantity:g}):g===0&&o.removeProductFromCart(n.id),$=o.getCartTotal},V=n=>{const u=o.cart.find(g=>g.id===n.id);(!u||u.quantity<=0)&&(o.updateQuantity(n.id,1),$=o.getCartTotal)},z=n=>{const u=n.id,g=o.cart.find(C=>C.id===u);return g?g.quantity:0};let $=o.getCartTotal;return I(()=>{o.loadCartFromStorage()}),{categoryStore:e,filteredProducts:a,increaseQuantity:s,decreaseQuantity:t,updateQuantity:y,validateQuantity:V,getQuantity:z,cartTotal:$}}}),ie={class:"list-product-container"},le={class:"row-item"},de={key:0},ue={class:"row-item"},ge={key:0},ye={key:1},_e={key:2},pe={class:"row-item"},me={class:"row-item"},he={class:"counter"},ve=["onClick"],Ce=["value","onInput","onBlur"],Se=["onClick"];function fe(e,c,o,d,_,a){const s=v("router-link");return i(),l("div",null,[r("div",ie,[r("ul",null,[(i(!0),l(b,null,L(e.filteredProducts,t=>(i(),l("li",{key:t.id,class:"product-item"},[m(s,{to:`/product/${t.id}`},{default:R(()=>[r("div",le,[w(p(t.name)+" ",1),t.vigneto?(i(),l("span",de," - "+p(t.vigneto),1)):S("",!0)]),r("div",ue,[t.annata?(i(),l("span",ge,p(t.annata),1)):S("",!0),t.annata&&t.grado_alcolico?(i(),l("span",ye," - ")):S("",!0),t.grado_alcolico?(i(),l("span",_e,p(t.grado_alcolico)+"% vol. ",1)):S("",!0)])]),_:2},1032,["to"]),r("div",pe,[r("span",me,[c[0]||(c[0]=r("img",{class:"icon-price",src:E,alt:"icona che indica il prezzo"},null,-1)),w(" "+p(t.price),1)]),r("span",he,[r("span",{onClick:y=>e.decreaseQuantity(t)},"-",8,ve),r("span",null,[r("input",{type:"number",value:e.getQuantity(t),onInput:y=>e.updateQuantity(t,y.target.value),onBlur:y=>e.validateQuantity(t),class:"input-quantity"},null,40,Ce)]),r("span",{onClick:y=>e.increaseQuantity(t)},"+",8,Se)])])]))),128))])])])}const $e=h(ae,[["render",fe],["__scopeId","data-v-98fe0d7a"]]),be={name:"home",components:{HeaderSearch:B,ListProduct:$e,BannerCategory:T}};function we(e,c,o,d,_,a){const s=B,t=T,y=v("ListProduct");return i(),l("div",null,[m(s),m(t),m(y)])}const Ie=h(be,[["render",we]]);export{Ie as default};