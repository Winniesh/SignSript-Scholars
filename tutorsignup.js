// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// // import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
// // import { getFirestore } from 'firebase/firestore';
// // import { getDatabase } from 'firebase/database';

// // For Firebase JS SDK v7.20.0 and later, measurementId is optional

// //Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig);

// // Initialize Firebase Authentication and get a reference to the service
// const auth = firebase.auth(app);

// // Initialize firestore
// const db = getFirestore(app);
// // Initialize Realtime Database and get a reference to the service
// const database = getDatabase(app);


// //Signup Function
// //let signUpButton = document.querySelector('#signup');
// signUpButton.addEventListener('click', (e) => {
//   //Prevent Default Form Submission Behavior
//   e.preventDefault();
//   console.log('clicked');

//   var email = document.getElementById('inputEmail');
//   var password = document.getElementById('inputPassword');
//   var tutor_ID = document.getElementById('tutorID');

// async function generateTutorID() {
//   const lastTutorRef = doc(db, 'Tutors', 'lastTutor');
//   const docSnap = await getDoc(lastTutorRef);

//   if (!docSnap.exists()) {
//     // If there is no 'lastTutor' document, start with 'T002'
//     await setDoc(lastTutorRef, { tutorID: 'T002' });
//     return 'T002';
//   } else {
//     // If there is a 'lastTutor' document, increment the Tutor ID
//     const lastTutorID = docSnap.data().tutorID;
//     const newTutorID =
//       'T' + (parseInt(lastTutorID.slice(1)) + 1).toString().padStart(3, '0');
//     await setDoc(lastTutorRef, { tutorID: newTutorID }, { merge: true });
//     return newTutorID;
//   }
// }
// //const auth = getAuth();
//   createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed up
//     const user = userCredential.user;
//     console.log(user);
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;

//     console.log(errorMessage);
//   });
//  auth
// .createUserWithEmailAndPassword(email.value, password.value)
// .then(async (userCredential) => {
//   location.reload();
//   // Signed in
//   var user = userCredential.user;
//   console.log('user', user.email);

//   // Generate a new Tutor ID
//   const newTutorID = await generateTutorID();

//   // Add a new document to the 'Tutors' collection with the user's email as the document ID
//   const docRef = doc(db, 'Tutors', user.email);
//   setDoc(docRef, {
//     tutorID: 'new-tutor-id', // Replace this with the actual Tutor ID
//   });
// })
// .catch((error) => {
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   console.log('error code', errorCode);
//   console.log('error Message', errorMessage);
// });
// });

// let signInButton = document.querySelector('#signin');
// signInButton.addEventListener('click', (e) => {
//   //Prevent Default Form Submission Behavior
//   e.preventDefault();
//   console.log('clicked');

//   var email = document.getElementById('inputEmail');
//   var password = document.getElementById('inputPassword');
//   var tutor_ID = document.getElementById('tutorID');

//   auth
//     .signInWithEmailAndPassword(email.value, password.value)
//     .then((userCredential) => {
//       // location.reload();
//       // Signed in
//       var user = userCredential.user;
//       console.log('user', user.email);
//       window.location = 'starter.html';
//     })
//     .catch((error) => {
//       var errorCode = error.code;
//       var errorMessage = error.message;
//       // alert("error code", errorCode)
//       alert(errorMessage);
//     });
// });

//This method gets invoked in the UI when there are changes in the authentication state:
// 1). Right after the listener has been registered
// 2). When a user is signed in
// 3). When the current user is signed out
// 4). When the current user changes

// //Lifecycle hooks
// auth.onAuthStateChanged(auth, (user) => {
//   if (user != null) {
//     var email = user.email;
//     var users = document.getElementById('user');
//     var text = document.createTextNode('email');

//     console.log('Logged in!');

//     users.appendChild(text);
//     console.log(users);
//     //is signed in
//   } else {
//     //no user signed in
//     console.log('No user has logged in');
//   }
// });ls
