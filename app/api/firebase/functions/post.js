import {
  addDoc,
  collection,
  doc,
  getFirestore,
  deleteDoc,
} from "firebase/firestore";
import { app } from "../config";

const notify = (msg) => console.log(msg);

const db = getFirestore(app);

async function postDoc(data, collectionName) {
  const user = JSON.parse(localStorage.getItem("userDoc"));
  if (!user) {
    notify("You're not logged in");
    return null;
  }

  try {
    const collectionRef = collection(db, collectionName);
    const docRef = await addDoc(collectionRef, data);
    const updatedData = {
      docId: docRef.id,
      userEmail: user.email,
    };
    await updateDoc(collectionName, docRef.id, updatedData);
    notify(`Posted Successfully`);
    return docRef.id;
  } catch (error) {
    notify(`Something Went Wrong`);
    return null;
  }
}

async function updateDoc(collectionName, docId, data) {
  const user = JSON.parse(localStorage.getItem("userDoc"));
  if (!user) {
    notify("You're not logged in");
    return false;
  }

  try {
    const docRef = doc(db, collectionName, docId);
    await firestoreUpdateDoc(docRef, data);
    notify(`Updated Successfully`);
    return true;
  } catch (error) {
    console.log(error);
    notify(`Something Went Wrong`);
    return false;
  }
}

async function deleteDocument(collectionName, docId) {
  const user = JSON.parse(localStorage.getItem("userDoc"));
  if (!user) {
    notify("You're not logged in");
    return null;
  }

  try {
    const collectionRef = doc(db, collectionName, docId);
    await deleteDoc(collectionRef);
    notify(`Remooved`);
  } catch (error) {
    console.error("Error deleting document:", error);
    notify(`Something Went Wrong`);
  }
}
export { updateDoc, postDoc, deleteDocument };
