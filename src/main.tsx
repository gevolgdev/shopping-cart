import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// Router Dom
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Cart, Products } from './routes'
// Redux
import { Provider } from 'react-redux';
import store from './redux/store';

const route = createBrowserRouter([{
  path: '/',
  element: <App/>,
  children: [
    {
      path: '/',
      element: <Products/>
    },
    {
      path: '/cart',
      element: <Cart/>
    },
  ]
}])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={route}/>
    </Provider>
  </React.StrictMode>
)
