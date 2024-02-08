import React from "react";
import { signup } from "../lib/auth";
import SignupForm from "../containers/SignupForm";

export default function Signup() {
  return (
    <div>
      <h1>Signup</h1>
      <SignupForm signup={signup} />
    </div>
  );
}
