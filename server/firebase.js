
import config from './config.js';

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



const firebaseApp = initializeApp(config.firebaseConfig);
const database = getFirestore(firebaseApp);
const storage = getStorage();


export { database, storage };









