import { doc, setDoc, addDoc, collection } from "firebase/firestore";
import { db } from "../../services/firebase/fireStore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebase/firebaseAuth";

export const registerUser = async (email, pass, name) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      pass,
    );

    const user = userCredential.user;

    await setDoc(doc(db, "users", user.uid), {
      email,
      name,
      createAt: new Date(),
    });

    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const createUser = async (user) => {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      email: user.email,
      name: user.name,
      createdAt: new Date(),
    });
    return docRef.id;
  } catch (error) {
    console.log("authService error: ", error);
    throw error;
  }
};

export const createUserAuth = async (user) => {
  try {
    await setDoc(doc(db, "users", user.uid), {
      email: user.email,
      name: user.name,
      createdAt: new Date(),
    });

    return user.uid;
  } catch (error) {
    console.log("authService error:", error);
    throw error;
  }
};
