(()=>{"use strict";const e=(e,t=[])=>({title:e,list:t}),t=(e,t,n,d,l=!1)=>({title:e,desc:t,dueDate:n,priority:d,status:l}),n=document.getElementById("submit"),d=document.getElementById("sidebar-submit"),l=(document.querySelector("main"),document.querySelector(".sidebar"),document.querySelector(".modal")),s=document.querySelector(".modal-content"),i=document.querySelector(".advButton"),a=document.querySelector(".advanced-options"),c=document.querySelector(".tasks-list"),o=document.querySelector(".project-names"),r=document.getElementById("task-form"),u=document.getElementById("sidebar-form"),m=[],p=document.querySelector(".done-list"),h=document.createElement("p"),v=(e,t=null,n=null)=>{for(;c.firstChild;)c.removeChild(c.firstChild);for(;p.firstChild;)p.removeChild(p.firstChild);for(let d=0;d<e.list.length;d+=1){const l=document.createElement("div");l.classList.add("task-container");const s=document.createElement("div"),i=document.createElement("div"),a=document.createElement("h3"),o=document.createElement("div"),r=document.createElement("p"),u=document.createElement("p"),m=document.createElement("p"),h=f(o),v=L(e,d),y=k(e,d),b=C(e,d,l);a.textContent=e.list[d].title,r.textContent=e.list[d].desc,u.textContent=e.list[d].dueDate,m.textContent=e.list[d].priority,s.classList.add("main-info"),i.classList.add("additional-info"),y.classList.add("mr-3"),o.style.display="none",o.classList.add("details-container","mt-3"),s.appendChild(y),s.appendChild(a),i.appendChild(u),i.appendChild(m),i.appendChild(h),i.appendChild(v),i.appendChild(b),l.appendChild(s),l.appendChild(i),d===n&&l.appendChild(t),o.appendChild(r),l.appendChild(o),E(e,d,l,p,c)}};n.addEventListener("click",(e=>{e.preventDefault();let n=document.querySelector(".active").firstChild.innerText,d=m.filter((e=>e.title===n))[0];(e=>{const n=document.querySelector("#task-input").value,d=document.getElementById("task-desc-input").value,s=document.getElementById("task-date-input").value,i=document.getElementById("task-priority-input").value;if(y(l,n,d,s,i)){const l=t(n,d,s,i);r.reset(),e.list.unshift(l)}})(d),v(d)}));const y=(e,t,n,d,l)=>""!==t||(((e,t)=>{const n=document.querySelector(".exit-modal");e.style.display="block",h.textContent="Task title must exist!",s.appendChild(h),s.appendChild(n),n.addEventListener("click",(()=>{e.style.display="none"}))})(e),!1);document.addEventListener("keydown",(function(e){27===e.keyCode&&(l.style.display="none")}));const C=(e,t,n)=>{const d=document.createElement("span");return d.innerHTML="<i class='fas fa-edit'></i>",d.addEventListener("click",(()=>{const n=((e,t)=>{const n=document.createElement("form"),d=document.createElement("input"),s=document.createElement("input"),i=document.createElement("div"),a=document.createElement("input"),c=document.createElement("select"),o=document.createElement("input"),r=document.createElement("input");d.classList.add("form-control","mb-2"),s.classList.add("form-control","mb-2"),a.classList.add("form-control","mr-2"),c.classList.add("custom-select","custom-select-sm"),o.classList.add("btn","btn-secondary","button","ml-3"),r.classList.add("btn","btn-secondary","button","ml-3"),i.classList.add("extra-inputs"),d.type="text",s.type="text",a.type="date",o.type="submit",r.type="submit";const u=document.createElement("option"),m=document.createElement("option"),p=document.createElement("option");return u.value="H",m.value="M",p.value="L",u.textContent="High",m.textContent="Medium",p.textContent="Low",o.value="Cancel",d.value=e.list[t].title,s.value=e.list[t].desc,a.value=e.list[t].dueDate,c.value=e.list[t].priority,c.appendChild(u),c.appendChild(m),c.appendChild(p),n.appendChild(d),n.appendChild(s),i.appendChild(a),i.appendChild(c),i.appendChild(o),i.appendChild(r),n.appendChild(i),r.addEventListener("click",(n=>{n.preventDefault(),y(l,d.value,s.value,a.value,c.value)&&(e.list[t].title=d.value,e.list[t].desc=s.value,e.list[t].dueDate=a.value,e.list[t].priority=c.value,v(e))})),n})(e,t);v(e,n,t)})),d},E=(e,t,n,d,l)=>{e.list[t].status?d.appendChild(n):l.appendChild(n)},f=e=>{const t=document.createElement("span");return t.innerHTML='<i class="fas fa-chevron-down"></i>',t.addEventListener("click",(t=>{t.preventDefault(),"block"===e.style.display?e.style.display="none":e.style.display="block"})),t},L=(e,t)=>{const n=document.createElement("span");return n.innerHTML="<i class='fas fa-trash-alt'></i>",n.addEventListener("click",(()=>{e.list.splice(t,1),v(e)})),n},k=(e,t)=>{const n=document.createElement("input");return n.type="checkbox",n.checked=e.list[t].status,n.addEventListener("change",(()=>{e.list[t].status=!!n.checked,v(e)})),n},b=e=>{for(;o.firstChild;)o.removeChild(o.firstChild);for(let t=0;t<e.length;t+=1){const n=document.createElement("div"),d=document.createElement("h3"),l=x(e,t);n.classList.add("list-cont"),d.textContent=e[t].title,n.appendChild(d),n.appendChild(l),o.appendChild(n),e[0]&&0===t&&n.classList.add("active"),d.addEventListener("click",(d=>{d.preventDefault(),document.querySelector(".active").classList.remove("active"),n.classList.add("active"),v(e[t])}))}},x=(e,t)=>{const n=document.createElement("span");return n.innerHTML="<i class='fas fa-trash-alt'></i>",n.addEventListener("click",(()=>{e.splice(t,1),b(e),v(e[0])})),n};d.addEventListener("click",(t=>{t.preventDefault(),(t=>{const n=document.getElementById("sidebar-input").value,d=e(n);u.reset(),t.unshift(d)})(m),b(m),v(m[0])})),i.addEventListener("click",(e=>{"block"===a.style.display?(a.style.display="none",i.innerText="Advanced Options"):(a.style.display="block",i.textContent="Hide Options")})),(()=>{const n=t("The Winds of Winter","desc1","2020-12-12","H",!0),d=t("A Dream of Spring","desc1","2020-12-12","H"),l=t("A Clash of Kings","desc1","2020-12-12","M"),s=t("A Game of Thrones","desc1","2020-12-12","L"),i=e("A Song of Ice and Fire"),a=e("The Lord of the Rings"),c=t("The Two Towers","desc1","2020-12-12","M");i.list.push(n,d,l,s),a.list.push(c),m.push(i),m.push(a)})(),b(m),v(m[0])})();