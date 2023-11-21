const principal = document.querySelector('#principal');
const dados = document.querySelector('#dados');
const url = 'https://crud---idw-default-rtdb.firebaseio.com/';


var pessoas = [];

var elementos = {};

function buscarElementoPorIdNoHTMLCarregado(id) {
    return document.getElementById(id);
}

function buscarElementosPorClasseNoHTMLCarregado(classe) {
    return document.querySelectorAll('.' + classe);
}

function menu(link) {
    var url2 = 'Pages/' + link + '.html';
    fetch(url2)
        .then(response => response.text())
        .then(html => {
            principal.innerHTML = html;

            elementos.nometutor = buscarElementoPorIdNoHTMLCarregado('nometutor');
            elementos.email = buscarElementoPorIdNoHTMLCarregado('email');
            elementos.senha = buscarElementoPorIdNoHTMLCarregado('senha');
            elementos.rsenha = buscarElementoPorIdNoHTMLCarregado('rsenha');

            elementos.checkc = buscarElementoPorIdNoHTMLCarregado('checkc');
            elementos.ncheckc = buscarElementoPorIdNoHTMLCarregado('ncheckc');
            elementos.checkM = buscarElementoPorIdNoHTMLCarregado('checkM');
            elementos.ncheckM = buscarElementoPorIdNoHTMLCarregado('ncheckM');
            elementos.checkm = buscarElementoPorIdNoHTMLCarregado('checkm');
            elementos.ncheckm = buscarElementoPorIdNoHTMLCarregado('ncheckm');
            elementos.checke = buscarElementoPorIdNoHTMLCarregado('checke');
            elementos.nchecke = buscarElementoPorIdNoHTMLCarregado('nchecke');
            elementos.checkn = buscarElementoPorIdNoHTMLCarregado('checkn');
            elementos.ncheckn = buscarElementoPorIdNoHTMLCarregado('ncheckn');

            elementos.cadastrar = buscarElementoPorIdNoHTMLCarregado('cadastrar');
            elementos.divdados = buscarElementoPorIdNoHTMLCarregado('dados');
            elementos.entrar = buscarElementoPorIdNoHTMLCarregado('entrar');
            elementos.salvar = buscarElementoPorIdNoHTMLCarregado('salvar');
            elementos.dados = buscarElementoPorIdNoHTMLCarregado('dados');
            elementos.id = buscarElementoPorIdNoHTMLCarregado('id');



            for (let i = 0; i <= 36; i++) {
                const icone = buscarElementoPorIdNoHTMLCarregado('icone' + i);

                icone.addEventListener('click', ICONE);
            }

        })
        .catch(error => console.log('Página não encontrada'))
}

const RENDER = () => {
    const tbody = elementos.dados
    tbody.innerHTML = '';
    pessoas.sort().forEach(usuario => {
        const tr = document.createElement('tr');
        const tdId = document.createElement('td');
        const tdNome = document.createElement('td');
        const tdEmail = document.createElement('td');
        const tdSenha = document.createElement('td');
        const tdAcoes = document.createElement('td');

        tdId.innerHTML = usuario.id;
        tdNome.innerHTML = usuario.nometutor;
        tdEmail.innerHTML = usuario.email;
        tdSenha.innerHTML = usuario.senha;

        const iconeEditar = document.createElement('i');
        const iconeRemover = document.createElement('i');

        iconeEditar.className = 'ph-bold ph-pencil-simple';
        iconeRemover.className = 'ph-bold ph-trash';

        iconeEditar.addEventListener('click', () => loadEdit(usuario.id));
        iconeRemover.addEventListener('click', () => DELETE(usuario.id));

        tdAcoes.appendChild(iconeEditar);
        tdAcoes.appendChild(iconeRemover);

        tr.appendChild(tdNome);
        tr.appendChild(tdEmail);
        tr.appendChild(tdAcoes);

        tbody.appendChild(tr);
    })
}
RENDER();

function loadEdit(key) {
    const pessoaEdit = pessoas.find(pessoa => pessoa.id === key);
    elementos.nometutor.value = pessoaEdit.nome;
    elementos.email.value = pessoaEdit.email;
    elementos.senha.value = pessoaEdit.senha;
    elementos.rsenha.value = pessoaEdit.senha;
    elementos.id.value = pessoaEdit.id;
}

function SAVE() {
    (id.value == '') ? CREATE() : UPDATE();
}

function ICONE() {
    this.style.color = '#233e59';
    this.style.backgroundColor = "#be901b";
    this.style.borderRadius = '50%';
}

function Preencher() {
    if (elementos.nometutor.value !== '') {
        elementos.nometutor.style.backgroundColor = "#be901b";
        elementos.nometutor.style.color = '#233e59';

    } else {
        elementos.nometutor.style.backgroundColor = "white";
        elementos.nometutor.style.color = 'black';

    }
    if (elementos.email.value !== '') {
        elementos.email.style.backgroundColor = "#be901b";
        elementos.email.style.color = '#233e59';
    } else {
        elementos.email.style.backgroundColor = "white";
        elementos.email.style.color = 'black';
    }
}


const buttocadastrar = elementos.cadastrar.style.border = 'red solid'

function Validar() {
    const senha = elementos.senha.value;
    const rsenha = elementos.rsenha.value;

    const v1 = /^.{8,}$/.test(elementos.senha.value);
    const v2 = /[A-Z]/.test(elementos.senha.value);
    const v3 = /[a-z]/.test(elementos.senha.value);
    const v4 = /[!@#$%^&*]/.test(elementos.senha.value);
    const v5 = /\d/.test(elementos.senha.value);
    const v6 = senha === rsenha;

    elementos.checkc.style.display = v1 ? 'inline' : 'none';
    elementos.ncheckc.style.display = v1 ? 'none' : 'inline';

    elementos.checkM.style.display = v2 ? 'inline' : 'none';
    elementos.ncheckM.style.display = v2 ? 'none' : 'inline';

    elementos.checkm.style.display = v3 ? 'inline' : 'none';
    elementos.ncheckm.style.display = v3 ? 'none' : 'inline';

    elementos.checke.style.display = v4 ? 'inline' : 'none';
    elementos.nchecke.style.display = v4 ? 'none' : 'inline';

    elementos.checkn.style.display = v5 ? 'inline' : 'none';
    elementos.ncheckn.style.display = v5 ? 'none' : 'inline';

    if (v1 && v2 && v3 && v4 && v5) {
        elementos.senha.style.backgroundColor = '#be901b'
        elementos.senha.style.color = '#233e59'
    } else {
        elementos.senha.style.backgroundColor = 'white'
        elementos.senha.style.color = 'black'
    }

    if (v1 && v2 && v3 && v4 && v5 && v6) {
        elementos.cadastrar.style.border = '#be901b solid'
        elementos.rsenha.style.backgroundColor = '#be901b'
        elementos.rsenha.style.color = '#233e59'

    } else {
        elementos.cadastrar.style.border = 'red solid'
    }
};

function CREATE() {
    const pessoa = {
        nometutor: elementos.nometutor.value,
        email: elementos.email.value,
        senha: elementos.senha.value,
        rsenha: elementos.rsenha.value,
    }

    fetch(url + '/pessoas.json', {
        method: 'POST',
        body: JSON.stringify(pessoa)
    })
        .then(response => response.json())
        .then(() => {
            elementos.nometutor.value = ''
            elementos.email.value = ''
            elementos.senha.value = ''
            elementos.rsenha.value = ''

            elementos.nometutor.style.backgroundColor = "white";
            elementos.nometutor.style.color = 'black';
            elementos.email.style.backgroundColor = "white";
            elementos.email.style.color = 'black';
            elementos.senha.style.backgroundColor = 'white';
            elementos.senha.style.color = 'black';
            elementos.rsenha.style.backgroundColor = 'white';
            elementos.rsenha.style.color = 'black';

            elementos.checkc.style.display = 'none';
            elementos.ncheckc.style.display = 'inline';

            elementos.checkM.style.display = 'none';
            elementos.ncheckM.style.display = 'inline';

            elementos.checkm.style.display = 'none';
            elementos.ncheckm.style.display = 'inline';

            elementos.checke.style.display = 'none';
            elementos.nchecke.style.display = 'inline';

            elementos.checkn.style.display = 'none';
            elementos.ncheckn.style.display = 'inline';

            elementos.cadastrar.style.border = 'red solid'

            READ();

        })
        .catch(error => console.log(error));
}

function READ() {
    fetch(url + '/pessoas.json', {
        method: 'GET'
    })
        .then(response => response.json())
        .then(response => {
            pessoas = [];
            for (const id in response) {
                response[id].id = id
                pessoas.push(response[id])
            }
            RENDER();
        })
        .catch();
}

function UPDATE() {
    const pessoa = {
        nometutor: elementos.nometutor.value,
        email: elementos.email.value,
        senha: elementos.senha.value,
        rsenha: elementos.rsenha.value,
    }
    fetch(url + '/pessoas/' + id.value + '.json', {
        method: 'PUT',
        body: JSON.stringify(pessoa)
    })
        .then(() => {
            elementos.nometutor.value = ''
            elementos.email.value = ''
            elementos.senha.value = ''
            elementos.rsenha.value = ''
            
            elementos.nometutor.style.backgroundColor = "white";
            elementos.nometutor.style.color = 'black';
            elementos.email.style.backgroundColor = "white";
            elementos.email.style.color = 'black';
            elementos.senha.style.backgroundColor = 'white';
            elementos.senha.style.color = 'black';
            elementos.rsenha.style.backgroundColor = 'white';
            elementos.rsenha.style.color = 'black';

            elementos.checkc.style.display = 'none';
            elementos.ncheckc.style.display = 'inline';

            elementos.checkM.style.display = 'none';
            elementos.ncheckM.style.display = 'inline';

            elementos.checkm.style.display = 'none';
            elementos.ncheckm.style.display = 'inline';

            elementos.checke.style.display = 'none';
            elementos.nchecke.style.display = 'inline';

            elementos.checkn.style.display = 'none';
            elementos.ncheckn.style.display = 'inline';

            elementos.cadastrar.style.border = 'red solid'
            READ()
        })
        .catch(error => console.log(error));
}

function DELETE(id) {
    fetch(url + '/pessoas/' + id + '.json', {
        method: 'DELETE'
    })
        .then(() => READ())
        .catch(error => console.log(error));
}

