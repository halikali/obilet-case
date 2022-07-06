import { Route, Routes } from "react-router-dom";

import routes from "Routes";

const App = () => {
  return (
    <>
      {
        <Routes>
          {routes.map((route) => (
            <Route
              path={route.path}
              element={route.component}
              key={route.name}
            />
          ))}
        </Routes>
      }
    </>
  );
};

export default App;
