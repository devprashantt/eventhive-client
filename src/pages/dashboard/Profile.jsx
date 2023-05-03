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

  return (
    <div
      style={{
        width: "100%",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
      }}
    >
      {user && (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "white",
            borderRadius: "1rem",

            width: "100%",
            height: "100%",
            padding: "1rem",
          }}
        >
          <div
            style={{
              position: "relative",
            }}
          >
            <img
              src={images.home_image}
              alt="avatar"
              style={{
                width: "400px",
                height: "300px",
                borderRadius: "0.5rem",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "1rem",
                left: "1rem",
                backgroundColor: "white",
                borderRadius: "0.5rem",
                padding: "0 1rem",
                cursor: "pointer",
              }}
            >
              <p>Change image</p>
            </div>
            <div
              style={{
                position: "absolute",
                top: "1rem",
                right: "-60%",

                display: "flex",
                justifyContent: "center",
                alignItems: "center",

                gap: "1rem",
              }}
            >
              <img
                style={{
                  height: "8rem",
                  width: "8rem",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
                src={images.image1}
                alt="profile"
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "1.5rem",
                  }}
                >
                  {user.name}
                </p>
                <p>{user.email}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
