var banners = ["Os melhores do brasil", "Qualidade e preço bom"]; 
var indiceBanner = 0; 

function trocarbanner() { 
    indiceBanner = (indiceBanner + 1) % banners.length; 
    document.querySelector("h2.mensagem").textContent = banners[indiceBanner]; 
} 

setInterval(trocarbanner, 1000);
