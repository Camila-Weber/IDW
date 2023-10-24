const principal = document.querySelector('#principal');

function menu (link){
    /* fetch(). //o que eu vou buscar
    then(). //o que eu vou fazer com o que eu busquei (formato)
    then(). //o que eu vou fazer com o que eu fiz com o que eu busquei
    catch(); //o que eu vou fazer se der errado */

    fetch('pages/' + link + '.html')
    .then(response => response.text())
    .then(html => principal.innerHTML = html)
    .catch(error => console.log ('Página não encontrada'))
}

function guru(){
    fetch('https://yesno.wtf/api')
    .then( response => response.json())
    .then( data => {
        principal.innerHTML = `
            <img src="${data.image}" />
            <p>${data.answer}</p>
        `;
    })
    .catch( error => console.log(error))
}