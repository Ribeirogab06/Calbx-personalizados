// 1. O nosso "Banco de Dados" simulado. 
// Note que agora todo produto tem uma propriedade chamada "categoria".
const produtosBD = [
    // --- BRINDES ---
    {
        id: 1,
        categoria: 'brindes',
        title: 'Ímã de geladeira ACRÍLICO Quadrado',
        oldPrice: 'R$ 15,90',
        price: 'R$ 13,90',
        pixPrice: 'R$ 12,51',
        img: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=300&q=80'
    },
    {
        id: 2,
        categoria: 'brindes',
        title: 'Pingente acrílico Mini Maçã Dourado',
        oldPrice: 'R$ 6,00',
        price: 'R$ 4,90',
        pixPrice: 'R$ 4,41',
        img: 'https://images.unsplash.com/photo-1616628188506-4bf98d414a36?auto=format&fit=crop&w=300&q=80'
    },
    // --- DTF ---
    {
        id: 3,
        categoria: 'dtf',
        title: 'Adesivo DTF UV Dia dos Professores',
        oldPrice: 'R$ 2,50',
        price: 'R$ 1,39',
        pixPrice: 'R$ 1,25',
        img: 'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?auto=format&fit=crop&w=300&q=80'
    },
    {
        id: 4,
        categoria: 'dtf',
        title: 'Folha DTF A4 Personalizada',
        oldPrice: 'R$ 15,00',
        price: 'R$ 12,00',
        pixPrice: 'R$ 10,80',
        img: 'https://images.unsplash.com/photo-1531346878377-244cb17983ea?auto=format&fit=crop&w=300&q=80'
    },
    // --- CANECAS E COPOS ---
    {
        id: 5,
        categoria: 'canecas',
        title: 'Caneca Porcelana Branca (AAA)',
        oldPrice: 'R$ 16,90',
        price: 'R$ 13,49',
        pixPrice: 'R$ 12,14',
        img: 'https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?auto=format&fit=crop&w=300&q=80'
    },
    // --- FERRAMENTAS ---
    {
        id: 6,
        categoria: 'ferramentas',
        title: 'Furador Círculo 25mm Jumbo',
        oldPrice: 'R$ 40,00',
        price: 'R$ 34,90',
        pixPrice: 'R$ 31,41',
        img: 'https://images.unsplash.com/photo-1596443686812-2f45229eebc3?auto=format&fit=crop&w=300&q=80'
    }
];

// 2. Função responsável por transformar o Objeto em HTML (Desenhar na tela)
function criarCartaoProduto(produto) {
    return `
        <div class="product-card">
            <img src="${produto.img}" alt="${produto.title}" class="product-img">
            <h3 class="product-title">${produto.title}</h3>
            ${produto.oldPrice ? `<div class="product-price-old">${produto.oldPrice}</div>` : '<div style="height:20px;"></div>'}
            <div class="product-price">${produto.price}</div>
            <div class="product-pix"><i class="fas fa-gem"></i> R$${produto.pixPrice} <span>com Pix</span></div>
            <button class="btn-buy"><i class="fas fa-shopping-cart"></i> Comprar</button>
        </div>
    `;
}

// 3. Função que recebe uma lista de produtos e injeta no HTML
function renderizarProdutos(listaDeProdutos) {
    const grid = document.getElementById('main-product-grid');
    if (!grid) return;
    
    // Se a lista estiver vazia, mostramos uma mensagem
    if (listaDeProdutos.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #666;">Nenhum produto encontrado nesta categoria.</p>';
        return;
    }
    
    // Transforma a lista de objetos em texto HTML e injeta na div
    grid.innerHTML = listaDeProdutos.map(criarCartaoProduto).join('');
}

// 4. Configurando a lógica de Filtro (Ouve os cliques no menu)
document.addEventListener('DOMContentLoaded', () => {
    // Quando a página carregar, renderizamos TODOS os produtos
    renderizarProdutos(produtosBD);

    // Capturamos todos os links de categoria no menu
    const botoesCategoria = document.querySelectorAll('#dynamic-nav a');
    const tituloSecao = document.getElementById('catalogo-titulo');

    botoesCategoria.forEach(botao => {
        botao.addEventListener('click', (evento) => {
            evento.preventDefault(); // Impede a página de recarregar

            // Remove a cor dourada de todos os links e coloca apenas no clicado
            botoesCategoria.forEach(b => b.style.color = 'var(--white)');
            botao.style.color = 'var(--gold)';

            // Descobre qual categoria foi clicada através do atributo 'data-category'
            const categoriaEscolhida = botao.getAttribute('data-category');

            // LÓGICA DO FILTRO: 
            if (categoriaEscolhida === 'todos') {
                // Se for "todos", envia o banco de dados inteiro
                tituloSecao.innerText = 'Nosso Catálogo';
                renderizarProdutos(produtosBD);
            } else {
                // Se for específico, cria uma lista nova apenas com os produtos correspondentes
                const produtosFiltrados = produtosBD.filter(produto => produto.categoria === categoriaEscolhida);
                
                // Atualiza o título dinamicamente com o texto do botão
                tituloSecao.innerText = botao.innerText;
                
                // Renderiza a nova lista
                renderizarProdutos(produtosFiltrados);
            }
        });
    });
});
