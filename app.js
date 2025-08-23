//importacion del modulo cli-tool
const cli_tool = require ('./cli-tool');
//importacion del modulo registro-sistema
const registro_sistema = require ('./registro-sistema');
//importacion del modulo system-monitor
const system_monitor = require ('./system-monitor');


//llamado de los modulos
cli_tool();
registro_sistema();
system_monitor();
