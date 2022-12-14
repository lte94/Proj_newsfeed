// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-storage.js";

// 아래 데이터는 본인의 Firebase 프로젝트 설정에서 확인할 수 있습니다.
const firebaseConfig = {
  apiKey: "AIzaSyDIk_W6bDM9wXoaPx8wqSd4pVZnSvcN0TI",
  authDomain: "newsfeed-proj-f766c.firebaseapp.com",
  projectId: "newsfeed-proj-f766c",
  storageBucket: "newsfeed-proj-f766c.appspot.com",
  messagingSenderId: "949732112681",
  appId: "1:949732112681:web:fbdceb30797f3cc8ee5f38",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const dbService = getFirestore(app);
export const authService = getAuth(app);
export const storageService = getStorage(app);
