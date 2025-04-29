<template>
  <div
    class="flex flex-1 flex-col items-center justify-center min-h-screen gap-8"
  >
    <h1 class="text-center text-7xl font-bold">
      Save your links. Access them anytime.
    </h1>
    <p class="text-2xl text-center text-muted">
      LinkNest is a fast and simple platform to store, tag, and revisit the
      content you love — all in one place.
    </p>

    <div class="flex flex-row gap-6">
      <UButton
        class="text-xl px-6 py-3 rounded-full"
        trailing-icon="i-lucide-arrow-right"
        size="xl"
        >Get Started</UButton
      >
      <UButton
        class="text-xl px-6 py-3 rounded-full"
        variant="soft"
        color="neutral"
        size="xl"
        >Learn More</UButton
      >
    </div>
  </div>
</template>
