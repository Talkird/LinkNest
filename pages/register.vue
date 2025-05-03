<script setup lang="ts">
import { useUserStore } from "@/stores/user";

const email = ref("");
const password = ref("");
const repeatPassword = ref("");

const toast = useToast();
const userStore = useUserStore();
const router = useRouter();

const handleRegister = async () => {
  if (
    !email.value ||
    !password.value ||
    password.value !== repeatPassword.value
  ) {
    toast.add({
      description: "Please fill out all fields correctly.",
      title: "Validation Error",
      color: "warning",
    });
    return;
  }

  try {
    await userStore.register(email.value, password.value);
    toast.add({
      description: "Account created successfully",
      title: "Success",
      color: "success",
    });
    email.value = "";
    password.value = "";
    repeatPassword.value = "";
    router.push("/links");
  } catch (error: any) {
    toast.add({
      description: error.message,
      title: "Error",
      color: "error",
    });
  }
};
</script>

<template>
  <form
    @submit.prevent="handleRegister"
    id="register"
    class="flex flex-col items-center justify-center min-h-screen"
  >
    <div
      class="w-screen max-w-lg bg-white/80 dark:bg-neutral-900/95 backdrop-blur rounded-2xl border border-primary/50 p-10 flex flex-col gap-8"
    >
      <h1 class="text-5xl mb-4 font-semibold text-center">Sign Up</h1>

      <UFormField
        required
        label="Email"
        description="We'll never share your email with anyone else."
      >
        <UInput
          v-model="email"
          class="w-full"
          icon="i-lucide-mail"
          placeholder="Enter your email"
        />
      </UFormField>

      <UFormField
        required
        label="Password"
        description="Your password must be at least 6 characters long."
      >
        <UInput
          v-model="password"
          class="w-full"
          icon="i-lucide-lock"
          placeholder="Enter your password"
          type="password"
        />
      </UFormField>

      <UFormField required label="Confirm your password">
        <UInput
          v-model="repeatPassword"
          class="w-full"
          icon="i-lucide-shield-check"
          placeholder="Make sure the passwords match"
          type="password"
        />
      </UFormField>

      <UButton variant="subtle" size="xl" type="submit" class="justify-center"
        >Register</UButton
      >

      <GoogleSignInButton />

      <p class="text-sm text-center text-muted">
        Already have an account?
        <NuxtLink to="/login" class="text-primary hover:underline"
          >Login</NuxtLink
        >
      </p>
    </div>
  </form>
</template>

<style scoped>
#register {
  background-image: url("/assets//images/circle.svg");
}
</style>
