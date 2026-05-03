import{a as l,S as u,i}from"./assets/vendor-CxFKIfsH.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(r){if(r.ep)return;r.ep=!0;const t=s(r);fetch(r.href,t)}})();const d="55695918-3f0edaddc3daf06a90200e5d1",f="https://pixabay.com/api/";function m(e){const o={key:d,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0};return l.get(f,{params:o}).then(s=>s.data)}const p=new u(".gallery a",{captionsData:"alt",captionDelay:250});function y(e){const o=document.querySelector(".gallery"),s=e.map(a=>`
      <li class="gallery-item">
        <a href="${a.largeImageURL}">
          <img src="${a.webformatURL}" alt="${a.tags}" />
        </a>
        <div class="info">
          <p><b>Likes</b> ${a.likes}</p>
          <p><b>Views</b> ${a.views}</p>
          <p><b>Comments</b> ${a.comments}</p>
          <p><b>Downloads</b> ${a.downloads}</p>
        </div>
      </li>`).join("");o.innerHTML=s,p.refresh()}function h(){const e=document.querySelector(".gallery");e&&(e.innerHTML="")}function g(){const e=document.querySelector(".loader");e&&e.classList.add("is-visible")}function b(){const e=document.querySelector(".loader");e&&e.classList.remove("is-visible")}const c=document.querySelector(".search-form");c.addEventListener("submit",e=>{e.preventDefault();const o=e.currentTarget.elements["search-text"].value.trim();if(!o){i.warning({message:"Please enter a search query!"});return}h(),g(),m(o).then(s=>{if(!s.hits||s.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(s.hits)}).catch(s=>{i.error({message:"Something went wrong! Please try again later."})}).finally(()=>{b(),c.reset()})});
//# sourceMappingURL=index.js.map
