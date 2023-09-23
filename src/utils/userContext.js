import { createContext, useReducer } from "react";

const userContext = createContext({
  user: {
    name: "Jayesh",
    email: "dummy@gmail.com",
  },
});


export default userContext;