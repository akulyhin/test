(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{HQse:function(e,n,t){var l=t("mp5j");e.exports=(l.default||l).template({1:function(e,n,t,l,r){var a,o=null!=n?n:e.nullContext||{},c=e.hooks.helperMissing,i=e.escapeExpression,u=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return'<a href="'+i("function"==typeof(a=null!=(a=u(t,"url")||(null!=n?u(n,"url"):n))?a:c)?a.call(o,{name:"url",hash:{},data:r,loc:{start:{line:2,column:9},end:{line:2,column:16}}}):a)+'" target="_blank">\r\n<li class="col-md-3 article">\r\n    <div class="article-box">\r\n        <div class="image">\r\n            <img src="'+i("function"==typeof(a=null!=(a=u(t,"urlToImage")||(null!=n?u(n,"urlToImage"):n))?a:c)?a.call(o,{name:"urlToImage",hash:{},data:r,loc:{start:{line:6,column:22},end:{line:6,column:36}}}):a)+'" alt="'+i("function"==typeof(a=null!=(a=u(t,"title")||(null!=n?u(n,"title"):n))?a:c)?a.call(o,{name:"title",hash:{},data:r,loc:{start:{line:6,column:43},end:{line:6,column:52}}}):a)+'">\r\n        </div>\r\n        <div class="content">\r\n            <div class="title">'+i("function"==typeof(a=null!=(a=u(t,"title")||(null!=n?u(n,"title"):n))?a:c)?a.call(o,{name:"title",hash:{},data:r,loc:{start:{line:9,column:31},end:{line:9,column:40}}}):a)+'</div>\r\n            <div class="description">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</li>\r\n</a>\r\n'},compiler:[8,">= 4.3.0"],main:function(e,n,t,l,r){var a;return null!=(a=(e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]})(t,"each").call(null!=n?n:e.nullContext||{},n,{name:"each",hash:{},fn:e.program(1,r,0),inverse:e.noop,data:r,loc:{start:{line:1,column:0},end:{line:17,column:9}}}))?a:""},useData:!0})},L1EO:function(e,n,t){},QfWi:function(e,n,t){"use strict";t.r(n);t("JBxO"),t("FdtR"),t("Muwe"),t("X5mX"),t("L1EO");var l={search:document.getElementById("searchArticles"),btnSearch:document.querySelector(".search"),ulArticles:document.querySelector(".articles"),btnMore:document.querySelector('[data-action="open-more"]')},r=t("HQse"),a=t.n(r);console.log(l.search);var o="",c="aa8103c96a5c481a951da99868cd8cbc",i=0;l.btnSearch.addEventListener("click",(function(){i=1;var e="https://newsapi.org/v2/everything?q="+(o=l.search.value)+"&language=ru&page="+i,n={headers:{Authorization:c}};l.ulArticles.innerHTML="",fetch(e,n).then((function(e){return e.json()})).then((function(e){console.log(e),l.ulArticles.insertAdjacentHTML("beforeend",a()(e.articles)),i+=1})),l.btnMore.classList.remove("is-hidden")})),l.btnMore.addEventListener("click",(function(){var e="https://newsapi.org/v2/everything?q="+o+"&language=ru&page="+i;i=1,fetch(e,{headers:{Authorization:c}}).then((function(e){return e.json()})).then((function(e){console.log(e),l.ulArticles.insertAdjacentHTML("beforeend",a()(e.articles)),i+=1}))}))}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.6696209cab0b7437d3b8.js.map