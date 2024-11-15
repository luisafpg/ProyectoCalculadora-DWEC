
//Se empieza con la respectiva creacion de variables
let historial = []; //array donde se almacena todas las operaciones que ha hecho el usuario en la calculadora
let num1; //se almacena el primer numero introducido por el usuario
let num2; // se almacena el segundo numero introducido por el usuario
let resultado; // se almacena el resultado de la operacion elegida por el usuario 

let eleccion; /*esta variable de mas, se crea con el fin de almacenar la operacion escogida por el usuario
 + suma, - resta, * multiplicacion, / division, r raiz cuadrada, h mostrar historial, q Salir
se hará uso de ella mas adelante en la funcion principal 'calculadora'*/

/* Opto por usar una funcion constructora llamada 'registroOperaciones' que se utilizara para crear objetos
que almacenan las operaciones hechas en la calculadora, quiere decir que en el array 'historial' no se almacenará strings, si no objetos
se tiene como parametros 'operacion' que seria el tipo (suma,resta,etc), operador1, operador2 y el respectivo resultado
se hace una funcion toString en la funcion constructora para convertir el objeto de la operacion en una cadena de texto legible
esto para mostrar la informacion del objeto de manera mas comprensible, mostrando el historial de las operaciones realizadas*/
function registroOperaciones(operacion, operador1, operador2, resultado){
        this.operacion = operacion;
        this.operador1 = operador1;
        this.operador2 = operador2;
        this.resultado = resultado;

        this.toString = function() {
            return `${this.operador1} ${this.operacion} ${this.operador2} = ${this.resultado}`;
        };
}


/*funcion suma, funcion para hacer la operacion suma, pasandole como parametro los dos numeros
que introducirá el usuario, retorna la suma de esos dos numeros*/
function suma(num1,num2){
    return num1 + num2;
}

/*funcion resta, funcion para hacer la operacion resta, pasandole como parametro los dos numeros
que introducirá el usuario, retorna la resta de esos dos numeros*/
function resta(num1, num2){
    return num1 - num2;
}

/*funcion multiplicacion, funcion para hacer la operacion multiplicacion, pasandole como parametro los dos numeros
que introducirá el usuario, retorna la multiplicacion de esos dos numeros*/
function multiplicacion(num1, num2){
    return num1 * num2;
}

/*funcion division, funcion para hacer la operacion division, pasandole como parametro los dos numeros 
que introducirá el usuario, retorna la division de esos dos numeros*/
function division(num1, num2){
    return num1 / num2;
}

/*funcion RaizCuadrada, funcion para hacer la operacion raiz cuadrada, pasandole como parametro solo un numero
que sera introducido por el usuario, se usa en este caso el Método 'sqrt(n)' que devuelve la raiz cuadrada de un numero*/
function RaizCuadrada(num1){
   
    return Math.sqrt(num1);
}


/*en esta funcion se realiza la operacion segun el tipo seleccionado (suma, resta, multiplicación, etc.)
pasandole como paramatro los numeros y el tipo, se hace el uso del swtich para saber el tipo de operacion a realizar
cada case en el switch devuelve el resultado de la operación correspondiente usando return, terminando asi la ejecucion de operacion en cada caso
en cada case se hace uso de las funciones (suma, resta, etc)  que se implementó al inicio del codigo*/
function operacion(num1, num2, tipo){
    switch(tipo){
        case "+":
            return suma(num1, num2);

        case "-":
            return resta(num1, num2);

        case "*":
            return multiplicacion(num1, num2);

        case "/":
        return division(num1,num2);

        case "r":
        return RaizCuadrada(num1);

        default:
            console.log("Operación no disponible");
            return null;
    }
}


/*Esta funcion valida los inputs del usuario para garantizar que los datos introducidos sean correctos antes de realizar la operacion:
1) En el primer if, se valida que los numeros introducidos sean validos. si la operacion seleccionada es la raiz cuadrada (opcion r), solo se valida `num1`, ya que la raiz cuadrada requiere solo un numero
para cualquier otra operacion, tanto `num1` como `num2` deben ser numeros validos.
2) El segundo if comprueba que si la operacion seleccionada es una división (opcion /), el segundo numero (`num2`) no sea cero, para evitar una division por cero
si es asi, se muestra una alerta informando el error y la función retorna `false`.
3) En el tercer `if` decido añadir una validacion mas que es si la operacion seleccionada es la raiz cuadrada (opcion r), el numero (`num1`) no sea negativo, 
ya que no se puede calcular la raiz cuadrada de un numero negativo en este contexto. Si el numero es negativo, se muestra una alerta y la funcion retorna `false`.

Si todas las condiciones se cumplen correctamente, la función retorna `true`, permitiendo que la operacion se ejecute. */

function validarInput(){
    if(isNaN(num1) || (eleccion !== "r" && isNaN(num2))){ 
        alert("Error: No se pudo realizar la operación, uno de los valores no es válido, intente de nuevo");
        return false;
    }
    
    if(eleccion === "/" && num2 === 0){
        alert("Error: No se puede dividir entre cero");
        return false;
    }
    
    if(eleccion === "r" && num1 < 0){
        alert("Error: No se puede calcular la raiz cuadrada de un numero negativo");
        return false;
    }
    return true;
    }


/*Esta funcion muestra en consola todos los resultados almacenados en el array `historial`. 
Primero se comprueba si el array esta vacio con `historial.length === 0`. si es asi, se muestra un mensaje indicando que no hay operaciones almacenadas.
Si el array tiene elementos, se utiliza el metodo `forEach` para iterar sobre cada operacion en `historial`. el metodo `forEach` toma una funcion de flecha como argumento, 
que recibe dos parametros: `operacion` (el elemento actual del array) e `index` (la posicion del elemento). 
Dentro de la función de flecha, se usa `operacion.toString()` para mostrar cada operación de manera legible. `index + 1` se utiliza para mostrar el numero de la operacion, comenzando desde 1 en ves de 0. 
Finalmente, `console.log` imprime el indice y el resultado de cada operacion almacenada de forma clara.*/

    function mostrarHistorial() {
        if (historial.length === 0) {
            console.log("No hay operaciones en el historial.");
        } 
        else {
            console.log("Historial de operaciones realizadas:");
            historial.forEach((operacion, index) => {
                console.log(`${index + 1}. ${operacion.toString()}`);
            });
        }
    }


/* La funcion `calculadora` permite al usuario realizar operaciones matematicas basicas a traves de un menu interactivo en el que se ingresan opciones mediante `prompt`

1) Se inicia un bucle `while` que continuara ejecutandose hasta que el usuario elija salir (`salir = true`).
2) Dentro del bucle, se presenta un menu de opciones para que el usuario elija una operacion (+, -, *, /, r para raiz cuadrada, h para mostrar historial, q para salir).
3) Dependiendo de la opcion seleccionada, se solicitan uno o dos numeros (usando `prompt`) y se valida la entrada con la funcion `validarInput`.
4) Si la validacion es correcta, se ejecuta la operacion correspondiente mediante la función `operacion`, y el resultado se almacena en el array `historial` como un objeto `registroOperaciones`.
5) Si el usuario elige "h", se muestra el historial de operaciones realizadas por consola
6) Si el usuario elige "q", el bucle se termina y la calculadora sale.
7)Si la opcion ingresada no es valida, se muestra un mensaje de error y el bucle continua.*/

function calculadora(){
   
    let terminar = false;
    while(!terminar){
         eleccion = prompt("Selecciona una operación:\n+ para Suma\n- para Resta\n* para Multiplicación\n/ para División\nr para Raíz Cuadrada\nh para Mostrar Historial\nq para Salir");
    
        switch(eleccion){
            case "+":
                num1 = parseFloat(prompt("Ingrese el primer número"));
                num2 = parseFloat(prompt("Ingrese el segundo número"));
                if(validarInput()){
                    resultado = operacion(num1, num2, "+");
                    console.log("Resultado: " + resultado);
                    let operacionNueva = new registroOperaciones("+", num1, num2, resultado);
                    historial.push(operacionNueva);
                }
                break;

             case "-":
                num1 = parseFloat(prompt("Ingrese el primer número"));
                num2 = parseFloat(prompt("Ingrese el segundo número"));
                if(validarInput()){
                resultado = operacion(num1,num2, "-");
                console.log("Resultado: " + resultado);
                let operacionNueva = new registroOperaciones("-", num1, num2, resultado);
                historial.push(operacionNueva);
                }
                break;

             case "*":
                num1 = parseFloat(prompt("Ingrese el primer número"));
                num2 = parseFloat(prompt("Ingrese el segundo número"));
                if(validarInput()){
                resultado = operacion(num1,num2, "*");
                console.log("Resultado: " + resultado);
                let operacionNueva = new registroOperaciones("*", num1, num2, resultado);
                historial.push(operacionNueva);
                }
                break;

                case "/":
                 num1 = parseFloat(prompt("Ingrese el primer número"));
                 num2 = parseFloat(prompt("Ingrese el segundo número"));
                 if(validarInput()){
                 resultado = operacion(num1,num2, "/");
                 console.log("Resultado: " + resultado);
                 let operacionNueva = new registroOperaciones("/", num1, num2, resultado);
                 historial.push(operacionNueva);
                 }
                break;

                 case "r": 
                  num1 = parseFloat(prompt("Ingrese el número"));
                  if(validarInput()){
                  resultado = operacion(num1, null, "r");
                  console.log("Resultado: " + resultado);
                  let operacionNueva = new registroOperaciones("r", num1,null,resultado);
                  historial.push(operacionNueva);
                  }
                  break;

                 case "h":
                    mostrarHistorial();
                    break;

                 case "q":
                terminar = true;
                 console.log("Saliendo de la calculadora...");
                 break;

                 default:
                    alert("Operación no válida, vuelva a intentar.")

        }
    }
}

//se hace el respectivo llamado a la funcion principal del codigo, 'calculadora', para el respectivo funcionamiento
calculadora();