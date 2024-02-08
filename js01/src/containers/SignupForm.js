import React, { useState } from "react";
import Presenter from "../components/SignupForm";

export default function SignupForm({ signup }) {
  const { values, handleChange, handleSubmit } = useSignupForm({ signup });

  return (
    <Presenter
      values={values}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
}

function useSignupForm(auth) {
  const [values, setValues] = useState({ email: "", password: "" });

  return {
    values,
    handleChange: (key, event) => {
      switch (key) {
        case "email":
          setValues((vs) => ({ ...vs, email: event.target.value }));
          return;
        case "password":
          setValues((vs) => ({ ...vs, password: event.target.value }));
          return;
        default:
          return;
      }
    },
    handleSubmit: async (values) => {
      try {
        const user = await auth.signup(values.email, values.password);
        console.log(user);
      } catch (err) {
        console.log(err);
      }
    },
  };
}
