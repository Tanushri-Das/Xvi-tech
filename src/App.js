import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import routes from './Routes/Routes/Routes';
import { Provider } from 'react-redux';
import store from './redux/store'

function App() {

  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={routes} />
      </Provider>
    </div>
    
  );
}

export default App;
