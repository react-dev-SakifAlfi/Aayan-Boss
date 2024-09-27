import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.css';

import LayoutOne from './Layyout/LayoutOne';
import { Shop } from './Pages/Shop/Shop';
import { Cart } from './Pages/CArt/Cart';
import { ShopContextProvider } from './context/shop-context';

function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<LayoutOne />}> {/* Wrap with LayoutOne */}
        <Route path="/" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    )
  );

  return (
    <ShopContextProvider>
      <RouterProvider router={route} />
    </ShopContextProvider>
  );
}

export default App;