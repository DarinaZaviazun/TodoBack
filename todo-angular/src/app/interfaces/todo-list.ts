import {Todo} from './todo';

export interface TodoList {
  id: number;
  title: string;
  createdAt: string;
  updatedAt: string;
  todos: Todo[];
}
