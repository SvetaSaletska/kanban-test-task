import { Request, Response } from 'express';
import {createBoard, getBoardById, updateBoard, deleteBoard} from '../services/board';

export const createBoardController = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const newBoard = await createBoard(name);
    res.status(201).json(newBoard);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: 'An unknown error occurred' });
    }
  }
};

export const getBoardController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const board = await getBoardById(id);
    if (board) {
      res.status(200).json(board);
    } else {
      res.status(404).json({ message: 'Board not found' });
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: 'An unknown error occurred' });
    }
  }
};

export const updateBoardController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const updatedBoard = await updateBoard(id, name);
    if (updatedBoard) {
      res.status(200).json(updatedBoard);
    } else {
      res.status(404).json({ message: 'Board not found' });
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: 'An unknown error occurred' });
    }
  }
};

export const deleteBoardController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedBoard = await deleteBoard(id);
    if (deletedBoard) {
      res.status(200).json({ message: 'Board deleted successfully' });
    } else {
      res.status(404).json({ message: 'Board not found' });
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: 'An unknown error occurred' });
    }
  }
};
