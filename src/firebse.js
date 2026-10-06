
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey: "AIzaSyDpfX9SdHREBl5rf0EXFZTvZkiHfL1GnL0",
  authDomain: "netflix-clone-4fa91.firebaseapp.com",
  projectId: "netflix-clone-4fa91",
  storageBucket: "netflix-clone-4fa91.firebasestorage.app",
  messagingSenderId: "732297038819",
  appId: "1:732297038819:web:9beefc59c6e9341833aed6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const  db = getFirestore(app);

const SignUp = async (name, email, password) => {
  try {
    // Create authentication account
    const res = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = res.user;

    console.log("Firebase Auth user:", user);

    // Save additional information in Firestore
    const docRef = await addDoc(collection(db, "user"), {
      uid: user.uid,
      name: name,
      authprovider: "local",
      email: email
    });

    console.log("Firestore document created:", docRef.id);

  } catch (error) {
    console.error("SIGNUP ERROR:", error);
    alert(error.message);
  }
};

const login = async(email,password)=>{
    try {
       await signInWithEmailAndPassword(auth,email,password)
    } catch (error) {

         console.log(error);
          toast.error(error.code)
       
        
    }
}

const logOut = async () => {
  try {
    await signOut(auth);
  } catch (error) {
     toast.error(error.code);
  }
};


export {auth,db,SignUp,login,logOut}