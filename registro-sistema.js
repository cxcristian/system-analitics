

//Practica uno: Registro y Depuración Avanzada
function registro_sistema(callbackVolver){
//Inicio del codigo (simple console.log)
console.log("=== Inicio del sistema ===");
// Console.time es un metodo de consola que permite medir el tiempo que tarda en ejecutarse un bloque de codigo
console.time("ProcesoPrincipal");
//funncion para simular el acceso de usuarios, con parametro usuario
function accesoUsuario(usuario) {
    //console.count es un metodo de consola que permite contar el numero de veces que se ha llamado a una funcion
    //Segun veo en el codigo recuerda cuantas veces se ha llamado a la funcion con el mismo parametro.,
  console.count(`Acceso de usuario ${usuario}`);
}
//instancias de acceso de usuarios
accesoUsuario('Carlos');
accesoUsuario('Ana');
accesoUsuario('Carlos');
//Console.warn es un metodo de consola que permite mostrar mensajes de advertencia en la consola(aqui se aplica si o si, ya que no tiene validacion
//ni registro)
console.warn("Capacidad de usuarios alcanzando el límite");
//Console.error es un metodo de consola que permite mostrar mensajes de error en la consola
//Aqui se aplica si o si, ya que no tiene validacion ni registro carajo!!!
console.error("Error: No se pudo conectar a la base de datos");
// array con los usuarios y sy rol
const usuarios = [
  { nombre: "Carlos", rol: "Admin" },
  { nombre: "Ana", rol: "User" }
];
//se crea una tabla con los usuarios y su rol
console.table(usuarios);
//Termina de contar el codigo (Nota: toca indicar el inicio y el fin del bloqeue a medir)
console.timeEnd("ProcesoPrincipal");
//Fin del codigo.
console.log("=== Fin del modulo ===");
callbackVolver()
}

module.exports = registro_sistema;
