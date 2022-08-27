import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebaseConfig from "./firebase.config";

// const initializeFirebaseApp = () => {
//     initializeApp(firebaseConfig);
// }
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// export default initializeFirebaseApp;
export default auth;
