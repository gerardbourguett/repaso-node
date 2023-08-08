const fs = require("node:fs/promises");

fs.readdir(".")
  .then((files) => {
    files.forEach((file) => {
      console.log(file); // Va a mostrar todos los archivos y carpetas del directorio
    });
  })
  .catch((error) => {
    console.error(error);
    return;
  });
