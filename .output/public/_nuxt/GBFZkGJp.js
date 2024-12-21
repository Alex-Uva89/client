import{_ as C}from"./Dwh7B04p.js";import{L as A}from"./u6BzGtLj.js";import{d as h,r as f,_ as w,g as r,t as n,v as a,z as s,A as m,x as o,y as d,W as _,L as p,Y as S,K as u,M as k,Z as V,$ as B,B as M}from"./BJ_zhDFh.js";import{_ as z,a as b}from"./AaDf8L3N.js";const D=h({name:"Accordion",props:{title:{type:String,required:!0},content:{type:String,default:""},hasInput:{type:Boolean,default:!1},type:{type:String,default:"text"},placeholder:{type:String,default:""},hasMail:{type:Boolean,default:!1},isLink:{type:Boolean,default:!1},link:{type:String,default:"#"}},setup(i){const e=f(!1),l=f("");return{isOpen:e,email:l,toggleAccordion:()=>{e.value=!e.value},sendEmail:()=>{console.log(`Email inviata: ${l.value}`),l.value=""}}}}),y=""+new URL("close-arrow.B1xT8-Gk.svg",import.meta.url).href,E={class:"accordion"},U={key:0,class:"accordion-header"},x={key:0,class:"accordion-content"},G={key:0,class:"accordion-input"},O=["type","placeholder"],H={key:1,class:"accordion-input"},N={action:""};function T(i,e,l,v,g,I){const c=r("router-link");return n(),a("div",E,[i.isLink?(n(),a("div",U,[s(c,{to:i.link,class:"accordion-title"},{default:m(()=>[o("span",null,d(i.title),1),e[5]||(e[5]=o("img",{src:y,alt:"icona a freccia",class:"arrow"},null,-1))]),_:1},8,["to"])])):(n(),a("div",{key:1,class:"accordion-header",onClick:e[0]||(e[0]=(...t)=>i.toggleAccordion&&i.toggleAccordion(...t))},[o("h2",{class:_(["accordion-title",{"open-title":i.isOpen}])},[o("span",null,d(i.title),1),o("img",{src:y,alt:"icona a freccia",class:_(["arrow",{rotate:i.isOpen}])},null,2)],2)])),s(V,{name:"accordion"},{default:m(()=>[i.isOpen&&!i.isLink?(n(),a("div",x,[o("p",null,d(i.content),1),i.hasInput?(n(),a("div",G,[p(o("input",{type:i.type,placeholder:i.placeholder,"onUpdate:modelValue":e[1]||(e[1]=t=>i.email=t)},null,8,O),[[S,i.email]]),e[6]||(e[6]=o("button",null,"Invia",-1))])):u("",!0),i.hasMail?(n(),a("div",H,[o("form",N,[p(o("input",{type:"email",placeholder:"Inserisci la tua email","onUpdate:modelValue":e[2]||(e[2]=t=>i.email=t)},null,512),[[k,i.email]]),p(o("input",{type:"text",placeholder:"Inserisci il tuo messaggio","onUpdate:modelValue":e[3]||(e[3]=t=>i.email=t)},null,512),[[k,i.email]]),o("button",{onClick:e[4]||(e[4]=(...t)=>i.sendEmail&&i.sendEmail(...t))},"Invia")])])):u("",!0)])):u("",!0)]),_:1})])}const R=w(D,[["render",T],["__scopeId","data-v-68c4d728"]]),F=h({components:{Accordion:R,Header:C,Logo:A}}),q=""+new URL("delivery.CD3F4boM.svg",import.meta.url).href,K="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.4.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Livello_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2028%2028'%20style='enable-background:new%200%200%2028%2028;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%2374121D;}%20%3c/style%3e%3cg%3e%3cpath%20class='st0'%20d='M14,28C6.3,28,0,21.7,0,14S6.3,0,14,0s14,6.3,14,14S21.7,28,14,28z%20M14,2C7.4,2,2,7.4,2,14c0,6.6,5.4,12,12,12%20c6.6,0,12-5.4,12-12C26,7.4,20.6,2,14,2z%20M21.2,15H14c-0.6,0-1-0.4-1-1V6.8c0-0.6,0.4-1,1-1s1,0.4,1,1V13h6.2c0.6,0,1,0.4,1,1%20S21.8,15,21.2,15z'/%3e%3c/g%3e%3c/svg%3e",P=""+new URL("help-us.B3cXbeGC.svg",import.meta.url).href,W={class:"container-fix-header"},X={class:"menu-container"},Y={class:"menu-main-container"},Z={class:"accordion-container"},j={class:"accordion-group-container"},J={class:"accordion-container"},Q={class:"accordion-container"},ee={class:"accordion-group-container"},oe={class:"accordion-container"},ie={class:"accordion-container"},te={class:"accordion-container"},se={class:"footer"};function ne(i,e,l,v,g,I){const c=r("Header"),t=r("Accordion"),$=r("Logo"),L=r("router-link");return n(),a("div",null,[o("div",W,[s(c,{title:"Menù"})]),o("div",X,[o("div",Y,[o("div",Z,[e[0]||(e[0]=o("img",{src:B,alt:"icona cestino della spesa"},null,-1)),s(t,{title:"La mia lista",isLink:"true",link:"/cart",icon:"basket"})]),o("div",j,[o("div",J,[e[1]||(e[1]=o("img",{src:q,alt:"iconsa pacco delivery",class:"accordion-icon"},null,-1)),s(t,{title:"Dove spediamo",content:"Digita il tuo indirizzo, scopriamo assieme se inviamo da te",hasInput:!0,type:"text",placeholder:"Inserisci il tuo indirizzo",isLink:!1})]),o("div",Q,[e[2]||(e[2]=o("img",{src:z,alt:"",class:"accordion-icon"},null,-1)),s(t,{title:"Chi siamo",content:"Inserisci la tua email per iscriverti alla nostra newsletter.",hasInput:!1,isLink:!1})])]),o("div",ee,[o("div",oe,[e[3]||(e[3]=o("img",{src:b,alt:"",class:"accordion-icon"},null,-1)),s(t,{title:"Altre info",content:"Inserisci la tua email per iscriverti alla nostra newsletter.",hasInput:!1,isLink:!1})]),o("div",ie,[e[4]||(e[4]=o("img",{src:K,alt:"",class:"accordion-icon"},null,-1)),s(t,{title:"Orari assistenza clienti",content:"Inserisci la tua email per iscriverti alla nostra newsletter.",hasInput:!1,isLink:!1})]),o("div",te,[e[5]||(e[5]=o("img",{src:P,alt:"",class:"accordion-icon"},null,-1)),s(t,{title:"Aiutaci a migliorare l'app",content:"Inviaci una mail con i tuoi feedback",hasInput:!1,isLink:!1,hasMail:!0})])])]),o("div",se,[s($),s(L,{to:"/login",class:"login"},{default:m(()=>e[6]||(e[6]=[M("Sei un amministratore?")])),_:1})])])])}const de=w(F,[["render",ne],["__scopeId","data-v-ae200ae0"]]);export{de as default};
