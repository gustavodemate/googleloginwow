import React, {useContext} from "react";
import { PriveteRoutes } from "./routes/private.routes";
import { AppRoutes } from "./routes/routes";
import { AuthContext } from "./contexts/AuthCoxtext";



const App = () => {
  const { user } = useContext(AuthContext)
  return user ? <PriveteRoutes /> : <AppRoutes />
};


export default App;

