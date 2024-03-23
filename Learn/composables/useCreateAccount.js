import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
export default function useCreateAccount() {
  const createAccountWithEmailAndPassword = async ({ email, password }) => {
    try {
      const result = await createUserWithEmailAndPassword(
        getAuth(),
        email,
        password
      );

      return { result, error: null };
    } catch (error) {
      return { result: null, error };
    }
  };

  return { createAccountWithEmailAndPassword };
}
