<script setup lang="ts">
import { useUserStore } from "@/stores/user";

const email = ref("");
const password = ref("");
const toast = useToast();
const userStore = useUserStore();
const router = useRouter();

const handleLogin = async () => {
  if (email.value && password.value) {
    try {
      await userStore.login(email.value, password.value);
      toast.add({
        description: "Logged in successfully",
        title: "Success",
        color: "success",
      });
      email.value = "";
      password.value = "";
      router.push("/links");
      
    } catch (error: any) {
      toast.add({
        description: error.message,
        title: "Error",
        color: "error",
      });
    }
  }
};
</script>

<template>
  <form
    @submit.prevent="handleLogin"
    id="login"
    class="flex flex-col items-center justify-center min-h-screen"
  >
    <div
      class="w-screen max-w-lg bg-white/80 dark:bg-neutral-900/95 backdrop-blur rounded-2xl border border-primary/50 p-10 flex flex-col gap-8"
    >
      <h1 class="text-5xl mb-4 font-semibold text-center">Welcome Back</h1>

      <UFormField required label="Email">
        <UInput
          v-model="email"
          class="w-full"
          icon="i-lucide-mail"
          placeholder="Enter your email"
        />
      </UFormField>

      <UFormField required label="Password">
        <UInput
          v-model="password"
          class="w-full"
          icon="i-lucide-lock"
          placeholder="Enter your password"
          type="password"
        />
      </UFormField>

      <UButton size="xl" type="submit" class="justify-center">Login</UButton>

      <GoogleSignInButton />

      <p class="text-sm text-center text-muted">
        Don’t have an account?
        <NuxtLink to="/register" class="text-primary hover:underline"
          >Sign up</NuxtLink
        >
      </p>
    </div>
  </form>
</template>

<style>
#login {
  background-image: url("/assets//images/circle.svg");
}
</style>
