import { defineStore } from "pinia";
import {
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null as any | null,
  }),

  actions: {
    async login(email: string, password: string) {
      try {
        const { $auth }: any = useNuxtApp();
        const userCredential = await signInWithEmailAndPassword(
          $auth,
          email,
          password
        );
        this.user = userCredential.user;
      } catch (error: any) {
        throw new Error(error.message);
      }
    },

    async loginWithGoogle() {
      const { $auth }: any = useNuxtApp();
      try {
        const result = await signInWithPopup($auth, new GoogleAuthProvider());
        this.user = result.user;
      } catch (error: any) {
        throw new Error(error.message);
      }
    },

    async register(email: string, password: string) {
      try {
        const { $auth }: any = useNuxtApp();
        const userCredential = await createUserWithEmailAndPassword(
          $auth,
          email,
          password
        );
        this.user = userCredential.user;
      } catch (error: any) {
        throw new Error(error.message);
      }
    },

    async logout() {
      try {
        const { $auth }: any = useNuxtApp();
        await signOut($auth);
        this.user = null;
      } catch (error: any) {
        throw new Error(error.message);
      }
    },
  },
});
