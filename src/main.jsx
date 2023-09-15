import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './firebase'
import { store } from './store/index'
import { Provider } from 'react-redux';
import App from './App.jsx'
import './index.scss'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
)
