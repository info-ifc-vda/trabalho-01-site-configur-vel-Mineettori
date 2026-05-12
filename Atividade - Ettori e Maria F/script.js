const flavors = {
    Morango: [
        { src: 'Morango/Bolo_Morango.jpeg', alt: 'Bolo de Morango', desc: 'O bolo de morango é uma sobremesa deliciosa e refrescante, perfeita para qualquer ocasião. Ele é feito com camadas de bolo macio, recheio de creme de morango e coberto com chantilly e morangos frescos. A combinação do sabor doce do bolo com a acidez dos morangos cria uma experiência única e irresistível para os amantes de doces.' },
        { src: 'Morango/Brigadeiro_Morango.jpeg', alt: 'Brigadeiro de Morango', desc: 'O brigadeiro de morango é uma delícia cremosa e frutada, ideal para festas e encontros. Feito com leite condensado, chocolate e morangos frescos, oferece um equilíbrio perfeito entre doçura e frescor.' },
        { src: 'Morango/Cupcake_Morango.jpeg', alt: 'Cupcake de Morango', desc: 'O cupcake de morango é um doce individual e charmoso, perfeito para presentear. Com massa leve e cobertura de chantilly com morangos, é uma opção refrescante e elegante.' },
        { src: 'Morango/Milkshake_Morango.jpeg', alt: 'Milkshake de Morango', desc: 'O milkshake de morango é uma bebida gelada e reconfortante, ideal para dias quentes. Preparado com morangos frescos, leite e sorvete, proporciona uma explosão de frescor e doçura.' },
        { src: 'Morango/Sorvete_Morango.jpeg', alt: 'Sorvete de Morango', desc: 'O sorvete de morango é uma sobremesa gelada e cremosa, perfeita para refrescar. Feito com morangos naturais e leite, oferece um sabor leve e adocicado, ideal para qualquer estação.' }
    ],
    Chocolate: [
        { src: 'Chocolate/Bolo_Chocolate.jpeg', alt: 'Bolo de Chocolate', desc: 'O bolo de chocolate é uma sobremesa rica e intensa, amada por todos. Com camadas de bolo úmido e cobertura de chocolate derretido, é perfeito para satisfazer o desejo por algo doce e decadente.' },
        { src: 'Chocolate/Brigadeiro_Chocolate.jpeg', alt: 'Brigadeiro de Chocolate', desc: 'O brigadeiro de chocolate é um clássico brasileiro, cremoso e irresistível. Feito com leite condensado e chocolate, é uma opção simples e deliciosa para qualquer ocasião.' },
        { src: 'Chocolate/Cupcake_Chocolate.jpeg', alt: 'Cupcake de Chocolate', desc: 'O cupcake de chocolate é um doce pequeno e poderoso, com massa rica em cacau e cobertura cremosa. Ideal para quem busca uma dose concentrada de prazer chocolatudo.' },
        { src: 'Chocolate/Milkshake_Chocolate.jpeg', alt: 'Milkshake de Chocolate', desc: 'O milkshake de chocolate é uma bebida indulgente e reconfortante. Preparado com chocolate derretido, leite e sorvete, oferece uma textura cremosa e um sabor profundo.' },
        { src: 'Chocolate/Sorvete_Sorvete.jpeg', alt: 'Sorvete de Chocolate', desc: 'O sorvete de chocolate é uma sobremesa gelada e luxuosa, feita com cacau puro. Sua cremosidade e intensidade fazem dele uma escolha perfeita para os amantes de chocolate.' }
    ],
    Laranja: [
        { src: 'Laranja/Bolo_Laranja.jpeg', alt: 'Bolo de Laranja', desc: 'O bolo de laranja é uma sobremesa cítrica e leve, perfeita para dias ensolarados. Com massa aromática e cobertura de glacê, combina frescor e doçura de forma equilibrada.' },
        { src: 'Laranja/Brigadeiro_Laranja.jpeg', alt: 'Brigadeiro de Laranja', desc: 'O brigadeiro de laranja é uma variação refrescante do clássico, com toque cítrico. Cremoso e adocicado, é ideal para quem gosta de sabores leves e frutados.' },
        { src: 'Laranja/Cupcake_Laranja.jpeg', alt: 'Cupcake de Laranja', desc: 'O cupcake de laranja é um doce individual e aromático, com massa leve e cobertura cítrica. Perfeito para um lanche rápido ou uma sobremesa leve.' },
        { src: 'Laranja/Milkshake_Laranja.jpeg', alt: 'Milkshake de Laranja', desc: 'O milkshake de laranja é uma bebida vibrante e refrescante, feita com suco natural de laranja. Gelado e doce, é uma opção saudável e deliciosa.' },
        { src: 'Laranja/Sorvete_Laranja.jpeg', alt: 'Sorvete de Laranja', desc: 'O sorvete de laranja é uma sobremesa gelada e cítrica, com sabor autêntico de frutas frescas. Cremoso e leve, ideal para refrescar em dias quentes.' }
    ],
    Baunilha: [
        { src: 'Baunilha/Bolo_Baunilha.jpeg', alt: 'Bolo de Baunilha', desc: 'O bolo de baunilha é um clássico atemporal, suave e elegante. Com massa leve e cobertura simples, é perfeito para qualquer celebração ou momento especial.' },
        { src: 'Baunilha/Brigadeiro_Baunilha.jpeg', alt: 'Brigadeiro de Baunilha', desc: 'O brigadeiro de baunilha é uma versão delicada do doce brasileiro, com aroma sutil. Cremoso e versátil, combina bem com diversos sabores.' },
        { src: 'Baunilha/Cupcake_Baunilha.jpeg', alt: 'Cupcake de Baunilha', desc: 'O cupcake de baunilha é um doce simples e charmoso, com massa macia e cobertura leve. Ideal para customizar com toppings variados.' },
        { src: 'Baunilha/Milkshake_Baunilha.jpeg', alt: 'Milkshake de Baunilha', desc: 'O milkshake de baunilha é uma bebida clássica e reconfortante, feita com extrato natural. Cremoso e suave, é uma escolha segura para todos os gostos.' },
        { src: 'Baunilha/Sorvete_Baunilha.jpeg', alt: 'Sorvete de Baunilha', desc: 'O sorvete de baunilha é uma sobremesa gelada e tradicional, com sabor puro e autêntico. Sua cremosidade faz dele um favorito atemporal.' }
    ],
    Banana: [
        { src: 'Banana/Bolo_Banana.jpeg', alt: 'Bolo de Banana', desc: 'O bolo de banana é uma sobremesa úmida e aromática, perfeita para usar bananas maduras. Com textura macia e sabor natural, é uma opção caseira e reconfortante.' },
        { src: 'Banana/Brigadeiro_Banana.jpeg', alt: 'Brigadeiro de Banana', desc: 'O brigadeiro de banana é uma variação tropical do clássico, com sabor frutado. Cremoso e doce, combina o melhor dos dois mundos.' },
        { src: 'Banana/Cupcake_Banana.jpeg', alt: 'Cupcake de Banana', desc: 'O cupcake de banana é um doce individual e úmido, com aroma irresistível. Ideal para um lanche saudável e delicioso.' },
        { src: 'Banana/Milkshake_Banana.jpeg', alt: 'Milkshake de Banana', desc: 'O milkshake de banana é uma bebida cremosa e energética, feita com bananas frescas. Nutritivo e saboroso, é perfeito para começar o dia.' },
        { src: 'Banana/Sorvete_Banana.jpeg', alt: 'Sorvete de Banana', desc: 'O sorvete de banana é uma sobremesa gelada e tropical, com sabor intenso de fruta. Cremoso e refrescante, ideal para dias quentes.' }
    ]
};

let currentFlavor = 'Morango';
let currentIndex = 0;

const mainImage = document.getElementById('main-image');
const descriptionElement = document.getElementById('image-description');
const select = document.getElementById('flavor-select');
const fontSizeRange = document.getElementById('font-size-range');
const fontSizeValue = document.getElementById('font-size-value');
const carouselImage = document.querySelector('.carousel-image');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');

const flavorThemes = {
    Morango: {
        navbar: '#b80f3a',
        body: '#fde6ec',
        surface: '#ffffff',
        button: '#c11f31',
        buttonHover: '#9f1727',
        footer: '#b80f3a'
    },
    Chocolate: {
        navbar: '#543733',
        body: '#B59173',
        surface: '#FEE9D3',
        button: '#6f3f3a',
        buttonHover: '#5a352f',
        footer: '#543733'
    },
    Laranja: {
        navbar: '#1D5902',
        body: '#F2911B',
        surface: '#ffcb6b',
        button: '#be8926',
        buttonHover: '#966711',
        footer: '#1D5902'
    },
    Baunilha: {
        navbar: '#b0915d',
        body: '#f2e0bb',
        surface: '#fff8e6',
        button: '#98744a',
        buttonHover: '#7c5f3c',
        footer: '#b0915d'
    },
    Banana: {
        navbar: '#F7D326',
        body: '#f3ee8a',
        surface: '#fff644',
        button: '#f3ec69',
        buttonHover: '#cec857',
        footer: '#F7D326'
    }
};

function applyTheme(flavor) {
    const theme = flavorThemes[flavor] || flavorThemes.Morango;
    document.documentElement.style.setProperty('--navbar-bg', theme.navbar);
    document.documentElement.style.setProperty('--body-bg', theme.body);
    document.documentElement.style.setProperty('--surface-bg', theme.surface);
    document.documentElement.style.setProperty('--button-bg', theme.button);
    document.documentElement.style.setProperty('--button-hover', theme.buttonHover);
    document.documentElement.style.setProperty('--footer-bg', theme.footer);
}

function applyFontSize(size) {
    document.documentElement.style.setProperty('--global-font-size', `${size}px`);
    fontSizeValue.textContent = `${size}px`;
}

function updateCarousel() {
    const slide = flavors[currentFlavor][currentIndex];
    carouselImage.src = slide.src;
    carouselImage.alt = slide.alt;
}

function updateMainImage(index) {
    const slide = flavors[currentFlavor][index];
    mainImage.src = slide.src;
    mainImage.alt = slide.alt;
    descriptionElement.textContent = slide.desc;
}

function changeFlavor() {
    currentFlavor = select.value;
    currentIndex = 0;
    applyTheme(currentFlavor);
    updateCarousel();
    updateMainImage(0);
}

select.addEventListener('change', changeFlavor);
fontSizeRange.addEventListener('input', () => applyFontSize(fontSizeRange.value));

carouselImage.addEventListener('click', () => {
    updateMainImage(currentIndex);
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + flavors[currentFlavor].length) % flavors[currentFlavor].length;
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % flavors[currentFlavor].length;
    updateCarousel();
});

applyTheme(currentFlavor);
applyFontSize(fontSizeRange.value);
updateCarousel();
updateMainImage(0);
