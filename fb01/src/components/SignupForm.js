import React, { useState } from "react";

export default function SignupForm() {
  const { values, handleChange, handleSubmit } = useSignupForm();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit();
      }}
    >
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          value={values.email}
          onChange={(event) => {
            handleChange("email", event);
          }}
        />
      </div>
      <div>
        <label htmlFor="password">password</label>
        <input
          type="password"
          id="password"
          value={values.password}
          onChange={(event) => {
            handleChange("password", event);
          }}
        />
      </div>
      <div>
        <input type="submit" value="Signup" />
      </div>
    </form>
  );
}

function useSignupForm() {
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
    handleSubmit: () => {
      console.log(values);
    },
  };
}
