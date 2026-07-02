/**
 
 * Temas:
 *  1. Máquina de Turing (básico)
 *  2. Historia de Computacion
 *  3. AFD y AFND
 *  4. Lenguajes y Jerarquía de Chomsky
 *  5. Transformaciones entre AFD y AFND
 *  6. Autoamta de pila
 */

const BANCO_PREGUNTAS = [

  // TEMA 1: Máquina de Turing (básico)
  {
    tema: "Máquina de Turing",
    pregunta: "¿Qué es una Máquina de Turing?",
    opciones: [
      "Un lenguaje de programación moderno",
      "Un modelo matemático abstracto de computación",
      "Un tipo especial de base de datos",
      "Un procesador físico de alta velocidad"
    ],
    correcta: 1
  },
  {
    tema: "Máquina de Turing",
    pregunta: "¿Quién propuso la Máquina de Turing?",
    opciones: [
      "Charles Babbage",
      "John von Neumann",
      "Alan Turing",
      "Ada Lovelace"
    ],
    correcta: 2
  },
  {
    tema: "Máquina de Turing",
    pregunta: "¿Cuál es el componente principal de almacenamiento de una Máquina de Turing?",
    opciones: [
      "Una pila infinita",
      "Una cinta infinita",
      "Un registro de memoria",
      "Un árbol binario"
    ],
    correcta: 1
  },
  {
    tema: "Máquina de Turing",
    pregunta: "¿Qué puede hacer el cabezal de una Máquina de Turing?",
    opciones: [
      "Solo leer la cinta",
      "Solo escribir en la cinta",
      "Leer, escribir y moverse a izquierda o derecha",
      "Únicamente moverse a la derecha"
    ],
    correcta: 2
  },
  {
    tema: "Máquina de Turing",
    pregunta: "¿Cuántas cintas usa una Máquina de Turing básica?",
    opciones: [
      "Dos",
      "Tres",
      "Una",
      "Ninguna, usa memoria interna"
    ],
    correcta: 2
  },
  {
    tema: "Máquina de Turing",
    pregunta: "Una Máquina de Turing acepta una cadena cuando:",
    opciones: [
      "La cinta queda vacía",
      "El cabezal llega al final de la cinta",
      "Llega a un estado de aceptación",
      "Borra todos los símbolos de la cinta"
    ],
    correcta: 2
  },
  {
    tema: "Máquina de Turing",
    pregunta: "¿Qué tipo de lenguajes puede reconocer una Máquina de Turing?",
    opciones: [
      "Solo lenguajes regulares",
      "Solo lenguajes libres de contexto",
      "Lenguajes recursivamente enumerables",
      "Solo lenguajes finitos"
    ],
    correcta: 2
  },
  {
    tema: "Máquina de Turing",
    pregunta: "¿Qué significa que una Máquina de Turing 'loop' (entre en bucle)?",
    opciones: [
      "Que acepta la cadena inmediatamente",
      "Que rechaza la cadena",
      "Que nunca termina de ejecutarse",
      "Que reinicia desde el estado inicial"
    ],
    correcta: 2
  },
  {
    tema: "Máquina de Turing",
    pregunta: "La función de transición de una MT define:",
    opciones: [
      "Solo el próximo estado",
      "El próximo estado, el símbolo a escribir y la dirección del movimiento",
      "Solo el símbolo a escribir",
      "El número de pasos a ejecutar"
    ],
    correcta: 1
  },
  {
    tema: "Máquina de Turing",
    pregunta: "¿Qué es la Tesis de Church-Turing?",
    opciones: [
      "Que toda función computable puede calcularse con una MT",
      "Que las MTs son más rápidas que los ordenadores reales",
      "Que existen infinitos tipos de MTs",
      "Que los lenguajes regulares son los únicos computables"
    ],
    correcta: 0
  },
  {
    tema: "Máquina de Turing",
    pregunta: "¿Cuántos estados de aceptación puede tener una Máquina de Turing?",
    opciones: [
      "Exactamente uno",
      "Exactamente dos",
      "Ninguno",
      "Uno o más"
    ],
    correcta: 3
  },
  {
    tema: "Máquina de Turing",
    pregunta: "¿Qué es una Máquina de Turing Universal?",
    opciones: [
      "Una MT que resuelve todos los problemas en tiempo constante",
      "Una MT que puede simular cualquier otra MT",
      "Una MT con cinta bidimensional",
      "Una MT con alfabeto infinito"
    ],
    correcta: 1
  },
  {
    tema: "Máquina de Turing",
    pregunta: "¿Cuál de estos problemas es indecidible para la MT?",
    opciones: [
      "Reconocer si una cadena pertenece a un lenguaje regular",
      "Sumar dos números naturales",
      "El Problema de la Parada (Halting Problem)",
      "Ordenar una lista de números"
    ],
    correcta: 2
  },
  {
    tema: "Máquina de Turing",
    pregunta: "Una Máquina de Turing determinista (MTD) se diferencia de una no determinista (MTND) en que:",
    opciones: [
      "La MTD usa más cintas",
      "La MTD tiene exactamente una transición por cada par estado-símbolo",
      "La MTD no tiene estados de rechazo",
      "La MTD no puede moverse a la izquierda"
    ],
    correcta: 1
  },
  {
    tema: "Máquina de Turing",
    pregunta: "¿En qué año publicó Alan Turing el modelo de la Máquina de Turing?",
    opciones: [
      "1928",
      "1936",
      "1945",
      "1950"
    ],
    correcta: 1
  },
  {
    tema: "Máquina de Turing",
    pregunta: "La cinta de una Máquina de Turing es:",
    opciones: [
      "Finita y fija",
      "Circular",
      "Infinita en al menos una dirección",
      "De tamaño igual a la entrada"
    ],
    correcta: 2
  },
  {
    tema: "Máquina de Turing",
    pregunta: "¿Qué ocurre cuando una Máquina de Turing llega a un estado de rechazo?",
    opciones: [
      "Borra toda la cinta y reinicia",
      "Se detiene y rechaza la cadena de entrada",
      "Continúa ejecutándose indefinidamente",
      "Pasa al estado inicial"
    ],
    correcta: 1
  },
  {
    tema: "Máquina de Turing",
    pregunta: "¿Qué modelo es equivalente en poder computacional a la Máquina de Turing?",
    opciones: [
      "Autómata Finito",
      "Autómata de Pila",
      "El Cálculo Lambda de Church",
      "Los Autómatas de dos pilas no deterministas"
    ],
    correcta: 2
  },
  {
    tema: "Máquina de Turing",
    pregunta: "Una configuración de una MT está formada por:",
    opciones: [
      "Solo el estado actual",
      "El estado actual, el contenido de la cinta y la posición del cabezal",
      "El alfabeto y los estados",
      "Solo el contenido de la cinta"
    ],
    correcta: 1
  },


  // TEMA 2: Historia de Computacion
  {
    tema: "Historia de Computacion",
    pregunta: "¿Quién es considerada la primera programadora de la historia?",
    opciones: [
      "Grace Hopper",
      "Ada Lovelace",
      "Margaret Hamilton",
      "Barbara Liskov"
    ],
    correcta: 1
  },
  {
    tema: "Historia de Computacion",
    pregunta: "Ada Lovelace escribió el primer algoritmo para:",
    opciones: [
      "La computadora ENIAC",
      "La Máquina Analítica de Charles Babbage",
      "El lenguaje COBOL",
      "El compilador de Fortran"
    ],
    correcta: 1
  },
  {
    tema: "Historia de Computacion",
    pregunta: "¿Quién diseñó la Máquina Analítica, considerada precursora de las computadoras modernas?",
    opciones: [
      "Alan Turing",
      "John von Neumann",
      "Charles Babbage",
      "Blaise Pascal"
    ],
    correcta: 2
  },
  {
    tema: "Historia de Computacion",
    pregunta: "¿Qué lenguaje de programación fue nombrado en honor a Ada Lovelace?",
    opciones: [
      "COBOL",
      "Ada",
      "Pascal",
      "Fortran"
    ],
    correcta: 1
  },
  {
    tema: "Historia de Computacion",
    pregunta: "Grace Hopper es famosa por crear:",
    opciones: [
      "El lenguaje C",
      "El primer compilador y contribuir al lenguaje COBOL",
      "El sistema Unix",
      "El lenguaje Java"
    ],
    correcta: 1
  },
  {
    tema: "Historia de Computacion",
    pregunta: "¿Quién es conocido como el padre de la programación estructurada?",
    opciones: [
      "Dennis Ritchie",
      "Edsger Dijkstra",
      "Donald Knuth",
      "Niklaus Wirth"
    ],
    correcta: 1
  },
  {
    tema: "Historia de Computacion",
    pregunta: "¿Qué aportó John von Neumann al mundo de la computación?",
    opciones: [
      "El lenguaje ensamblador",
      "La arquitectura de computadora que lleva su nombre (programa almacenado)",
      "El sistema operativo Unix",
      "El concepto de bit"
    ],
    correcta: 1
  },
  {
    tema: "Historia de Computacion",
    pregunta: "El lenguaje FORTRAN, uno de los primeros lenguajes de alto nivel, fue creado por:",
    opciones: [
      "Grace Hopper",
      "John Backus en IBM",
      "Dennis Ritchie",
      "Niklaus Wirth"
    ],
    correcta: 1
  },
  {
    tema: "Historia de Computacion",
    pregunta: "¿Quién desarrolló el lenguaje C?",
    opciones: [
      "Brian Kernighan solo",
      "Linus Torvalds",
      "Dennis Ritchie",
      "Bjarne Stroustrup"
    ],
    correcta: 2
  },
  {
    tema: "Historia de Computacion",
    pregunta: "El concepto de 'bug' en programación fue popularizado por:",
    opciones: [
      "Alan Turing",
      "Grace Hopper, quien encontró una polilla en una computadora",
      "John von Neumann",
      "Charles Babbage"
    ],
    correcta: 1
  },
  {
    tema: "Historia de Computacion",
    pregunta: "¿Quién creó el lenguaje Pascal?",
    opciones: [
      "Ada Lovelace",
      "Edsger Dijkstra",
      "Niklaus Wirth",
      "Tony Hoare"
    ],
    correcta: 2
  },
  {
    tema: "Historia de Computacion",
    pregunta: "Alan Turing propuso en 1950 una prueba para determinar si una máquina puede pensar. ¿Cómo se llama?",
    opciones: [
      "La prueba de Turing",
      "La prueba de Church",
      "El test de von Neumann",
      "La prueba de Babbage"
    ],
    correcta: 0
  },
  {
    tema: "Historia de Computacion",
    pregunta: "¿Cuál fue uno de los primeros lenguajes de programación de alto nivel?",
    opciones: [
      "Python",
      "Java",
      "FORTRAN",
      "C++"
    ],
    correcta: 2
  },
  {
    tema: "Historia de Computacion",
    pregunta: "Bjarne Stroustrup es conocido por crear:",
    opciones: [
      "Python",
      "C++",
      "Java",
      "Ruby"
    ],
    correcta: 1
  },
  {
    tema: "Historia de Computacion",
    pregunta: "¿Quién desarrolló el sistema operativo Unix?",
    opciones: [
      "Bill Gates y Paul Allen",
      "Ken Thompson y Dennis Ritchie en Bell Labs",
      "Linus Torvalds",
      "Steve Jobs y Steve Wozniak"
    ],
    correcta: 1
  },
  {
    tema: "Historia de Computacion",
    pregunta: "¿Qué significa 'programación estructurada'?",
    opciones: [
      "Programar sin errores",
      "Usar solo sentencias de control: secuencia, selección e iteración",
      "Usar orientación a objetos",
      "Escribir código en lenguaje ensamblador"
    ],
    correcta: 1
  },


  // TEMA 3: AFD y AFND
  {
    tema: "AFD y AFND",
    pregunta: "¿Qué significa AFD?",
    opciones: [
      "Autómata Finito Dinámico",
      "Autómata Finito Determinista",
      "Algoritmo Formal Determinista",
      "Autómata de Flujo Determinado"
    ],
    correcta: 1
  },
  {
    tema: "AFD y AFND",
    pregunta: "¿Qué significa AFND?",
    opciones: [
      "Autómata Finito No Dinámico",
      "Autómata Formal No Determinado",
      "Autómata Finito No Determinista",
      "Algoritmo Finito No Determinista"
    ],
    correcta: 2
  },
  {
    tema: "AFD y AFND",
    pregunta: "¿Cuántas transiciones puede tener un AFD por cada par (estado, símbolo)?",
    opciones: [
      "Ninguna",
      "Exactamente una",
      "Una o más",
      "Infinitas"
    ],
    correcta: 1
  },
  {
    tema: "AFD y AFND",
    pregunta: "En un AFND, al leer un símbolo desde un estado, el autómata puede:",
    opciones: [
      "Ir solo a un estado fijo",
      "Detenerse siempre",
      "Ir a cero, uno o varios estados simultáneamente",
      "Solo quedarse en el estado actual"
    ],
    correcta: 2
  },
  {
    tema: "AFD y AFND",
    pregunta: "¿Qué tipo de lenguajes reconocen los AFD?",
    opciones: [
      "Lenguajes libres de contexto",
      "Lenguajes regulares",
      "Lenguajes sensibles al contexto",
      "Lenguajes recursivos"
    ],
    correcta: 1
  },
  {
    tema: "AFD y AFND",
    pregunta: "Un AFD acepta una cadena si:",
    opciones: [
      "Termina en cualquier estado",
      "Termina en un estado de aceptación",
      "Recorre todos los estados",
      "El cabezal llega al final de la cinta"
    ],
    correcta: 1
  },
  {
    tema: "AFD y AFND",
    pregunta: "¿Cuál es la diferencia principal entre AFD y AFND?",
    opciones: [
      "El AFD usa más memoria",
      "El AFND puede tener múltiples transiciones para el mismo par estado-símbolo",
      "El AFND no tiene estado inicial",
      "El AFD acepta más lenguajes"
    ],
    correcta: 1
  },
  {
    tema: "AFD y AFND",
    pregunta: "¿Qué son las transiciones épsilon (ε) en un AFND?",
    opciones: [
      "Transiciones que leen un símbolo especial llamado épsilon",
      "Transiciones que ocurren sin consumir ningún símbolo de la entrada",
      "Transiciones al estado inicial",
      "Transiciones de error"
    ],
    correcta: 1
  },
  {
    tema: "AFD y AFND",
    pregunta: "Un AFD tiene exactamente cuántos estados iniciales:",
    opciones: [
      "Puede tener varios",
      "Ninguno",
      "Exactamente uno",
      "Tantos como estados de aceptación"
    ],
    correcta: 2
  },
  {
    tema: "AFD y AFND",
    pregunta: "¿Qué es la función de transición de un AFD?",
    opciones: [
      "Una función que dado un estado y un símbolo devuelve un único estado",
      "Una función que genera cadenas",
      "Una función que borra símbolos del alfabeto",
      "Una función que crea nuevos estados"
    ],
    correcta: 0
  },
  {
    tema: "AFD y AFND",
    pregunta: "¿Puede un AFD tener varios estados de aceptación?",
    opciones: [
      "No, solo puede tener uno",
      "Sí, puede tener cero o más estados de aceptación",
      "Solo si el lenguaje es infinito",
      "Solo si el alfabeto tiene más de un símbolo"
    ],
    correcta: 1
  },
  {
    tema: "AFD y AFND",
    pregunta: "¿Cuándo se dice que un AFD rechaza una cadena?",
    opciones: [
      "Cuando la cinta se vacía",
      "Cuando el estado al que llega al terminar la cadena no es de aceptación",
      "Cuando hay una transición no definida en la mitad",
      "Cuando la cadena es muy larga"
    ],
    correcta: 1
  },
  {
    tema: "AFD y AFND",
    pregunta: "¿El AFND es más potente computacionalmente que el AFD?",
    opciones: [
      "Sí, puede reconocer más lenguajes",
      "No, reconocen exactamente la misma clase de lenguajes",
      "Sí, puede reconocer lenguajes libres de contexto",
      "Depende del tamaño del alfabeto"
    ],
    correcta: 1
  },
  {
    tema: "AFD y AFND",
    pregunta: "¿Qué ocurre si en un AFD se lee un símbolo para el que no hay transición definida?",
    opciones: [
      "El autómata acepta la cadena",
      "El autómata va al estado inicial",
      "El autómata rechaza la cadena (va a un estado muerto)",
      "El autómata se repite"
    ],
    correcta: 2
  },
  {
    tema: "AFD y AFND",
    pregunta: "¿Cómo se representa formalmente un AFD?",
    opciones: [
      "(Q, Σ, δ, q0, F) donde Q=estados, Σ=alfabeto, δ=transición, q0=estado inicial, F=estados de aceptación",
      "(V, T, P, S) donde V=variables, T=terminales, P=producciones, S=símbolo inicial",
      "(Q, Γ, δ, q0, Z0, F) con pila",
      "Solo con su tabla de transiciones"
    ],
    correcta: 0
  },
  {
    tema: "AFD y AFND",
    pregunta: "¿Cuántos estados puede tener un autómata finito?",
    opciones: [
      "Exactamente dos: inicial y final",
      "Un número infinito",
      "Un número finito y no vacío",
      "Solo uno"
    ],
    correcta: 2
  },
  {
    tema: "AFD y AFND",
    pregunta: "La tabla de transiciones de un AFD tiene como filas y columnas:",
    opciones: [
      "Filas = palabras, columnas = estados",
      "Filas = estados, columnas = símbolos del alfabeto",
      "Filas = símbolos, columnas = producciones",
      "Filas = estados de aceptación, columnas = estados de rechazo"
    ],
    correcta: 1
  },
  {
    tema: "AFD y AFND",
    pregunta: "¿Qué modela un autómata finito en la vida real?",
    opciones: [
      "Sistemas con memoria ilimitada",
      "Sistemas con un número finito de estados, como semáforos o detectores de patrones",
      "Sistemas de inteligencia artificial",
      "Redes de computadoras"
    ],
    correcta: 1
  },


  // TEMA 4: Lenguajes y Jerarquía de Chomsky
  {
    tema: "Lenguajes y Jerarquía de Chomsky",
    pregunta: "¿Quién propuso la Jerarquía de Chomsky?",
    opciones: [
      "Alan Turing",
      "Noam Chomsky",
      "John Backus",
      "Stephen Kleene"
    ],
    correcta: 1
  },
  {
    tema: "Lenguajes y Jerarquía de Chomsky",
    pregunta: "¿Cuántos tipos de gramáticas define la Jerarquía de Chomsky?",
    opciones: [
      "Dos",
      "Tres",
      "Cuatro",
      "Cinco"
    ],
    correcta: 2
  },
  {
    tema: "Lenguajes y Jerarquía de Chomsky",
    pregunta: "Un lenguaje regular puede describirse con:",
    opciones: [
      "Una expresión regular",
      "Una gramática sensible al contexto",
      "Una Máquina de Turing",
      "Un autómata de pila"
    ],
    correcta: 0
  },
  {
    tema: "Lenguajes y Jerarquía de Chomsky",
    pregunta: "¿Cuál de estos lenguajes NO es regular?",
    opciones: [
      "El lenguaje de cadenas que empiezan con 'a'",
      "El lenguaje {aⁿbⁿ | n ≥ 1}",
      "El lenguaje de cadenas con número par de caracteres",
      "El lenguaje de cadenas que contienen '00'"
    ],
    correcta: 1
  },
  {
    tema: "Lenguajes y Jerarquía de Chomsky",
    pregunta: "¿Cuál de estos es un ejemplo de lenguaje libre de contexto?",
    opciones: [
      "El lenguaje de cadenas sobre {a,b} con igual número de a's y b's",
      "El lenguaje de cadenas que terminan en 'b'",
      "El lenguaje de cadenas con longitud par",
      "El lenguaje vacío"
    ],
    correcta: 0
  },
  {
    tema: "Lenguajes y Jerarquía de Chomsky",
    pregunta: "¿Qué es un lenguaje formal?",
    opciones: [
      "Un lenguaje escrito con reglas gramaticales estrictas como el inglés formal",
      "Un conjunto de cadenas sobre un alfabeto",
      "Un lenguaje de programación compilado",
      "Un lenguaje que solo usa números"
    ],
    correcta: 1
  },
  {
    tema: "Lenguajes y Jerarquía de Chomsky",
    pregunta: "El símbolo ε representa:",
    opciones: [
      "El símbolo más frecuente del alfabeto",
      "La cadena vacía (cadena de longitud cero)",
      "Un estado de error",
      "El inicio de una gramática"
    ],
    correcta: 1
  },
  {
    tema: "Lenguajes y Jerarquía de Chomsky",
    pregunta: "Las gramáticas sensibles al contexto (Tipo 1) son así llamadas porque:",
    opciones: [
      "Sus reglas dependen del contexto en que aparece el símbolo a reemplazar",
      "Solo se usan para lenguajes naturales",
      "Sus reglas no tienen restricciones",
      "Solo generan lenguajes finitos"
    ],
    correcta: 0
  },
  {
    tema: "Lenguajes y Jerarquía de Chomsky",
    pregunta: "¿Todo lenguaje regular es también libre de contexto?",
    opciones: [
      "No, son clases disjuntas",
      "Sí, porque Tipo 3 ⊂ Tipo 2",
      "Solo si el alfabeto tiene más de un símbolo",
      "Solo si el lenguaje es finito"
    ],
    correcta: 1
  },
  {
    tema: "Lenguajes y Jerarquía de Chomsky",
    pregunta: "¿Cuál de estas herramientas usa gramáticas libres de contexto?",
    opciones: [
      "Los analizadores léxicos (lexers)",
      "Los analizadores sintácticos (parsers) de compiladores",
      "Los motores de búsqueda web",
      "Los sistemas de cifrado"
    ],
    correcta: 1
  },

  // TEMA 5: Transformaciones entre AFD y AFND

  {
    tema: "Transformaciones AFD ↔ AFND",
    pregunta: "¿Es posible convertir cualquier AFND en un AFD equivalente?",
    opciones: [
      "No, algunos AFND no tienen AFD equivalente",
      "Sí, siempre es posible mediante la construcción de subconjuntos",
      "Solo si el AFND no tiene transiciones épsilon",
      "Solo si el AFND tiene menos de 10 estados"
    ],
    correcta: 1
  },
  {
    tema: "Transformaciones AFD ↔ AFND",
    pregunta: "¿Todo AFD es también un AFND?",
    opciones: [
      "No, son modelos completamente distintos",
      "Sí, un AFD es un caso especial de AFND donde cada par estado-símbolo tiene exactamente una transición",
      "Solo si tiene transiciones épsilon",
      "Solo si acepta lenguajes regulares"
    ],
    correcta: 1
  },
  {
    tema: "Transformaciones AFD ↔ AFND",
    pregunta: "¿Qué representa el estado vacío (∅) en la construcción de subconjuntos?",
    opciones: [
      "El estado inicial del AFD",
      "Un estado de rechazo (trampa) al que se va cuando no hay transición definida",
      "Un estado de aceptación especial",
      "El estado con más transiciones"
    ],
    correcta: 1
  },
  {
    tema: "Transformaciones AFD ↔ AFND",
    pregunta: "Un estado del AFD construido es de aceptación si:",
    opciones: [
      "Contiene al estado inicial del AFND",
      "Es el subconjunto con más estados",
      "Contiene al menos un estado de aceptación del AFND",
      "El subconjunto tiene exactamente un estado"
    ],
    correcta: 2
  },
  {
    tema: "Transformaciones AFD ↔ AFND",
    pregunta: "¿Por qué nos interesa convertir un AFND en AFD?",
    opciones: [
      "Porque el AFD ocupa menos memoria siempre",
      "Porque el AFD es más fácil de implementar en una computadora (determinismo)",
      "Porque el AFD acepta más lenguajes",
      "Porque el AFND no puede reconocer lenguajes regulares"
    ],
    correcta: 1
  },
  {
    tema: "Transformaciones AFD ↔ AFND",
    pregunta: "¿Qué es la minimización de un AFD?",
    opciones: [
      "Convertirlo en AFND para reducir estados",
      "Eliminar estados inaccesibles y fusionar estados equivalentes para obtener el AFD con mínimo número de estados",
      "Reducir el tamaño del alfabeto",
      "Eliminar todos los estados de aceptación excepto uno"
    ],
    correcta: 1
  },
  {
    tema: "Transformaciones AFD ↔ AFND",
    pregunta: "¿Qué son los estados inaccesibles en un AFD?",
    opciones: [
      "Estados de rechazo",
      "Estados que no se pueden alcanzar desde el estado inicial",
      "Estados sin transiciones de salida",
      "Estados de aceptación sin transiciones de entrada"
    ],
    correcta: 1
  },
  {
    tema: "Transformaciones AFD ↔ AFND",
    pregunta: "Para eliminar transiciones épsilon de un AFND-ε, se calcula la ε-clausura de cada estado. ¿Qué es esto?",
    opciones: [
      "El conjunto de estados alcanzables leyendo el símbolo ε",
      "El conjunto de estados alcanzables usando solo transiciones ε (sin leer entrada)",
      "El estado inicial del autómata equivalente",
      "El conjunto de todos los estados del AFND"
    ],
    correcta: 1
  },
  {
    tema: "Transformaciones AFD ↔ AFND",
    pregunta: "En la construcción de subconjuntos, ¿cuándo se detiene el algoritmo?",
    opciones: [
      "Cuando se han procesado exactamente 2ⁿ estados",
      "Cuando no se generan nuevos subconjuntos (estados del AFD)",
      "Cuando se encuentran todos los estados de aceptación",
      "Después de n iteraciones, donde n es el número de estados del AFND"
    ],
    correcta: 1
  },
  {
    tema: "Transformaciones AFD ↔ AFND",
    pregunta: "¿Qué lenguaje reconoce el AFD obtenido de convertir un AFND?",
    opciones: [
      "Un sublenguaje del lenguaje del AFND",
      "Un superlenguaje del lenguaje del AFND",
      "Exactamente el mismo lenguaje que el AFND",
      "El complemento del lenguaje del AFND"
    ],
    correcta: 2
  },
  {
    tema: "Transformaciones AFD ↔ AFND",
    pregunta: "¿Cuál es una ventaja del AFND sobre el AFD al diseñar autómatas?",
    opciones: [
      "El AFND es más rápido al ejecutarse",
      "El AFND suele ser más compacto y fácil de diseñar inicialmente",
      "El AFND puede reconocer más lenguajes",
      "El AFND no necesita estados de aceptación"
    ],
    correcta: 1
  },
  {
    tema: "Transformaciones AFD ↔ AFND",
    pregunta: "Al aplicar la construcción de subconjuntos, el estado inicial del AFD es:",
    opciones: [
      "El conjunto de todos los estados del AFND",
      "La ε-clausura del estado inicial del AFND",
      "El estado con más transiciones en el AFND",
      "El primer estado de aceptación del AFND"
    ],
    correcta: 1
  },
  {
    tema: "Transformaciones AFD ↔ AFND",
    pregunta: "¿Qué sucede si en la construcción de subconjuntos un subconjunto resulta ser el vacío (∅)?",
    opciones: [
      "Se ignora y no se agrega al AFD",
      "Se agrega como un estado trampa (dead state) que rechaza todas las cadenas",
      "Se convierte en el estado inicial",
      "El algoritmo falla"
    ],
    correcta: 1
  },
  {
    tema: "Transformaciones AFD ↔ AFND",
    pregunta: "La equivalencia entre AFD, AFND y AFND-ε significa que:",
    opciones: [
      "Son exactamente el mismo modelo con distinto nombre",
      "Los tres reconocen exactamente la clase de los lenguajes regulares",
      "El AFND-ε reconoce más lenguajes que el AFD",
      "El AFD es el único modelo útil en la práctica"
    ],
    correcta: 1
  },

  //TEMA:6 Automata de pila 

  {
    tema: "Autómata de Pila",
    pregunta: "¿Qué estructura de memoria utiliza un autómata de pila?",
    opciones: [
      "Una cola",
      "Una pila",
      "Un árbol",
      "Una lista enlazada"
    ],
    correcta: 1
  },

  {
    tema: "Autómata de Pila",
    pregunta: "¿Qué característica distingue a un autómata de pila de un autómata finito?",
    opciones: [
      "Puede usar una pila como memoria",
      "Tiene más estados",
      "Lee dos símbolos al mismo tiempo",
      "No posee estados de aceptación"
    ],
    correcta: 0
  },

  {
    tema: "Autómata de Pila",
    pregunta: "¿Qué tipo de lenguajes reconocen los autómatas de pila?",
    opciones: [
      "Lenguajes regulares",
      "Lenguajes independientes del contexto",
      "Lenguajes sensibles al contexto",
      "Todos los lenguajes"
    ],
    correcta: 1
  },

  {
    tema: "Autómata de Pila",
    pregunta: "¿Cuál de los siguientes lenguajes puede ser reconocido por un autómata de pila?",
    opciones: [
      "{ aⁿbⁿ | n ≥ 0 }",
      "{ aⁿbⁿcⁿ | n ≥ 0 }",
      "{ aⁿbⁿcⁿdⁿ | n ≥ 0 }",
      "{ aⁿbⁿcⁿdⁿeⁿ | n ≥ 0 }"
    ],
    correcta: 0
  },

  {
    tema: "Autómata de Pila",
    pregunta: "¿Cuál de los siguientes lenguajes NO puede ser reconocido por un autómata de pila?",
    opciones: [
      "{ aⁿbⁿ | n ≥ 0 }",
      "{ wwᴿ | w ∈ {a,b}* }",
      "{ aⁿbⁿcⁿ | n ≥ 0 }",
      "{ (ab)ⁿ | n ≥ 0 }"
    ],
    correcta: 2
  },

  {
    tema: "Autómata de Pila",
    pregunta: "¿Qué operación agrega un símbolo a la pila?",
    opciones: [
      "Pop",
      "Push",
      "Peek",
      "Read"
    ],
    correcta: 1
  },

  {
    tema: "Autómata de Pila",
    pregunta: "¿Qué operación elimina el elemento que está en la cima de la pila?",
    opciones: [
      "Push",
      "Read",
      "Pop",
      "Insert"
    ],
    correcta: 2
  },

  {
    tema: "Autómata de Pila",
    pregunta: "En una pila, ¿qué elemento se puede acceder directamente?",
    opciones: [
      "El primero que ingresó",
      "El del medio",
      "El último que ingresó",
      "Cualquier elemento"
    ],
    correcta: 2
  },

  {
    tema: "Autómata de Pila",
    pregunta: "¿Cuál de las siguientes cadenas pertenece al lenguaje { aⁿbⁿ | n ≥ 1 }?",
    opciones: [
      "aaabbb",
      "aabbb",
      "aaabb",
      "abbb"
    ],
    correcta: 0
  },

  {
    tema: "Autómata de Pila",
    pregunta: "¿Cuál de las siguientes cadenas NO pertenece al lenguaje { aⁿbⁿ | n ≥ 1 }?",
    opciones: [
      "ab",
      "aabb",
      "aaabbb",
      "aabbb"
    ],
    correcta: 3
  },

];