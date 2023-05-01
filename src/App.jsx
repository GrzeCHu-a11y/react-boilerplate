import {createBrowserRouter, createRoutesFromElements, Route, Outlet, RouterProvider} from "react-router-dom";
import './App.css'
import Navbar from "./components/organisms/Navbar/Navbar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
function App() {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Root/>}>
                <Route index element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
            </Route>
        )
    )

  return (
   <div className="App">
       <RouterProvider router={router}/>
   </div>
  )
}

const Root = () => {
    return (
    <>
        <Navbar/>
        <main>
            <Outlet/>
        </main>
    </>
    )
}
export default App
