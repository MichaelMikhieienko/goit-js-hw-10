!function(){var n="https://api.thecatapi.com/v1";var e=document.querySelector(".breed-select"),t=document.querySelector(".loader"),o=document.querySelector(".error");function r(){t.style.display="block"}function c(){t.style.display="none"}function a(){o.style.display="block"}function i(){o.style.display="none"}e.style.display="none",o.style.display="none",window.addEventListener("DOMContentLoaded",(function(){var t;e.style.display="none",r(),i(),(t="".concat(n,"/breeds"),fetch(t).then((function(n){if(!n.ok)throw new Error;return n.json()}))).then((function(n){e.style.display="block",n.forEach((function(n){var t=document.createElement("option");t.value=n.id,t.textContent=n.name,e.appendChild(t)}))})).catch((function(n){console.error("Error:",n),a()})).finally((function(){c()}))}));var l=document.querySelector(".cat-info");e.addEventListener("change",(function(){var t,o,s=e.value;r(),(t=s,o="".concat(n,"/images/search?breed_ids=").concat(t,"&api_key=").concat("live_nvN6V6WTD2gDfrOOwxXVO5XLV6poYxUSpIOxGLDBmwCrEPx5gNr0c2il0DOGmlwy"),fetch(o).then((function(n){if(!n.ok)throw new Error("Oops! Something went wrong! Try reloading the page!");return n.json()}))).then((function(n){n.length>0&&function(n){console.log(n),l.innerHTML='\n    <img src="'.concat(n.url,'" alt="').concat(n.breeds[0].name,'" width="400px" />\n    <h2>').concat(n.breeds[0].name,"</h2>\n    <p><strong>Description:</strong> ").concat(n.breeds[0].description,"</p>\n    <p><strong>Temperament:</strong> ").concat(n.breeds[0].temperament,"</p>\n  ")}(n[0]);i()})).catch((function(n){console.error("Error:",n.message),a()})).finally((function(){c()}))}))}();
//# sourceMappingURL=index.a5818032.js.map
