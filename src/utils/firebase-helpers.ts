import {
  FirestoreDataConverter,
  QueryDocumentSnapshot
} from "firebase/firestore";

export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC__AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC__STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDING_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID
};
interface AnonUsersT {
  length: number;
}
interface AnonUsersDBT extends AnonUsersT {
  id: string;
}
export const anonTypeConverter: FirestoreDataConverter<AnonUsersDBT> = {
  toFirestore: (item) => item,
  fromFirestore: (snapshot: QueryDocumentSnapshot<AnonUsersT>, options) => {
    const data = snapshot.data(options);

    return {
      ...data,
      id: snapshot.id
    };
  }
};
