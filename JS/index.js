// Mock Data for Products imitating the reference layout
const products = [
    {
        id: 1,
        title: 'Ímã de geladeira ACRÍLICO Quadrado - Tamanho: 6x6cm - Pct com 05',
        oldPrice: 'R$ 15,90',
        price: 'R$ 13,90',
        pixPrice: 'R$ 12,51 com Pix',
        badge: 'Lançamento',
        img: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=300&q=80'
    },
    {
        id: 2,
        title: 'Pingente acrílico Mini Maçã - Cor: Dourado Metalizado - Pct com 05',
        oldPrice: '',
        price: 'R$ 4,90',
        pixPrice: 'R$ 4,41 com Pix',
        badge: '-10%',
        img: '../img/coracao.png'
    },
    {
        id: 3,
        title: 'Lápis HB Tons Pastel Candy Colors - Redondo com borracha - Kit c/ 08',
        oldPrice: 'R$ 12,00',
        price: 'R$ 9,95',
        pixPrice: 'R$ 8,96 com Pix',
        badge: '',
        img: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&w=300&q=80'
    },
    {
        id: 4,
        title: 'Porta-Retrato Acrílico Transparente Base Branca RETANGULAR',
        oldPrice: 'R$ 29,90',
        price: 'R$ 26,90',
        pixPrice: 'R$ 24,21 com Pix',
        badge: 'Mais Vendido',
        img: 'https://images.unsplash.com/photo-1596443686812-2f45229eebc3?auto=format&fit=crop&w=300&q=80'
    },
    {
        id: 5,
        title: 'Papel Lamicote 180g A4 Cor Ouro FOSCO - Unidade',
        oldPrice: '',
        price: 'R$ 1,99',
        pixPrice: 'R$ 1,79 com Pix',
        badge: '',
        img: 'https://images.unsplash.com/photo-1531346878377-244cb17983ea?auto=format&fit=crop&w=300&q=80'
    },
    {
        id: 6,
        title: 'Caneca Porcelana Branca (AAA) - Para DTF/Sublimação',
        oldPrice: 'R$ 16,90',
        price: 'R$ 13,49',
        pixPrice: 'R$ 12,14 com Pix',
        badge: 'Oferta',
        img: 'https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?auto=format&fit=crop&w=300&q=80'
    },
    {
        id: 7,
        title: 'Adesivo DTF UV Dia dos Professores - Estampa Maçã',
        oldPrice: 'R$ 2,50',
        price: 'R$ 1,39',
        pixPrice: 'R$ 1,25 com Pix',
        badge: '',
        img: 'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?auto=format&fit=crop&w=300&q=80'
    },
    {
        id: 8,
        title: 'Furador Círculo 25mm (2,5cm) - Jumbo - Art Montagem',
        oldPrice: '',
        price: 'R$ 34,90',
        pixPrice: 'R$ 31,41 com Pix',
        badge: 'Esgotado',
        img: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=300&q=80'
    }
];

// Function to generate Product HTML
function createProductCard(product) {
    return `
        <div class="product-card">
            ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
            <img src="${product.img}" alt="${product.title}" class="product-img">
            <h3 class="product-title">${product.title}</h3>
            ${product.oldPrice ? `<div class="product-price-old">${product.oldPrice}</div>` : '<div style="height:20px;"></div>'}
            <div class="product-price">${product.price}</div>
            <div class="product-pix">${product.pixPrice}</div>
            <button class="btn-buy"><i class="fas fa-shopping-cart"></i> Comprar</button>
        </div>
    `;
}

// Inject Products on DOM Load
document.addEventListener('DOMContentLoaded', () => {
    const newArrivalsGrid = document.getElementById('new-arrivals');
    const bestSellersGrid = document.getElementById('best-sellers');

    if(newArrivalsGrid) {
        // Just populate first 4 for new arrivals
        newArrivalsGrid.innerHTML = products.slice(0, 4).map(createProductCard).join('');
    }

    if(bestSellersGrid) {
        // Populate all 8 for best sellers
        bestSellersGrid.innerHTML = products.map(createProductCard).join('');
    }
});

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
