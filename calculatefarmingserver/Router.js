import Router from 'express'
import ControllerRouter from "./ControllerRouter.js";
const router = new Router();



router.post('/calculate', ControllerRouter.post)
router.get('/get',ControllerRouter.get)


export default router;