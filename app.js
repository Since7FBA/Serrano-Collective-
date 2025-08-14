// Products (8 items) — prices are numbers; images are commercial-use Unsplash
const PRODUCTS = [
  { id: "stoneware-mug-sand", title: "Stoneware Mug — Sand", price: 22.0, img: "https://images.unsplash.com/photo-1520975922284-7b683c92d2f1?q=80&w=1600&auto=format&fit=crop", desc: "Wheel‑thrown stoneware mug with matte sand glaze. Dishwasher safe." },
  { id: "cotton-throw-ecru", title: "Cotton Throw — Ecru", price: 48.0, img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1600&auto=format&fit=crop", desc: "Soft 100% cotton throw blanket in ecru. 50\" × 60\"." },
  { id: "scented-candle-cedar", title: "Scented Candle — Cedar", price: 18.0, img: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=1600&auto=format&fit=crop", desc: "Hand‑poured soy candle with cedarwood notes. 8 oz / 45 hr." },
  { id: "reusable-bottle-20oz", title: "Reusable Bottle — 20oz", price: 28.0, img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1600&auto=format&fit=crop", desc: "Insulated stainless steel bottle. Keeps drinks cold for 24h." },
  { id: "chef-knife-8in", title: "Chef Knife — 8\"", price: 39.0, img: "https://images.unsplash.com/photo-1603398938378-df3b6e8b7f63?q=80&w=1600&auto=format&fit=crop", desc: "Forged 8\" stainless chef’s knife, ergonomic handle." },
  { id: "travel-pouch-slate", title: "Travel Pouch — Slate", price: 24.0, img: "https://images.unsplash.com/photo-1606813902919-4a8c730ef5b8?q=80&w=1600&auto=format&fit=crop", desc: "Water‑resistant travel pouch with inner mesh pockets." },
  { id: "cutting-board-walnut", title: "Cutting Board — Walnut", price: 35.0, img: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?q=80&w=1600&auto=format&fit=crop", desc: "Solid walnut board with juice groove. 12\" × 8\"." },
  { id: "notebook-grid-a5", title: "Notebook — Grid A5", price: 14.0, img: "https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?q=80&w=1600&auto=format&fit=crop", desc: "Hardcover A5 grid notebook, 160 pages, lay‑flat." }
];

// Simple runtime checks (fail fast in console instead of cryptic errors)
(function runTests(){
  if(!Array.isArray(PRODUCTS)||PRODUCTS.length!==8) console.warn("PRODUCTS should have 8 items.");
  PRODUCTS.forEach(p=>{
    if(typeof p.id!=="string"||typeof p.title!=="string"||typeof p.img!=="string"||typeof p.desc!=="string"||typeof p.price!=="number"){
      console.error("Bad product shape:", p);
    }
  });
})();

// Render grid
function renderGrid(){
  const grid = document.getElementById("product-grid");
  grid.innerHTML = "";
  PRODUCTS.forEach(p=>{
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${p.img}" alt="${p.title}">
      <div class="card-body">
        <div style="font-weight:600">${p.title}</div>
        <div class="muted">$${p.price.toFixed(2)}</div>
        <button class="snipcart-add-item btn"
          data-item-id="${p.id}"
          data-item-name="${p.title}"
          data-item-price="${p.price}"
          data-item-url="/"
          data-item-image="${p.img}">
          Add to Cart
        </button>
      </div>
    `;
    grid.appendChild(card);
  });
}

// Footer year
function setYear(){ const y=document.getElementById("year"); if(y) y.textContent = new Date().getFullYear(); }

document.addEventListener("DOMContentLoaded", ()=>{
  renderGrid();
  setYear();
});
