document.getElementById("lead").onsubmit=e=>{e.preventDefault();e.target.style.display="none";document.getElementById("ok").style.display="block"};
document.documentElement.classList.add("js");
const rv=document.querySelectorAll("h2,.lead,.pain,.ben,.tool,.steps li,.plan,details,.final form");
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.12,rootMargin:"0px 0px -40px 0px"});
rv.forEach(el=>{el.classList.add("rv");const i=[...el.parentElement.children].indexOf(el);el.style.setProperty("--d",Math.min(i,4)*.08+"s");io.observe(el)});
