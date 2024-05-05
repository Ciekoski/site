const produtos = [
  {
    nome: "Camiseta",
    img: "src/camiseta.png",
  },
  {
    nome: "Gato",
    img: "src/gato.png",
  },
  {
    nome: "Dog",
    img: "src/dog.png",
  },
  {
    nome: "Gato",
    img: "src/gato1.png",
  },
  {
    nome: "Ração",
    img: "src/racao.png",
  },
  {
    nome: "Dog",
    img: "src/dog1.png",
  },
  {
    nome: "",
    img: "",
  },
  {
    nome: "",
    img: "",
  },
  {
    nome: "",
    img: "",
  },
];

function filtrar_produtos() {
  let input = document.querySelector("#search");
  const filtrados = produtos.filter((p) =>
    p.nome.toLowerCase().includes(search.value.toLowerCase()),
  );
  let render = filtrados.map((p) => {
    let prod = document.createElement("div");
    let background = document.createElement("div");
    background.className = "img_bg";
    prod.className = "imgp";
    let img = document.createElement("img");
    img.src = p.img;
    img.className = "img_produtos";
    img.alt = p.nome;
    let prod_name = document.createElement("h2");
    prod_name.style.color = "#000000";
    prod_name.innerHTML = p.nome;
    background.appendChild(img);
    background.appendChild(prod_name);
    prod.appendChild(background);
    let preco = document.createElement("h3");
    if (!p.preco) p.preco = 50;
    preco.innerHTML = `R$ ${p.preco.toFixed(2)}`;
    preco.style.color = "#ff5c00";
    prod.appendChild(preco);
    return prod;
  });
  let box = document.querySelector(".container_produtos");
  box.innerHTML = "";
  if (render.length == 0) {
    let aviso = document.createElement("p");
    aviso.innerHTML = "Não foram encontrados produtos";
    aviso.style.color = "#000000";
    box.appendChild(aviso);
  } else {
    render.forEach((d) => box.appendChild(d));
  }
}
