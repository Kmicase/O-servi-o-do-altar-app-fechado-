import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

   const firebaseConfig = {
        apiKey: "AIzaSyCwPeLrAtNEO41MZ3yxSuYib2LC0z2dv9U",
        authDomain: "tarcisius-d03d7.firebaseapp.com",
        projectId: "tarcisius-d03d7",
        storageBucket: "tarcisius-d03d7.firebasestorage.app",
        messagingSenderId: "186797936591",
        appId: "1:186797936591:web:72c81c54fb7c1905c1ccba"
    };

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Atribui à janela global para o script de ranking acessar
window.db = db;
