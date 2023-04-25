import { Route, Routes, useLocation, BrowserRouter } from "react-router-dom";

import { DataProvider } from "./context/DataProvider";
import { Navbar, Footer } from "./components";
import {
  Home,
  Signin,
  Signup,
  CreateEvent,
  Events,
  Event,
  Colleges,
  College,
  Layout,
  User,
  UserProfile,
  UserEvents,
  UserMessages,
  Scheduler,
  Kanban,
  Error,
} from "./pages";
import { useEffect } from "react";

function App() {
  let isLoggedIn = localStorage.getItem("token") !== null;
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <DataProvider>
      {!pathname.includes("/signin") &&
        !pathname.includes("/signup") &&
        !pathname.includes("/dashboard") && <Navbar isLoggedIn={isLoggedIn} />}

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
            <Route element={<Layout />}>
              <Route path="/dashboard/:id" element={<User />} />
              <Route path="/dashboard/events/:id" element={<UserEvents />} />
              <Route path="/dashboard/scheduler/:id" element={<Scheduler />} />
              <Route path="/dashboard/task/:id" element={<Kanban />} />
              <Route
                path="/dashboard/messages/:id"
                element={<UserMessages />}
              />
              <Route path="/dashboard/profile/:id" element={<UserProfile />} />
            </Route>
            <Route path="/create-event" element={<CreateEvent />} />
          </>
        )}

        <Route path="/*" element={<Error />} />
      </Routes>

      {!pathname.includes("/signin") &&
        !pathname.includes("/signup") &&
        !pathname.includes("/dashboard") && <Footer />}
    </DataProvider>
  );
}

export default App;
