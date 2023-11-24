"use client";

import { useToast } from "@chakra-ui/react";
import { updateDoc } from "app/api/firebase/functions/post";
import MyProfile from "components/MyProfile";

export default function Page() {
  const user = JSON.parse(localStorage.getItem("userDoc"));

  const toast = useToast();
  const notify = (msg, status) => {
    toast({
      title: msg,
      status: status,
      isClosable: true,
    });
  };

  const onSave = (data) => {
    const res = updateDoc("users", user.email, data);
    if (res === true) {
      notify("Information Updated", "success");
    } else {
      notify("Something Went Wrong", "error");
    }
  };

  return <MyProfile user={user} onSave={onSave} />;
}
