import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  updateProfile,
  signOut,
} from "firebase/auth";

export default function useLogin() {
  const loginWithPasswordAndEmail = async ({ email, password }) => {
    try {
      const result = await signInWithEmailAndPassword(
        getAuth(),
        email,
        password
      );

      return { result: result, error: null };
    } catch (error) {
      return { result: null, error: error?.message };
    }
  };
  const google = async () => {
    try {
      const result = await signInWithPopup(getAuth(), new GoogleAuthProvider());

      return { result, error: null };
    } catch (error) {
      return { result: null, error: error?.message };
    }
  };
  const signout = () => {
    signOut(getAuth());
  };
  return {
    loginWithPasswordAndEmail: loginWithPasswordAndEmail,
    signInWithPopup,
    google,
    updateProfile,
    signout,
    user: getAuth().currentUser,
  };
}
