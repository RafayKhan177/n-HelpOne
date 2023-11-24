import { getAuth } from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import { app } from "../config";

const auth = getAuth(app);
const db = getFirestore(app);

async function getDocById(docId, collectionName) {
  const docRef = doc(db, collectionName, docId);
  try {
    const docSnapshot = await getDoc(docRef);
    if (!docSnapshot.exists()) {
      notify("Doc not found.");
      return null;
    }
    return docSnapshot.data();
  } catch (error) {
    notify("Error fetching Doc:", error);
  }
}

async function getCollection(collectionName) {
  const user = JSON.parse(localStorage.getItem("userDoc"));
  if (!user) {
    notify("You're not logged in");
    return [];
  }
  try {
    const q = collection(db, collectionName);
    const querySnapshot = await getDocs(q);
    const documents = querySnapshot.docs.map((doc) => doc.data());
    return documents;
  } catch (error) {
    notify("Something Went Wrong fetching");
    return false;
  }
}

async function getUserData(email) {
  try {
    const userData = await getDocById(email, "users");
    localStorage.setItem("userDoc", JSON.stringify(userData));
    return true;
  } catch (error) {
    console.log(error.message);
    return false;
  }
}

export { getDocById, getCollection, getUserData };
