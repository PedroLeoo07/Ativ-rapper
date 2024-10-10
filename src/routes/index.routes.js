import { Router } from "express"

import rapperRoutes from "./rapper.routes.js";

const routes = Router()



routes.get("/", (req, res) => {
    return res.status(200).send({ message: "Servidor tá bala"});
})

routes.use("/rappers", rapperRoutes)

export default routes