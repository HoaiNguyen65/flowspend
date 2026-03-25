import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../services/firebase/fireStore";

export const createCategory = async (data) => {
  try {
    const docRef = await addDoc(collection(db, "categories"), data);
    console.log("Document created with ID:", docRef.id);
    return docRef.id
  } catch (error) {
    console.error("Error adding document:", error);
  }
};