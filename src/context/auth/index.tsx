"use client";

import { handleAnonSignIn, auth, getUser } from "@/utils/firebase";
import { User, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState, ReactNode } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../game/redux";
import { UserT } from "../types";

interface Props {
  children: ReactNode;
}

const AuthProvider = (props: Props) => {
  const dispatch = useDispatch();
  const [uid, setUID] = useState<User["uid"] | null>(null);

  // Signs in user
  useEffect(() => {
    const abortController = new AbortController();

    const signIn = async () => await handleAnonSignIn();
    signIn();

    return () => {
      abortController.abort();
    };
  }, [dispatch]);

  // Monitor auth state
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUID(user.uid);
      }
    });
  }, []);

  // Set user to store from firestore
  useEffect(() => {
    const setReduxUser = async () => {
      if (!uid) return;

      // Timeout because cloud function creates entry
      // a delay is needed while its created
      setTimeout(async () => {
        const _user = await getUser(uid);
        if (_user) {
          const user = _user as UserT;
          dispatch(updateUser(user));
        }
      }, 1000);
    };

    setReduxUser();
  }, [dispatch, uid]);

  return <div>{props.children}</div>;
};

export default AuthProvider;
