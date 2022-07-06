import {Response} from "express";
import {Request} from "express";
import express, {Express} from 'express';
import sequelize from "./database/sequelize";
import films from "./app/controllers/FilmController";

const app: Express = express();
const port: number = 3333;

app.use('./films', films);

app.get('/', (req : Request, res:Response)=>{
    res.send('Hello world express + typescript!!');
})

app.listen(port,
     () =>{
        console.log(`Servidor Rdando na porta ${port}`);
} );

sequelize();