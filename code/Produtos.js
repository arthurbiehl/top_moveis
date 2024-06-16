const items = [
    {
        nome: "mesa",
        sobre: "colocar coisas",
        img: '../static/product.jpg',
        categoria: "Sala"
    },
    {
        nome: "cadeira",
        sobre: "sentar",
        img: '../static/cadeira.png',
        categoria: "Sala"
    },
    {
        nome: "Sofa",
        sobre: "Utilize para sentar",
        img: '../static/imagem2.jpg',
        categoria: "Sala"
    },
    {
        nome: "Pia",
        sobre: "trabalhar",
        img: '../static/pia.png',
        categoria: "Cozinha"
    },
];

function inicializarLoja() {
    var containerProdutos = document.getElementById('stonks');
    containerProdutos.innerHTML = '';

    var categorias = {};
    items.forEach((item) => {
        if (!categorias[item.categoria]) {
            categorias[item.categoria] = [];
        }
        categorias[item.categoria].push(item);
    });

    for (var categoria in categorias) {
        categorias[categoria].forEach((val) => {
            containerProdutos.innerHTML += `
            <div class="single">
                <div class="single_img">
                        <img src="${val.img}">
                    </div>
                <h2>${val.nome}</h2>
                <p>${val.sobre}</p>
            </div>
            `;
        });
    }
}

function filtrarPorCategoria() {
    var categoriaSelecionada = document.getElementById('categoriaSelect').value;
    var containerProdutos = document.getElementById('stonks');
    containerProdutos.innerHTML = '';

    if (categoriaSelecionada === 'todos') {
        inicializarLoja();
    } else {
        var itensFiltrados = items.filter(item => item.categoria === categoriaSelecionada);

        if (itensFiltrados.length > 0) {
            itensFiltrados.forEach((val) => {
                containerProdutos.innerHTML += `
                <div class="single">
                    <div class="single_img">
                        <img src="${val.img}">
                    </div>
                    <h2>${val.nome}</h2>
                    <p>${val.sobre}</p>
                </div>
                `;
            });
        } else {
            containerProdutos.innerHTML += `

            <div class="vazio">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
                <h1>Sem itens na categoria ${categoriaSelecionada}</h1>

            </div>
            
            `;
        }
    }
}

// Inicializar a loja ao carregar a página
document.addEventListener('DOMContentLoaded', inicializarLoja);

function buscarItensPorNome() {
    const inputBusca = document.getElementById('inputBusca');
    const termoBusca = inputBusca.value.trim().toLowerCase();

    const itemsFiltrados = items.filter(item => item.nome.toLowerCase().includes(termoBusca));

    var containerProdutos = document.getElementById('stonks');
    containerProdutos.innerHTML = '';

    if (itemsFiltrados.length == 0) {
        containerProdutos.innerHTML = `

        <div class="erro">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
            <div class="NE">
                

                <img src="../static/nao_encontrado.png" alt="">
                <p>NAO ENCONTRADO</p>
            </div>
        
        </div>

        
        
        `;
    } else {
        itemsFiltrados.forEach(val => {
            containerProdutos.innerHTML += `
                <div class="single">
                    <div class="single_img">
                        <img src="${val.img}">
                    </div>
                    <h2>${val.nome}</h2>
                    <p>${val.sobre}</p>
                </div>
                `;
        });
    }



}

document.addEventListener('DOMContentLoaded', function () {
    inicializarBonecos();
});
