import { Route, Routes, useLocation } from "react-router-dom";
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

function App() {
  const isLoggedIn = localStorage.getItem("token") !== null;
  const { pathname } = useLocation();

  return (
    <>
      {pathname !== "/signin" && pathname !== "/signup" && (
        <NavigationBar isLoggedIn={isLoggedIn} />
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
    </>
  );
}

export default App;
