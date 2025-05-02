<script setup lang="ts">
import { createUserWithEmailAndPassword } from "firebase/auth";

const register = async () => {
  const { $auth }: any = useNuxtApp();

  try {
    await createUserWithEmailAndPassword(
      $auth,
      "test2@gmail.com",
      "test212312"
    );
  } catch (error) {
    console.error("Error during sign-in:", error);
  }
};
</script>

<template>
  <header
    class="bg-transparent flex flex-row p-4 w-full items-center justify-evenly font-medium text-xl backdrop-blur border-gray-500/25 border-b sticky top-0 z-50"
  >
    <NuxtLink to="/"
      ><p class="text-3xl font-bold">
        Link<span class="text-primary">Nest</span>
      </p></NuxtLink
    >

    <div class="flex flex-row gap-6">
      <ColorModeButton />
      <NuxtLink to="/login"
        ><UButton
          class="rounded-full px-5"
          color="neutral"
          variant="soft"
          size="xl"
          >Login</UButton
        ></NuxtLink
      >
      <NuxtLink to="/register"
        ><UButton class="rounded-full px-5" size="xl">Sign Up</UButton>
      </NuxtLink>
    </div>
  </header>
</template>
