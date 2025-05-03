// stores/link.ts
import { defineStore } from "pinia";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  query,
  where,
} from "firebase/firestore";

export const useLinkStore = defineStore("links", {
  state: () => ({
    links: [] as { id: string; url: string; title: string }[],
  }),

  actions: {
    async fetchLinks(userId: string) {
      const { $db }: any = useNuxtApp();
      const q = query(collection($db, "links"), where("userId", "==", userId));
      const querySnapshot = await getDocs(q);
      this.links = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as any),
      }));
    },

    async addLink(link: { title: string; url: string }, userId: string) {
      const { $db }: any = useNuxtApp();
      const docRef = await addDoc(collection($db, "links"), {
        ...link,
        userId,
        createdAt: new Date(),
      });
      this.links.push({ id: docRef.id, ...link });
    },

    async deleteLink(linkId: string) {
      const { $db }: any = useNuxtApp();
      await deleteDoc(doc($db, "links", linkId));
      this.links = this.links.filter((link) => link.id !== linkId);
    },
  },
});
