(()=>{
'use strict';
const toggle=document.getElementById('navToggle'),nav=document.getElementById('nav');
if(toggle&&nav){
toggle.addEventListener('click',()=>{const o=toggle.classList.toggle('open');nav.classList.toggle('open');toggle.setAttribute('aria-expanded',o);toggle.setAttribute('aria-label',o?'Close menu':'Open menu')});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{toggle.classList.remove('open');nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Open menu')}));
}
const lb=document.getElementById('lightbox');
if(lb){
const img=lb.querySelector('img');
const open=s=>{img.src=s;lb.classList.add('active');lb.setAttribute('aria-hidden','false')};
const close=()=>{lb.classList.remove('active');lb.setAttribute('aria-hidden','true');img.src=''};
document.querySelectorAll('.project-gallery img').forEach(i=>{i.addEventListener('click',()=>open(i.src));i.addEventListener('keydown',e=>{if(e.key==='Enter')open(i.src)});i.setAttribute('tabindex','0');i.setAttribute('role','button');i.setAttribute('aria-label','Enlarge image')});
lb.addEventListener('click',close);
document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
}
const r=document.querySelectorAll('.reveal');
if(r.length&&'IntersectionObserver'in window){
const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target)}})},{threshold:0.05,rootMargin:'0px 0px -40px 0px'});
r.forEach(el=>obs.observe(el));
}else{r.forEach(el=>el.classList.add('visible'))}
})();
