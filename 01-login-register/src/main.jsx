import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store.js'

createRoot(document.getElementById('root')).render(
  

    <StrictMode>
      <Provider store={store}> {/**  configuración del provedor de información */}  
        <BrowserRouter> {/** // Manejo de rutas con react router dom  */}
          <App />
        </BrowserRouter>
      </Provider>
    </StrictMode>,
)
