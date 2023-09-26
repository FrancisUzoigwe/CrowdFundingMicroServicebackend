import express, {Router} from "express"
import { CreateAccount, getAllAccount } from "../controller/AuthController"
const router = express.Router()
router.route("/view-all").get(getAllAccount)
router.route("/create").post(CreateAccount)
export default router