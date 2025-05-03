<script setup lang="ts">
import { useUserStore } from "@/stores/user";
import googleIcon from "@/assets/images/google.png";

const toast = useToast();
const userStore = useUserStore();

const handleSignInWithGoogle = async () => {
  try {
    await userStore.loginWithGoogle();
    toast.add({
      description: "Logged in successfully",
      title: "Success",
      color: "success",
    });
  } catch (error: any) {
    toast.add({
      description: error.message || "Error logging in with Google",
      title: "Error",
      color: "error",
    });
  }
};
</script>

<template>
  <div
    @click="handleSignInWithGoogle"
    class="dark:bg-neutral-800 flex items-center justify-center text-toned font-medium bg-neutral-100 rounded-md px-4 py-2 cursor-pointer transition"
  >
    <p>Sign in with Google</p>
    <img :src="googleIcon" alt="Google Icon" class="w-6 h-6 ml-4" />
  </div>
</template>
