import { supabase } from "../db/supaClient.js";
import * as alertaService from "../service/alertaService.js"

export const getAlertas = async (req, res) => {
    try {
        const { data, error } = await alertaService.getAlertas();
        if (error) return res.status(400).json(error);
        res.status(200).json(data);
    } catch (error) {
        res.status(500),json({message: error.message})
    }
};

export const getAlertaById = async (req, res) => {
    try {
        const { id } = req.params;
        const { data, error } = await alertaService.getAlertaById(id)
        if (error) return res.status(400).json(error);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};

export const createAlerta = async (req, res) => {
    try {
        const info = req.body;
        const { data, error } = await alertaService.crearAlerta(info);
        if (error) return res.status(400).json(error);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

export const filtrarAlertas = async(req, res) => {
    try {
        //req.body debe ser un arreglo de tipos, ojo!! solo pueden haber 3 tipos
        const{data, error} = await alertaService.filtrarAlertas(req.body);
        if (error) return res.status(400).json(error);
        if(data.length == 0){
            return res.status(404).json("No hay alertas con el filtro seleccionado");
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}