const fs = require("node:fs/promises"); // Importa el módulo 'fs' de Node.js para trabajar con archivos y directorios utilizando promesas.
const path = require("node:path"); // Importa el módulo 'path' de Node.js para trabajar con rutas de archivo y directorio.

const folder = process.argv[2] ?? "."; // Asigna el tercer argumento de la línea de comandos a la variable 'folder', o utiliza el valor por defecto "." si no se proporciona ningún tercer argumento.

async function ls(folder) {
  // Declara una función asíncrona llamada 'ls' que toma un parámetro 'folder'.
  let files; // Declara una variable 'files'.

  try {
    files = await fs.readdir(folder); // Lee los archivos en el directorio especificado por 'folder' y espera a que se complete.
  } catch (error) {
    console.error(`Error al leer el directorio ${folder}`); // Muestra un mensaje de error si ocurre un error al leer el directorio.
    process.exit(1); // Finaliza el proceso con un código de salida 1 indicando un error.
  }

  const filesPromises = files.map(async (file) => {
    // Crea un array 'filesPromises' que contiene promesas generadas por el método 'map' aplicado a cada elemento del array 'files'.
    const filePath = path.join(folder, file); // Combina la carpeta y el archivo actual en una sola ruta de archivo.

    let stats;
    try {
      stats = await fs.stat(filePath); // Obtiene los datos de archivo y directorio para el archivo especificado por 'filePath' y espera a que se complete.
    } catch {
      console.error(`Error al obtener los datos de ${filePath}`); // Muestra un mensaje de error si ocurre un error al obtener los datos de archivo y directorio.
      process.exit(1); // Finaliza el proceso con un código de salida 1 indicando un error.
    }

    const isDirectory = stats.isDirectory(); // Verifica si el archivo es un directorio.
    const fileType = isDirectory ? "d" : "f"; // Asigna "d" si es un directorio, o "f" si es un archivo.
    const fileSize = stats.size; // Obtiene el tamaño del archivo.
    const fileModified = stats.mtime.toLocaleString(); // Obtiene la fecha de modificación del archivo en formato legible.

    return `${fileType} ${file.padEnd(20)} ${fileSize
      .toString()
      .padStart(10)} ${fileModified}`; // Devuelve una cadena que representa la información del archivo en el formato deseado, utilizando el método 'padEnd' para agregar espacios en blanco al final del nombre del archivo y el método 'padStart' para agregar ceros al principio del tamaño del archivo.
  });

  const filesInfo = await Promise.all(filesPromises); // Espera a que todas las promesas en 'filesPromises' se resuelvan.

  filesInfo.forEach((fileInfo) => console.log(fileInfo)); // Imprime la información de cada archivo en la consola.
}

ls(folder); // Llama a la función 'ls' pasando el valor de 'folder' como argumento.
