import { Request, Response } from 'express';
import Book from '../models/Book';

export const save = (req: Request, res: Response): void => {
  res.send('Whatsup');
}

export const getAll = (req: Request, res: Response): void => {
  res.send('getall');
}

export const update = (req: Request, res: Response): void => {
  res.send('update');
}

export const deleteOne = (req: Request, res: Response): void => {
  res.send('delete one');
}

export const deleteAll = (req: Request, res: Response): void => {
  res.send('delete all');
}