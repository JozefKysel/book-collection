import { Request, Response } from 'express';
import Book from '../models/Book';

export const save = async (req: Request, res: Response) => {
  try {
    const { author, title, description } = req.body;
    const savedBook: Book = await Book.save(new Book(author, title, description));
    res.status(201).send(savedBook);
  } catch(e) {
    res.sendStatus(500);
  }
}

export const getAll = async (req: Request, res: Response) => {
  try {
    const response: Book[] = await Book.getAll();
    res.status(200).send(response);
  } catch {
    res.sendStatus(500);
  }
}

export const update = async (req: Request, res: Response) => {
  try {
    const { id, title } = req.query;
    const response: Book = await Book.update(id, title);
    res.status(200).send(response);
  } catch {
    res.sendStatus(500);
  }
}

export const deleteOne = async (req: Request, res: Response) => {
  try {
    const { id } = req.query;
    const deleted = await Book.deleteOne(id);
    res.status(200).send(deleted);
  } catch(e) {
    res.sendStatus(500);
  }
}

export const deleteAll = async (req: Request, res: Response) => {
  try{
    await Book.deleteAll();
    res.sendStatus(204);
  } catch {
    res.sendStatus(500);
  }
}