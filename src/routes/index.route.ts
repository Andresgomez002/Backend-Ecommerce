/** Archivo central de enrutamiento */
import { Router, Request, Response } from "express";
import routeUsers from "./users.route";
import routeProducts from "./products.route";
import routeAuth from "./auth.route";
import routeChapters from "./chapters.route";

const router = Router();

/** Implementando Middlewares a Express */
router.use( '/users', routeUsers );         // http://localhost:3000/api/users
router.use( '/products', routeProducts );   // http://localhost:3000/api/products
router.use( '/auth', routeAuth );           // http://localhost:3000/api/auth
router.use( '/chapters', routeChapters)     // http://localhost:3000/api/chapters

export default router;