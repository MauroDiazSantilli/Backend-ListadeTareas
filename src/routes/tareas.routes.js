import { Router } from "express";
import {
  borrarTarea,
  crearTarea,
  editarTarea,
  obtenerTarea,
  obtenerTareas,
} from "../controllers/tareas.controllers";

const router = Router();

router.route("/tareas").get(obtenerTareas).post(crearTarea);
router
  .route("/tareas/:id")
  .delete(borrarTarea)
  .put(editarTarea)
  .get(obtenerTarea);

export default router;
