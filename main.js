let cantidad = document.getElementById('cantidad'); 
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');
let fortaleza = document.getElementById('fortaleza');

const cadenaCaracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

function generar(){

    let numeroDigitado = parseInt (cantidad.value);
    console.log(numeroDigitado);
    
    if(numeroDigitado < 8){

        alert("La cantidad de caracteres tiene que ser mayor que 8");

    }else{

        let password = '';

        for(let i=0; i < numeroDigitado; i++){
    
            let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
            
            password += caracterAleatorio;
            
        }
        console.log("password generada: "+password);
        contrasena.value = password;
        
        if(tieneMayusculas(password) && tieneMinusculas(password) && tieneNumeros(password) && tieneCaracteresEspeciales(password)){

            fortaleza.innerHTML = "Tu contraseña es fuerte";

        }else{

            if(!tieneMayusculas(password)){
                fortaleza.innerHTML = "Tu contraseña es débil, debe tener al menos una mayúscula";
            }

            if(!tieneMinusculas(password)){
                fortaleza.innerHTML = "Tu contraseña es débil, debe tener al menos una minúscula";
            }

            if(!tieneNumeros(password)){
                fortaleza.innerHTML = "Tu contraseña es débil, debe tener al menos un número";
            }   

            if(!tieneCaracteresEspeciales(password)){
                fortaleza.innerHTML = "Tu contraseña es débil, debe tener al menos un caracter especial";
            }
        }
    }

}

function tieneMayusculas(texto){
    let mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   for(let i=0; i < texto.length; i++){
       if(mayusculas.includes(texto.charAt(i))){
           return true;
       }
   }
}

function tieneMinusculas(texto){
    let minusculas = "abcdefghijklmnopqrstuvwxyz";
    for(let i=0; i < texto.length; i++){
        if(minusculas.includes(texto.charAt(i))){
            return true;
        }
    }
}

function tieneNumeros(texto){
    let numeros = "0123456789";
    for(let i=0; i < texto.length; i++){
        if(numeros.includes(texto.charAt(i))){
            return true;
        }
    }
}

function tieneCaracteresEspeciales(texto){
    let especiales = "!@#$%^&*()";
    for(let i=0; i < texto.length; i++){
        if(especiales.includes(texto.charAt(i))){
            return true;
        }
    }
}

function limpiar(){
    location.reload();
}








