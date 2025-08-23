/**
 Script que muestra información básica del sistema usando el módulo 'os' de Node.js.
  Incluye detalles sobre el sistema operativo, CPU, memoria, tiempo de actividad y usuario actual.
 */
 // Importa el módulo nativo 'os' para obtener información del sistema
function system_monitor(callbackVolver){
const os = require('os');

//Muestra información relevante del sistema en la consola.

function mostrarInformacion() {
  //console.clear(); // Limpia la consola antes de mostrar la información

  console.log('🖥️  Monitor de Sistema');
  console.log('========================');
  console.log(`Sistema: ${os.platform()} (${os.arch()})`); // Plataforma y arquitectura
  console.log(`CPU: ${os.cpus()[0].model}`); // Modelo de CPU
  console.log(`Cores: ${os.cpus().length}`); // Número de núcleos usando lengt
  console.log(`Memoria Libre: ${(os.freemem() / (1024 * 1024)).toFixed(2)} MB`); // Memoria libre en MB Ram
  console.log(`Memoria Total: ${(os.totalmem() / (1024 * 1024)).toFixed(2)} MB`); // Memoria total en MB Ram
  console.log(`Uptime: ${(os.uptime() / 60).toFixed(2)} minutos`); // Tiempo de actividad en minutos 
  console.log(`Usuario: ${os.userInfo().username}`); // Usuario actual

  console.log('========================\n');
  callbackVolver()
}

// Ejecuta la función para mostrar la información del sistema
mostrarInformacion(); 
}
module.exports = system_monitor;