import{a as $,i,S as h}from"./assets/vendor-30VqbI-A.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const w="https://pixabay.com/api/",S="49355528-35596c2c6a34b438a74657cc9";async function b(o,r=1,s=15){try{const a=await $.get(w,{params:{key:S,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:s}});return a.data.hits.length===0?[]:a.data.hits}catch(a){return console.error("Error fetching images:",a),[]}}async function v(o){const r=document.querySelector(".gallery");r.innerHTML="";const s=o.map(({webformatURL:a,largeImageURL:e,tags:t,likes:n,views:p,comments:m,downloads:u})=>`
        <li class="gallery-item">
          <a href="${e}">
            <img src="${a}" alt="${t}" loading="lazy" />
          </a>
          <div class="info">
            <p><b>Likes:</b> ${n}</p>
            <p><b>Views:</b> ${p}</p>
            <p><b>Comments:</b> ${m}</p>
            <p><b>Downloads:</b> ${u}</p>
          </div>
        </li>
      `).join("");r.insertAdjacentHTML("beforeend",s)}const q=document.querySelector(".form"),g=document.querySelector(".gallery"),y=document.querySelector(".loader"),l=document.querySelector(".load-more");let c="",d=1;const f=15;l.style.display="none";q.addEventListener("submit",E);l.addEventListener("click",P);async function E(o){if(o.preventDefault(),c=o.currentTarget.elements["search-text"].value.trim(),d=1,!c){i.warning({title:"Warning",message:"Please enter a search term!"});return}g.innerHTML="",l.style.display="none",y.style.display="block";try{const r=await b(c,d,f);if(r.length===0){i.error({title:"Error",message:"Sorry, no images found. Try again!"});return}v(r),l.style.display="block",new h(".gallery a",{captionsData:"alt",captionDelay:250})}catch{i.error({title:"Error",message:"Failed to fetch images. Please try again later."})}finally{y.style.display="none"}}async function P(){d+=1,y.style.display="block";try{const o=await b(c,d,f);if(o.length===0){i.info({title:"Info",message:"No more images to load."}),l.style.display="none";return}const r=o.map(({webformatURL:e,largeImageURL:t,tags:n,likes:p,views:m,comments:u,downloads:L})=>`<li class="gallery-item">
          <a href="${t}">
            <img src="${e}" alt="${n}" loading="lazy" />
          </a>
          <div class="info">
            <p><b>Likes:</b> ${p}</p>
            <p><b>Views:</b> ${m}</p>
            <p><b>Comments:</b> ${u}</p>
            <p><b>Downloads:</b> ${L}</p>
          </div>
        </li>`).join("");g.insertAdjacentHTML("beforeend",r),new h(".gallery a",{captionsData:"alt",captionDelay:250});const a=g.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:a*2,behavior:"smooth"}),o.length<f&&(i.info({title:"Info",message:"We're sorry, but you've reached the end of search results."}),l.style.display="none")}catch{i.error({title:"Error",message:"Failed to fetch images. Please try again later."})}finally{y.style.display="none"}}
//# sourceMappingURL=index.js.map
