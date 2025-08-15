// Firebase setup
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// Update game status
function updateStatus(gameId, status) {
  db.collection("coordinator control panel").doc("global_states").update({
    [gameId]: status
  }).then(() => {
    alert(`${gameId} set to ${status}`);
  });
}

// Listen for status changes
function listenStatus(gameId, elementId) {
  db.collection("coordinator control panel").doc("global_states")
    .onSnapshot((doc) => {
      const data = doc.data();
      document.getElementById(elementId).textContent = data[gameId] || "unknown";
    });
}

// Initialize listeners
listenStatus("experiment2", "exp2-status");
