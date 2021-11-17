import { createContext } from "react";
import api from "../services/api";

export const gitcontext = createContext({
  loading: false,
  user: {},
  repositorios: [],
  starred: [],
});