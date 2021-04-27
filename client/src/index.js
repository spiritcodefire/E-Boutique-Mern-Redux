import React , { Suspense }  from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from "react-redux";
import  configureStore  from "./lib/state/store";
import FormProvider from './lib/hooks/useFormValidation'
import reportWebVitals from './reportWebVitals';
import './i18n';
// bootstrap est importé dans le index du dossier public à la sauvageeee

const store = configureStore()
ReactDOM.render(
  <Suspense fallback={(<div>Loading</div>)}>
    <Provider store={store}>
      <FormProvider>
        <App />
      </FormProvider>
    </Provider>
  </Suspense>,
  document.getElementById('root')
);

reportWebVitals();
