!function(){var e="https://api.thecatapi.com/v1";function n(n){var t="".concat(e,"/images/search?breed_ids=").concat(n,"&api_key=").concat("live_nvN6V6WTD2gDfrOOwxXVO5XLV6poYxUSpIOxGLDBmwCrEPx5gNr0c2il0DOGmlwy");return fetch(t).then((function(e){if(!e.ok)throw new Error("Oops! Something went wrong! Try reloading the page!");return e.json()}))}var t,o=document.querySelector(".breed-select"),r=document.querySelector(".loader"),c=document.querySelector(".error");(t="".concat(e,"/breeds"),fetch(t).then((function(e){if(!e.ok)throw new Error;return e.json()}))).then((function(e){o.classList.remove("is-hidden"),r.classList.add("is-hidden"),e.forEach((function(e){var n=document.createElement("option");n.value=e.id,n.textContent=e.name,o.appendChild(n)}))})).catch((function(e){r.classList.add("is-hidden"),e.classList.remove("is-hidden")}));var a=document.querySelector(".cat-info");o.addEventListener("change",(function(){var e=o.value;r.style.display="block",n(e).then((function(e){e.length>0&&function(e){console.log(e),a.innerHTML='\n    <img src="'.concat(e.url,'" alt="').concat(e.breeds[0].name,'" width="400px" />\n    <h2>').concat(e.breeds[0].name,"</h2>\n    <p><strong>Description:</strong> ").concat(e.breeds[0].description,"</p>\n    <p><strong>Temperament:</strong> ").concat(e.breeds[0].temperament,"</p>\n  ")}(e[0]);c.style.display="none"})).catch((function(e){console.error("Error:",e.message),c.style.display="block"})).finally((function(){r.style.display="none"}))}))}();
//# sourceMappingURL=index.fd7bd522.js.map
