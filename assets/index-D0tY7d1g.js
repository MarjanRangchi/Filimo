(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})(),document.querySelector(`.select-box`);var e=document.querySelectorAll(`.input-type`),t=document.querySelectorAll(`.options`);document.querySelector(`.grid-label`),document.querySelectorAll(`#checkbox`);var n=document.querySelector(`#shamsi`),r=document.querySelector(`#miladi`),i=document.querySelector(`.mainTitle`),a=document.querySelector(`.mainTitle2`),o=document.querySelector(`#rangeMiladi`),s=document.querySelector(`#rangeShamsi`),c=document.querySelector(`.rangeLabels1`),l=document.querySelector(`.rangeLabels2`),u=document.querySelector(`.filter`),d=document.querySelector(`#rangeHD`);e.forEach((e,n)=>{e.addEventListener(`click`,function(e){e.stopPropagation(),t.forEach(e=>{e.classList.remove(`active`)}),t[n].classList.add(`active`)})}),document.addEventListener(`click`,function(e){e.target.closest(`.select-box`)||t.forEach(e=>{e.classList.remove(`active`)})}),r.addEventListener(`click`,function(){i.classList.add(`hidden`),a.classList.add(`active`),s.classList.add(`hidden`),o.classList.add(`active`),c.classList.add(`hidden`),l.classList.add(`active`)}),n.addEventListener(`click`,function(){a.classList.remove(`active`),i.classList.remove(`hidden`),o.classList.remove(`active`),s.classList.remove(`hidden`),c.classList.remove(`hidden`),l.classList.remove(`active`)}),e.forEach(t=>{t.addEventListener(`click`,function(){e.forEach(e=>{e.classList.remove(`hover`)}),t.classList.add(`hover`)})}),u.addEventListener(`click`,function(){u.classList.add(`hover`)}),d.addEventListener(`click`,function(){u.classList.add(`hover`),d.classList.add(`hover`)});async function f(){let e=``;e=(await(await fetch(`https://marjanrangchi.github.io/filimoAPI/db.json`)).json())?.headers?.map(e=>`<li>
                <a href=${e.href}}>
                ${e.src?`<img src=${e.src} alt="logo"`:e.title}
             
              </li>`),document.querySelector(`#menu-items>ul`).insertAdjacentHTML(`beforeend`,e.join(` `)),p(),m()}async function p(){let e=``;e=(await(await fetch(`https://marjanrangchi.github.io/filimoAPI/db.json`)).json())?.purchase?.map(e=>`<button class="perchase">${e.title}</button>`),document.querySelector(`#login-btn`).insertAdjacentHTML(`beforeend`,e.join(``))}async function m(){let e=``;e=(await(await fetch(`https://marjanrangchi.github.io/filimoAPI/db.json`)).json())?.headerLoginBtn?.map(e=>`<a  href=${e.href} class="loginBtn">${e.title}</a>`),document.querySelector(`#login-btn`).insertAdjacentHTML(`beforeend`,e.join(``))}async function h(){let e=``;e=(await(await fetch(`https://marjanrangchi.github.io/filimoAPI/db.json`)).json())?.slider?.map(e=>`<div class="swiper-slide mobile">
          <img src=${e.src} alt="image1">
          <div class="details details2">
          ${e.logo?`<div class="logo">
            <img src=${e.logo} alt="logo">
            </div>`:` `}
            <div class="title">${e.title}</div>
            <div class="btn">
            <button>${e.btnTitle}</button>
            </div>
          </div>
        </div>`),document.querySelector(`#swiper-wrapper`).insertAdjacentHTML(`beforeend`,e.join(` `))}async function g(){let e=``;e=(await(await fetch(`https://marjanrangchi.github.io/filimoAPI/db.json`)).json())?.gridPart?.map(e=>`    <div class="image">
          <img src=${e.src} alt="image">
          ${e.title2?`<div class="title2">${e.title2}</div>`:``}
          ${e.logo?`<div class="logo"><img src=${e.logo.src} alt="logo"> <div class="title">${e.logo.title}</div></div>`:``}

          <div class="modal">
          <div class="title">${e.title}</div>
          <button class="btn">${e.time}</button>
          <div class="click">
            <button class="one">
              <img src=${e.image1} alt="icon">
            </button>
            <button class="two">
              <img src=${e.image2} alt="icon">
            </button>
          </div>
        </div>
        </div>`),document.querySelector(`#grid-part`).insertAdjacentHTML(`beforeend`,e.join(` `))}async function _(){let e=``;e=(await(await fetch(`https://marjanrangchi.github.io/filimoAPI/db.json`)).json())?.advertisement?.map(e=>`   <div class="svg">
          <img src=${e.src1}  class="svg-mobile" alt="svg">
        </div>
        <div class="title title-mobile">
          <div class="title-one title-one-mobile">${e.title1}</div>
          <div class="title-two title-two-mobile">${e.title2}</div>
        </div>
        <button class="show show-mobile">${e.title}</button>
        <div class="discription discription-mobile">
          <div>${e.discription1}</div>
          <div>${e.discription2}</div>
          <div>${e.discription3}</div>
        </div>
        <div class="image-adver image">
          <img src=${e.src} alt="image">
        </div>`),document.querySelector(`#advertise-part`).insertAdjacentHTML(`beforeend`,e.join(` `))}async function v(){let e=` `;e=(await(await fetch(`https://marjanrangchi.github.io/filimoAPI/db.json`)).json())?.slider1?.map(e=>`   <div class="swiper-slide flex">
          <img src=${e.src} alt="image1">
          <div class="name">${e.name}</div>
             <div class="hover">
              <div class="rate">${e.hover.rate}</div>
              <div class="title">${e.hover.title}</div>
              <div class="year">${e.hover.year}</div>
              </div>
              ${e.logo?`<div class="logo"><img src=${e.logo.src} alt="logo"><div>${e.logo.title}</div>`:` `}</div>
           
        </div>`),document.querySelector(`#swiper-wrapper1`).insertAdjacentHTML(`beforeend`,e.join(` `))}async function y(){let e=` `;e=(await(await fetch(`https://marjanrangchi.github.io/filimoAPI/db.json`)).json())?.slider1?.map(e=>`   <div class="swiper-slide flex">
          <img src=${e.src} alt="image1">
          <div class="name">${e.name}</div>
             <div class="hover">
              <div class="rate">${e.hover.rate}</div>
              <div class="title">${e.hover.title}</div>
              <div class="year">${e.hover.year}</div>
              </div>
              ${e.logo?`<div class="logo"><img src=${e.logo.src} alt="logo"><div>${e.logo.title}</div>`:` `}</div>
           
        </div>`),document.querySelector(`#swiper-wrapper-mobile1`).insertAdjacentHTML(`beforeend`,e.join(` `))}async function b(){let e=` `;e=(await(await fetch(`https://marjanrangchi.github.io/filimoAPI/db.json`)).json())?.slider2?.map(e=>`   <div class="swiper-slide flex">
          <img src=${e.src} alt="image1">
          <div class="name">${e.name}</div>
           <div class="hover">
              <div class="rate">
              <img src=${e.hover.rate.src}>
              <div class="percent">${e.hover.rate.percent}</div>
            <div class="rating">${e.hover.rate.rating} </div>
            </div>
              <div class="title">${e.hover.title}</div>
              <div class="year">${e.hover.year}</div>
              </div>

              </div>`),document.querySelector(`#swiper-wrapper2`).insertAdjacentHTML(`beforeend`,e.join(` `))}async function x(){let e=` `;e=(await(await fetch(`https://marjanrangchi.github.io/filimoAPI/db.json`)).json())?.slider2?.map(e=>`   <div class="swiper-slide flex">
          <img src=${e.src} alt="image1">
          <div class="name">${e.name}</div>
           <div class="hover">
              <div class="rate">
              <img src=${e.hover.rate.src}>
              <div class="percent">${e.hover.rate.percent}</div>
            <div class="rating">${e.hover.rate.rating} </div>
            </div>
              <div class="title">${e.hover.title}</div>
              <div class="year">${e.hover.year}</div>
              </div>

              </div>`),document.querySelector(`#swiper-wrapper-mobile2`).insertAdjacentHTML(`beforeend`,e.join(` `))}async function S(){let e=` `;e=(await(await fetch(`https://marjanrangchi.github.io/filimoAPI/db.json`)).json())?.slider3?.map(e=>`   <div class="swiper-slide flex">
          <img src=${e.src} alt="image1">
              </div>`),document.querySelector(`#swiper-wrapper3`).insertAdjacentHTML(`beforeend`,e.join(` `))}async function C(){let e=` `;e=(await(await fetch(`https://marjanrangchi.github.io/filimoAPI/db.json`)).json())?.slider3?.map(e=>`   <div class="swiper-slide flex">
          <img src=${e.src} alt="image1">
              </div>`),document.querySelector(`#swiper-wrapper-mobile3`).insertAdjacentHTML(`beforeend`,e.join(` `))}async function w(){let e=` `;e=(await(await fetch(`https://marjanrangchi.github.io/filimoAPI/db.json`)).json())?.slider4?.map(e=>`   <div class="swiper-slide flex">
          <img src=${e.src} alt="image1">
          <div class="name">${e.name}</div>
                        <div class="hover">
              <div class="rate">
              <img src=${e.hover.rate.src}>
              <div class="percent">${e.hover.rate.percent}</div>
            <div class="rating">${e.hover.rate.rating} </div>
            </div>
              <div class="title">${e.hover.title}</div>
              <div class="year">${e.hover.year}</div>
              </div>
              ${e.logo?`<div class="logo"><img src=${e.logo.src} alt="logo"><div>${e.logo.title}</div>`:` `}</div>
    
        </div>`),document.querySelector(`#swiper-wrapper4`).insertAdjacentHTML(`beforeend`,e.join(` `))}async function T(){let e=` `;e=(await(await fetch(`https://marjanrangchi.github.io/filimoAPI/db.json`)).json())?.slider4?.map(e=>`   <div class="swiper-slide flex">
          <img src=${e.src} alt="image1">
          <div class="name">${e.name}</div>
                         <div class="hover">
              <div class="rate">
              <img src=${e.hover.rate.src}>
              <div class="percent">${e.hover.rate.percent}</div>
            <div class="rating">${e.hover.rate.rating} </div>
            </div>
              <div class="title">${e.hover.title}</div>
              <div class="year">${e.hover.year}</div>
              </div>
              ${e.logo?`<div class="logo"><img src=${e.logo.src} alt="logo"><div>${e.logo.title}</div>`:` `}</div>
        </div>`),document.querySelector(`#swiper-wrapper-mobile4`).insertAdjacentHTML(`beforeend`,e.join(` `))}async function E(){let e=``;e=(await(await fetch(`https://marjanrangchi.github.io/filimoAPI/db.json`)).json())?.advertisement2?.map(e=>`   <div class="svg svg-mobile2">
          <img src=${e.src1} alt="svg">
        </div>
        <div class="title title-mobile2">
          <div class="title-one title-one-mobile">${e.title1}</div>
          <div class="title-two title-two-mobile2">${e.title2}</div>
        </div>
        <button class="show show-mobile2">${e.title}</button>
        <div class="discription discription-mobile2">
          <div>${e.discription1}</div>
          <div>${e.discription2}</div>
          <div>${e.discription3}</div>
        </div>`),document.querySelector(`#advertise-part2`).insertAdjacentHTML(`beforeend`,e.join(` `))}async function D(){let e=` `;e=(await(await fetch(`https://marjanrangchi.github.io/filimoAPI/db.json`)).json())?.slider5?.map(e=>`   <div class="swiper-slide flex">
          <img src=${e.src} alt="image1">
          <div class="logo">${e.logo}</div>
               <div class="hover">
              <div class="rate">${e.hover.rate}</div>
              <div class="title">${e.hover.title}</div>
              <div class="year">${e.hover.year}</div>
              </div>
              ${e.logo2?`<div class="logo2"><img src=${e.logo2.src} alt="logo2"><div>${e.logo2.title}</div>`:` `}</div>
          
        </div>`),document.querySelector(`#swiper-wrapper5`).insertAdjacentHTML(`beforeend`,e.join(` `))}async function O(){let e=` `;e=(await(await fetch(`https://marjanrangchi.github.io/filimoAPI/db.json`)).json())?.slider5?.map(e=>`   <div class="swiper-slide flex">
          <img src=${e.src} alt="image1">
          <div class="logo">${e.logo}</div>
                <div class="hover">
              <div class="rate">${e.hover.rate}</div>
              <div class="title">${e.hover.title}</div>
              <div class="year">${e.hover.year}</div>
              </div>
              ${e.logo2?`<div class="logo2"><img src=${e.logo2.src} alt="logo2"><div>${e.logo2.title}</div>`:` `}</div>
          
        </div>`),document.querySelector(`#swiper-wrapper-mobile5`).insertAdjacentHTML(`beforeend`,e.join(` `))}async function k(){let e=` `;e=(await(await fetch(`https://marjanrangchi.github.io/filimoAPI/db.json`)).json())?.slider6?.map(e=>`   <div class="swiper-slide flex">
          <img src=${e.src} alt="image1">
          <div class="logo">${e.logo}</div>
              <div class="hover">
                 ${e.hover.rate?`<div class="rate">${e.hover.rate}</div>`:` `}
              <div class="title">${e.hover.title}</div>
              <div class="year">${e.hover.year}</div>
            
              </div>
              ${e.logo2?`<div class="logo2"><img src=${e.logo2.src} alt="logo2"><div>${e.logo2.title}</div>`:` `}</div>
          
        </div>`),document.querySelector(`#swiper-wrapper6`).insertAdjacentHTML(`beforeend`,e.join(` `))}async function A(){let e=` `;e=(await(await fetch(`https://marjanrangchi.github.io/filimoAPI/db.json`)).json())?.slider6.map(e=>`   <div class="swiper-slide flex">
          <img src=${e.src} alt="image1">
                <div class="hover">
                 ${e.hover.rate?`<div class="rate">${e.hover.rate}</div>`:` `}
              <div class="title">${e.hover.title}</div>
              <div class="year">${e.hover.year}</div>
            
              </div>
          <div class="logo">${e.logo}</div>
              ${e.logo2?`<div class="logo2"><img src=${e.logo2.src} alt="logo2"><div>${e.logo2.title}</div>`:` `}</div>
          
        </div>`),document.querySelector(`#swiper-wrapper-mobile6`).insertAdjacentHTML(`beforeend`,e.join(` `))}async function j(){let e=``;e=(await(await fetch(`https://marjanrangchi.github.io/filimoAPI/db.json`)).json())?.logo?.map(e=>` <div class="up">
              <img src=${e.src} alt="logo">
            </div>`),document.querySelector(`#up-logo`).insertAdjacentHTML(`beforeend`,e.join(``))}async function M(){let e=``;e=(await(await fetch(`https://marjanrangchi.github.io/filimoAPI/db.json`)).json())?.items?.map(e=>`<li>
                <a href=${e.href}}>
                ${e.src?`<img src=${e.src} alt="logo"`:e.title}
             
              </li>`),document.querySelector(`#items>ul`).insertAdjacentHTML(`beforeend`,e.join(``))}async function N(){let e=``;e=(await(await fetch(`https://marjanrangchi.github.io/filimoAPI/db.json`)).json())?.gridPart2.map(e=>`    <div class="image">
          <img src=${e.src} alt="image">
          ${e.title2?`<div class="title2">${e.title2}</div>`:``}  
             ${e.logo?`<div class="logo"><img src=${e.logo.src} alt="logo"> <div class="title">${e.logo.title}</div></div>`:``}
          <div class="modal">
          <div class="title">${e.title}</div>
          <button class="btn">${e.time}</button>
          <div class="click">
            <button class="one">
              <img src=${e.image1} alt="icon">
            </button>
            <button class="two">
              <img src=${e.image2} alt="icon">
            </button>
          </div>
        </div>
        </div>`),document.querySelector(`#grid-part2`).insertAdjacentHTML(`beforeend`,e.join(` `))}async function P(){let e=``;e=(await(await fetch(`https://marjanrangchi.github.io/filimoAPI/db.json`)).json())?.footer?.map(e=>`    <div class="right-footer">
      <ul>
        <li>
          <a href="#">${e.title1}</a>
        </li>
           <li>
          <a href="#">${e.title2}</a>
        </li>
           <li>
          <a href="#">${e.title3}  </a>
        </li>
           <li>
          <a href="#">${e.title4}</a>
        </li>
           <li>
          <a href="#">${e.title5} </a>
        </li>
      </ul>
    </div>
    <div class="left-footer">${e.title6} </div>`),document.querySelector(`#footer`).insertAdjacentHTML(`beforeend`,e.join(``))}f(),h(),g(),_(),v(),b(),S(),w(),E(),D(),k(),j(),M(),N(),y(),x(),C(),T(),O(),A(),P();