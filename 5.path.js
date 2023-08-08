const path = require("node:path");

// Separadora de carpetas
console.log(path.sep); // \ en windows, / en linux

//Unir rutas con path.join
const filePath = path.join("/content", "subfolder", "test.txt");
console.log(filePath); // \content\subfolder\test.txt

// Acceder a la última parte de la ruta con path.basename
const base = path.basename(filePath);
console.log(base); // test.txt

// Acceder a la extensión del archivo con path.extname
const ext = path.extname(filePath);
console.log(ext); // .txt
