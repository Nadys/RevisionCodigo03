document.addEventListener('DOMContentLoaded', () => {

const $i = document.querySelector(".input");
const botonDeFiltro = document.querySelector(".btn");
const li = document.getElementById("lista-de-productos");


// Tenemos un li de productos
const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
];



for (let i = 0; i < productos.length; i++) {
  const d = document.createElement("div");
  d.classList.add("producto");


  const ti = document.createElement("p");
  ti.classList.add("titulo");
  ti.textContent = productos[i].nombre;
  
  const imagen = document.createElement("img");
  imagen.setAttribute('src', productos[i].img);

  d.appendChild(ti); //agrega el p
  d.appendChild(imagen); //agrega la imagen
   li.appendChild(d); //agrega el dov al contendor principal
}

//funcion para mostrar productos
function displayProductos(productos) {
  li.innerHTML = ""; // limpia antes de mostrar
  productos.forEach(producto => {
    const d = document.createElement("div");
    d.classList.add("producto");

    const ti = document.createElement("p");
    ti.classList.add("titulo");
    ti.textContent = producto.nombre;

    const imagen = document.createElement("img");
    imagen.setAttribute('src', producto.img);

    d.appendChild(ti);
    d.appendChild(imagen);
    li.appendChild(d);
  });
}


const texto = $i.value;
console.log(texto);

//funcion de filtrado
const filtrado = (productos = [], texto) => {
  return productos.filter(item =>
    item.tipo.toLowerCase().includes(texto.toLowerCase()) || 
    item.color.toLowerCase().includes(texto.toLowerCase()));
};

  const productosFiltrados = filtrado(productos, texto);

  for (let i = 0; i < productosFiltrados.length; i++) {
    const d = document.createElement("div");
    d.classList.add("producto");
  
    const ti = document.createElement("p");
    ti.classList.add("titulo");
    ti.textContent = productosFiltrados[i].nombre;
    
    const imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    d.appendChild(ti);
    d.appendChild(imagen);
      li.appendChild(d);
  }

//Mostrar productos lista
displayProductos(productos);

//filtrar al dar click
botonDeFiltro.onclick = function() {
  const texto = $i.value;
  const productosFiltrados = filtrado(productos, texto);
  displayProductos(productosFiltrados);
};

});

  


