import { initializeApp } from "firebase/app";
import {
  getAuth,
  connectAuthEmulator,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "dummy",
  authDomain: "localhost:9099",
  projectId: "dummy",
};

const auth = (() => {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  connectAuthEmulator(auth, "http://localhost:9099");
  return auth;
})();

export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}
