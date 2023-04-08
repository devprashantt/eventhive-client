import { createContext } from "react";

export const DataContext = createContext();

export const dataInitialState = {
  colleges: [],
  events: [],
  organizers: [],
  participants: [],
  categories: [],
  subscribers: [],
};
