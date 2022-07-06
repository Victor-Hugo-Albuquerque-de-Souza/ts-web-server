import model from '../models/FilmModels'

export const getAll = () =>{
    return model.findAll();
}