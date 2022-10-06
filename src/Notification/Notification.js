import { Toast } from "primereact/toast";
import React, { useEffect, useRef, useState } from "react";
import { onMessageListener, requestForToken } from "../firebaseConfig";
import "./Toast.css";

const Notication = () => {
  const [token, setToken] = useState("");

  const [notification, setNotification] = useState({ title: "", body: "" });

  const toast = useRef(null);

  requestForToken();

  useEffect(() => {
    if (notification?.title) {
      toast.current.show({
        severity: "success",
        summary: notification.title,
        detail: notification.body,
        life: 3000,
      });
    }
  }, [notification]);

  onMessageListener()
  .then((payload) => {
    console.log(payload);
    setNotification({title:payload.notification.title,body:payload.notification.body});
  })
  .catch((err) => console.log(err));

  return (
    <div>
      <Toast ref={toast} />
      Notification Example!
    </div>
  );
};

export default Notication;
