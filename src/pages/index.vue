
<script lang="ts" setup>

</script>

<template>
  <div class="flex h-screen items-center justify-center w-screen">
    <UButton to="/" size="xl" color="primary" variant="soft" label="Sign in with Google" :trailing="false">
      <template #leading>
        <UIcon name="i-logos-google-icon" dynamic />
      </template>
    </Ubutton>
  </div>
</template>

<style>
</style>
