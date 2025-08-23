//importacion del modulo cli-tool
const cli_tool = require ('./cli-tool');
//importacion del modulo registro-sistema
const registro_sistema = require ('./registro-sistema');
//importacion del modulo system-monitor
const system_monitor = require ('./system-monitor');
//importacion del modulo readline para interaccion con el usuario
const readline = require('readline');

//importacion de chalk
const chalk = require("chalk");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//este sera el unico rl global para evitar jodas
//llamado de los modulos
function mostrarMenu() {
      console.log(chalk.bold.cyan("\n=== MENÚ PRINCIPAL ==="));
    console.log(chalk.yellow("Ingrese el módulo que desea ejecutar:"));
    console.log(
        chalk.green(" - cli") + ", " +
        chalk.green("registro") + ", " +
        chalk.green("monitor") + ", " +
        chalk.red("salir")
    );
    rl.question("Opcion: ", (eleccion) => {
        eleccion = eleccion.toLowerCase();

        switch (eleccion) {
            case "cli":
                cli_tool(rl, mostrarMenu);
                return; // no llamamos de nuevo aquí porque lo hará cli_tool al salir
            case "registro":
                registro_sistema(mostrarMenu);
                return;
            case "monitor":
                system_monitor(mostrarMenu);
                return;
            case "salir":
                console.log("Saliendo del sistema...");
                rl.close();
                return;
            default:
                console.log("Opción no válida.");
        }

        // si no se ejecutó ningún módulo válido, volvemos a preguntar
        mostrarMenu();
    });
}

mostrarMenu();