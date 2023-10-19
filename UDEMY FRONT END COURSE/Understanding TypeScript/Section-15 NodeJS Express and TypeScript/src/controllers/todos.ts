
// import { Request, Response, NextFunction } from "express"
// export const createTodo = (req: Request,res: Response, next: NextFunction) => {}

import { RequestHandler } from "express";
import { Todo } from "../models/todo";

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req,res, next) => {
    // const text =req.body.text
    const text =(req.body as {text: string}).text
    const newTodo = new Todo(Math.random().toString(), text);

    TODOS.push(newTodo);
    
    res.status(201).json({message: 'Create the todo.', createTodo: newTodo});
}