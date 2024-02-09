import { initializeApp } from "firebase/app";
import {
  getAuth,
  connectAuthEmulator,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "dummy",
  projectId: "dummy",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
connectAuthEmulator(auth, "http://localhost:9099");

export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}
