import React, { useEffect, useState } from "react";
import axios from "axios";

import { images } from "../../constants";

axios.defaults.withCredentials = true;
let firstRender = true;

const Profile = () => {
  const [user, setUser] = useState(null);

  const refreshToken = async () => {
    const res = await axios
      .get(`${import.meta.env.VITE_BACKEND_HOST}/users/refresh`, {
        withCredentials: true,
      })
      .catch((err) => console.log(err));

    const data = await res.data;
    return data;
  };

  const sendRequest = async () => {
    const res = await axios
      .get(`${import.meta.env.VITE_BACKEND_HOST}/users/user`, {
        withCredentials: true,
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    console.log(data);
    return data;
  };

  useEffect(() => {
    if (firstRender) {
      firstRender = false;
      sendRequest().then((data) => setUser(data.user));
    }
    let interval = setInterval(() => {
      refreshToken().then((data) => setUser(data.user));
    }, 1000 * 29);
    return () => clearInterval(interval);
  }, []);

  return <div></div>;
};

export default Profile;
