import {
  addDoc,
  collection,
  doc,
  getFirestore,
  deleteDoc,
  updateDoc as firestoreUpdateDoc,
} from "firebase/firestore";
import { app } from "../config";

const db = getFirestore(app);

async function postDoc(data, collectionName) {
  try {
    const collectionRef = collection(db, collectionName);
    const docRef = await addDoc(collectionRef, data);
    const updatedData = {
      id: docRef.id,
    };
    await updateDoc(collectionName, docRef.id, updatedData);
    console.log(`Posted Successfully`);
    return docRef.id;
  } catch (error) {
    console.log(error.message);
    return null;
  }
}

async function updateDoc(collectionName, docId, data) {
  try {
    const docRef = doc(db, collectionName, docId);
    await firestoreUpdateDoc(docRef, data);
    console.log(`Updated Successfully`);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function deleteDocument(collectionName, docId) {
  const user = JSON.parse(localStorage.getItem("userDoc"));
  if (!user) {
    console.log("You're not logged in");
    return null;
  }

  try {
    const collectionRef = doc(db, collectionName, docId);
    await deleteDoc(collectionRef);
    console.log(`Remooved`);
  } catch (error) {
    console.error("Error deleting document:", error);
    console.log(`Something Went Wrong`);
  }
}
export { updateDoc, postDoc, deleteDocument };
