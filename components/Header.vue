<template>
  <header
    class="bg-transparent flex flex-row p-4 w-full items-center justify-evenly font-medium text-xl backdrop-blur border-gray-500/25 border-b sticky top-0 z-50""
  >
    <p class="text-3xl font-bold">Link<span class="text-primary">Nest</span></p>
    <div class="flex flex-row gap-8 text-sm">
      <ULink>Abous Us</ULink>
      <ULink>Pricing</ULink>
      <ULink>FAQ</ULink>
    </div>
    <div class="flex flex-row gap-6">
      <ColorModeButton />
      <UButton class="rounded-full px-5" color="neutral" variant="soft" size="xl">Login</UButton>
      <UButton class="rounded-full px-5" size="xl" 
        >Sign Up</UButton
      >
    </div>
  </header>
</template>
