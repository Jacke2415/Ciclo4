import express from "express";
import mongoose from "./database";
import userRoutes from './routes/User'

//initialization
const app = express();


// Settings 
app.set('port', process.env.PORT || 5000);

// Middlewares
/* app.use(morgan('dev')); */
app.use(express.json());

//Routes
app.use('/users', userRoutes);

/* app.get('/', (req, res) => {

    const Usuario = new usuario({
            nombre : 'daniel',
            fecha_nacimiento :  new Date('11-30-1996'),
            cedula: '1143458598',
            telefono: '3002603634',
            sexo: 'M',
            estado: 'activo'
    });

    Usuario.save();
    res.status(201).send(Usuario);
}); */


// Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
  });