// Keep footer year current & ensure absolute URLs for Snipcart items on GitHub Pages
function setYear(){ const y=document.getElementById('year'); if(y) y.textContent=new Date().getFullYear(); }
function absolutizeItemUrls(){
  const abs = window.location.origin + window.location.pathname;
  document.querySelectorAll('.snipcart-add-item').forEach(btn => btn.setAttribute('data-item-url', abs));
}
document.addEventListener('DOMContentLoaded', () => { setYear(); absolutizeItemUrls(); });
