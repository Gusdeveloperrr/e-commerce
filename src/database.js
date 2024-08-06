const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://tavito:andajaran@cluster0.n6cfiqy.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => console.log("Conexión exitosa"))
    .catch(() => console.log("Error al conectar"))
