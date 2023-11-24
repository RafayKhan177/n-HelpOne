"use client";

import { useRouter } from "next/navigation";
import { Signup } from "../../../components/Index";
import { signUpWithEmail } from "../../api/firebase/functions/auth";

export default function Page() {
  const navigate = useRouter();

  const onSubmit = async (data) => {
    const res = await signUpWithEmail(data);
    if (res === true) {
      navigate.push("/auth/Signin");
    }
  };

  return <Signup onSubmit={onSubmit} />;
}
