<script setup lang="ts">
import { createUserWithEmailAndPassword } from "firebase/auth";
const { $auth }: any = useNuxtApp();
const toast = useToast();

const email = ref("");
const password = ref("");
const repeatPassword = ref("");

const handleRegister = () => {
  if (email.value && password.value) {
    createUserWithEmailAndPassword($auth, email.value, password.value)
      .then(() => {
        toast.add({
          description: "Account created successfully",
          title: "Success",
        });
      })
      .catch((error) => {
        toast.add({ description: "Error while registering", title: "Error" });
      });
  } else {
    console.error("Email and password are required");
  }
};
</script>

<template>
  <form
    @submit="handleRegister"
    id="login"
    class="flex flex-col items-center justify-center min-h-screen"
  >
    <div
      class="w-screen max-w-lg bg-white/80 dark:bg-neutral-900/95 backdrop-blur rounded-2xl border border-primary/50 p-10 flex flex-col gap-8"
    >
      <h1 class="text-5xl mb-4 font-semibold text-center">Sign Up</h1>

      <UFormField label="Email" help="We won't share your email.">
        <UInput
          v-model="email"
          class="w-full"
          icon="i-lucide-mail"
          placeholder="Enter your email"
        />
      </UFormField>

      <UFormField label="Password">
        <UInput
          v-model="password"
          class="w-full"
          icon="i-lucide-lock"
          placeholder="Enter your password"
          type="password"
        />
      </UFormField>

      <UFormField label="Repeat password">
        <UInput
          v-model="repeatPassword"
          class="w-full"
          icon="i-lucide-refresh-cw"
          placeholder="Enter your password again"
          type="password"
        />
      </UFormField>

      <UButton type="submit" class="justify-center">Login</UButton>

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
