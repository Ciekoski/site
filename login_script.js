const login =document.querySelector('#login');
const senha=document.querySelector('#senha');
const forms = document.querySelector('#formulario');

forms.addEventListener('submit', function(event) {
    event.preventDefault();
    if(login.value === ""){
        alert("Faltou o seu login!");
        return;
    }
    if(senha.value ===""){
        alert("Faltou a sua senha!");
        return;
    }
    forms.submit();
})
