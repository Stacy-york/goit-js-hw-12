import{a as L,S as w,i as l}from"./assets/vendor-30VqbI-A.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const S="https://pixabay.com/api/",v="49355528-35596c2c6a34b438a74657cc9";async function f(r,o=1,s=15){try{const a=await L.get(S,{params:{key:v,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:s}});return a.data.hits.length===0?[]:a.data.hits}catch(a){return console.error("Error fetching images:",a),[]}}const q=document.querySelector(".gallery");let E=new w(".gallery a",{captionsData:"alt",captionDelay:250});async function h(r){const o=r.map(({webformatURL:s,largeImageURL:a,tags:e,likes:t,views:n,comments:p,downloads:u})=>`
        <li class="gallery-item">
          <a href="${a}">
            <img src="${s}" alt="${e}" loading="lazy" />
          </a>
          <div class="info">
            <p><b>Likes:</b> ${t}</p>
            <p><b>Views:</b> ${n}</p>
            <p><b>Comments:</b> ${p}</p>
            <p><b>Downloads:</b> ${u}</p>
          </div>
        </li>
      `).join("");q.innerHTML=o,E.refresh()}const I=document.querySelector(".form"),d=document.querySelector(".gallery"),m=document.querySelector(".loader"),i=document.querySelector(".load-more");let y="",c=1;const g=15;i.style.display="none";I.addEventListener("submit",P);i.addEventListener("click",x);async function P(r){if(r.preventDefault(),y=r.currentTarget.elements["search-text"].value.trim(),c=1,!y){l.warning({title:"Warning",message:"Please enter a search term!"});return}d.innerHTML="",i.style.display="none",m.style.display="block";try{const o=await f(y,c,g);if(o.length===0){l.error({title:"Error",message:"Sorry, no images found. Try again!"});return}h(o),i.style.display="block"}catch{l.error({title:"Error",message:"Failed to fetch images. Please try again later."})}finally{m.style.display="none"}}async function x(){c+=1,m.style.display="block";try{const r=await f(y,c,g);if(console.log("Fetched images for next page:",r),r.length===0){l.info({title:"Info",message:"No more images to load."}),i.style.display="none";return}const o=r.map(({webformatURL:e,largeImageURL:t,tags:n,likes:p,views:u,comments:b,downloads:$})=>`<li class="gallery-item">
          <a href="${t}">
            <img src="${e}" alt="${n}" loading="lazy" />
          </a>
          <div class="info">
            <p><b>Likes:</b> ${p}</p>
            <p><b>Views:</b> ${u}</p>
            <p><b>Comments:</b> ${b}</p>
            <p><b>Downloads:</b> ${$}</p>
          </div>
        </li>`).join("");d.insertAdjacentHTML("beforeend",o);const a=d.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:a*2,behavior:"smooth"}),c*g>=totalHits?(l.info({title:"Info",message:"We're sorry, but you've reached the end of search results."}),i.style.display="none"):h(r,d),lightbox.refresh(),console.log("Images added to gallery")}catch{}finally{m.style.display="none"}}
//# sourceMappingURL=index.js.map
