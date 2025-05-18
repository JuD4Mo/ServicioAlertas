import express from "express";
import {getAlertas, getAlertaById, createAlerta, filtrarAlertas} from "../controllers/alertasController.js";

const router = express.Router();

router.get("/listarAlertas", getAlertas);

router.get("/alertaEspecifica/:id", getAlertaById);

router.post("/crearAlerta", createAlerta);

router.get("/filtrar", filtrarAlertas);

export default router;
