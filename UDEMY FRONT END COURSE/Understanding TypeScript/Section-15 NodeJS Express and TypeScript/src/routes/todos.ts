
import { Router } from "express";
import { createTodo } from "../controllers/todos";

const router = Router();

router.post('/', createTodo);

router.get('/');

router.patch('/');

router.delete('/:id');

export default router;