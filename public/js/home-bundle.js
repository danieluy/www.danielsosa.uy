!function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";n(1),n(5);const o=n(7),i=n(8);document.addEventListener("DOMContentLoaded",function(){i.init("home"),o.on("dataReady",r.render.footer.bind(r)),r.init(),window.addEventListener("resize",r.setPageContentHeight.bind(r))});var r={init:function(){this.domCache()},domCache:function(){this.footer_template=document.getElementById("start-footer-template").innerHTML,this.footer=document.getElementById("start-footer"),this.full_header=document.getElementById("full-header")},setPageContentHeight:function(){this.full_header.style.height=window.innerHeight+"px"},render:{footer:function(){this.setPageContentHeight(),this.footer.innerHTML=Mustache.to_html(this.footer_template,i.getData.call(i,"footer"))}}}},function(e,t,n){var o=n(2);"string"==typeof o&&(o=[[e.id,o,""]]);n(4)(o,{});o.locals&&(e.exports=o.locals)},function(e,t,n){t=e.exports=n(3)(),t.push([e.id,"*,html{margin:0;padding:0;box-sizing:border-box;font-family:Roboto,FreeSans,Helvetica,Arial,sans-serif}*,body,html{color:#555;font-size:16px}body{font-family:Roboto,sans-serif}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},i=0;i<this.length;i++){var r=this[i][0];"number"==typeof r&&(o[r]=!0)}for(i=0;i<t.length;i++){var a=t[i];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(e,t,n){function o(e,t){for(var n=0;n<e.length;n++){var o=e[n],i=h[o.id];if(i){i.refs++;for(var r=0;r<i.parts.length;r++)i.parts[r](o.parts[r]);for(;r<o.parts.length;r++)i.parts.push(d(o.parts[r],t))}else{for(var a=[],r=0;r<o.parts.length;r++)a.push(d(o.parts[r],t));h[o.id]={id:o.id,refs:1,parts:a}}}}function i(e){for(var t=[],n={},o=0;o<e.length;o++){var i=e[o],r=i[0],a=i[1],s=i[2],l=i[3],d={css:a,media:s,sourceMap:l};n[r]?n[r].parts.push(d):t.push(n[r]={id:r,parts:[d]})}return t}function r(e,t){var n=v(),o=x[x.length-1];if("top"===e.insertAt)o?o.nextSibling?n.insertBefore(t,o.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),x.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function a(e){e.parentNode.removeChild(e);var t=x.indexOf(e);t>=0&&x.splice(t,1)}function s(e){var t=document.createElement("style");return t.type="text/css",r(e,t),t}function l(e){var t=document.createElement("link");return t.rel="stylesheet",r(e,t),t}function d(e,t){var n,o,i;if(t.singleton){var r=b++;n=m||(m=s(t)),o=f.bind(null,n,r,!1),i=f.bind(null,n,r,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=l(t),o=c.bind(null,n),i=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(t),o=u.bind(null,n),i=function(){a(n)});return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else i()}}function f(e,t,n,o){var i=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=y(t,i);else{var r=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(r,a[t]):e.appendChild(r)}}function u(e,t){var n=t.css,o=t.media;if(o&&e.setAttribute("media",o),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function c(e,t){var n=t.css,o=t.sourceMap;o&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var i=new Blob([n],{type:"text/css"}),r=e.href;e.href=URL.createObjectURL(i),r&&URL.revokeObjectURL(r)}var h={},p=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},g=p(function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())}),v=p(function(){return document.head||document.getElementsByTagName("head")[0]}),m=null,b=0,x=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=g()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=i(e);return o(n,t),function(e){for(var r=[],a=0;a<n.length;a++){var s=n[a],l=h[s.id];l.refs--,r.push(l)}if(e){var d=i(e);o(d,t)}for(var a=0;a<r.length;a++){var l=r[a];if(0===l.refs){for(var f=0;f<l.parts.length;f++)l.parts[f]();delete h[l.id]}}}};var y=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){var o=n(6);"string"==typeof o&&(o=[[e.id,o,""]]);n(4)(o,{});o.locals&&(e.exports=o.locals)},function(e,t,n){t=e.exports=n(3)(),t.push([e.id,"header.full-header{width:100%}header.full-header>nav{width:100%;height:100%}header.full-header>nav>ul{display:flex;flex-direction:row;justify-content:space-around;align-items:center;width:100%;height:100%;list-style-type:none}header.full-header>nav>ul li>a{text-decoration:none;font-size:6em;font-weight:100;transition:font-size .3s ease;cursor:pointer;background-color:transparent;color:#888}header.full-header>nav>ul li.dev:hover>a,header.full-header>nav>ul li.dev:hover>a>i{color:#08c;transition:color .3s ease .1s}header.full-header>nav>ul li.img:hover>a,header.full-header>nav>ul li.img:hover>a>i{color:#fb0;transition:color .3s ease .1s}header.full-header>nav>ul li.arq:hover>a,header.full-header>nav>ul li.arq:hover>a i{color:#f33;transition:color .3s ease .1s}header.full-header>nav>ul li>a>i{font-size:.7em;vertical-align:middle}div#footer-pointer{display:none}footer{position:fixed;bottom:0;left:0;width:100%;height:60px}footer a,footer span{float:left;padding-left:20px;line-height:60px;font-weight:100;color:#333}footer a{text-decoration:none}footer>a>i{font-size:18px;vertical-align:middle;color:#aaa}footer>a.btn-login{float:right;text-align:center;color:#888;transition:color .3s ease .1s}footer>a.btn-login:hover{color:#333}footer>a.btn-login>i{font-size:30px;line-height:60px;width:60px}@media (max-width:960px){header.full-header>nav>ul li>a{font-size:2.5em}header.full-header>nav>ul li.dev>a,header.full-header>nav>ul li.dev>a>i{color:#08c;transition:none}header.full-header>nav>ul li.img>a,header.full-header>nav>ul li.img>a>i{color:#fb0;transition:none}header.full-header>nav>ul li.arq>a,header.full-header>nav>ul li.arq>a i{color:#f33;transition:none}div#footer-pointer{display:block;position:absolute;bottom:0;left:0;width:100%;height:30px;text-align:center}div#footer-pointer>i{line-height:30px;color:#888}footer{position:relative;height:100vh;background-color:#333}footer span{margin-top:10vh;line-height:60px;font-weight:100}footer a,footer span{display:block;width:100%;text-align:center;color:#eee}footer a{padding:0}footer>a>i{display:block;font-size:25px;vertical-align:middle;color:#eee}footer>a.btn-login{float:right;text-align:center;color:#eee;transition:color .3s ease .1s}footer>a.btn-login:hover{color:#eee}footer>a.btn-login>i{position:absolute;bottom:0;right:0;font-size:30px;line-height:60px;width:60px}}@media (max-width:960px) and (orientation:portrait){header.full-header>nav>ul{flex-direction:column}}",""])},function(e,t){"use strict";e.exports={events:{},on:function(e,t){this.events[e]=this.events[e]||[],this.events[e].push(t)},off:function(e,t){this.events[e]&&(this.events[e]=this.events[e].filter(function(e){return t.toString()!==e.toString()}))},emit:function(e,t){this.events[e]&&this.events[e].forEach(function(e){e(t)})}}},function(e,t,n){const o=n(7),i=n(9),r=n(10);e.exports={init:function(e){this.lang=i.getItem("selected_lang")||"es",o.on("liNavLinksRenderReady",this.dinamicDomCache.bind(this)),this.initData(e)},dinamicDomCache:function(){this.langToggler=document.getElementById("btn-toggle-lang"),this.dinamicDomListeners()},dinamicDomListeners:function(){this.langToggler.addEventListener("click",this.toggleLang.bind(this))},toggleLang:function(){"en"===this.lang?this.lang="es":this.lang="en",i.setItem("selected_lang",this.lang),this.updateData(),o.emit("toggleLang")},initData:function(e){r.post.call(this,{url:"http://"+window.location.host+"/lang",successCb:function(e){this.data=JSON.parse(e),o.emit("dataReady")}.bind(this),errorCb:function(e){console.error(e)},params:{page:e,lang:this.lang}})},updateData:function(){r.post.call(this,{url:"http://"+window.location.host+"/lang",successCb:function(e){this.data=JSON.parse(e),o.emit("dataUpdated")}.bind(this),errorCb:function(e){console.error(e)},params:{page:"dev",lang:this.lang}})},getData:function(e){return this.data[e]}}},function(e,t){e.exports={setItem:function(e,t){sessionStorage.setItem(e,t)},getItem:function(e){var t=sessionStorage.getItem(e);return t&&"undefined"!==t&&"null"!==t?t:null}}},function(e,t){e.exports=function(){function e(e,t,n,o){s=new XMLHttpRequest,s.onreadystatechange=function(){4==this.readyState&&200==this.status?(o&&a(parseInt(o)),n&&n(),e(this.responseText)):4==this.readyState&&(n&&n(),t(this.responseText))}}function t(t){console.log(t),r(t),e(t.successCb,t.errorCb,t.onEndCb,t.delayMs),s.open("GET",t.params?t.url+"?"+i(t.params):t.url,!0),s.send()}function n(t){r(t),e(t.successCb,t.errorCb,t.onEndCb,t.delayMs),s.open("POST",t.url,!0),s.setRequestHeader("Content-type","application/x-www-form-urlencoded"),t.params?s.send(i(t.params)):s.send()}function o(t){r(t),e(t.successCb,t.errorCb,t.onEndCb,t.delayMs),s.open("PUT",t.url,!0),s.setRequestHeader("Content-type","application/x-www-form-urlencoded"),t.params?s.send(i(t.params)):s.send()}function i(e){var t="";for(var n in e)e[n]&&(t+=n+"="+e[n]+"&");return t.slice(0,-1)}function r(e){if(!e.url)throw"ERROR - dsAjax.js - A URL must be provided";if(!e.successCb)throw"ERROR - dsAjax.js - A success handler must be provided";if(!e.errorCb)throw"ERROR - dsAjax.js - A error handler must be provided";if(e.delayMs&&isNaN(parseInt(e.delayMs)))throw"ERROR - dsAjax.js - The optional parameter delayMs can only be an integer"}function a(e){for(var t=(new Date).getTime();(new Date).getTime()<t+e;);}var s;return{post:n,get:t,put:o,simulateDelay:a}}()}]);