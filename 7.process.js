// process
console.log(process.argv);

// Salida del proceso
// process.exit(0);

// Eventos de proceso
process.on("exit", () => {
  console.log("El proceso va a terminar");
});

// current working directory
console.log(process.cwd());

// platform
console.log(process.platform);
console.log(process.env.OS);

/* 
[
  'C:\\Program Files\\nodejs\\node.exe',
  'C:\\Users\\gabc_\\OneDrive\\Documentos\\node\\curso\\7.process.js'
]
C:\Users\gabc_\OneDrive\Documentos\node\curso
El proceso va a terminar */
