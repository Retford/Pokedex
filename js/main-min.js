(()=>{let e=document.querySelector("#lista__pokemon"),t=document.querySelectorAll(".btn__header"),n="https://pokeapi.co/api/v2/pokemon/";for(let o=1;o<=200;o++)fetch(n+o).then(e=>e.json()).then(e=>{s(e)});let s=t=>{let n=t.types.map(e=>`<p class="${e.type.name} tipo">${e.type.name}</p>`);n=n.join("");let o=t.id.toString();1===o.length?o="000"+o:2===o.length?o="00"+o:3===o.length&&(o="0"+o);let s=document.createElement("div");s.classList.add("pokemon"),s.innerHTML=`
    <p class="pokemon__id--back">${o}</p>
    <div class="pokemon__imagen">
        <img src="${t.sprites.other["official-artwork"].front_default}"
            alt="${t.name}">
    </div>
    <div class="pokemon__info">
        <div class="nombre__contenedor">
            <p class="pokemon__id">#${o}</p>
            <h2 class="pokemon__nombre">${t.name}</h2>
        </div>
        <div class="pokemon__stats">
        ${n}
        </div>
         <div class="pokemon__stats">
        <p class="stat">${t.height}m</p>
        <p class="stat">${t.weight}kg</p>
        </div> 
  
  
    </div>`,e.append(s)};t.forEach(t=>t.addEventListener("click",t=>{let o=event.currentTarget.id;e.innerHTML="";for(let a=1;a<=200;a++)fetch(n+a).then(e=>e.json()).then(e=>{let t=e.types.map(e=>e.type.name);"ver__todos"===o?s(e):t.some(e=>e.includes(o))&&s(e)})}))})();