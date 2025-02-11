import { Board } from '../models/board';
import { v4 as uuidv4 } from 'uuid';

// Функція для створення нової дошки
export const createBoard = async (name: string) => {
  const newBoard = new Board({
    id: uuidv4(),
    name,
    columns: [
      { name: 'ToDo', cards: [] },
      { name: 'In Progress', cards: [] },
      { name: 'Done', cards: [] }
    ]
  });
  return newBoard.save();
};

// Функція для отримання дошки за ID
export const getBoardById = async (id: string) => {
  return Board.findOne({ id });
};

// Функція для оновлення дошки
export const updateBoard = async (id: string, name: string) => {
  return Board.findOneAndUpdate({ id }, { name }, { new: true });
};

// Функція для видалення дошки
export const deleteBoard = async (id: string) => {
  return Board.findOneAndDelete({ id });
};
