function cli_tool(rl, callbackVolver) {
  console.log('=== Bienvenido a la CLI de ejemplo ===');
  console.log('Comandos disponibles: hola, tiempo, volver, salir');

  function preguntar() {
    rl.question("Ingresa un comando: ", (input) => {
      input = input.trim().toLowerCase();

      switch (input) {
        case 'hola':
          console.log('¡Hola! ¿Cómo estás?');
          break;
        case 'tiempo':
          console.log(`Tiempo activo: ${process.uptime().toFixed(2)} segundos`);
          break;
        case 'volver':
          console.log('Regresando al menú principal...');
          callbackVolver();
          return;
        case 'salir':
          console.log('Saliendo del programa por completo...');
          rl.close();
          process.exit(0);
        default:
          console.log('Comando no reconocido. Usa "hola", "tiempo", "volver" o "salir".');
      }

      preguntar(); 
    });
  }

  preguntar();
}

module.exports = cli_tool;
