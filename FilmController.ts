import {Router, Request, Response} from 'express';
import * as service from '../services/FilmService'

const router = Router ();

router.get('/', (req:Request, res:Response) => {
    service.getAll().then((films) =>{
        res.send(films)
    }
})

router.get ('/:id', (req,res) =>{ 
    service.getById(req.params.id).then((film)=>{ //parametro da requisição
    res.send(film);
    }
    );
});

router.post ('/', (req,res) =>{ 
    service.create(req.body);
    res.send('Filme foi criado');
});

router.put ('/:id', (req,res) =>{
    service.update(req.params.id, req.body); 
    res.send('Estou alterando um filme');
});

router.delete ('/:id', (req,res) =>{
    service.delete(req.params.id) 
    res.send('Estou excluindo um filme');
});


export default router;