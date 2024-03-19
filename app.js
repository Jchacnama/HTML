let usuarioNombre=prompt("Como te llamas?");
let usuarioEdad=prompt('Que edad tienes?');
let usuarioPais=prompt("cual es tu nacionalidad?");
console.log("soy JS y estoy dentro de HTML");
//alert(miEdad);

document.write('Bienvenido' + usuarioNombre);

if (usuarioEdad>18 && usuarioEdad<50)
{
    document.write('Felicitaciones tienes por nuestros relojes clasicos!');
    console.log("estoy entre 18 y 30");
    alert('Felicidades tienes descuento JOVEN');
}
 