/*==================================================
        BARATÃO TRABALHA COM TUDO
==================================================*/


/*==========================================
            HERO SLIDER
==========================================*/

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let slideAtual = 0;

function mostrarSlide(indice){

    slides.forEach(slide=>slide.classList.remove("active"));
    dots.forEach(dot=>dot.classList.remove("active"));

    slides[indice].classList.add("active");
    dots[indice].classList.add("active");

}

next.addEventListener("click",()=>{

    slideAtual++;

    if(slideAtual>=slides.length){

        slideAtual=0;

    }

    mostrarSlide(slideAtual);

});

prev.addEventListener("click",()=>{

    slideAtual--;

    if(slideAtual<0){

        slideAtual=slides.length-1;

    }

    mostrarSlide(slideAtual);

});

dots.forEach((dot,index)=>{

    dot.addEventListener("click",()=>{

        slideAtual=index;

        mostrarSlide(slideAtual);

    });

});

setInterval(()=>{

    slideAtual++;

    if(slideAtual>=slides.length){

        slideAtual=0;

    }

    mostrarSlide(slideAtual);

},5000);



/*==========================================
            PRODUTOS
==========================================*/

const listaProdutos = document.getElementById("lista-produtos");

const tituloCategoria = document.getElementById("titulo-categoria");



const produtos = [
    /*==========================================
                INFORMÁTICA
    ==========================================*/

    {
        nome: "Notebook Gamer",
        categoria: "informatica",
        imagem: "https://images.unsplash.com/photo-1603302576837-37561b2e2302"
    },

    {
        nome: "Notebook Dell",
        categoria: "informatica",
        imagem: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
    },

    {
        nome: "Notebook Lenovo",
        categoria: "informatica",
        imagem: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
    },

    {
        nome: "Monitor LG 24",
        categoria: "informatica",
        imagem: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf"
    },

    {
        nome: "Monitor Samsung",
        categoria: "informatica",
        imagem: "https://images.unsplash.com/photo-1585792180666-f7347c490ee2"
    },

    {
        nome: "Mouse Gamer",
        categoria: "informatica",
        imagem: "https://images.unsplash.com/photo-1527814050087-3793815479db"
    },

    {
        nome: "Mouse Sem Fio",
        categoria: "informatica",
        imagem: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46"
    },

    {
        nome: "Teclado Mecânico",
        categoria: "informatica",
        imagem: "https://images.unsplash.com/photo-1587829741301-dc798b83add3"
    },

    {
        nome: "Teclado Office",
        categoria: "informatica",
        imagem: "https://images.unsplash.com/photo-1587829741301-dc798b83add3"
    },

    {
        nome: "SSD Kingston 1TB",
        categoria: "informatica",
        imagem: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b"
    },

    {
        nome: "HD Externo 2TB",
        categoria: "informatica",
        imagem: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651"
    },

    {
        nome: "Pendrive 64GB",
        categoria: "informatica",
        imagem: "https://images.unsplash.com/photo-1625723044792-44de16ccb4e7"
    },

    {
        nome: "Impressora Epson",
        categoria: "informatica",
        imagem: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6"
    },

    {
        nome: "Impressora HP",
        categoria: "informatica",
        imagem: "https://images.unsplash.com/photo-1563770660941-20978e870e26"
    },

    {
        nome: "Webcam Full HD",
        categoria: "informatica",
        imagem: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04"
    },

    {
        nome: "Hub USB",
        categoria: "informatica",
        imagem: "https://images.unsplash.com/photo-1625842268584-8f3296236761"
    },

    {
        nome: "Fonte ATX",
        categoria: "informatica",
        imagem: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7"
    },

    {
        nome: "Memória RAM 16GB",
        categoria: "informatica",
        imagem: "https://images.unsplash.com/photo-1562976540-1502c2145186"
    },

    {
        nome: "Processador Intel i7",
        categoria: "informatica",
        imagem: "https://images.unsplash.com/photo-1591488320449-011701bb6704"
    },

    {
        nome: "Placa de Vídeo RTX",
        categoria: "informatica",
        imagem: "https://images.unsplash.com/photo-1591405351990-4726e331f141"
    },
            /*==========================================
                PAPELARIA
    ==========================================*/

    {
        nome: "Caderno Universitário",
        categoria: "papelaria",
        imagem: "https://images.unsplash.com/photo-1531346878377-a5be20888e57"
    },

    {
        nome: "Agenda 2026",
        categoria: "papelaria",
        imagem: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe"
    },

    {
        nome: "Caneta Azul Bic",
        categoria: "papelaria",
        imagem: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd"
    },

    {
        nome: "Caneta Colorida Kit",
        categoria: "papelaria",
        imagem: "https://images.unsplash.com/photo-1594583383101-8f2f6d6e1c4b"
    },

    {
        nome: "Lápis Preto",
        categoria: "papelaria",
        imagem: "https://images.unsplash.com/photo-1588072432836-e10032774350"
    },

    {
        nome: "Borracha Branca",
        categoria: "papelaria",
        imagem: "https://images.unsplash.com/photo-1560961911-ba7ef651a56c"
    },

    {
        nome: "Apontador Duplo",
        categoria: "papelaria",
        imagem: "https://images.unsplash.com/photo-1604187351574-c75ca79f5807"
    },

    {
        nome: "Régua 30cm",
        categoria: "papelaria",
        imagem: "https://images.unsplash.com/photo-1584982751601-97dcc096659c"
    },

    {
        nome: "Cola Branca",
        categoria: "papelaria",
        imagem: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8"
    },

    {
        nome: "Tesoura Escolar",
        categoria: "papelaria",
        imagem: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
    },

    {
        nome: "Mochila Escolar",
        categoria: "papelaria",
        imagem: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62"
    },

    {
        nome: "Estojo Completo",
        categoria: "papelaria",
        imagem: "https://images.unsplash.com/photo-1544816155-12df9643f363"
    },

    {
        nome: "Marca Texto Kit",
        categoria: "papelaria",
        imagem: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65"
    },

    {
        nome: "Grampos e Clipes",
        categoria: "papelaria",
        imagem: "https://images.unsplash.com/photo-1586953208448-b95a79798f07"
    },

    {
        nome: "Pasta Plástica",
        categoria: "papelaria",
        imagem: "https://images.unsplash.com/photo-1586281380349-632531db7ed4"
    },

    {
        nome: "Caderno de Desenho",
        categoria: "papelaria",
        imagem: "https://images.unsplash.com/photo-1517841905240-472988babdf9"
    },

    {
        nome: "Calculadora Simples",
        categoria: "papelaria",
        imagem: "https://images.unsplash.com/photo-1611224923853-80b023f02d71"
    },

    {
        nome: "Grampeador Pequeno",
        categoria: "papelaria",
        imagem: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd"
    },

    {
        nome: "Fita Adesiva",
        categoria: "papelaria",
        imagem: "https://images.unsplash.com/photo-1583947215259-38e31be8751f"
    },

    {
        nome: "Papel Sulfite Resma",
        categoria: "papelaria",
        imagem: "https://images.unsplash.com/photo-1586282391129-76a6df230234"
    },
        /*==========================================
                CELULARES
    ==========================================*/

    {
        nome: "iPhone 13",
        categoria: "celulares",
        imagem: "https://images.unsplash.com/photo-1632661674596-df8be070a5c5"
    },

    {
        nome: "iPhone 14",
        categoria: "celulares",
        imagem: "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb"
    },

    {
        nome: "iPhone 15",
        categoria: "celulares",
        imagem: "https://images.unsplash.com/photo-1695048133142-1a20484d2569"
    },

    {
        nome: "Samsung Galaxy S22",
        categoria: "celulares",
        imagem: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf"
    },

    {
        nome: "Samsung Galaxy S23",
        categoria: "celulares",
        imagem: "https://images.unsplash.com/photo-1678911820864-e2c567c655d7"
    },

    {
        nome: "Samsung Galaxy A54",
        categoria: "celulares",
        imagem: "https://images.unsplash.com/photo-1598327105666-5b89351aff97"
    },

    {
        nome: "Xiaomi Redmi Note 12",
        categoria: "celulares",
        imagem: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd"
    },

    {
        nome: "Xiaomi Redmi Note 13",
        categoria: "celulares",
        imagem: "https://images.unsplash.com/photo-1598327105666-5b89351aff97"
    },

    {
        nome: "Motorola Edge 40",
        categoria: "celulares",
        imagem: "https://images.unsplash.com/photo-1598327105666-5b89351aff97"
    },

    {
        nome: "Motorola G84",
        categoria: "celulares",
        imagem: "https://images.unsplash.com/photo-1567581935884-3349723552ca"
    },

    {
        nome: "Moto G54",
        categoria: "celulares",
        imagem: "https://images.unsplash.com/photo-1580910051074-3eb694886505"
    },

    {
        nome: "Asus Zenfone 10",
        categoria: "celulares",
        imagem: "https://images.unsplash.com/photo-1598327105666-5b89351aff97"
    },

    {
        nome: "Realme C55",
        categoria: "celulares",
        imagem: "https://images.unsplash.com/photo-1598327105666-5b89351aff97"
    },

    {
        nome: "Realme 11 Pro",
        categoria: "celulares",
        imagem: "https://images.unsplash.com/photo-1605236453806-6ff36851218e"
    },

    {
        nome: "Poco X5 Pro",
        categoria: "celulares",
        imagem: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
    },

    {
        nome: "Poco F5",
        categoria: "celulares",
        imagem: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
    },

    {
        nome: "Nokia G60",
        categoria: "celulares",
        imagem: "https://images.unsplash.com/photo-1598327105666-5b89351aff97"
    },

    {
        nome: "LG K52",
        categoria: "celulares",
        imagem: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
    },

    {
        nome: "iPhone SE",
        categoria: "celulares",
        imagem: "https://images.unsplash.com/photo-1605236453806-6ff36851218e"
    },

    {
        nome: "Samsung Galaxy Z Flip 5",
        categoria: "celulares",
        imagem: "https://images.unsplash.com/photo-1695048133142-1a20484d2569"
    },
            /*==========================================
                ÁUDIO
    ==========================================*/

    {
        nome: "Fone Bluetooth JBL",
        categoria: "audio",
        imagem: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
    },

    {
        nome: "Headphone JBL Tune 510",
        categoria: "audio",
        imagem: "https://images.unsplash.com/photo-1484704849700-f032a568e944"
    },

    {
        nome: "Headset Gamer RGB",
        categoria: "audio",
        imagem: "https://images.unsplash.com/photo-1599669454699-248893623440"
    },

    {
        nome: "Caixa de Som JBL Charge",
        categoria: "audio",
        imagem: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1"
    },

    {
        nome: "Caixa de Som JBL Flip",
        categoria: "audio",
        imagem: "https://images.unsplash.com/photo-1545454675-3531b543be5d"
    },

    {
        nome: "Caixa de Som Portátil Xiaomi",
        categoria: "audio",
        imagem: "https://images.unsplash.com/photo-1589003077984-894e133dabab"
    },

    {
        nome: "Fone de Ouvido com Fio",
        categoria: "audio",
        imagem: "https://images.unsplash.com/photo-1583394838336-acd977736f90"
    },

    {
        nome: "AirPods Pro",
        categoria: "audio",
        imagem: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434"
    },

    {
        nome: "AirPods 3ª Geração",
        categoria: "audio",
        imagem: "https://images.unsplash.com/photo-1606741965509-2b0f7e8a2d53"
    },

    {
        nome: "Headset Logitech G435",
        categoria: "audio",
        imagem: "https://images.unsplash.com/photo-1612444530582-fc66183b16f4"
    },

    {
        nome: "Headset HyperX Cloud Stinger",
        categoria: "audio",
        imagem: "https://images.unsplash.com/photo-1599669454699-248893623440"
    },

    {
        nome: "Microfone Condensador USB",
        categoria: "audio",
        imagem: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc"
    },

    {
        nome: "Microfone Gamer RGB",
        categoria: "audio",
        imagem: "https://images.unsplash.com/photo-1589903308904-1010c2294adc"
    },

    {
        nome: "Soundbar Samsung",
        categoria: "audio",
        imagem: "https://images.unsplash.com/photo-1545454675-3531b543be5d"
    },

    {
        nome: "Soundbar LG",
        categoria: "audio",
        imagem: "https://images.unsplash.com/photo-1545454675-3531b543be5d"
    },

    {
        nome: "Caixa de Som Boombox",
        categoria: "audio",
        imagem: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1"
    },

    {
        nome: "Rádio Portátil",
        categoria: "audio",
        imagem: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91"
    },

    {
        nome: "Fone Gamer Redragon",
        categoria: "audio",
        imagem: "https://images.unsplash.com/photo-1599669454699-248893623440"
    },

    {
        nome: "Fone Bluetooth Sony",
        categoria: "audio",
        imagem: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
    },

    {
        nome: "Headset Profissional Estúdio",
        categoria: "audio",
        imagem: "https://images.unsplash.com/photo-1484704849700-f032a568e944"
    }
];

/*==========================================
        RENDERIZAÇÃO DOS PRODUTOS
==========================================*/

function mostrarProdutos(categoria = "todos") {

    listaProdutos.innerHTML = "";

    let filtrados = produtos;

    if (categoria !== "todos") {
        filtrados = produtos.filter(p => p.categoria === categoria);
    }

    if (filtrados.length === 0) {
        listaProdutos.innerHTML = "<p>Nenhum produto encontrado.</p>";
        return;
    }

    filtrados.forEach(produto => {

        const card = document.createElement("div");
        card.classList.add("card-produto");

        card.innerHTML = `
    <img src="${produto.imagem}" alt="${produto.nome}">
    
    <h3>${produto.nome}</h3>

    <a 
    class="btn-whatsapp"
    href="https://wa.me/91993025361?text=Olá,%20gostaria%20de%20saber%20mais%20informações%20sobre%20o%20produto%20${produto.nome}"
    target="_blank">

    💬 Consultar no WhatsApp

    </a>
`;

        listaProdutos.appendChild(card);
    });
}


/*==========================================
        MENU DE CATEGORIAS
==========================================*/

const botoesMenu = document.querySelectorAll(".menu-item");

botoesMenu.forEach(botao => {

    botao.addEventListener("click", () => {

        const categoria = botao.getAttribute("data-categoria");

        tituloCategoria.innerText = botao.innerText;

        mostrarProdutos(categoria);
    });

});


mostrarProdutos();

const inputBusca = document.getElementById("busca");

inputBusca.addEventListener("input", () => {

    const texto = inputBusca.value.toLowerCase();

    const filtrados = produtos.filter(produto =>
        produto.nome.toLowerCase().includes(texto)
    );

    listaProdutos.innerHTML = "";

    filtrados.forEach(produto => {

        const card = document.createElement("div");
        card.classList.add("card-produto");

        card.innerHTML = `
    <img src="${produto.imagem}" alt="${produto.nome}">
    <h3>${produto.nome}</h3>

    <button class="btn-carrinho" onclick="adicionarCarrinho('${produto.nome}')">
        ➕ Adicionar ao orçamento
    </button>

    <a class="btn-whatsapp"
       href="https://wa.me/SEUNUMERO?text=Olá,%20quero%20saber%20mais%20sobre%20${produto.nome}"
       target="_blank">
       💬 WhatsApp
    </a>
`;

        listaProdutos.appendChild(card);
    });

});