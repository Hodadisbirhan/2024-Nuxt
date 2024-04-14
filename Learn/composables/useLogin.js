import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  updateProfile,
  signOut,
  updateEmail,
  verifyBeforeUpdateEmail,
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

  const updateemail = async ({ email }) => {
    try {
      const result = await updateEmail(getAuth().currentUser, email);

      return { result, error: null };
    } catch (error) {
      return { result: null, error };
    }
  };

  const verifyBeforeUpdate = async (email) => {
    try {
      await verifyBeforeUpdateEmail(getAuth().currentUser, email);

      return { error: null };
    } catch (error) {
      return { error };
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
    updateemail,
    user: getAuth().currentUser,
    verifyBeforeUpdate,
  };
}
