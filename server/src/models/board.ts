import { Schema, model, Document } from 'mongoose';

interface ICard {
  id: string;
  title: string;
  description: string;
}

interface IColumn {
  name: 'ToDo' | 'In Progress' | 'Done';
  cards: ICard[];
}

interface IBoard extends Document {
  id: string; 
  name: string;
  columns: IColumn[];
}

const CardSchema = new Schema<ICard>({
  id: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
});

const ColumnSchema = new Schema<IColumn>({
  name: { type: String, enum: ['ToDo', 'In Progress', 'Done'], required: true },
  cards: { type: [CardSchema], default: [] },
});

const BoardSchema = new Schema<IBoard>({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  columns: { type: [ColumnSchema], default: [] },
});

export const Board = model<IBoard>('Board', BoardSchema);
