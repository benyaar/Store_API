import {Router} from "express";
import {userRouter} from "./userRouter";
import {typeRouter} from "./typeRouter";
import {brandRouter} from "./brandRouter";
import {deviceRouter} from "./deviceRouter";

export const router = Router({})

router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/device', deviceRouter)