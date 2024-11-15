# Calculadora Interactiva en JavaScript

## Descripción

La **Calculadora Interactiva en JavaScript** es una aplicación web sencilla que permite realizar operaciones matemáticas básicas, como suma, resta, multiplicación, división, y raíz cuadrada. Además, mantiene un historial de las operaciones realizadas, proporcionando una forma de consultar las operaciones previas con sus resultados. La aplicación valida los datos introducidos por el usuario para evitar errores como la división por cero o intentar calcular la raíz cuadrada de un número negativo.

## Funcionalidades

- **Operaciones Básicas**: La calculadora permite realizar las siguientes operaciones:
  - Suma (`+`)
  - Resta (`-`)
  - Multiplicación (`*`)
  - División (`/`)
  - Raíz Cuadrada (`r`)

- **Historial de Operaciones**: Cada operación realizada se almacena en un historial, el cual puede ser consultado por el usuario. El historial muestra el tipo de operación, los operandos, y el resultado de la operación en un formato legible.

- **Validación de Entradas**: Se valida que los datos introducidos sean números y que las operaciones sean válidas antes de realizar el cálculo. Se verifica que no se intente dividir por cero ni calcular la raíz cuadrada de números negativos.

- **Interfaz de Usuario**: La aplicación funciona a través de un menú interactivo en la consola. El usuario puede seleccionar la operación a realizar mediante la introducción de símbolos como `+`, `-`, `*`, `/`, o `r`. También puede consultar el historial con la opción `h` o salir de la calculadora con la opción `q`.

## Uso

1. **Ejecutar la Calculadora**:
   Al ejecutar la calculadora, el usuario verá un menú en el que podrá elegir entre realizar una operación matemática, consultar el historial o salir de la aplicación.
   
2. **Seleccionar una Operación**:
   El usuario puede seleccionar una operación ingresando uno de los siguientes símbolos:
   - `+` para Suma
   - `-` para Resta
   - `*` para Multiplicación
   - `/` para División
   - `r` para Raíz Cuadrada

3. **Introducir los Números**:
   Dependiendo de la operación seleccionada, el usuario será solicitado a introducir uno o dos números. En el caso de la raíz cuadrada, solo se pide un número.

4. **Consultar Historial**:
   El usuario puede ver todas las operaciones previas realizando la opción `h`.

5. **Salir de la Aplicación**:
   Para salir de la aplicación, el usuario debe elegir la opción `q`.

## Desafíos y Limitaciones

- **Problema Inicial de Ejecución**: Al ejecutar la calculadora por primera vez, es necesario salir de la aplicación y volver a iniciarla (presionando "q") para que funcione correctamente. Este comportamiento podría estar relacionado con el navegador o con el Live Server utilizado para ejecutar el proyecto.

## Tecnologías Usadas

- **JavaScript**: Lenguaje de programación utilizado para la lógica y las operaciones matemáticas.
- **HTML**: Para la estructura básica de la aplicación (si es necesario para la visualización en el navegador).
- **CSS**: Si se opta por agregar estilos (aunque en esta versión solo se presenta la funcionalidad en consola).

## Código Fuente

El código fuente está disponible en el repositorio del proyecto.

