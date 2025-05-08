let express = require('express');
let fs = require('fs');

let app = express();
let port = 8000;

app.get('/', (req,res)=>{
    let pagina = fs.readFileSync("./torri_enrico_form.html");
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end(pagina);
});

app.listen(port);
