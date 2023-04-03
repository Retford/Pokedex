(() => {
  const listaPokemon = document.querySelector('#lista__pokemon'),
    botonesHeader = document.querySelectorAll('.btn__header');
  let URL = 'https://pokeapi.co/api/v2/pokemon/';
  for (let i = 1; i <= 1010; i++) {
    fetch(URL + i)
      .then((res) => res.json())
      .then((data) => {
        mostrarPokemon(data);
      });
  }

  const mostrarPokemon = (poke) => {
    let tipos = poke.types.map(
      (type) => `<p class="${type.type.name} tipo">${type.type.name}</p>`
    );
    tipos = tipos.join('');

    let pokeId = poke.id.toString();
    if (pokeId.length === 1) {
      pokeId = '000' + pokeId;
    } else if (pokeId.length === 2) {
      pokeId = '00' + pokeId;
    } else if (pokeId.length === 3) {
      pokeId = '0' + pokeId;
    }

    const contenedorDiv = document.createElement('div');
    contenedorDiv.classList.add('pokemon');
    contenedorDiv.innerHTML = `
    <p class="pokemon__id--back">${pokeId}</p>
    <div class="pokemon__imagen">
        <img src="${poke.sprites.other['official-artwork'].front_default}"
            alt="${poke.name}">
    </div>
    <div class="pokemon__info">
        <div class="nombre__contenedor">
            <p class="pokemon__id">#${pokeId}</p>
            <h2 class="pokemon__nombre">${poke.name}</h2>
        </div>
        <div class="pokemon__stats">
        ${tipos}
        </div>
         <div class="pokemon__stats">
        <p class="stat">${poke.height}m</p>
        <p class="stat">${poke.weight}kg</p>
        </div> 
  
  
    </div>`;
    listaPokemon.append(contenedorDiv);
  };

  botonesHeader.forEach((boton) =>
    boton.addEventListener('click', (e) => {
      const botonId = event.currentTarget.id;
      listaPokemon.innerHTML = '';

      for (let i = 1; i <= 1010; i++) {
        fetch(URL + i)
          .then((res) => res.json())
          .then((data) => {
            const tipos = data.types.map((type) => type.type.name);
            if (botonId === 'ver__todos') {
              mostrarPokemon(data);
            } else if (tipos.some((tipo) => tipo.includes(botonId))) {
              mostrarPokemon(data);
            }
          });
      }
    })
  );
})();
