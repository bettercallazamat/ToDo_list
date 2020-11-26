(()=>{"use strict";var e={434:(e,n,t)=>{t.d(n,{Z:()=>a});var o=t(645),i=t.n(o)()((function(e){return e[1]}));i.push([e.id,"/*\n  http://meyerweb.com/eric/tools/css/reset/\n  v2.0 | 20110126\n  License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote::before,\nblockquote::after,\nq::before,\nq::after {\n  content: '';\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n",""]);const a=i},890:(e,n,t)=>{t.d(n,{Z:()=>a});var o=t(645),i=t.n(o)()((function(e){return e[1]}));i.push([e.id,'body {\n  max-width: 1200px;\n  margin: 0 auto;\n  background-color: #353531;\n  background-image: linear-gradient(to right, #353531 50%, #ec4e20 50%);\n}\n\n.modal {\n  display: none; /* Hidden by default */\n  position: fixed; /* Stay in place */\n  z-index: 1; /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgb(0, 0, 0); /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */\n}\n\n.modal-content {\n  display: flex;\n  justify-content: space-between;\n  background-color: #fefefe;\n  margin: 15% auto; /* 15% from the top and centered */\n  padding: 20px;\n  border: 1px solid #888;\n  width: fit-content; /* Could be more or less, depending on screen size */\n}\n\n.exit-modal {\n  align-self: flex-end;\n  margin-top: 9%;\n}\n\n.button {\n  background-color: #353531;\n}\n\n.button:hover {\n  background-color: #fff;\n  color: #ec4e20;\n}\n\n.nav-panel {\n  display: flex;\n  flex-direction: column;\n  background-color: #ec4e20;\n  padding: 2% 4%;\n  width: 100%;\n}\n\n.sidebar {\n  padding: 2%;\n  width: 300px;\n  color: white;\n  background-color: #353531;\n  min-height: 100vh;\n  min-width: 25%;\n}\n\n@media (max-width: 500px) {\n  .sidebar {\n    width: 15%;\n  }\n\n  .sidebar h3 {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n\n  .sidebar .list-cont {\n    padding-top: 16px;\n    padding-bottom: 16px;\n  }\n}\n\n.sidebar img {\n  width: 70px;\n  margin: 0 auto;\n  display: flex;\n}\n\n.list-cont {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 5%;\n  cursor: pointer;\n}\n\n.list-cont h3 {\n  width: 100%;\n  padding: 5%;\n  line-height: 20px;\n}\n\n.active {\n  background-color: #ec4e20;\n  border-radius: 5px;\n}\n\n#task-form {\n  display: none;\n  margin-bottom: 2%;\n  margin-top: 4%;\n}\n\n.adv-input {\n  display: inline;\n}\n\n.advanced-options {\n  display: none;\n}\n\n.tasks-list,\n.done-list {\n  border-radius: 5px;\n}\n\n.tasks-list > div,\n.done-list > div {\n  background-color: #f8f8f8;\n  border-radius: 5px;\n  padding: 2%;\n  margin-bottom: 2%;\n}\n\n.done-list > div {\n  opacity: 0.7;\n  text-decoration: line-through;\n}\n\n.date-and-priority {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.date-and-priority input {\n  margin-right: 12px;\n  height: 30px;\n}\n\n.task-container {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.task-container .main-info,\n.task-container .additional-info {\n  display: flex;\n  align-items: center;\n}\n\n.task-container .additional-info > * {\n  margin-left: 12px;\n}\n\n.check-task {\n  zoom: 1.8;\n  margin-top: 0 !important;\n}\n\n.task-container form {\n  margin: 2% 0;\n  width: 100%;\n}\n\n.details-container {\n  width: 100%;\n  padding: 2%;\n  background-color: #353531;\n  color: #f8f8f8;\n  border-radius: 5px;\n}\n\n.extra-inputs {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n@media (max-width: 767px) {\n  .extra-inputs {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    flex-wrap: wrap;\n  }\n\n  .custom-select input {\n    margin-left: 0 !important;\n  }\n}\n\n.task-container p.high {\n  background-color: rgba(223, 39, 39, 0.9);\n  margin-left: 0;\n}\n\n.task-container p.medium {\n  background-color: rgb(242, 255, 0, 0.8);\n  margin-left: 0;\n}\n\n.task-container p.low {\n  background-color: rgba(97, 223, 39, 0.4);\n  margin-left: 0;\n}\n\n.tooltipp {\n  position: relative;\n  display: inline-block;\n  border-bottom: 1px dotted black; /* If you want dots under the hoverable text */\n}\n\n/* tooltipp text */\n.tooltipp .tooltipptext {\n  visibility: hidden;\n  width: 120px;\n  background-color: #555;\n  color: #fff;\n  text-align: center;\n  padding: 5px 0;\n  border-radius: 6px;\n\n  /* Position the tooltipp text */\n  position: absolute;\n  z-index: 1;\n  bottom: 125%;\n  left: 50%;\n  margin-left: -60px;\n\n  /* Fade in tooltipp */\n  opacity: 0;\n  transition: opacity 0.3s;\n}\n\n/* tooltipp arrow */\n.tooltipp .tooltipptext::after {\n  content: "";\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px;\n  border-style: solid;\n  border-color: #555 transparent transparent transparent;\n}\n\n/* Show the tooltipp text when you mouse over the tooltipp container */\n.tooltipp:hover .tooltipptext {\n  visibility: visible;\n  opacity: 1;\n}\n',""]);const a=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,o){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(o)for(var a=0;a<this.length;a++){var r=this[a][0];null!=r&&(i[r]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);o&&i[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),n.push(l))}},n}},379:(e,n,t)=>{var o,i=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),a=[];function r(e){for(var n=-1,t=0;t<a.length;t++)if(a[t].identifier===e){n=t;break}return n}function s(e,n){for(var t={},o=[],i=0;i<e.length;i++){var s=e[i],l=n.base?s[0]+n.base:s[0],d=t[l]||0,c="".concat(l," ").concat(d);t[l]=d+1;var u=r(c),p={css:s[1],media:s[2],sourceMap:s[3]};-1!==u?(a[u].references++,a[u].updater(p)):a.push({identifier:c,updater:h(p,n),references:1}),o.push(c)}return o}function l(e){var n=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var a=t.nc;a&&(o.nonce=a)}if(Object.keys(o).forEach((function(e){n.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(n);else{var r=i(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}return n}var d,c=(d=[],function(e,n){return d[e]=n,d.filter(Boolean).join("\n")});function u(e,n,t,o){var i=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=c(n,i);else{var a=document.createTextNode(i),r=e.childNodes;r[n]&&e.removeChild(r[n]),r.length?e.insertBefore(a,r[n]):e.appendChild(a)}}function p(e,n,t){var o=t.css,i=t.media,a=t.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var m=null,f=0;function h(e,n){var t,o,i;if(n.singleton){var a=f++;t=m||(m=l(n)),o=u.bind(null,t,a,!1),i=u.bind(null,t,a,!0)}else t=l(n),o=p.bind(null,t,n),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return o(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;o(e=n)}else i()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var t=s(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<t.length;o++){var i=r(t[o]);a[i].references--}for(var l=s(e,n),d=0;d<t.length;d++){var c=r(t[d]);0===a[c].references&&(a[c].updater(),a.splice(c,1))}t=l}}}},574:(e,n,t)=>{t.d(n,{Qw:()=>G});var o=t(379),i=t.n(o),a=t(434);i()(a.Z,{insert:"head",singleton:!1}),a.Z.locals;var r=t(890);function s(e,n){if(n.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+n.length+" present")}function l(e){s(1,arguments);var n=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===n?new Date(e.getTime()):"number"==typeof e||"[object Number]"===n?new Date(e):("string"!=typeof e&&"[object String]"!==n||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}i()(r.Z,{insert:"head",singleton:!1}),r.Z.locals;var d=6e4;function c(e){return e.getTime()%d}function u(e){var n=new Date(e.getTime()),t=Math.ceil(n.getTimezoneOffset());n.setSeconds(0,0);var o=t>0?(d+c(n))%d:c(n);return t*d+o}function p(e){s(1,arguments);var n=l(e);return n.setHours(0,0,0,0),n}var m=864e5;function f(e,n){s(2,arguments);var t=p(e),o=p(n),i=t.getTime()-u(t),a=o.getTime()-u(o);return Math.round((i-a)/m)}function h(e,n){var t=e.getFullYear()-n.getFullYear()||e.getMonth()-n.getMonth()||e.getDate()-n.getDate()||e.getHours()-n.getHours()||e.getMinutes()-n.getMinutes()||e.getSeconds()-n.getSeconds()||e.getMilliseconds()-n.getMilliseconds();return t<0?-1:t>0?1:t}const g=t.p+"678d312815367c5f3e4b055d0e3f9b04.png",v=document.querySelector(".modal"),b=e=>"H"===e.textContent?"high":"M"===e.textContent?"medium":"low",y=e=>function(e,n){s(2,arguments);var t=l(e),o=l(n),i=h(t,o),a=Math.abs(f(t,o));t.setDate(t.getDate()-i*a);var r=h(t,o)===-i,d=i*(a-r);return 0===d?0:d}(new Date(e),new Date)+" day(s) left",x=(e,n)=>{const t=document.querySelector(".exit-modal"),o=document.querySelector(".modal-content"),i=document.createElement("p");e.style.display="block",i.textContent=n,o.append(i,t),t.addEventListener("click",(()=>{e.style.display="none"}))},k=(e,n,t,o,i)=>{e.list[n].status?o.appendChild(t):i.appendChild(t)},w=(e,n,t)=>""!==n||(t(e,"Task title must exist!"),!1);document.addEventListener("keydown",(e=>{const{keyCode:n}=e;27===n&&(v.style.display="none")}));const E=e=>{const n=document.createElement("span");return n.innerHTML='<i class="fas fa-chevron-down"></i>',n.addEventListener("click",(n=>{n.preventDefault(),"block"===e.style.display?e.style.display="none":e.style.display="block"})),n},C=JSON.parse(localStorage.getItem("projectsList"))||[],L=document.querySelector(".tasks-list"),S=document.querySelector(".done-list"),T=document.getElementById("task-form"),q=document.querySelector(".project-names"),D=()=>{localStorage.setItem("projectsList",JSON.stringify(C))},M=(e,n,t,o=null)=>{const i=document.createElement("span");return i.innerHTML="<i class='fas fa-edit'></i>",i.addEventListener("click",(()=>{const i=((e,n,t,o)=>{const i=document.createElement("form"),a=document.createElement("input"),r=document.createElement("input"),s=document.createElement("div"),l=document.createElement("input"),d=document.createElement("select"),c=document.createElement("input"),u=document.createElement("input");a.classList.add("form-control","mb-2"),r.classList.add("form-control","mb-2"),l.classList.add("form-control","mr-md-2","mb-2","mb-md-0"),d.classList.add("custom-select","custom-select-sm","mb-2","mb-md-0"),c.classList.add("btn","btn-secondary","button","ml-md-3"),u.classList.add("btn","btn-secondary","button","ml-md-3"),s.classList.add("extra-inputs"),a.type="text",r.type="text",l.type="date",c.type="submit",u.type="submit";const p=document.createElement("option"),m=document.createElement("option"),f=document.createElement("option");return p.value="H",m.value="M",f.value="L",p.textContent="High",m.textContent="Medium",f.textContent="Low",c.value="Cancel",a.value=e.list[n].title,r.value=e.list[n].desc,l.value=e.list[n].dueDate,d.value=e.list[n].priority,d.append(p,m,f),i.append(a,r),s.append(l,d,c,u),i.appendChild(s),u.addEventListener("click",(i=>{i.preventDefault(),o(v,a.value,x)&&(e.list[n].title=a.value,e.list[n].desc=r.value,e.list[n].dueDate=l.value,e.list[n].priority=d.value,D(),t(e,L,S,T,C))})),c.addEventListener("click",(n=>{n.preventDefault(),t(e)})),i})(e,n,t,w);t(e,L,S,T,C,i,n,o)})),i},j=(e,n,t)=>{const o=document.createElement("span");return o.innerHTML="<i class='fas fa-trash-alt'></i>",o.addEventListener("click",(()=>{e.list.splice(n,1),t(e,L,S,T,C),D()})),o},B=(e,n,t)=>{const o=document.createElement("input");return o.classList.add("check-task"),o.type="checkbox",o.checked=e.list[n].status,o.addEventListener("change",(()=>{e.list[n].status=!!o.checked,t(e,L,S,T,C),D()})),o},I=(e,n,t,o)=>{const i=document.createElement("span");return i.innerHTML="<i class='fas fa-trash-alt'></i>",i.addEventListener("click",(()=>{e.splice(n,1),D(),t(e,q,G),o(e[0],L,S,T,e)})),i},H=document.getElementById("sidebar-input"),N=(e,n,t,o,i=!1)=>({title:e,desc:n,dueDate:t,priority:o,status:i}),O=(e,n=[])=>({title:e,list:n}),A=document.getElementById("task-form"),F=document.getElementById("submit"),z=document.querySelector(".tasks-list"),Z=document.querySelector(".done-list"),P=document.getElementById("sidebar-form"),R=document.getElementById("sidebar-submit"),J=document.querySelector(".project-names"),$=document.querySelector(".sidebar"),U=document.querySelector(".advButton"),W=document.querySelector(".advanced-options"),Y=(e,n,t,o,i,a=null,r=null)=>{for(;n.firstChild;)n.removeChild(n.firstChild);for(;t.firstChild;)t.removeChild(t.firstChild);if(o.style.display="block",void 0!==i&&0!==i.length)for(let o=0;o<e.list.length;o+=1){const i=document.createElement("div");i.classList.add("task-container");const s=document.createElement("div"),l=document.createElement("div"),d=document.createElement("h3"),c=document.createElement("div"),u=document.createElement("p"),p=document.createElement("p"),m=document.createElement("span"),f=document.createElement("p"),h=E(c),g=j(e,o,Y),v=B(e,o,Y),x=M(e,o,Y);d.textContent=e.list[o].title,u.textContent=e.list[o].desc,p.textContent=e.list[o].dueDate,m.textContent=y(e.list[o].dueDate),p.classList.add("tooltipp"),m.classList.add("tooltipptext"),f.textContent=e.list[o].priority,f.classList.add(b(f),"p-1","rounded"),s.classList.add("main-info"),l.classList.add("additional-info"),v.classList.add("mr-2"),c.style.display="none",c.classList.add("details-container","mt-2"),p.appendChild(m),s.append(v,d),l.append(f,p,g,x,h),i.append(s,l),o===r&&i.appendChild(a),c.appendChild(u),i.appendChild(c),k(e,o,i,t,n)}else o.style.display="none"},_=(e,n,t,o,i,a=null,r=null,s=null)=>{for(;n.firstChild;)n.removeChild(n.firstChild);for(;t.firstChild;)t.removeChild(t.firstChild);o.style.display="none";for(let e=0;e<i.length;e+=1)for(let o=0;o<i[e].list.length;o+=1){const l=document.createElement("div");l.classList.add("task-container");const d=document.createElement("div"),c=document.createElement("div"),u=document.createElement("h3"),p=document.createElement("div"),m=document.createElement("p"),f=document.createElement("p"),h=document.createElement("span"),g=document.createElement("p"),v=E(p),x=j(i[e],o,_),w=B(i[e],o,_),C=M(i[e],o,_,e);u.textContent=i[e].list[o].title,m.textContent=i[e].list[o].desc,f.textContent=i[e].list[o].dueDate,h.textContent=y(i[e].list[o].dueDate),f.classList.add("tooltipp"),h.classList.add("tooltipptext"),g.textContent=i[e].list[o].priority,g.classList.add(b(g),"p-1","rounded"),d.classList.add("main-info"),c.classList.add("additional-info"),w.classList.add("mr-2"),p.style.display="none",p.classList.add("details-container","mt-2"),f.appendChild(h),d.append(w,u),c.append(g,f,x,C,v),l.append(d,c),o===r&&e===s&&l.appendChild(a),p.appendChild(m),l.appendChild(p),k(i[e],o,l,t,n)}},G=(e,n)=>{const t=document.createElement("div"),o=document.createElement("h3");return t.classList.add("list-cont"),o.textContent="All tasks",t.appendChild(o),e.appendChild(t),o.addEventListener("click",(e=>{e.preventDefault(),document.querySelector(".active").classList.remove("active"),t.classList.add("active"),n[0]&&_(n[0],z,Z,A,n)})),t},K=(e,n,t)=>{for(;n.firstChild;)n.removeChild(n.firstChild);if(void 0===e||0===e.length)return;const o=t(n,e);n.appendChild(o);for(let t=0;t<e.length;t+=1){const o=document.createElement("div"),i=document.createElement("h3"),a=I(e,t,K,Y);o.classList.add("list-cont"),i.textContent=e[t].title,o.append(i,a),n.appendChild(o),e[0]&&0===t&&o.classList.add("active"),i.addEventListener("click",(n=>{n.preventDefault(),document.querySelector(".active").classList.remove("active"),o.classList.add("active"),Y(e[t],z,Z,A,e)}))}};document.addEventListener("DOMContentLoaded",(()=>{F.addEventListener("click",(e=>{e.preventDefault();const n=document.querySelector(".active").firstChild.innerText,t=C.filter((e=>e.title===n))[0];((e,n,t)=>{const o=document.querySelector("#task-input").value,i=document.getElementById("task-desc-input").value,a=document.getElementById("task-date-input").value,r=document.getElementById("task-priority-input").value;if(n(v,o,x)){const n=N(o,i,a,r);t.reset(),e.list.unshift(n)}})(t,w,A),D(),Y(t,z,Z,A,C)})),R.addEventListener("click",(e=>{e.preventDefault(),((e,n,t)=>""!==n||(t(e,"List title must exist!"),!1))(v,H.value,x)&&(((e,n)=>{const t=document.getElementById("sidebar-input"),o=O(t.value);n.reset(),e.unshift(o)})(C,P),D(),K(C,J,G),Y(C[0],z,Z,A,C))})),null===localStorage.getItem("projectsList")&&(e=>{const n=N("The Winds of Winter","Book 1","2022-12-11","H",!0),t=N("A Dream of Spring","Book 2","2021-12-03","H"),o=N("A Clash of Kings","Book 3","2023-12-12","M"),i=N("A Game of Thrones","Book 2","2021-11-06","L"),a=O("A Song of Ice and Fire"),r=O("The Lord of the Rings"),s=N("The Two Towers","desc1","2022-12-04","M"),l=N("Fellowship of the Ring","desc1","2021-12-10","M");a.list.push(n,t,o,i),r.list.push(s,l),e.push(a),e.push(r)})(C),((e,n)=>{e.addEventListener("click",(()=>{"block"===n.style.display?(n.style.display="none",e.innerText="Advanced Options"):(n.style.display="block",e.textContent="Hide Options")}))})(U,W),(e=>{const n=new Image;n.src=g,e.prepend(n)})($),(()=>{const e=document.querySelector("link[rel*='icon']")||document.createElement("link");e.rel="shortcut icon",e.href=g,document.getElementsByTagName("head")[0].appendChild(e)})(),K(C,J,G),_(),document.querySelector(".active").classList.remove("active"),document.getElementsByClassName("list-cont")[0].classList.add("active")}))}},n={};function t(o){if(n[o])return n[o].exports;var i=n[o]={id:o,exports:{}};return e[o](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t(574)})();