import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getFirestore, doc, updateDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyACOFclVLKMniDxCmrzSQ9kkznfCh161_8",
  authDomain: "coordinator-control-panel.firebaseapp.com",
  projectId: "coordinator-control-panel",
  storageBucket: "coordinator-control-panel.firebasestorage.app",
  messagingSenderId: "173014992661",
  appId: "1:173014992661:web:43f45fdd133c4ef2fa8b1c",
  measurementId: "G-LEWW0SBH3C"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Update game status
function updateStatus(gameId, status) {
  const ref = doc(db, "coordinator control panel", "global_states");
  updateDoc(ref, { [gameId]: status });
}

function listenStatus(gameId, elementId) {
  const ref = doc(db, "coordinator control panel", "global_states");
  onSnapshot(ref, (docSnap) => {
    const data = docSnap.data();
    document.getElementById(elementId).textContent = data[gameId] || "unknown";
  });
}

// Initialize listeners
listenStatus("experiment2", "exp2-status");
