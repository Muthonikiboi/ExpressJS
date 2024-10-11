import { Router } from "express";
import { getUsers, createUser, updateUser, patchUser, deleteUser } from "../controllers/userController";
import { createUserValidator, updateUserValidator, patchUserValidator, deleteUserValidator } from "../Validators/userValidator";
import validateRequest from "../Middlewares/validationMiddleware";

const router = Router();

router.get("/", getUsers);

router.post("/", createUserValidator, validateRequest, createUser);

router.put("/:id", updateUserValidator, validateRequest, updateUser);

router.patch("/:id", patchUserValidator, validateRequest, patchUser);

router.delete("/:id", deleteUserValidator, validateRequest, deleteUser);

export default router;
