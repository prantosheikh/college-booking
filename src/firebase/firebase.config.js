// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};

// Initialize Firebase
export  const app = initializeApp(firebaseConfig);



// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAdF6hrDTEdUysuEGFNM50LrAUmCR-f9IM",
//   authDomain: "college-booking-c6f18.firebaseapp.com",
//   projectId: "college-booking-c6f18",
//   storageBucket: "college-booking-c6f18.appspot.com",
//   messagingSenderId: "266765488572",
//   appId: "1:266765488572:web:3277768d254f1b3cff9bb9"
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);