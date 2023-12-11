
<script lang="ts" setup>
// definePageMeta({ middleware: 'auth' });
const { loggedIn, user, session, clear } = useUserSession()

const { data: cards, error, refresh } = await useFetch('/api/cards')
</script>

<template>
  <div class="max-w-4xl mx-auto h-screen overflow-y-scroll">

    <div v-if="!loggedIn" class="flex gap-2 items-center justify-center h-screen">
      <UButton size="xl" external="true" to="/api/auth/google" color="gray" variant="solid" label="Sign in with Google"
        :trailing="false">
        <template #leading>
          <UIcon name="i-logos-google-icon" dynamic />
        </template>
      </Ubutton>
    </div>


    <div v-if="loggedIn" class="flex flex-col gap-2">
      <div class="flex justify-between">
        <UButton color="gray" variant="solid" size="xl" @click="refresh">
          Refresh
        </UButton>

        <UButton color="gray" variant="solid" size="xl" @click="clear">
          Logout
        </UButton>
      </div>

      <div v-if="cards" class="flex flex-col gap-2">
        <UCard v-for="card in cards" :key="`key-${card.id}`">{{ card.description }}</UCard>
      </div>

      <pre v-if="error">{{ error }}</pre>
    </div>
  </div>
</template>

<style>
</style>
