
<script lang="ts" setup>

</script>

<template>
  <div class="flex h-screen items-center justify-center w-screen">
    <UButton size="xl" to="/api/auth/google" color="gray" variant="solid" label="Sign in with Google" :trailing="false">
      <template #leading>
        <UIcon name="i-logos-google-icon" dynamic />
      </template>
    </Ubutton>
  </div>
</template>

<style>
</style>
