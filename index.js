import{a as L,S as w,i}from"./assets/vendor-30VqbI-A.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const S="https://pixabay.com/api/",v="49355528-35596c2c6a34b438a74657cc9";async function f(r,o=1,s=15){try{const a=await L.get(S,{params:{key:v,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:s}});return a.data.hits.length===0?[]:a.data.hits}catch(a){return console.error("Error fetching images:",a),[]}}const q=document.querySelector(".gallery");let E=new w(".gallery a",{captionsData:"alt",captionDelay:250});async function h(r){const o=r.map(({webformatURL:s,largeImageURL:a,tags:e,likes:t,views:n,comments:m,downloads:p})=>`
        <li class="gallery-item">
          <a href="${a}">
            <img src="${s}" alt="${e}" loading="lazy" />
          </a>
          <div class="info">
            <p><b>Likes:</b> ${t}</p>
            <p><b>Views:</b> ${n}</p>
            <p><b>Comments:</b> ${m}</p>
            <p><b>Downloads:</b> ${p}</p>
          </div>
        </li>
      `).join("");q.innerHTML=o,E.refresh()}const I=document.querySelector(".form"),y=document.querySelector(".gallery"),c=document.querySelector(".loader"),l=document.querySelector(".load-more");let g="",d=1;const u=15;l.style.display="none";I.addEventListener("submit",P);l.addEventListener("click",x);async function P(r){if(r.preventDefault(),g=r.currentTarget.elements["search-text"].value.trim(),d=1,!g){i.warning({title:"Warning",message:"Please enter a search term!"});return}y.innerHTML="",l.style.display="none",c.style.display="block",console.log(c);try{const o=await f(g,d,u);if(o.length===0){i.error({title:"Error",message:"Sorry, no images found. Try again!"});return}h(o),l.style.display="block"}catch{i.error({title:"Error",message:"Failed to fetch images. Please try again later."})}finally{c.style.display="none"}}async function x(){d+=1,c.style.display="block";try{const r=await f(g,d,u);if(console.log("Fetched images for next page:",r),r.length===0){i.info({title:"Info",message:"No more images to load."}),l.style.display="none";return}const o=r.map(({webformatURL:e,largeImageURL:t,tags:n,likes:m,views:p,comments:b,downloads:$})=>`<li class="gallery-item">
          <a href="${t}">
            <img src="${e}" alt="${n}" loading="lazy" />
          </a>
          <div class="info">
            <p><b>Likes:</b> ${m}</p>
            <p><b>Views:</b> ${p}</p>
            <p><b>Comments:</b> ${b}</p>
            <p><b>Downloads:</b> ${$}</p>
          </div>
        </li>`).join("");y.insertAdjacentHTML("beforeend",o);const a=y.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:a*2,behavior:"smooth"}),d*u>=totalHits?(i.info({title:"Info",message:"We're sorry, but you've reached the end of search results."}),l.style.display="none"):h(r,y),lightbox.refresh(),console.log("Images added to gallery")}catch{}finally{c.style.display="none"}}
//# sourceMappingURL=index.js.map
