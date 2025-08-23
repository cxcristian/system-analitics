
/**
 * Practica dos: Herramienta CLI Simple
 *
 * Este script implementa una interfaz de línea de comandos (CLI) interactiva en Node.js.
 * Permite al usuario ingresar comandos y recibir respuestas en la consola.
 *
 * Comandos disponibles:
 *   - hola   : Saluda al usuario.
 *   - tiempo : Muestra el tiempo de ejecución del programa.
 *   - salir  : Finaliza la aplicación.
 */

// Mensaje de bienvenida y ayuda
function cli_tool(rl, callbackVolver){ 
console.log('=== Bienvenido a la CLI de ejemplo ===');
console.log('Comandos disponibles: hola, tiempo, salir, volver');

// Configura la entrada estándar para leer texto en UTF-8
process.stdin.setEncoding('utf-8');

/**
 * Procesa los comandos ingresados por el usuario.
 * @param {string} data - Entrada del usuario desde la consola.
 */
// Función para procesar los comandos
function procesarComando(data) {
    // Limpia la entrada y la convierte a minúsculas
  const input = data.trim().toLowerCase();
    // Evalúa el comando ingresado
  switch (input) {
    case 'hola':
      console.log('¡Hola! ¿Cómo estás?');
      break;
    case 'tiempo':
        // Muestra el tiempo de ejecución del programa
      console.log(`Tiempo activo: ${process.uptime().toFixed(2)} segundos`);
      break;
    case 'salir':
      console.log('Saliendo...');
      process.exit(0);
      break;
    case 'volver':
        console.log('Regresando al menú principal...');
        process.stdin.removeListener('data', procesarComando); 
        callbackVolver(); 
        return;
    default:
      console.log('Comando no reconocido. Usa "hola", "tiempo" o "salir".');
  }

  process.stdout.write('Ingresa un nuevo comando: ');
}

// Escucha los datos ingresados por el usuario
process.stdin.on('data', procesarComando);
}
module.exports = cli_tool;