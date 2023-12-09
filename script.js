let lista = document.getElementById('lista');
window.addEventListener('load', carregarProdutos);


function carregarSite() {
    carregarProdutos();
    carregarDarkMode();
}

function carregarDarkMode() {
    let status = localStorage.getItem('darkMode')
    if (status == 'ativado') {
        document.getElementById('corpo').classList.add('dark-mode')
    } else {
        document.getElementById('corpo').classList.remove('dark-mode')
    }
}

document.getElementById('lightbulb').addEventListener('click', interruptor);

function interruptor() {
    let status = localStorage.getItem('darkMode');

    if (status == 'ativado') {
        document.getElementById('corpo').classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'desativado');
    } else {
        document.getElementById('corpo').classList.add('dark-mode');
        localStorage.setItem('darkMode', 'ativado');
    }
}

function carregarProdutos() {
    fetch(`https://run.mocky.io/v3/9880c66d-a366-4248-8142-0f13111c0f0c`)
    .then((response) => response.json())
    .then(data => {
     data.map((bebida) =>{
        lista.innerHTML +=
        `<div class="col-sm-6 style="margin : 5% 0">
            <div class="card" style="width: 17rem;">
                    <img src="${bebida.url}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${bebida.nome}</h5>
                        <p class="card-text">${bebida.descricao}</p>
                        <h4 class="card-text">${bebida.preco}</h4>
                        <a href="/checkout.html" class="btn btn-primary">Comprar</a>
            
                    </div>
            </div>
        </div>`;
     })
    }
    )
}





// function listarProdutos(){

//     for (let i = 0; i <= 10; i++) {
//         lista.innerHTML += 
//         `<div class="col-sm-6 style="margin : 5% 0">
//             <div class="card" style="width: 17rem;">
//                     <img src="${listaDeBebidas[i].url}" class="card-img-top" alt="...">
//                     <div class="card-body">
//                         <h5 class="card-title">${listaDeBebidas[i].nome}</h5>
//                         <p class="card-text">${listaDeBebidas[i].descricao}</p>
//                         <h4 class="card-text">${listaDeBebidas[i].preco}</h4>
//                         <a href="/checkout.html" class="btn btn-primary">Comprar</a>
            
//                     </div>
//             </div>
//         </div>`;

//     }
// }