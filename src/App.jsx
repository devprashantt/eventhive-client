import { Route, Routes, useLocation } from "react-router-dom";
import { NavigationBar } from "./components";
import { Home, Signin, Signup, Profile, CreateEvent } from "./pages";

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

        {isLoggedIn && (
          <>
            <Route path="/profile" element={<Profile />} />
            <Route path="/create-event" element={<CreateEvent />} />
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
