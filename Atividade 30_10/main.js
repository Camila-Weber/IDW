const cpf = document.querySelector('#cpf');
const email = document.querySelector('#email');
cpf.maxLength = 11;

cpf.addEventListener('keyup', (event) => {
    // REGEX DO CPF: /[\d]{3}.[\d]{3}.[\d]{3}-[\d]{2}/g
    cpf.value = cpf.value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');    
});

cpf.addEventListener('input', (event) => {
    /* PERMITINDO APENAS NÚMEROS */
    cpf.value = cpf.value.replace(/\D/g,'')
})

cpf.addEventListener('focus', (event) => {
    // LIMPA O CAMPO QUANDO FAZ O FOCO
    cpf.value = ''
})

email.addEventListener('blur', (event) => {
    console.log('chamou')
    // REGEX DO EMAIL: /[\w]+@[\w]+/g
    //[\w\.\-\u00C0-\u00FF]+@[\w]+.[\w\.]+
    // ihateregex.io [^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+
    const match = email.value.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/g)

    if(!email.value.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/g) || 
        email.value != match[0]){
        window.alert('Email inválido!')
    }
});

/* EXERCÍCIO OPTATÓRIO 4 - 1 PONTO A SER ADICIONADO NA AVALIAÇÃO 3 (SOBRE JAVASCRIPT) */
/* adicione um campo do tipo password e um botão para enviar o formulário */
/* faça uma validação  para um campo senha que tenha os seguintes requisitos
1 - Dever ser no mínimo  8 caracteres
2 - Deve contar ao menos 1 letra maiúscula
3 - Deve contar ao menos 1 número
4 - Deve contar ao menos 1 caracter especial
5 - Deve contar ao menos 1 letra minúscula

Cada item deve estar marcado abaixo do campo senha
Cada vez que um item é satisfeito, deve ser colocado um ícone de check verde no item
Se o item não for satisfeito deve ser colocado um ícone de X vermelho no item
E ao final, após todo os requisitos forem cumpridos, o botão enviar deve ser habilitado. 
antes disso, o botão deve estar desabilitado.

*/


const senha = document.querySelector('#senha');
const caracteres = document.querySelector('#caracteres');
const maiuscula = document.querySelector('#maiuscula');
const minuscula = document.querySelector('#minuscula');
const especial = document.querySelector('#especial');
const numero = document.querySelector('#numero');
const enviar = document.querySelector('#enviar');


senha.addEventListener('input', (event) => {

    const v1 = /^.{8,}$/.test(senha.value);
    const v2 = /[A-Z]/.test(senha.value);
    const v3 = /[a-z]/.test(senha.value);
    const v4 = /[!@#$%^&*]/.test(senha.value);
    const v5 = /\d/.test(senha.value);

    caracteres.checked = v1 ? true : false;
    caracteres.disabled = v1 ? false : true;

    maiuscula.checked = v2 ? true : false;
    maiuscula.disabled = v2 ? false : true;

    minuscula.checked = v3 ? true : false;
    minuscula.disabled = v3 ? false : true;

    especial.checked = v4 ? true : false;
    especial.disabled = v4 ? false : true;

    numero.checked = v5 ? true : false;
    numero.disabled = v5 ? false : true;

    if (v1 && v2 && v3 && v4 && v5){
        enviar.disabled = false;
    } else{
        enviar.disabled = true;
    }

})