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
        img: 'https://images.unsplash.com/photo-1616628188506-4bf98d414a36?auto=format&fit=crop&w=300&q=80'
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

// ==========================================
// MOCK DATA FOR "BRINDES" (5-COLUMN GRID)
// Extracted from the provided image
// ==========================================
const brindesData = [
    { 
        title: "Tubete 11cm Tampa Plástica", 
        pixPrice: "0,70", 
        oldPrice: "R$0,78", 
        colors: ['#fff', '#ffb6c1', '#add8e6'], 
        img: "https://images.unsplash.com/photo-1629851675765-b1ab195dfb7d?auto=format&fit=crop&w=200&q=80" 
    },
    { 
        title: "Saco Ziplock Metalizado 10x17cm", 
        pixPrice: "0,86", 
        oldPrice: "R$0,95", 
        colors: [], 
        img: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?auto=format&fit=crop&w=200&q=80" 
    },
    { 
        title: "Foto Caneca (Caneca Rosqueável) 350ml", 
        pixPrice: "4,76", 
        oldPrice: "R$5,29", 
        colors: ['#ff0000', '#0000ff', '#ffff00', '#008000', '#ffc0cb', '#ffffff'], 
        img: "https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?auto=format&fit=crop&w=200&q=80" 
    },
    { 
        title: "Tubo Lata Tampa Metalizada Dourada 5x7", 
        pixPrice: "5,03", 
        oldPrice: "R$5,59", 
        colors: [], 
        img: "https://images.unsplash.com/photo-1616628188506-4bf98d414a36?auto=format&fit=crop&w=200&q=80" 
    },
    { 
        title: "Saco Ziplock Transparente 10x17", 
        pixPrice: "0,89", 
        oldPrice: "R$0,99", 
        colors: [], 
        img: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=200&q=80" 
    },
    { 
        title: "Balde de Pipoca 1 Litro", 
        pixPrice: "2,33", 
        oldPrice: "R$2,59", 
        colors: ['#ff0000', '#ffff00', '#00bfff'], 
        img: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&w=200&q=80" 
    },
    { 
        title: "Massinha de Modelar 6 Cores 90g - Magix", 
        pixPrice: "2,66", 
        oldPrice: "R$2,95", 
        colors: [], 
        img: "https://images.unsplash.com/photo-1531346878377-244cb17983ea?auto=format&fit=crop&w=200&q=80" 
    },
    { 
        title: "Papel Color Plus 180g A4 Unidade - Cores Escuras", 
        pixPrice: "1,31", 
        oldPrice: "R$1,45", 
        colors: [], 
        img: "https://images.unsplash.com/photo-1596443686812-2f45229eebc3?auto=format&fit=crop&w=200&q=80" 
    },
    { 
        title: "Tubo Lata 7x10 - Tampa Plástica - Cor: Branco", 
        pixPrice: "3,56", 
        oldPrice: "R$3,95", 
        colors: [], 
        img: "https://images.unsplash.com/photo-1616628188506-4bf98d414a36?auto=format&fit=crop&w=200&q=80" 
    },
    { 
        title: "Saco Ziplock Metalizado 12x19cm", 
        pixPrice: "1,04", 
        oldPrice: "R$1,15", 
        colors: [], 
        img: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?auto=format&fit=crop&w=200&q=80" 
    },
    { 
        title: "Papel Lamicote 240g A4 Laminado Cor Ouro", 
        pixPrice: "1,97", 
        oldPrice: "R$2,19", 
        colors: [], 
        img: "https://images.unsplash.com/photo-1531346878377-244cb17983ea?auto=format&fit=crop&w=200&q=80" 
    },
    { 
        title: "Caixa Mini Organizadora 6 Divisórias Transparente", 
        pixPrice: "3,56", 
        oldPrice: "R$3,95", 
        colors: [], 
        img: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=200&q=80" 
    },
    { 
        title: "Squeeze 300ml", 
        pixPrice: "2,51", 
        oldPrice: "R$2,79", 
        colors: ['#ffc0cb', '#fffafa'], 
        img: "https://images.unsplash.com/photo-1616628188506-4bf98d414a36?auto=format&fit=crop&w=200&q=80" 
    },
    { 
        title: "Latinha Mint To Be 5x1", 
        pixPrice: "0,35", 
        oldPrice: "R$0,39", 
        colors: ['#ffd700', '#ff69b4', '#00ced1', '#ffa500', '#ffffff'], 
        img: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&w=200&q=80" 
    },
    { 
        title: "Tubo Lata 10x10 - Tampa Plástica - Cor: Branco", 
        pixPrice: "3,74", 
        oldPrice: "R$4,15", 
        colors: [], 
        img: "https://images.unsplash.com/photo-1616628188506-4bf98d414a36?auto=format&fit=crop&w=200&q=80" 
    }
];

// Function to generate Category Grid HTML (Brindes)
function createCategoryCard(item) {
    let colorsHtml = item.colors.length > 0 
        ? item.colors.map(color => `<div class="swatch" style="background-color: ${color}"></div>`).join('') 
        : '';

    return `
        <div class="grid-item-card">
            <img src="${item.img}" alt="${item.title}" class="grid-item-img">
            <div class="color-swatches">${colorsHtml}</div>
            <h3 class="grid-item-title">${item.title}</h3>
            <div class="grid-item-pix">
                <i class="fas fa-gem"></i> R$${item.pixPrice} <span>com Pix</span>
            </div>
            <div class="grid-item-old">ou ${item.oldPrice}</div>
            <button class="btn-grid-buy">COMPRAR</button>
        </div>
    `;
}

// Ensure execution on DOM Load
document.addEventListener('DOMContentLoaded', () => {
    const brindesGrid = document.getElementById('brindes-category-grid');
    if(brindesGrid) {
        brindesGrid.innerHTML = brindesData.map(createCategoryCard).join('');
    }
});
