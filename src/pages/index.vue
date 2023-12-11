
<script lang="ts" setup>
const { loggedIn, user, session, clear } = useUserSession()
</script>

<template>
  <div class="flex h-screen items-center justify-center w-screen">
    <UButton v-if="!loggedIn" size="xl" external="true" to="/api/auth/google" color="gray" variant="solid"
      label="Sign in with Google" :trailing="false">
      <template #leading>
        <UIcon name="i-logos-google-icon" dynamic />
      </template>
    </Ubutton>

    <UButton v-if="loggedIn" color="gray" variant="solid" size="xl" @click="clear">
      Logout
    </UButton>
  </div>
</template>

<style>
</style>
