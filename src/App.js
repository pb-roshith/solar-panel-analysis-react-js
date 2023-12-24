import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import Rootlayout from './layout/rootlayout';
import Home from './components/home.jsx';
import Dashboard from './components/dashboard.jsx';
import NearSolar from './components/nearSolar.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Rootlayout/>}>
      <Route index element={<Home/>}></Route>
      <Route path='nearSolar' element={<NearSolar/>}></Route>
      <Route path='dashboard/:id' element={<Dashboard/>}></Route>
    </Route>
  )
)

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;