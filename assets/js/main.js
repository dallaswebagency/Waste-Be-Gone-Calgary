(function(){
var d=document,b=d.body,h=d.querySelector('header.site');d.documentElement.classList.add('js');
function setH(){if(h)b.style.setProperty('--hh',h.getBoundingClientRect().bottom+'px')}
window.addEventListener('scroll',function(){if(h)h.classList.toggle('scrolled',window.scrollY>10)},{passive:true});
var bg=d.querySelector('.burger');if(bg)bg.addEventListener('click',function(){var o=b.classList.toggle('menu-open');bg.setAttribute('aria-expanded',o);setH()});
d.querySelectorAll('.menu button.dd').forEach(function(x){x.addEventListener('click',function(){var li=x.parentNode,o=li.classList.toggle('open');x.setAttribute('aria-expanded',o)})});
d.querySelectorAll('.menu a').forEach(function(a){a.addEventListener('click',function(){b.classList.remove('menu-open')})});
d.addEventListener('keydown',function(e){if(e.key==='Escape'){b.classList.remove('menu-open');d.querySelectorAll('.menu li.open').forEach(function(l){l.classList.remove('open')})}});
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.1});d.querySelectorAll('.reveal').forEach(function(el){io.observe(el)})}else d.querySelectorAll('.reveal').forEach(function(el){el.classList.add('in')});
/* tabs */
d.querySelectorAll('[role=tablist]').forEach(function(tl){var tabs=[].slice.call(tl.querySelectorAll('[role=tab]'));
 function sel(t){tabs.forEach(function(x){var on=x===t;x.setAttribute('aria-selected',on);x.tabIndex=on?0:-1;d.getElementById(x.getAttribute('aria-controls')).hidden=!on})}
 tabs.forEach(function(t,i){t.addEventListener('click',function(){sel(t)});t.addEventListener('keydown',function(e){var n=null;if(e.key==='ArrowRight')n=tabs[(i+1)%tabs.length];if(e.key==='ArrowLeft')n=tabs[(i+tabs.length-1)%tabs.length];if(n){n.focus();sel(n);e.preventDefault()}})});
 sel(tabs[0])});
/* forms: no server endpoint yet, so compose an email to sales */
d.querySelectorAll('form[data-mail]').forEach(function(f){f.addEventListener('submit',function(e){e.preventDefault();
 var L=[];new FormData(f).forEach(function(v,k){if(String(v).trim())L.push(k+': '+v)});
 var m=f.querySelector('.msg');if(m){m.classList.add('show');m.textContent='Thanks! Opening your email app with your request. If nothing opens, call 403-848-4825 or email Landon@wastebegone.ca.'}
 location.href='mailto:Landon@wastebegone.ca?subject='+encodeURIComponent(f.getAttribute('data-subject')||'Quote request')+'&body='+encodeURIComponent(L.join('\n'))})});
d.querySelectorAll('[data-year]').forEach(function(e){e.textContent=new Date().getFullYear()});
})();
