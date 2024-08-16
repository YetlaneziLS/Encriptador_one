<<<<<<< HEAD
// ######## Selección de elementos ###### //

const btnEncriptar = document.querySelector(".btn__encriptar");
const txtEncriptar = document.querySelector(".encriptador__escritura");
const aviso = document.querySelector(".texto-aviso");
const respuesta = document.querySelector(".encriptador__resultado");
const contenido = document.querySelector(".tarjeta__container");
const btnCopiar = document.querySelector(".btn__copiar");
const btnDesencriptar = document.querySelector(".btn__desencriptar");

// ####### Botón encriptar ######//

btnEncriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " ");

    if(texto == ""){
        aviso.style.background = "#192a44";
        aviso.style.color = "#f8f8f8";
        aviso.style.fontWeight = 800;
        aviso.textContent = "Debes de ingresar un texto"

        setTimeout(() =>{
        aviso.removeAttribute("style");
        },1500);

    }

    else if(texto !== txt){
        aviso.style.background = "#192a44";
        aviso.style.color = "#f8f8f8";
        aviso.style.fontWeight = 800;
        aviso.textContent = "El texto no debe contener acentos ni carácteres especiales";

        setTimeout(() =>{
        aviso.removeAttribute("style");
        },1500);

    }

    else if(texto !== texto.toLowerCase()){
        aviso.style.background = "#192a44";
        aviso.style.color = "#f8f8f8";
        aviso.style.fontWeight = 800;
        aviso.textContent = "El texto debe estar en minúsculas";

        setTimeout(() =>{
        aviso.removeAttribute("style");
        },1500);

    }
    else{
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");

        respuesta.innerHTML = texto;
        btnCopiar.style.visibility = "inherit";
        contenido.remove();
    }
});

// ####### Botón desencriptar ######//

btnDesencriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    
    if(texto == ""){
        aviso.style.background = "#192a44";
        aviso.style.color = "#f8f8f8";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El campo de texto no debe estar vacio";
        
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else if(texto !== txt){
        aviso.style.background = "#192a44";
        aviso.style.color = "#f8f8f8";
        aviso.style.fontWeight = "800";
        aviso.textContent = "No debe tener acentos y caracteres especiales";
        
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else if(texto !== texto.toLowerCase()){
        aviso.style.background = "#192a44";
        aviso.style.color = "#f8f8f8";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El texto debe ser todo en minúscula";
        
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else{
        texto = texto.replace(/enter/mg, "e");
        texto = texto.replace(/imes/mg, "i");
        texto = texto.replace(/ai/mg, "a");
        texto = texto.replace(/ober/mg, "o");
        texto = texto.replace(/ufat/mg, "u");

        respuesta.innerHTML = texto;
        btnCopiar.style.visibility = "inherit";
        contenido.remove(); 
    }
});

//-------Boton de Copiar-------//
btnCopiar.addEventListener("click", e=>{
    e.preventDefault();
    let copiar = respuesta;
    copiar.select();
    document.execCommand("copy"); 
=======
// ######## Selección de elementos ###### //

const btnEncriptar = document.querySelector(".btn__encriptar");
const txtEncriptar = document.querySelector(".encriptador__escritura");
const aviso = document.querySelector(".texto-aviso");
const respuesta = document.querySelector(".encriptador__resultado");
const contenido = document.querySelector(".tarjeta__container");
const btnCopiar = document.querySelector(".btn__copiar");
const btnDesencriptar = document.querySelector(".btn__desencriptar");

// ####### Botón encriptar ######//

btnEncriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " ");

    if(texto == ""){
        aviso.style.background = "#192a44";
        aviso.style.color = "#f8f8f8";
        aviso.style.fontWeight = 800;
        aviso.textContent = "Debes de ingresar un texto"

        setTimeout(() =>{
        aviso.removeAttribute("style");
        },1500);

    }

    else if(texto !== txt){
        aviso.style.background = "#192a44";
        aviso.style.color = "#f8f8f8";
        aviso.style.fontWeight = 800;
        aviso.textContent = "El texto no debe contener acentos ni carácteres especiales";

        setTimeout(() =>{
        aviso.removeAttribute("style");
        },1500);

    }

    else if(texto !== texto.toLowerCase()){
        aviso.style.background = "#192a44";
        aviso.style.color = "#f8f8f8";
        aviso.style.fontWeight = 800;
        aviso.textContent = "El texto debe estar en minúsculas";

        setTimeout(() =>{
        aviso.removeAttribute("style");
        },1500);

    }
    else{
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");

        respuesta.innerHTML = texto;
        btnCopiar.style.visibility = "inherit";
        contenido.remove();
    }
});

// ####### Botón desencriptar ######//

btnDesencriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    
    if(texto == ""){
        aviso.style.background = "#192a44";
        aviso.style.color = "#f8f8f8";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El campo de texto no debe estar vacio";
        
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else if(texto !== txt){
        aviso.style.background = "#192a44";
        aviso.style.color = "#f8f8f8";
        aviso.style.fontWeight = "800";
        aviso.textContent = "No debe tener acentos y caracteres especiales";
        
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else if(texto !== texto.toLowerCase()){
        aviso.style.background = "#192a44";
        aviso.style.color = "#f8f8f8";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El texto debe ser todo en minúscula";
        
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else{
        texto = texto.replace(/enter/mg, "e");
        texto = texto.replace(/imes/mg, "i");
        texto = texto.replace(/ai/mg, "a");
        texto = texto.replace(/ober/mg, "o");
        texto = texto.replace(/ufat/mg, "u");

        respuesta.innerHTML = texto;
        btnCopiar.style.visibility = "inherit";
        contenido.remove(); 
    }
});

//-------Boton de Copiar-------//
btnCopiar.addEventListener("click", e=>{
    e.preventDefault();
    let copiar = respuesta;
    copiar.select();
    document.execCommand("copy"); 
>>>>>>> 039434f33edd2a47dbe241b6ca8d11d1fcf83501
});