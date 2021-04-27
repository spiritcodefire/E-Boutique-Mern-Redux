import { createStore, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk'; // pour faire tout ce qui est éxécution d'opération asynchrone

import reducers from "../reducers";

// ici on aura le créateStore avec tous les réducers
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore() {  
  return createStore(reducers, composeEnhancer(applyMiddleware(thunk))
  );
}