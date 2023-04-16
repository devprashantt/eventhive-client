import { Route, Routes, useLocation, BrowserRouter } from "react-router-dom";

import { DataProvider } from "./context/DataProvider";
import { NavigationBar, Footer } from "./components";
import {
  Home,
  Signin,
  Signup,
  Profile,
  CreateEvent,
  Events,
  Event,
  Colleges,
  College,
} from "./pages";
import { useEffect } from "react";

function App() {
  const isLoggedIn = localStorage.getItem("token") !== null;
  const { pathname } = useLocation();

  const handleLogout = () => {
    localStorage.clear();
    isLoggedIn = false;
    navigate("/");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <DataProvider>
      {pathname !== "/signin" && pathname !== "/signup" && (
        <NavigationBar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      )}

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<Event />} />

        <Route path="/colleges" element={<Colleges />} />
        <Route path="/colleges/:id" element={<College />} />

        {isLoggedIn && (
          <>
            <Route path="/profile" element={<Profile />} />
            <Route path="/create-event" element={<CreateEvent />} />
          </>
        )}
      </Routes>
      <Footer />
    </DataProvider>
  );
}

export default App;
