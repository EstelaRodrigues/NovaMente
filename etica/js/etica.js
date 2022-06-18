function fecha_abre1(){
    
    document.getElementById("acessibilidade-hid").style.visibility="visible";
    document.getElementById("acessibilidade").style.visibility="hidden";
}

function fecha_abre2(){
    
    document.getElementById("acessibilidade-hid").style.visibility="hidden";
    document.getElementById("acessibilidade").style.visibility="visible";
    document.querySelector(".acess1-fake").style.visibility="hidden";
}

// --------------

function normalmode(){
    document.querySelector("#corpo").style.backgroundImage="url(Imagens/background-home.png)"
    document.getElementById("logo").style.color="black";
    document.getElementById("mente-roxo").style.color="#9D6BFF"
    document.querySelector(".a1").style.color="#9D6BFF"
    document.querySelector(".a2 ").style.color="#9D6BFF"
    document.querySelector(".a3").style.color="#9D6BFF"
    document.querySelector(".a4").style.color="#9D6BFF"
    document.querySelector(".Login").style.backgroundColor="#9D6BFF"
    document.querySelector(".Login").style.color="white"
    document.querySelector(".cadastrar").style.background="linear-gradient(103.45deg, #6146D9 49.75%, #FFFFFF 291.93%)"
    document.querySelector(".h3pd").style.color="black"
    document.querySelector(".pd").style.color="#616161"
    document.querySelector(".h3eq").style.color="black"
    document.querySelector(".eq").style.color="#616161"
    document.querySelector(".h3t").style.color="black"
    document.querySelector(".t").style.color="#616161"
    document.querySelector('.primeiraparte_titulo').style.color="#9D6BFF"
    document.querySelector('.primeiraparte_texto').style.color="#909090"
    document.querySelector(".roxo1").style.backgroundColor="#9D6BFF"
    document.querySelector(".roxo2").style.backgroundColor="#9D6BFF"
    document.querySelector(".roxo3").style.backgroundColor="#9D6BFF"
    document.querySelector(".maisinfo_texto").style.color="#616161"
    document.querySelector(".maisinfo_texto2").style.color="#616161"
    document.querySelector(".maisinfo_texto3").style.color="#616161"
    document.querySelector(".titulo1_blog").style.color="black"
    document.querySelector(".titulo2_blog").style.color="black"
    document.querySelector(".titulo3_blog").style.color="black"
    document.querySelector(".texto1_blog").style.color="black"
    document.querySelector(".texto2_blog").style.color="black"
    document.querySelector(".texto3_blog").style.color="black"
    document.querySelector(".blog1").style.background="linear-gradient(309.15deg, #F4F4F4 52.61%, rgba(244, 244, 244, 0) 167.41%)"
    document.querySelector(".blog2").style.background="linear-gradient(309.15deg, #F4F4F4 52.61%, rgba(244, 244, 244, 0) 167.41%)"
    document.querySelector(".blog3").style.background="linear-gradient(309.15deg, #F4F4F4 52.61%, rgba(244, 244, 244, 0) 167.41%)"
    document.querySelector(".botao1_blog").style.backgroundColor="#9D6BFF"
    document.querySelector(".botao2_blog").style.backgroundColor="#9D6BFF"
    document.querySelector(".botao3_blog").style.backgroundColor="#9D6BFF"
    document.querySelector(".fundo_roxo").style.backgroundColor="#9D6BFF"
    document.querySelector(".acess1").src="Imagens/imgacessibilidade1.png"
    document.querySelector(".acess1-fake").style.visibility="hidden"
    document.querySelector(".img1").src="Imagens/imghome1.png"
    document.querySelector(".img2").src="Imagens/imghome2.png"
    document.querySelector(".img3").src="Imagens/imghome3.png"
    document.querySelector(".img4").src="Imagens/imghome4.png"
    document.querySelector("#img5").src="Imagens/imghome5.png"
    document.querySelector("#img6").src="Imagens/imghome6.png"
    document.querySelector("#img7").src="Imagens/imghome7.png"
    document.querySelector("#img11").src="Imagens/imghome11.png"
    document.querySelector("#img12").src="Imagens/imghome12.png"
    document.querySelector("#img13").src="Imagens/imghome13.png"
    document.querySelector("#sec_footer").style.backgroundColor="#9D6BFF"
    document.querySelector(".plataformah3").style.color="white"
    document.querySelector(".socialh3").style.color="white"
    document.querySelector(".contatoh3").style.color="white"
    document.querySelector(".team").style.background="linear-gradient(95.21deg, #8547FF 18.88%, #1F3A71 173.97%)"
}

function darkmode(){
    document.querySelector("#corpo").style.backgroundImage="url(Imagens/background-darkhome.png)"
    document.getElementById("logo").style.color="white";
    document.getElementById("mente-roxo").style.color="white"
    document.querySelector(".a1").style.color="white"
    document.querySelector(".a2 ").style.color="white"
    document.querySelector(".a3").style.color="white"
    document.querySelector(".a4").style.color="white"
    document.querySelector(".Login").style.backgroundColor="white"
    document.querySelector(".Login").style.color="black"
    document.querySelector(".cadastrar").style.background="linear-gradient(103.45deg, #000000 49.75%, #FFFFFF 291.93%)"
    document.querySelector(".h3pd").style.color="white"
    document.querySelector(".pd").style.color="black"
    document.querySelector(".h3eq").style.color="white"
    document.querySelector(".eq").style.color="black"
    document.querySelector(".h3t").style.color="white"
    document.querySelector(".t").style.color="black"
    document.querySelector('.primeiraparte_titulo').style.color="#1D1D1D"
    document.querySelector('.primeiraparte_texto').style.color="white"
    document.querySelector(".roxo1").style.backgroundColor="#737373"
    document.querySelector(".roxo2").style.backgroundColor="#737373"
    document.querySelector(".roxo3").style.backgroundColor="#737373"
    document.querySelector(".maisinfo_texto").style.color="white"
    document.querySelector(".maisinfo_texto2").style.color="white"
    document.querySelector(".maisinfo_texto3").style.color="white"
    document.querySelector(".titulo1_blog").style.color="white"
    document.querySelector(".titulo2_blog").style.color="white"
    document.querySelector(".titulo3_blog").style.color="white"
    document.querySelector(".texto1_blog").style.color="white"
    document.querySelector(".texto2_blog").style.color="white"
    document.querySelector(".texto3_blog").style.color="white"
    document.querySelector(".blog1").style.background="linear-gradient(309.15deg, #363636 52.61%, rgba(244, 244, 244, 0) 167.41%)"
    document.querySelector(".blog2").style.background="linear-gradient(309.15deg, #363636 52.61%, rgba(244, 244, 244, 0) 167.41%)"
    document.querySelector(".blog3").style.background="linear-gradient(309.15deg, #363636 52.61%, rgba(244, 244, 244, 0) 167.41%)"
    document.querySelector(".botao1_blog").style.backgroundColor="#1D1D1D"
    document.querySelector(".botao2_blog").style.backgroundColor="#1D1D1D"
    document.querySelector(".botao3_blog").style.backgroundColor="#1D1D1D"
    document.querySelector(".fundo_roxo").style.backgroundColor="#363636"
    document.querySelector(".acess1").src="Imagens/imgacessibilidadedark1.png"
    document.querySelector(".acess1-fake").style.visibility="visible"
    document.querySelector(".img1").src="Imagens/imghomedark1.png"
    document.querySelector(".img2").src="Imagens/imghomedark2.png"
    document.querySelector(".img3").src="Imagens/imghomedark3.png"
    document.querySelector(".img4").src="Imagens/imghomedark4.png"
    document.querySelector("#img5").src="Imagens/imghomedark5.png"
    document.querySelector("#img6").src="Imagens/imghomedark6.png"
    document.querySelector("#img7").src="Imagens/imghomedark7.png"
    document.querySelector("#img11").src="Imagens/imghomedark11.png"
    document.querySelector("#img12").src="Imagens/imghomedark12.png"
    document.querySelector("#img13").src="Imagens/imghomedark13.png"
    document.querySelector("#sec_footer").style.backgroundColor="#363636"
    document.querySelector(".plataformah3").style.color="#737373"
    document.querySelector(".socialh3").style.color="#737373"
    document.querySelector(".contatoh3").style.color="#737373"
    document.querySelector(".team").style.background="linear-gradient(120.35deg, #323232 18.23%, #FFFFFF 308.93%, #1F3A71 310.79%)"


    
    


    
}


function baixa(){

    document.getElementById("logo").style.fontSize="30px";

    document.getElementById("fundo").style.backgroundColor = "#fff";
    document.getElementById("fundo").style.color = "#000" ;
    document.getElementById("myimage").src = "castelo.jpeg";
    document.getElementById("fundo").style.fontSize = "30px"

    element.innerHTML = "testando modo Daltonico";

    }