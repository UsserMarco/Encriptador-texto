//--------------Variables--------------//
const btnEncriptar = document.getElementById('btnEncriptar');
const textEncriptar = document.getElementById('textoInput');
const avisos = document.getElementById ('textoAviso')
const textoEncriptado = document.getElementById('textoOutput');
const cajaOutput = document.getElementById('contenedorOutput');
const btnCopiar = document.getElementById('btnCopiar');
const btnDesencriptar = document.getElementById('btnDesencriptar')
//--------------avisos de errores e encriptar--------------//
btnEncriptar.addEventListener('click', e=>{
    e.preventDefault();
    let texto = textEncriptar.value;
    let txt = texto.normalize('NFD').replace( /[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    
    if(texto == ''){
        avisos.style.color = '#cb3234';
        avisos.style.fontweight = "800";
        avisos.textContent = 'El campo de texto no debe estar vacio.';
        setTimeout(()=>{avisos.removeAttribute('style')}, 2000); 
    }
    else if (texto !== txt){
        avisos.style.color = '#cb3234';
        avisos.style.fontweight = "800";
        avisos.textContent = 'No debe tener caracteres especiales ni acentos.';
        setTimeout(()=>{avisos.removeAttribute('style')}, 2000); 
    }
    else if (texto !== texto.toLowerCase()){
        avisos.style.color = '#cb3234';
        avisos.style.fontweight = "800";
        avisos.textContent = 'El texto debe ser en minusculas.';
        setTimeout(()=>{avisos.removeAttribute('style')}, 2000); 
    }
    else{
        texto = texto.replace(/e/mg, 'enter');
        texto = texto.replace(/i/mg, 'imes');
        texto = texto.replace(/a/mg, 'ai');
        texto = texto.replace(/o/mg, 'ober');
        texto = texto.replace(/u/mg, 'ufat');

        textoEncriptado.innerHTML = texto;
        btnCopiar.style.visibility = 'inherit'
        cajaOutput.remove();
    }   
});

//--------------avisos de errores e Desencriptar--------------//
btnDesencriptar.addEventListener('click', e=>{
    e.preventDefault();
    let texto = textEncriptar.value;
    let txt = texto.normalize('NFD').replace( /[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    
    if(texto == ''){
        avisos.style.color = '#cb3234';
        avisos.style.fontweight = "800";
        avisos.textContent = 'El campo de texto no debe estar vacio.';
        setTimeout(()=>{avisos.removeAttribute('style')}, 2000); 
    }
    else if (texto !== txt){
        avisos.style.color = '#cb3234';
        avisos.style.fontweight = "800";
        avisos.textContent = 'No debe tener caracteres especiales ni acentos.';
        setTimeout(()=>{avisos.removeAttribute('style')}, 2000); 
    }
    else if (texto !== texto.toLowerCase()){
        avisos.style.color = '#cb3234';
        avisos.style.fontweight = "800";
        avisos.textContent = 'El texto debe ser en minusculas.';
        setTimeout(()=>{avisos.removeAttribute('style')}, 2000); 
    }
    else{
        texto = texto.replace(/enter/mg, 'e');
        texto = texto.replace(/imes/mg, 'i');
        texto = texto.replace(/ai/mg, 'a');
        texto = texto.replace(/ober/mg, 'o');
        texto = texto.replace(/ufat/mg, 'u');

        textoEncriptado.innerHTML = texto;
        btnCopiar.style.visibility = 'inherit'
        cajaOutput.remove();
    }   
    });


    //--------------Boton de copiar--------------//

    btnCopiar.addEventListener('click', e=>{
        e.preventDefault();
    
        let copiar = textoEncriptado;
        copiar.select();
        document.execCommand('copy');
    });