"use server";

import { getAuth } from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import { app } from "../config";
import { cookies } from "next/headers";

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
    console.log("Error fetching Doc:", error);
  }
}

async function getCollection(collectionName) {
  try {
    const q = collection(db, collectionName);
    const querySnapshot = await getDocs(q);
    const documents = querySnapshot.docs.map((doc) => doc.data());
    console.log(documents)
    return documents;
  } catch (error) {
    notify("Something Went Wrong fetching");
    return false;
  }
}

async function getUserData(email) {
  try {
    const userData = await getDocById(email, "users");
    const cookieStore = cookies();
    cookies().set(user, userData);
    const session = cookieStore.get("user");
    console.log(session, "h");
    return true;
  } catch (error) {
    console.log(error.message);
    return false;
  }
}

export { getDocById, getCollection, getUserData };