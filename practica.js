/*1) Programa una función que cuente el número de caracteres de una cadena de texto,
 pe. miFuncion("Hola Mundo") devolverá 10.*/

 // Variable con Arrow function
/*
 const textoCadena = (texto = "") =>
  (!texto)
     ?console.warn(`El texto no fue ingresado`)
     :console.info(`El texto "${texto}" tiene "${texto.length}" caracteres`);
 
     textoCadena("hola mundo");
     textoCadena("");
     textoCadena();
     textoCadena("JavaScript"); */
     
     // function
     /*
     function numeroCadena(texto = ""){
         if(!texto){
             console.warn(`El texto no fué ingresado`);
         }else{
             console.log(`El texto "${texto}" tiene "${texto.length}" caracteres`);
         }
     }
         numeroCadena("hola mundo");
         numeroCadena("");
         numeroCadena();
         numeroCadena("JavaScript"); */

/* 2) Programa una función que te devuelva el texto recortado según el número
 de caracteres indicados, miFuncion("Hola Mundo", 4) devolverá "Hola".
*/
/*
const recorteTexto = (texto = "", longitud = undefined) =>
     (!texto)
     ?console.warn("No ingresaste texto especificado")
     :(longitud === undefined)
       ?console.warn("No ingresaste la longitud para especificar el texto")
       :console.info(texto.slice(0,longitud))

recorteTexto();
recorteTexto("JavaScript");
recorteTexto("The framework",14)
recorteTexto("",5);  */


/*3) Programa una función que dada una String te devuelva un Array de textos separados 
por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
 */
/*
const separadorLetras = (cadena = "", separador = undefined) =>
  (!cadena)
  ?console.warn("No ingreso una cadena de texto")
  :(separador === undefined)
    ?console.warn("No ingreso un separador para el texto")
    :console.info(cadena.split(separador))

  separadorLetras("Hola que tal", " ");
  separadorLetras("ene feb mar abr may jun jul ago sep oct nov dic", " ");
  separadorLetras(""," ");
  separadorLetras("Hola mundo");
*/

 /* 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá
 Hola Mundo Hola Mundo Hola Mundo.*/

/*
const cantidadCadena = (texto = "", repetir = undefined) => {
    if(!texto) return console.warn("No ingreso texto especificado");

    if(repetir === undefined) return console.warn("No ingreso un número para repetir el texto");

    if(repetir === 0) return console.error("No se permite ingresar número terminado en cero");

    if(Math.sign(repetir) === -1) return console.error("El número para repetir no debe ser negativo");

    for(let n = 1; n <= repetir; n++) console.info(`${texto}, ${n}`);
    
}
    cantidadCadena("",3);
    cantidadCadena("hola mundo");
    cantidadCadena("hola mundo", 0);
    cantidadCadena("hola mundo", -3);
    cantidadCadena("hola mundo", 3);  */

/* 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo")
  devolverá "odnuM aloH". */
  
/*
  const revesTexto = (texto = "") => {
      let cadena = "";
      for(let i = texto.length -1; i >= 0; i--) cadena += texto[i];
      return cadena;
  }
  console.info(revesTexto("computador"));  */
  
  // SEGUNDA OPCIÓN!!!
  
  /*
    const textoReves = (cadena = "") =>
      (!cadena)
      ? console.warn("No ingresaste una cadena de texto")
      : console.info(cadena.split("").reverse().join(""));

      textoReves("configuración");  
 */
  

/* 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo,
  miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
*/
/*
const repetirPalabra = (texto = "", palabra = "") => {
    if(!texto) return console.warn("No ingreso un tipo de texto especificado");
    if(!palabra) return console.warn("No ingreso el tipo de palabra a repetir");

    let p = 0,
    contador = 0;

    while (p !== -1){
        p = texto.indexOf(palabra, p);
        if(p !== -1){
            p++;
            contador++;
        }
    }
    return console.info(`La palabra "${palabra}" se repite "${contador}" veces`);
}
repetirPalabra();
repetirPalabra("hola mundo");
repetirPalabra("hola mundo hola mundo hola mundo", "mundo"); */


/* 7) Programa una función que valide si una palabra o frase dada, es un palíndromo
(que se lee igual en un sentido que en otro), mifuncion("Salas") devolverá true.
*/
/*
const palindromoUno = (texto = "") => {
    if(!texto) return console.warn("No ingreso una palabra o texto");
    
    texto = texto.toLowerCase();
    let alReves = texto.split("").reverse().join("");
    
    (texto === alReves)
    ? console.info(`Si es un palindromo "${texto}" porque la palabra al reves es "${alReves}" `)
    : console.info(`No es un palindromo "${texto}" porque la palabra al reves es "${alReves}" `);
}
palindromoUno();
palindromoUno("hola chica");
palindromoUno("SaLas");
*/


/*  8) Programa una función que elimine cierto patrón de caracteres de un texto dado,
miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.  */
/*
const eliminaTexto = (texto = "", patron = "") =>
 (!texto)
 ? console.warn("No ingreso el texto especificado")
 :(!patron)
  ? console.warn("No ingreso un patron de caracteres")
  : console.info(texto.replace(new RegExp(patron, "ig"),""));

eliminaTexto();
eliminaTexto("xyz1, xyz2, xyz3, xyz4 y xyz5");
eliminaTexto("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz"); 
eliminaTexto("When I look into your eyes i can see a love restrained But darlin when I hold you Don't you know I feel the same Nothin' lasts forever", "[a-m]");
*/

/* 9) Programa una función que obtenga un numero aleatorio entre 501 y 600. */
/*
 const aleatorio = () => console.info(Math.round((Math.random()* 100)+500));

 aleatorio();
*/

 /* 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro),
  miFuncion(2002) devolverá true.
 */
 /* 
 const numeroValor = (valor = 0) => {
     if(!valor) return console.warn("No ingreso un número a evaluar");

     if(typeof valor !== "number") return console.error(`el valor ingresado "${valor}" no es un número `)
 
     valor = valor.toString();

     let num = valor.split("").reverse().join("");

     (valor === num)
      ? console.info(true)
      : console.info(false);
 
 }
 numeroValor();
 numeroValor(2002);
 numeroValor(123456);
 numeroValor(505.505); */
 
/* 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n,
se define como el producto de todos los números enteros positivos desde 1 hasta n), miFuncion(5) devolverá 120. */

/*
const factorial = (numero = undefined) => {
if(numero === undefined) return console.warn("No ingreso un número");

if(numero === 0) return console.error("NO se se permite el número cero");

if(typeof numero !== "number") return console.error(`El valor agregado "${numero}" no corresponde a un número`);

if(Math.sign(numero) === -1) return console.error("NO se aceptan ningun tipo de número negativo");
 
let factorial = 1;

  for(let a = numero; a > 1; a--){
    factorial *= a;
  }
return console.info(`El factorial de "${numero}" es "${factorial}" factorial `);

}
factorial();
factorial(0);
factorial("hola mundo");
factorial(-49987765);
factorial(5);   */
 
/* 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1)
  o no, miFuncion(7) devolverá true.
*/
/*
const primos = (numero = undefined) => {
  if(numero === undefined) return console.warn("No ingreso un número");

  if(numero === 0) return console.error("cero no es un número primo");
  
  if(typeof numero !== "number") return console.error(`El caracter ingresado "${numero}" no es un número`);

  if(Math.sign(numero) === -1) return console.error("No se permiten números negativos");

  if(numero === 0 || numero === 1) return false
  
  for(let i = 2; i < numero / 2; i++){
  
    if(numero % i === 0) return console.info(`El número ingresado "${numero}" NO es un número primo`);
  }
  return console.info(`El número ingresado "${numero}" SI es un número primo`);
  
}

primos();
primos(0);
primos("hola mundo");
primos(-1);
primos(17);
*/


/* 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar. 
*/
    /*
    const parImpar = (numero = undefined) => {
      if(numero === undefined) return console.warn("No ingresó un número");

      if(typeof numero !== "number") return console.warn(`El valor ingresado "${numero}" no es un número`);
      
        return((numero % 2) === 0)
         ? console.info(`El número ingresado "${numero}" es 'Par'`)
         : console.info(`El número ingresado "${numero}" es 'Impar'`);
    }
      
        parImpar();
        parImpar("Hola mundo");
        parImpar(6);
    */

      
  /* 14) programe una función para convertir grados Celcius a Fahrenheit y viceversa. Eje: miFuncion (0, "C") devolverá 32°F.  */
      
      /*
        const gradosCf = (grados = undefined, unidad = undefined) => {
            if(grados === undefined) return console.warn("No ingreso un número especificado");

            if(typeof grados !== "number") return console.warn(`El valor agregado "${grados}" no corresponde a un número`);

            if(unidad === undefined) return console.warn("No ingreso un parametro valido");
            

            if(typeof unidad !== "string") return console.warn(`El valor ingresado "${unidad}" no corresponde a la unidad pedida`);
            
            if(unidad.length !== 1 || !/(C|F)/.test(unidad)) return console.warn("Valor de unidad no reconocido");

            if(unidad === "C"){
                return console.info(`${grados}°C = ${Math.round((grados * (9/5))+ 32)}°F`);
            }else{
                return console.info(`${grados}°F = ${Math.round(((grados - 32)*(5/9)))}°C`);
            }
        }
            
            gradosCf();
            gradosCf("hola mundo");
            gradosCf(33);
            gradosCf(2,true);
            gradosCf(2,"S");
            gradosCf(100,"C");
            gradosCf(100,"F");    

         */

          /*    15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10. */
        /*
        const numeroBinarioDecimal = (numero = undefined, base = undefined) => {
            if(numero === undefined) return console.warn("No ingreso algun tipo de dato");

            if(typeof numero !== "number") return console.warn(`El valor ingresada "${numero}" NO es valido `);

            if(base === undefined) return console.warn("El valor ingresado no es valido para determinar la base");

            if(typeof base !== "number") return console.error(`El valor "${base}" ingresado es invalido`);
            
            if(base === 2){
                return console.info(`${numero} base ${base} = ${parseInt(numero, base)} base 10`);
            } else if (base === 10){
                return console.info(`${numero} base ${base} = ${(numero.toString(2))} base 2`);
            } else{
                console.error("El tipo de base a convertir no es valido");
            }
        }

            numeroBinarioDecimal();
            numeroBinarioDecimal("número");
            numeroBinarioDecimal(100);
            numeroBinarioDecimal(10,"2");
            numeroBinarioDecimal(100,2);
            numeroBinarioDecimal(4,10);

        */

         /* 16) Programe una función que devuelva el monto final despues de aplicar un descuento a una cantidad dada. Eje miFuncion (100,4)
         devolvera 800*/
        /*
          const porcentajeDescuento = (dinero = undefined, porcentaje = 0) => {
            if(dinero === undefined) return console.warn("No ingreso un valor");

            if(typeof dinero !== "number") return console.error(`El siguiente caracter "${dinero}" no es un número valido`);

            if(dinero === 0) return console.error("El monto no se permite en cero");

            if(Math.sign(dinero) === -1) return console.error("No se permite el valor negativo");

            if(Math.sign(porcentaje) === -1) return console.error("No se permite el porcentaje negativo");

            if(typeof porcentaje !== "number") return console.error("No se permiten valores diferentes a números");
          
            return console.info(`$${dinero} - ${porcentaje}% = $${dinero -((dinero * porcentaje) / 100)}`);
          
          }

              porcentajeDescuento();
              porcentajeDescuento("100");
              porcentajeDescuento(0);
              porcentajeDescuento(-100.000);
              porcentajeDescuento(200.000,-40);
              porcentajeDescuento(300.000,"50");
              porcentajeDescuento(40,20);
        
        */
      
         /* 17) Programa una función que dada un fecha, determine cuantos años han pasado hasta el día de hoy o cuantos años faltan para que llegue la fecha dada. Eje: miFuncion(new Date(1990,2,14)) devolverá 30 años (en 2020)*/
            /*
            const darFechaAnio = (fecha = undefined) => {
              if(fecha === undefined) return console.error("No ingresaste un tipo de fecha");
              
              if(!(fecha instanceof Date)) return console.error("No ingreso un tipo de fecha valido");
              
              let fechaInicio = new Date().getTime() - fecha.getTime(),
                  modoDarFecha = 1000 * 60 * 60 * 24 * 365
                  fechaFinal = Math.floor(fechaInicio / modoDarFecha);

              return(Math.sign(fechaFinal) === -1)
              ? console.info(`Faltan "${Math.abs(fechaFinal)}" años, para que llegue el año "${fecha.getFullYear()}"`)
              : (Math.sign(fechaFinal) === 1)
               ? console.info(`Han pasado "${fechaFinal}" años, desde el año "${fecha.getFullYear()}"`)
               : console.info(`Estamos en el año "${fecha.getFullYear()}"`);
            
            }
              darFechaAnio();
              darFechaAnio({});
              darFechaAnio(false);
              darFechaAnio(new Date());
              darFechaAnio(new Date(1990,2,14));
              darFechaAnio(new Date(1890,2,14));
              darFechaAnio(new Date(2030,2,14));
            */


          /* 
        18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
        */
            /*
          const contarLetras = (texto = "") => {
            if(!texto) return console.error("No ingreso una cadena de texto");

            if(typeof texto !== "string") return console.error(`El caracter ingresado "${texto}" no es tipo de texto valido`);
            
            texto = texto.toLocaleLowerCase();
            
            let vocales = 0,
                consonantes = 0;

                for (let letra of texto) {
                  if(/[aeiouáéíóú]/.test(letra)) vocales++;
                  
                  if(/[bcdfghjklmnñpqrstvwxyz]/.test(letra)) consonantes++;
                }

                return console.info({
                  texto,
                  vocales,
                  consonantes
                })
          }

            contarLetras();
            contarLetras(5);
            contarLetras("Hola Mundo");
            contarLetras("Ñoño");
          */


    /* 19) Programa una función que valide que un texto sea un nombre válido. Eje: miFuncion("Juan Pablo Guerrero") devolverá verdadero.*/
          /*
            const nombresValidos = (nombre = "") => {
              if(!nombre) return console.warn("No ha ingresado un nombre");

              if(typeof nombre !== "string") return console.error(`El caracter ingresado "${nombre}" no es un nombre valido`);
              
              let expresionReg = /^[A-Za-záÁéÉíÍóÓúÚñÑ\s]+$/g.test(nombre);

              return (expresionReg)
              ? console.info(`${nombre} es un nombre valido`)
              : console.warn(`${nombre} no es un nombre valido`);
            }
              
            nombresValidos();
            nombresValidos(5);  
            nombresValidos("Juan Pablo Guerrero");  
            nombresValidos("Juan Pablo,");  
            */
    
    /* 20) Programa una función que valide que un texto sea un email válido. Eje: miFuncion("juanpguerrero0710@gmail.com") devolverá verdadero.*/

            /*
            const correoElectronico = (email = "") => {
              if(!email) return console.warn("No ha ingresado un correo electronico");

              if(typeof email !== "string") return console.error(`Los caracteres "${email}" no son un email valido`);

              let correoElectro = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email);

              return (correoElectro)
              ? console.info(`"${email}", es un correo electronico valido`)
              : console.error(`"${email}", NO es un correo electronico valido`);
            }
              
              correoElectronico();
              correoElectronico(456);
              correoElectronico("juan,guerrero,@gmail.com");
              correoElectronico("juanpguerrero0710@gmail.com");
            */

    /* 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].*/
            /*
            const numerosCuadrados = (arr = undefined) => {
              if(arr === undefined) return console.warn("No ha ingresado ningun arreglo de numeros");

              if(!(arr instanceof Array)) return console.error(`El valor "${arr}" no es un arreglo`);

              if(arr.length === 0) return console.error("El arreglo esta vacio");
              
              for (let num of arr) {
                if(typeof num !== "number") return console.error(`El valor "${num}" ingresado, NO es un número`);
                
              }
              const nuevoArr = arr.map(el => el * el);

              return console.info(`El arreglo anterior era ${arr},\nEl arreglo nuevo elevado al cuadrado es ${nuevoArr}`);
            } 

            numerosCuadrados();
            numerosCuadrados(true);
            numerosCuadrados([]);
            numerosCuadrados([1,4,"s"]);
            numerosCuadrados([1,4,5]);
            */

    /* 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
    */      
            /*
            const arregloMaxMin = (arr = undefined) => {
              if(arr === undefined) return console.warn("No ha ingresado un arreglo");
              
              if(!(arr instanceof Array)) return console.error(`El valor ingresado "${arr}" NO es un arreglo`);
              
              if(arr.length === 0) return console.error("El arreglo está vacio");
              
              for (let num of arr) {
                if(typeof num !== "number") return console.error(`El valor ingresado "${num}" no es un número`);
                
              }
              return console.info(`El primer arreglo es ${arr}, \nEl número mayor del arreglo es ${Math.max(...arr)}, \nEl número menor del arreglo es ${Math.min(...arr)}`);
            }

            arregloMaxMin();
            arregloMaxMin(true);
            arregloMaxMin([]);
            arregloMaxMin([1,4,"slm"]);
            arregloMaxMin([1,4,5,99,-60]);
            */

    /* 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.*/
            /*
            const arregloParImpar = (arr = undefined) => {
              if(arr === undefined) return console.warn("No ha ingresado un arreglo");
              
              if(!(arr instanceof Array)) return console.error(`El valor ingresado "${arr}" no es un arreglo`);
              
              if(arr.length === 0) return console.error("El arreglo está vacio");
              
              for (let num of arr) {
                if(typeof num !== "number") return console.error(`El valor agregado "${num}" No es un número`);
              }
              return console.info({
                Pares: arr.filter(num => num % 2 === 0),
                impares: arr.filter(num => num % 2 === 1)
              })  
            }
            arregloParImpar();
            arregloParImpar(true);
            arregloParImpar([]);
            arregloParImpar([0,1,2,3,4,5,6,7,8,9]);
            */

    /* 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.*/
            
            /*
            const arregloNumeros = (arr = undefined) => {
              if(arr === undefined) return console.warn("No ha ingresado un arreglo");
              
              if(!(arr instanceof Array)) return console.error(`El valor de "${arr}" NO es un arreglo`);
              
              if(arr.length === 0) return console.error("El arreglo esta vacío");
              
              for (let num of arr) {
                if(typeof num !== "number") return console.error(`El valor agregado "${num}" NO es un número`);
              }
              
              return console.info ({
                arr,
                ascendente: arr.map(el => el).sort(),
                descendente: arr.map(el => el).sort().reverse()
              });
            }

              arregloNumeros();
              arregloNumeros(false);
              arregloNumeros([]);
              arregloNumeros([1,2,"555"]);
              arregloNumeros([7,5,7,8,6]);
            */


    /* 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
    */
            /*
            const arregloElementos = (arr = undefined) => {
              if(arr === undefined) return console.warn("No ha ingresado un tipo de arreglo");
             
              if(!(arr instanceof Array)) return console.error(`El valor agregado "${arr}" NO es un arreglo`);
              
              if(arr.length === 0) return console.error("El arreglo esta vacío");

              if(arr.length === 1) return console.error("El arreglo debe tener mas de 1 caracter");
              
              return console.info ({
                Original: arr,
                sinDuplicados: arr.filter((value, index, self) => self.indexOf(value) === index)
              });
              
            }

            arregloElementos();
            arregloElementos({});
            arregloElementos([]);
            arregloElementos(["x"]);
            arregloElementos(["x", 10, "x", 2, "10", 10, true, true]);
            */

    
    /* 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.*/
            /*
            const arregloPromedio = (arr = undefined) => {
              if(arr === undefined) return console.warn("No ha ingresado un arreglo de números");
              
              if(!(arr instanceof Array)) return console.error(`El valor ingresado "${arr}" NO es un arreglo`);
              
              if(arr.length === 0) return console.error("El arrego de números esta vacío");
              
              if(arr.length === 1) return console.error("El arreglo de numeros no puede tener un solo valor");

              for (let num of arr) {
                if(typeof num !== "number") return console.error(`El valor agregado "${num}" No es un número`);
                
              }

              return console.info (
                arr.reduce((total, num, index, arr) => {
                  total += num;
                  if(index === arr.length -1) {
                    return `El promedio de ${arr.join(" + ")} es ${total / arr.length}`;
                  }else{
                    return total;
                  }
                })
              )
            }

              arregloPromedio();
              arregloPromedio({});
              arregloPromedio([]);
              arregloPromedio([9]);
              arregloPromedio([9,8,7,6,5,4,3,2,1,"SD"]);
              arregloPromedio([9,8,7,6,5,4,3,2,1,0]);
            */

    /* 27) Programa una clase llamada Pelicula.

    La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.

        - Todos los datos del objeto son obligatorios.
        - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
        7 restantes números.
        - Valida que el título no rebase los 100 caracteres.
        - Valida que el director no rebase los 50 caracteres.
        - Valida que el año de estreno sea un número entero de 4 dígitos.
        - Valida que el país o paises sea introducidos en forma de arreglo.
        - Valida que los géneros sean introducidos en forma de arreglo.
        - Valida que los géneros introducidos esten dentro de los género aceptados*.
        - Crea un método estático que devuelva los géneros aceptados*.
        - Valida que la calificación sea un número entre 0 y 10 pudiendo ser decimal de una posición.
        - Crea un método que devuelva toda la ficha técnica de la película.
        - Apartir de un arreglo con la información de 3 películas genera 3 instancias de la clase de forma automatizada e imprime la ficha  técnica de cada película.
        * Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western. */

           
            class Pelicula {
              constructor({id, titulo, director,estreno, país,género,calificacion}){

                this.id = id,
                this.titulo = titulo,
                this.director = director,
                this.estreno = estreno,
                this.país = país,
                this.género = género,
                this.calificacion = calificacion
                this.validarIMDB(id);
                this.validarTitulo(titulo);
                this.validarDirector(director);
                this.validarEstreno(estreno);
                this.validarPais(país);
                this.validarGeneros(género);
                this.validarCalificacion(calificacion);
              }
              static get listaGeneros() {
                return ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"];
              }

              static generosAceptados (){
                return console.info(`Los generos aceptados son: ${Pelicula.listaGeneros.join(", ")}`);
              }

                
              validarCadena (propiedad, valor) {
                if(!valor) return console.warn(`${propiedad} "${valor}" esta vacío`);
                if(typeof valor !== "string") return console.error(`${propiedad} "${valor}" ingresado NO es una cadena texto`);
                
                return true;
              }
              validarLongitudCadena (propiedad, valor, longitud){
                if(valor.length > longitud) return console.error(`${propiedad} "${valor}" ha excedido el número de caracteres validos "${longitud}"`);
                return true;
              }

              validarNumero (propiedad, valor) {
                if(!valor) return console.warn(`${propiedad} ${valor} esta vácio`);
                  if(typeof valor !== "number") return console.error(`${propiedad} "${valor}" ingresado NO es un número`);
                  return true;
              }

              validarArreglo (propiedad, valor){
                if(!valor) return console.warn(`${propiedad} "${valor}" esta vácio`);

                if(!(valor instanceof Array)) return console.error(`${propiedad} ${valor} no es un arreglo`);

                if(valor.length === 0) return console.warn("El arreglo esta vácio");

                for (let cadena of valor) {
                  if(typeof cadena !== "string") return console.error(`El valor "${cadena}" ingresado, NO es una cadena de texto`);
                }
                return true;  
              }
                  
                
                
                  
                
              validarIMDB (id){
                if(this.validarCadena("IMDB id", id ))
                  if(!(/^([a-z]){2}([0-9]){7}$/.test(id))) 
                  return console.error(`IMDB id "${id}" no es válido porque debe tener precisamente 9 caracteres, los 2 primeros son letras minusculas y los 7 restantes, números.`);
              }

              validarTitulo (titulo){
                if(this.validarCadena("Titulo", titulo))
                    this.validarLongitudCadena("Titulo", titulo, 100);
              }

              validarDirector (director){
                if(this.validarCadena("Director", director))
                  this.validarLongitudCadena("Director", director, 50);
              }

              validarEstreno (estreno){
                if(this.validarNumero("Año de estreno", estreno))
                  if(!(/^([0-9]){4}$/.test(estreno))) 
                  return console.error(`El año de estreno "${estreno}" no es valido, debe ser un valor de 4 digitos`);
              }
               
              validarPais (país){
                this.validarArreglo("País", país);
              }

              validarGeneros (género){
                if(this.validarArreglo("Géneros", género)) {
                  for (let genero of género) {
                    //console.log(genero,Pelicula.listaGeneros.includes(genero));
                    if(!Pelicula.listaGeneros.includes(genero)){
                      console.error(`Genero(s) incorrectos "${género.join(", ")}"`);
                        Pelicula.generosAceptados();
                    }
                  }
                }
              }

              validarCalificacion (calificacion){
                if(this.validarNumero("Calificación", calificacion))
                return (calificacion < 0 || calificacion > 10)
                ? console.error(`La calificación debe estar dentro de un rango entre 0 y 10`)
                : this.calificacion = calificacion.toFixed(1);
              }
              fichaTecnica (){
                console.info(`FICHA TÉCNICA:\nTítulo de la Pelicual: "${this.titulo}" \nDirector: "${this.director}" \nEstreno: "${this.estreno}" \nPaís: "${this.país}" \nGénero: "${this.género}" \nCalificación: "${this.calificacion}" \nID: "${this.id}"`)
              }  

            }

            //Pelicula.generosAceptados();
            /*const peli = new Pelicula ({
              id: "az8671756",
              titulo: "El regreso de sort",
              director: "Juan Pablo",
              estreno: 2020,
              país: ["Colombia"],
              género: ["Action",  "Adventure"],
              calificacion: 8.677
            });                
            
            peli.fichaTecnica();

              */

            const misPelisFavoritas = [
              {
              id: "az8671756",
              titulo: "Harry Potter",
              director: "Chris Columbus",
              estreno: 2001,
              país: ["Reino Unido, EEUU"],
              género: ["Fantasy"],
              calificacion: 9.677
            },
            {
              id: "az8671161",
              titulo: "Advengers",
              director: "Joss Whedon",
              estreno: 2015,
              país: ["EEUU"],
              género: ["Sci-Fi"],
              calificacion: 8.877
            },
            {
              id: "az8672349",
              titulo: "The Lord of the Rings",
              director: "Peter Jackson",
              estreno: 2001,
              país: ["Estados Unidos Reino Unido Nueva Zelanda"],
              género: ["Fantasy",  "Adventure"],
              calificacion: 9.5
            }
            ];
            misPelisFavoritas.forEach(el => new Pelicula(el).fichaTecnica());
              
            
            
            
            
            