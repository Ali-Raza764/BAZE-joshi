import { Home, Albums, GoPro, Signup } from "./Pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";

const App = () => {
  const publicRoutes = [
    { name: "Home", path: "", element: <Home /> },
    { name: "Albums", path: "albums", element: <Albums /> },
    { name: "GoPro", path: "GoPro", element: <GoPro />},
    {name: "Signup", path: "Signup", element: <Signup/>}
  ];
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          {publicRoutes.map((route) => (
            <Route key={route.name} path={route.path} element={route.element} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
