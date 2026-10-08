// const express = require('express');   // CommonJS
import express from 'express';           // ESModule

const app = express();

app.get('/health' , (req, res) => {
    res.send('Servidor de SenaStore Funcionando!')
});

//Obtener todos los usuarios
app.get('/users' , (req, res) => {
    res.json({msg:'Listar todos los usuarios'})
});
//Crear un usuario 
app.post('/users' , (req, res) => {
    res.json({msg:'Registra Usuario'})
});

// Actualizar Totalmente
app.put('/users' , (req , res)=> {
    res.json({msg:'Actualizar todas las propiedades de un usuario'})
});

// Actualizar Parcialmente
app.patch('/users' , (req, res) => {
    res.json({msg:'Actualizar una o mas propiedades del usuario'})
});

// Eliminar usuarios 

app.delete('/users' , (req,res) => {
    res.json({msg:'Eliminar un usuario'})
});


// Iniciar el servidor
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});