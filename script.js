const login = document.querySelector("#login");
const senha = document.querySelector("#senha");
const forms = document.querySelector("#formulario");
const warn = document.querySelector(".warn");

const users = [
  {
    username: "becomp",
    password: "ime1792",
  },
  {
    username: "alves",
    password: "24049",
  },
];

forms.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(login.value, senha.value);
  if (login.value === "" || senha.value === "") {
    warn.innerHTML = "Digite todos os campos!";
    warn.style.display = "block";
    return;
  }

  if (
    !users.some((u) => u.username == login.value && u.password == senha.value)
  ) {
    warn.innerHTML = "Login invalido";
    warn.style.display = "block";
    return;
  }

  warn.innerHTML = `Você fez login como ${login.value}`;
  warn.style.display = "block";

  // Quando se abre cada pagina .html individualmente o local storage é unico para cada arquivo
  // portanto esse login nao transmite entre as paginas
  // mas em um servidor funciona.
  localStorage.login = login.value;
});
