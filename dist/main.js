(()=>{"use strict";const e=(e,t=[])=>({title:e,list:t}),t=(e,t,n,s,a=!1)=>({title:e,desc:t,dueDate:n,priority:s,status:a});function n(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function s(e){n(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}var a=6e4;function i(e){return e.getTime()%a}function d(e){var t=new Date(e.getTime()),n=Math.ceil(t.getTimezoneOffset());t.setSeconds(0,0);var s=n>0?(a+i(t))%a:i(t);return n*a+s}function l(e){n(1,arguments);var t=s(e);return t.setHours(0,0,0,0),t}var o=864e5;function c(e,t){n(2,arguments);var s=l(e),a=l(t),i=s.getTime()-d(s),c=a.getTime()-d(a);return Math.round((i-c)/o)}function r(e,t){var n=e.getFullYear()-t.getFullYear()||e.getMonth()-t.getMonth()||e.getDate()-t.getDate()||e.getHours()-t.getHours()||e.getMinutes()-t.getMinutes()||e.getSeconds()-t.getSeconds()||e.getMilliseconds()-t.getMilliseconds();return n<0?-1:n>0?1:n}const u=document.getElementById("submit"),p=document.getElementById("sidebar-submit"),m=document.querySelector(".modal"),h=document.querySelector(".modal-content"),v=document.querySelector(".advButton"),f=document.querySelector(".advanced-options"),y=document.querySelector(".tasks-list"),C=document.querySelector(".project-names"),g=document.getElementById("task-form"),E=document.getElementById("sidebar-form"),L=[],k=document.querySelector(".done-list"),b=document.getElementById("sidebar-input").value,x=document.createElement("p"),D=(e,t=null,n=null)=>{for(;y.firstChild;)y.removeChild(y.firstChild);for(;k.firstChild;)k.removeChild(k.firstChild);for(let s=0;s<e.list.length;s+=1){const a=document.createElement("div");a.classList.add("task-container");const i=document.createElement("div"),d=document.createElement("div"),l=document.createElement("h3"),o=document.createElement("div"),c=document.createElement("p"),r=document.createElement("p"),u=document.createElement("span"),p=document.createElement("p"),m=q(o),h=I(e,s),v=j(e,s),f=B(e,s,a);l.textContent=e.list[s].title,c.textContent=e.list[s].desc,r.textContent=e.list[s].dueDate,u.textContent=T(e.list[s].dueDate),r.classList.add("tooltipp"),u.classList.add("tooltipptext"),p.textContent=e.list[s].priority,p.classList.add(S(p),"p-1","rounded"),i.classList.add("main-info"),d.classList.add("additional-info"),v.classList.add("mr-2"),o.style.display="none",o.classList.add("details-container","mt-3"),r.appendChild(u),i.appendChild(v),i.appendChild(l),d.appendChild(p),d.appendChild(r),d.appendChild(h),d.appendChild(f),d.appendChild(m),a.appendChild(i),a.appendChild(d),s===n&&a.appendChild(t),o.appendChild(c),a.appendChild(o),H(e,s,a,k,y)}},S=e=>"H"===e.textContent?"high":"M"===e.textContent?"medium":"low",T=e=>function(e,t){n(2,arguments);var a=s(e),i=s(t),d=r(a,i),l=Math.abs(c(a,i));a.setDate(a.getDate()-d*l);var o=r(a,i)===-d,u=d*(l-o);return 0===u?0:u}(new Date(e),new Date)+" day(s) left",w=(e,t)=>{const n=document.querySelector(".exit-modal");e.style.display="block",x.textContent=t,h.appendChild(x),h.appendChild(n),n.addEventListener("click",(()=>{e.style.display="none"}))};u.addEventListener("click",(e=>{e.preventDefault();let n=document.querySelector(".active").firstChild.innerText,s=L.filter((e=>e.title===n))[0];(e=>{const n=document.querySelector("#task-input").value,s=document.getElementById("task-desc-input").value,a=document.getElementById("task-date-input").value,i=document.getElementById("task-priority-input").value;if(M(m,n)){const d=t(n,s,a,i);g.reset(),e.list.unshift(d)}})(s),D(s)}));const M=(e,t)=>""!==t||(w(e,"Task title must exist!"),!1);document.addEventListener("keydown",(function(e){27===e.keyCode&&(m.style.display="none")}));const B=(e,t)=>{const n=document.createElement("span");return n.innerHTML="<i class='fas fa-edit'></i>",n.addEventListener("click",(()=>{const n=((e,t)=>{const n=document.createElement("form"),s=document.createElement("input"),a=document.createElement("input"),i=document.createElement("div"),d=document.createElement("input"),l=document.createElement("select"),o=document.createElement("input"),c=document.createElement("input");s.classList.add("form-control","mb-2"),a.classList.add("form-control","mb-2"),d.classList.add("form-control","mr-2"),l.classList.add("custom-select","custom-select-sm"),o.classList.add("btn","btn-secondary","button","ml-3"),c.classList.add("btn","btn-secondary","button","ml-3"),i.classList.add("extra-inputs"),s.type="text",a.type="text",d.type="date",o.type="submit",c.type="submit";const r=document.createElement("option"),u=document.createElement("option"),p=document.createElement("option");return r.value="H",u.value="M",p.value="L",r.textContent="High",u.textContent="Medium",p.textContent="Low",o.value="Cancel",s.value=e.list[t].title,a.value=e.list[t].desc,d.value=e.list[t].dueDate,l.value=e.list[t].priority,l.appendChild(r),l.appendChild(u),l.appendChild(p),n.appendChild(s),n.appendChild(a),i.appendChild(d),i.appendChild(l),i.appendChild(o),i.appendChild(c),n.appendChild(i),c.addEventListener("click",(n=>{n.preventDefault(),M(m,s.value,a.value,d.value,l.value)&&(e.list[t].title=s.value,e.list[t].desc=a.value,e.list[t].dueDate=d.value,e.list[t].priority=l.value,D(e))})),n})(e,t);D(e,n,t)})),n},H=(e,t,n,s,a)=>{e.list[t].status?s.appendChild(n):a.appendChild(n)},q=e=>{const t=document.createElement("span");return t.innerHTML='<i class="fas fa-chevron-down"></i>',t.addEventListener("click",(t=>{t.preventDefault(),"block"===e.style.display?e.style.display="none":e.style.display="block"})),t},I=(e,t)=>{const n=document.createElement("span");return n.innerHTML="<i class='fas fa-trash-alt'></i>",n.addEventListener("click",(()=>{e.list.splice(t,1),D(e)})),n},j=(e,t)=>{const n=document.createElement("input");return n.classList.add("check-task"),n.type="checkbox",n.checked=e.list[t].status,n.addEventListener("change",(()=>{e.list[t].status=!!n.checked,D(e)})),n},A=e=>{for(;C.firstChild;)C.removeChild(C.firstChild);for(let t=0;t<e.length;t+=1){const n=document.createElement("div"),s=document.createElement("h3"),a=O(e,t);n.classList.add("list-cont"),s.textContent=e[t].title,n.appendChild(s),n.appendChild(a),C.appendChild(n),e[0]&&0===t&&n.classList.add("active"),s.addEventListener("click",(s=>{s.preventDefault(),document.querySelector(".active").classList.remove("active"),n.classList.add("active"),D(e[t])}))}},O=(e,t)=>{const n=document.createElement("span");return n.innerHTML="<i class='fas fa-trash-alt'></i>",n.addEventListener("click",(()=>{e.splice(t,1),A(e),D(e[0])})),n};p.addEventListener("click",(t=>{t.preventDefault(),((e,t)=>""!==t||(w(e,"List title must exist!"),!1))(m,b)&&((t=>{const n=e(b);E.reset(),t.unshift(n)})(L),A(L),D(L[0]))})),v.addEventListener("click",(e=>{"block"===f.style.display?(f.style.display="none",v.innerText="Advanced Options"):(f.style.display="block",v.textContent="Hide Options")})),(()=>{const n=t("The Winds of Winter","Book 1","2022-12-11","H",!0),s=t("A Dream of Spring","Book 2","2021-12-03","H"),a=t("A Clash of Kings","Book 3","2023-12-12","M"),i=t("A Game of Thrones","Book 2","2021-11-06","L"),d=e("A Song of Ice and Fire"),l=e("The Lord of the Rings"),o=t("The Two Towers","desc1","2022-12-04","M"),c=t("Fellowship of the Ring","desc1","2021-12-10","M");d.list.push(n,s,a,i),l.list.push(o,c),L.push(d),L.push(l)})(),A(L),D(L[0])})();