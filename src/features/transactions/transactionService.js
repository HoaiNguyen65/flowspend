import { collection, addDoc } from "firebase/firestore";
import { db } from "../../services/firebase/fireStore";

export const createTransaction = async (data) => {
  try {
    const docRef = await addDoc(collection(db, "transactions"), data);
    console.log("Document created with ID:", docRef.id);
  } catch (error) {
    console.error("Error adding document:", error);
  }
};