const { green } = require("colors");

require("colors");

const mostrarMenu = () => {
  return new Promise((resolve) => {
    console.clear();
    console.log("=======================".green);
    console.log(" Seleccione una opcion ".green);
    console.log("=======================\n".green);

    console.log(`${"1".green}. Crar tarea`);
    console.log(`${"2".green}. Listar tareas`);
    console.log(`${"3".green}. Listar tareas completadas`);
    console.log(`${"4".green}. Listar tareas pendientes`);
    console.log(`${"5".green}. Completar tareas`);
    console.log(`${"6".green}. Borrar tarea`);
    console.log(`${"7".green}. Salir\n`);

    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question("Selecciones una opcion:", (opt) => {
      readline.close();
      resolve(opt);
    });
  });
};

const pausa = () => {
  return new Promise((resolve) => {
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question(`\nPresione ${"ENTER".green}\n`, (opt) => {
      readline.close();
      resolve(opt);
    });
  });
};

module.exports = {
  mostrarMenu,
  pausa,
};
