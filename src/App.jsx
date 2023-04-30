import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

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
  Error,
  Tasks,
} from "./pages";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  console.log("App rendered");

  return (
    <DataProvider>
      {!pathname.includes("/signin") &&
        !pathname.includes("/signup") &&
        !pathname.includes("/dashboard") && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<Event />} />

        <Route path="/colleges" element={<Colleges />} />
        <Route path="/colleges/:id" element={<College />} />

        <Route element={<Layout />}>
          <Route path="/dashboard" element={<User />} />
          <Route path="/dashboard/events" element={<UserEvents />} />
          <Route path="/dashboard/scheduler" element={<Scheduler />} />
          <Route path="/dashboard/task" element={<Scheduler />} />
          <Route path="/dashboard/messages" element={<UserMessages />} />
          <Route path="/dashboard/profile" element={<UserProfile />} />
          <Route path="/dashboard/tasks" element={<Tasks />} />
        </Route>
        <Route path="/create-event" element={<CreateEvent />} />

        <Route path="/*" element={<Error />} />
      </Routes>

      {!pathname.includes("/signin") &&
        !pathname.includes("/signup") &&
        !pathname.includes("/dashboard") && <Footer />}
    </DataProvider>
  );
}

export default App;
