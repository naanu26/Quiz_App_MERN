import { Router } from "express";
const router = Router();

/** Controllers */
import * as controller from '../controllers/controller'

/** Questions Routes API */
router.get('/questions', controller.getQuestions)
router.post('/questions', controller.insertQuestions)
router.delete('/questions', controller.deleteQuestions)

/** Result Routes API */
router.get('/result', controller.getResult)
router.post('/result', controller.storeResult)
router.delete('/result', controller.dropResult)

export default router;