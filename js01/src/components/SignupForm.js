import React from "react";

export default function SignupForm({
  values = { email: "", password: "" },
  onChange = (key, event) => {
    console.log(`change ${key}`);
  },
  onSubmit = (values) => {
    console.log(`submit ${JSON.stringify(values)}`);
  },
}) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit(values);
      }}
    >
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          values={values.email}
          onChange={(event) => onChange("email", event)}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          values={values.password}
          onChange={(event) => onChange("password", event)}
        />
      </div>
      <div>
        <input type="submit" value="Signup" />
      </div>
    </form>
  );
}
