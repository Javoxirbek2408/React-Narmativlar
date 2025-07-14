import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./layout/Layout";
import { routes } from "./routes";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {routes.map((route) => (
            <Route
              key={route.id}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Route>
      </Routes>
    </>
  );
}

export default App;
