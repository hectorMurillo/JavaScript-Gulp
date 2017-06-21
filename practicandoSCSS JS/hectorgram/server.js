var express = require('express');

var app = express();

app.set('view engine','pug');
//app use define un middleware indicandole a nuestro servidor que se sirva publico de manera statico
//cualquier usuario puede acceder, esto es de manera automatica, de manera que en el html se pone directo
//el archivo css pero la carpeta se establece desde aqui
app.use(express.static('publico'));

app.get('/', function(req, res){
    //llama al motor de vista en este caso pug y busca en carpetas views por defecto.
    res.render('index');

   // res.send('Hola Mundo');
});

app.listen(3000, function(err){
    if(err) return console.log("GHUBO UN ERROR", process.exit(1));
    console.log("Bienvenido al puerto 3,000")
})