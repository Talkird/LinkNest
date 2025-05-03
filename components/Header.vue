<script setup lang="ts">
import { useUserStore } from "@/stores/user";
const userStore = useUserStore();
const router = useRouter();
const toast = useToast();

const handleLogout = async () => {
  await userStore.logout();
  toast.add({
    description: "Logged out successfully",
    title: "Success",
    color: "success",
  });
  router.push("/");
};
</script>

<template>
  <header
    class="bg-transparent flex flex-row p-4 w-full items-center justify-evenly font-medium text-xl backdrop-blur border-gray-500/25 border-b sticky top-0 z-50"
  >
    <NuxtLink to="/">
      <p class="text-3xl font-bold">
        Link<span class="text-primary">Nest</span>
      </p>
    </NuxtLink>

    <div v-if="userStore.user" class="flex flex-row">
      <NuxtLink to="/links">
        <UButton
          variant="soft"
          color="neutral"
          class="rounded-full px-5"
          size="xl"
          >My Links</UButton
        >
      </NuxtLink>
    </div>

    <div class="flex flex-row gap-6">
      <ColorModeButton />

      <template v-if="userStore.user">
        <UButton @click="handleLogout" class="rounded-full px-5" size="xl">
          Sign Out
        </UButton>
      </template>

      <template v-else>
        <NuxtLink to="/login">
          <UButton
            class="rounded-full px-5"
            color="neutral"
            variant="soft"
            size="xl"
          >
            Login
          </UButton>
        </NuxtLink>

        <NuxtLink to="/register">
          <UButton class="rounded-full px-5" size="xl"> Sign Up </UButton>
        </NuxtLink>
      </template>
    </div>
  </header>
</template>
