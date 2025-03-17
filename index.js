import{a as d,S as f,i as s}from"./assets/vendor-5l-LjSpL.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const m="https://pixabay.com/api/",g="49355528-35596c2c6a34b438a74657cc9";function p(o){return d.get(`${m}`,{params:{key:g,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data.hits).catch(t=>{throw console.error("Error fetching images:",t),new Error("Failed to fetch images")})}const y=document.querySelector(".gallery");let h=new f(".gallery a",{captionsData:"alt",captionDelay:250});function b(o){const t=o.map(({webformatURL:a,largeImageURL:i,tags:e,likes:r,views:n,comments:c,downloads:u})=>`
        <li class="gallery-item">
          <a href="${i}">
            <img src="${a}" alt="${e}" loading="lazy" />
          </a>
          <div class="info">
            <p><b>Likes:</b> ${r}</p>
            <p><b>Views:</b> ${n}</p>
            <p><b>Comments:</b> ${c}</p>
            <p><b>Downloads:</b> ${u}</p>
          </div>
        </li>
      `).join("");y.innerHTML=t,h.refresh()}const L=document.querySelector(".form"),S=document.querySelector(".gallery"),l=document.querySelector(".loader");console.log(l);L.addEventListener("submit",$);function $(o){o.preventDefault();const t=o.currentTarget.elements["search-text"].value.trim();if(!t){s.warning({title:"Warning",message:"Please enter a search term!"});return}S.innerHTML="",l.style.display="block",console.log("Loader is shown"),p(t).then(a=>{if(a.length===0){s.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}b(a)}).catch(a=>{s.error({title:"Error",message:"Failed to fetch images. Please try again later."})}).finally(()=>{l.style.display="none",console.log("Loader is hidden")})}
//# sourceMappingURL=index.js.map
