/**
 * script.js — Lógica principal de Tik-Flap
 * Juego: Tres en Raya con preguntas de Teoría de la Computación
 */

// ══════════════════════════════════════════════
// ESTADO GLOBAL DEL JUEGO
// ══════════════════════════════════════════════

/** Estado completo de la partida */
const estado = {
  jugadores: ['', ''],        // nombres de los jugadores
  turnoActual: 0,             // índice del jugador en turno (0 o 1)
  tablero: Array(9).fill(null), // null | 'X' | 'O'
  stats: [
    { correctas: 0, incorrectas: 0 },
    { correctas: 0, incorrectas: 0 }
  ],
  juegoActivo: false,
  celdaPendiente: null,        // índice de celda esperando respuesta
};

/** Banco de preguntas barajado */
const manejadorPreguntas = (() => {
  let mazo = [];           // preguntas aún no usadas
  let preguntaActual = null;
  let opcionSeleccionada = null;

  /** Baraja una copia del banco y reinicia el mazo */
  const reiniciarMazo = () => {
    mazo = [...BANCO_PREGUNTAS].sort(() => Math.random() - 0.5);
  };

  /** Toma la siguiente pregunta (reinicia mazo si se agotó) */
  const siguientePregunta = () => {
    if (mazo.length === 0) reiniciarMazo();
    preguntaActual = mazo.pop();
    opcionSeleccionada = null;
    return preguntaActual;
  };

  const getPreguntaActual = () => preguntaActual;
  const setOpcion = (idx) => { opcionSeleccionada = idx; };
  const getOpcion = () => opcionSeleccionada;

  return { reiniciarMazo, siguientePregunta, getPreguntaActual, setOpcion, getOpcion };
})();

// ══════════════════════════════════════════════
// REFERENCIAS AL DOM
// ══════════════════════════════════════════════

const pantallas = {
  menu:      document.getElementById('pantalla-menu'),
  jugadores: document.getElementById('pantalla-jugadores'),
  juego:     document.getElementById('pantalla-juego'),
  resultado: document.getElementById('pantalla-resultado'),
};

const modales = {
  pregunta:  document.getElementById('modal-pregunta'),
  reglas:    document.getElementById('modal-reglas'),
  creditos:  document.getElementById('modal-creditos'),
};

// Menú
const btnJugar    = document.getElementById('btn-jugar');
const btnReglas   = document.getElementById('btn-reglas');
const btnCreditos = document.getElementById('btn-creditos');
const btnSalir    = document.getElementById('btn-salir');

// Jugadores
const inputJ1     = document.getElementById('input-j1');
const inputJ2     = document.getElementById('input-j2');
const errorJ1     = document.getElementById('error-j1');
const errorJ2     = document.getElementById('error-j2');
const btnComenzar = document.getElementById('btn-comenzar');
const btnBackMenu = document.getElementById('btn-back-menu');

// Juego
const tableroEl      = document.getElementById('tablero');
const turnName       = document.getElementById('turn-name');
const btnReiniciar   = document.getElementById('btn-reiniciar');
const btnMenuJuego   = document.getElementById('btn-menu-juego');
const nombreJ1El     = document.getElementById('nombre-j1');
const nombreJ2El     = document.getElementById('nombre-j2');
const panelJ1        = document.getElementById('panel-j1');
const panelJ2        = document.getElementById('panel-j2');
const statCorJ1      = document.getElementById('stat-correctas-j1');
const statIncJ1      = document.getElementById('stat-incorrectas-j1');
const statCorJ2      = document.getElementById('stat-correctas-j2');
const statIncJ2      = document.getElementById('stat-incorrectas-j2');

// Modal pregunta
const modalTema      = document.getElementById('modal-tema');
const modalPregunta  = document.getElementById('modal-pregunta-texto');
const opcionesGrid   = document.getElementById('opciones-grid');
const btnResponder   = document.getElementById('btn-responder');
const btnCancelar    = document.getElementById('btn-cancelar');

// Modal reglas / créditos
const btnCerrarReglas   = document.getElementById('btn-cerrar-reglas');
const btnCerrarCreditos = document.getElementById('btn-cerrar-creditos');

// Resultado
const resultEmoji    = document.getElementById('result-emoji');
const resultTitle    = document.getElementById('result-title');
const resultWinner   = document.getElementById('result-winner');
const resCorrectas   = document.getElementById('res-correctas');
const resIncorrectas = document.getElementById('res-incorrectas');
const btnJugarNuevo  = document.getElementById('btn-jugar-nuevamente');
const btnMenuResult  = document.getElementById('btn-menu-resultado');

// Toast
const toastEl = document.getElementById('toast');

// ══════════════════════════════════════════════
// NAVEGACIÓN ENTRE PANTALLAS
// ══════════════════════════════════════════════

/**
 * Muestra la pantalla indicada y oculta el resto.
 * @param {string} nombre - clave de la pantalla en el objeto `pantallas`
 */
const mostrarPantalla = (nombre) => {
  Object.values(pantallas).forEach(p => p.classList.remove('activa'));
  pantallas[nombre].classList.add('activa');
};

/**
 * Abre un modal quitando el atributo `hidden`.
 * @param {string} nombre - clave en el objeto `modales`
 */
const abrirModal = (nombre) => {
  modales[nombre].removeAttribute('hidden');
  // Enfocar el primer elemento interactivo
  const primerFoco = modales[nombre].querySelector('button, input');
  if (primerFoco) primerFoco.focus();
};

/** Cierra todos los modales */
const cerrarModales = () => {
  Object.values(modales).forEach(m => m.setAttribute('hidden', ''));
};

// ══════════════════════════════════════════════
// TOAST (NOTIFICACIONES)
// ══════════════════════════════════════════════

let toastTimeout = null;

/**
 * Muestra una notificación temporal en pantalla.
 * @param {string} mensaje - texto a mostrar
 * @param {'correct'|'wrong'|''} tipo - estilo del toast
 */
const mostrarToast = (mensaje, tipo = '') => {
  if (toastTimeout) clearTimeout(toastTimeout);

  toastEl.textContent = mensaje;
  toastEl.className = 'toast visible';
  if (tipo) toastEl.classList.add(`toast-${tipo}`);
  toastEl.setAttribute('aria-hidden', 'false');

  toastTimeout = setTimeout(() => {
    toastEl.classList.remove('visible');
    toastEl.setAttribute('aria-hidden', 'true');
  }, 2800);
};

// ══════════════════════════════════════════════
// TABLERO
// ══════════════════════════════════════════════

/** Crea las 9 celdas del tablero en el DOM */
const crearTablero = () => {
  tableroEl.innerHTML = '';

  for (let i = 0; i < 9; i++) {
    const celda = document.createElement('button');
    celda.classList.add('cell');
    celda.dataset.indice = i;
    celda.setAttribute('role', 'gridcell');
    celda.setAttribute('aria-label', `Celda ${i + 1}`);
    celda.addEventListener('click', () => manejarClicCelda(i));
    tableroEl.appendChild(celda);
  }
};

/** Actualiza el contenido visual de todas las celdas según el estado */
const renderizarTablero = () => {
  const celdas = tableroEl.querySelectorAll('.cell');

  celdas.forEach((celda, i) => {
    const valor = estado.tablero[i];
    celda.textContent = valor === 'X' ? '✕' : valor === 'O' ? '〇' : '';
    celda.className = 'cell';

    if (valor) {
      celda.classList.add('taken', `cell-${valor.toLowerCase()}`);
    }

    if (!estado.juegoActivo || valor) {
      celda.classList.add('disabled');
    }
  });
};

// ══════════════════════════════════════════════
// LÓGICA DEL JUEGO
// ══════════════════════════════════════════════

/** Líneas ganadoras (índices del tablero) */
const LINEAS_GANADORAS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // filas
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // columnas
  [0, 4, 8], [2, 4, 6],             // diagonales
];

/**
 * Verifica si hay ganador en el tablero actual.
 * @returns {{ simbolo: string, linea: number[] } | null}
 */
const verificarGanador = () => {
  for (const linea of LINEAS_GANADORAS) {
    const [a, b, c] = linea;
    if (
      estado.tablero[a] &&
      estado.tablero[a] === estado.tablero[b] &&
      estado.tablero[a] === estado.tablero[c]
    ) {
      return { simbolo: estado.tablero[a], linea };
    }
  }
  return null;
};

/** Verifica si el tablero está completamente lleno (empate) */
const esEmpate = () => estado.tablero.every(c => c !== null);

/**
 * Cambia al siguiente turno y actualiza la UI.
 */
const cambiarTurno = () => {
  estado.turnoActual = estado.turnoActual === 0 ? 1 : 0;
  actualizarUI();
};

/**
 * Actualiza todos los elementos de la UI del juego.
 */
const actualizarUI = () => {
  // Nombre en el indicador de turno
  turnName.textContent = estado.jugadores[estado.turnoActual];

  // Destacar panel del jugador activo
  panelJ1.classList.toggle('active-player', estado.turnoActual === 0);
  panelJ2.classList.toggle('active-player', estado.turnoActual === 1);

  // Estadísticas
  statCorJ1.textContent  = estado.stats[0].correctas;
  statIncJ1.textContent  = estado.stats[0].incorrectas;
  statCorJ2.textContent  = estado.stats[1].correctas;
  statIncJ2.textContent  = estado.stats[1].incorrectas;

  renderizarTablero();
};

/**
 * Maneja el clic en una celda del tablero.
 * @param {number} indice - índice de la celda (0-8)
 */
const manejarClicCelda = (indice) => {
  if (!estado.juegoActivo) return;
  if (estado.tablero[indice] !== null) return;

  estado.celdaPendiente = indice;
  mostrarModalPregunta();
};

/**
 * Coloca la ficha del jugador actual en la celda pendiente.
 */
const colocarFicha = () => {
  const simbolo = estado.turnoActual === 0 ? 'X' : 'O';
  estado.tablero[estado.celdaPendiente] = simbolo;
  estado.celdaPendiente = null;

  renderizarTablero();

  const resultado = verificarGanador();
  if (resultado) {
    resaltarGanador(resultado.linea);
    setTimeout(() => mostrarResultado(resultado.simbolo), 900);
    return;
  }

  if (esEmpate()) {
    setTimeout(() => mostrarResultado(null), 500);
    return;
  }

  cambiarTurno();
};

/**
 * Resalta las celdas de la línea ganadora.
 * @param {number[]} linea - índices de las celdas ganadoras
 */
const resaltarGanador = (linea) => {
  const celdas = tableroEl.querySelectorAll('.cell');
  linea.forEach(i => celdas[i].classList.add('winner-cell'));
  estado.juegoActivo = false;
  renderizarTablero();
};

// ══════════════════════════════════════════════
// MODAL DE PREGUNTA
// ══════════════════════════════════════════════

/** Muestra el modal con una nueva pregunta aleatoria */
const mostrarModalPregunta = () => {
  const pregunta = manejadorPreguntas.siguientePregunta();

  modalTema.textContent     = pregunta.tema;
  modalPregunta.textContent = pregunta.pregunta;

  // Limpiar opciones anteriores
  opcionesGrid.innerHTML = '';
  btnResponder.disabled = true;

  // Letras de opción
  const letras = ['A', 'B', 'C', 'D'];

  pregunta.opciones.forEach((texto, idx) => {
    const btn = document.createElement('button');
    btn.classList.add('opcion-btn');
    btn.textContent = `${letras[idx]}) ${texto}`;
    btn.dataset.idx = idx;

    btn.addEventListener('click', () => seleccionarOpcion(idx));
    opcionesGrid.appendChild(btn);
  });

  abrirModal('pregunta');
};

/**
 * Maneja la selección de una opción en el modal.
 * @param {number} idx - índice de la opción seleccionada
 */
const seleccionarOpcion = (idx) => {
  // Quitar selección previa
  opcionesGrid.querySelectorAll('.opcion-btn').forEach(b => b.classList.remove('selected'));

  // Marcar la nueva selección
  const btnOpcion = opcionesGrid.querySelector(`[data-idx="${idx}"]`);
  if (btnOpcion) btnOpcion.classList.add('selected');

  manejadorPreguntas.setOpcion(idx);
  btnResponder.disabled = false;
};

/** Valida la respuesta seleccionada y actúa en consecuencia */
const validarRespuesta = () => {
  const opcion = manejadorPreguntas.getOpcion();
  if (opcion === null) return;

  const pregunta     = manejadorPreguntas.getPreguntaActual();
  const esCorrecta   = opcion === pregunta.correcta;
  const jugadorIdx   = estado.turnoActual;

  // Mostrar feedback visual
  const btns = opcionesGrid.querySelectorAll('.opcion-btn');
  btns.forEach(b => {
    b.disabled = true;
    const idxBtn = parseInt(b.dataset.idx);
    if (idxBtn === pregunta.correcta) {
      b.classList.add('correct-answer');
    } else if (idxBtn === opcion && !esCorrecta) {
      b.classList.add('wrong-answer');
    }
  });
  btnResponder.disabled = true;
  btnCancelar.disabled  = true;

  if (esCorrecta) {
    estado.stats[jugadorIdx].correctas++;
    mostrarToast(` ¡Correcto! ${estado.jugadores[jugadorIdx]} coloca su ficha 🐾`, 'correct');
  } else {
    estado.stats[jugadorIdx].incorrectas++;
    const correctaTexto = pregunta.opciones[pregunta.correcta];
    mostrarToast(` Incorrecto. Respuesta: ${correctaTexto}`, 'wrong');
  }

  // Esperar un momento para mostrar el feedback antes de cerrar
  setTimeout(() => {
    cerrarModales();
    btnCancelar.disabled = false;

    if (esCorrecta) {
      colocarFicha();
    } else {
      // Pierde el turno
      estado.celdaPendiente = null;
      cambiarTurno();
    }

    actualizarUI();
  }, 1400);
};

// ══════════════════════════════════════════════
// PANTALLA DE RESULTADO
// ══════════════════════════════════════════════

/**
 * Muestra la pantalla de resultado final.
 * @param {string|null} simboloGanador - 'X', 'O' o null (empate)
 */
const mostrarResultado = (simboloGanador) => {
  estado.juegoActivo = false;

  if (simboloGanador) {
    const idxGanador = simboloGanador === 'X' ? 0 : 1;
    resultEmoji.textContent  = '🏆';
    resultTitle.textContent  = '¡Tenemos un ganador! 🎉';
    resultWinner.textContent = estado.jugadores[idxGanador];
    resCorrectas.textContent   = estado.stats[idxGanador].correctas;
    resIncorrectas.textContent = estado.stats[idxGanador].incorrectas;
  } else {
    resultEmoji.textContent  = '';
    resultTitle.textContent  = '¡Empate! ¡Qué igualados! 🐾';
    resultWinner.textContent = 'Nadie gana esta vez';
    const totalCor = estado.stats[0].correctas + estado.stats[1].correctas;
    const totalInc = estado.stats[0].incorrectas + estado.stats[1].incorrectas;
    resCorrectas.textContent   = totalCor;
    resIncorrectas.textContent = totalInc;
  }

  mostrarPantalla('resultado');
};

// ══════════════════════════════════════════════
// INICIALIZACIÓN DEL JUEGO
// ══════════════════════════════════════════════

/**
 * Inicia una nueva partida con los nombres dados.
 */
const iniciarPartida = () => {
  const nombre1 = inputJ1.value.trim();
  const nombre2 = inputJ2.value.trim();

  // Validación
  let hayError = false;

  if (!nombre1) {
    errorJ1.textContent = '⚠ Por favor, ingresa un nombre.';
    inputJ1.classList.add('error');
    hayError = true;
  } else {
    errorJ1.textContent = '';
    inputJ1.classList.remove('error');
  }

  if (!nombre2) {
    errorJ2.textContent = '⚠ Por favor, ingresa un nombre.';
    inputJ2.classList.add('error');
    hayError = true;
  } else {
    errorJ2.textContent = '';
    inputJ2.classList.remove('error');
  }

  if (hayError) return;

  // Inicializar estado
  estado.jugadores     = [nombre1, nombre2];
  estado.turnoActual   = 0;
  estado.tablero       = Array(9).fill(null);
  estado.stats         = [{ correctas: 0, incorrectas: 0 }, { correctas: 0, incorrectas: 0 }];
  estado.juegoActivo   = true;
  estado.celdaPendiente = null;

  // Actualizar nombres en la UI
  nombreJ1El.textContent = nombre1;
  nombreJ2El.textContent = nombre2;

  // Inicializar el banco de preguntas
  manejadorPreguntas.reiniciarMazo();

  // Crear tablero
  crearTablero();
  actualizarUI();

  mostrarPantalla('juego');
};

/** Reinicia solo el tablero manteniendo los jugadores */
const reiniciarPartida = () => {
  estado.tablero       = Array(9).fill(null);
  estado.turnoActual   = 0;
  estado.stats         = [{ correctas: 0, incorrectas: 0 }, { correctas: 0, incorrectas: 0 }];
  estado.juegoActivo   = true;
  estado.celdaPendiente = null;

  cerrarModales();
  crearTablero();
  actualizarUI();

  mostrarToast(' Partida reiniciada. ¡A jugar!', '');
};

// ══════════════════════════════════════════════
// REGISTRO DE EVENTOS
// ══════════════════════════════════════════════

// ── Menú principal ──
btnJugar.addEventListener('click', () => mostrarPantalla('jugadores'));

btnReglas.addEventListener('click', () => abrirModal('reglas'));

btnCreditos.addEventListener('click', () => abrirModal('creditos'));

btnSalir.addEventListener('click', () => {
  mostrarToast('👋 ¡Hasta pronto! Gracias por jugar ~', '');
  setTimeout(() => window.close(), 1500);
});

// ── Pantalla de jugadores ──
btnBackMenu.addEventListener('click', () => mostrarPantalla('menu'));

btnComenzar.addEventListener('click', iniciarPartida);

// Enviar formulario con Enter
inputJ1.addEventListener('keydown', e => { if (e.key === 'Enter') inputJ2.focus(); });
inputJ2.addEventListener('keydown', e => { if (e.key === 'Enter') iniciarPartida(); });

// Limpiar error al escribir
inputJ1.addEventListener('input', () => {
  errorJ1.textContent = '';
  inputJ1.classList.remove('error');
});
inputJ2.addEventListener('input', () => {
  errorJ2.textContent = '';
  inputJ2.classList.remove('error');
});

// ── Pantalla de juego ──
btnReiniciar.addEventListener('click', reiniciarPartida);

btnMenuJuego.addEventListener('click', () => {
  cerrarModales();
  mostrarPantalla('menu');
});

// ── Modal de pregunta ──
btnResponder.addEventListener('click', validarRespuesta);

btnCancelar.addEventListener('click', () => {
  cerrarModales();
  estado.celdaPendiente = null;
  mostrarToast('↩ Turno cancelado. No se pierde el turno.', '');
});

// ── Modales informativos ──
btnCerrarReglas.addEventListener('click', cerrarModales);
btnCerrarCreditos.addEventListener('click', cerrarModales);

// Cerrar modales al hacer clic fuera de la tarjeta
Object.values(modales).forEach(modal => {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) cerrarModales();
  });
});

// Cerrar modales con Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') cerrarModales();
});

// ── Pantalla de resultado ──
btnJugarNuevo.addEventListener('click', () => {
  reiniciarPartida();
  mostrarPantalla('juego');
});

btnMenuResult.addEventListener('click', () => mostrarPantalla('menu'));

// ══════════════════════════════════════════════
// INICIO DE LA APLICACIÓN
// ══════════════════════════════════════════════

/** Muestra la pantalla inicial */
const init = () => {
  mostrarPantalla('menu');
};

init();
