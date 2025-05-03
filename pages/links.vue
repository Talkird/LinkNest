<script setup lang="ts">
definePageMeta({
  middleware: "auth",
});

import { ref, onMounted } from "vue";
import { useLinkStore } from "@/stores/links";
import { useUserStore } from "@/stores/user";

const title = ref("");
const url = ref("");
const linkStore = useLinkStore();
const userStore = useUserStore();
const toast = useToast();

onMounted(() => {
  if (userStore.user?.uid) {
    linkStore.fetchLinks(userStore.user.uid);
  }
});

const addLink = async () => {
  if (!title.value || !url.value) {
    toast.add({
      title: "Error",
      description: "Title and URL required",
      color: "error",
    });
    return;
  }

  await linkStore.addLink(
    { title: title.value, url: url.value },
    userStore.user.uid
  );

  toast.add({ title: "Success", description: "Link added", color: "success" });

  title.value = "";
  url.value = "";
};
</script>

<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen p-4 gap-10"
  >
    <h1 class="font-bold text-5xl">My Links</h1>

    <div
      class="w-full max-w-xl flex flex-col gap-4 bg-white/90 dark:bg-neutral-900 p-6 rounded-xl border"
    >
      <UInput v-model="title" placeholder="Link title" />
      <UInput v-model="url" placeholder="Link URL (https://...)" />
      <UButton @click="addLink" class="mt-2" size="xl">Add Link</UButton>
    </div>

    <div class="w-full max-w-xl mt-8 space-y-4">
      <div
        v-for="link in linkStore.links"
        :key="link.id"
        class="p-4 bg-white/80 dark:bg-neutral-800 rounded-lg shadow"
      >
        <h2 class="text-xl font-semibold">{{ link.title }}</h2>
        <a
          :href="link.url"
          target="_blank"
          class="text-primary underline block mt-1"
          >{{ link.url }}</a
        >
      </div>
    </div>
  </div>
</template>
