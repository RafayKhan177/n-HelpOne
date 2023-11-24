"use client";

import { useRouter } from "next/navigation";
import { Signin } from "../../../components/Index";
import { signInWithEmail } from "../../api/firebase/functions/auth";

export default function Page() {
  const navigate = useRouter();

  const onSubmit = async (data) => {
    const res = await signInWithEmail(data);
    if (res === true) {
      navigate.push("/");
    }
  };

  return <Signin onSubmit={onSubmit} />;
}
