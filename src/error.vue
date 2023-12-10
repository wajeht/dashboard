<script setup>
const isDev = process.dev
const props = defineProps({ error: Object })
const message = computed(() => String(props.error?.message || ''))
const is404 = computed(() => props.error?.statusCode === 404 || message.value?.includes('404'))
const language = computed(() => is404 ? 'This page could not be found' : 'An error occurred');

</script>

<template>
  <NuxtLayout>
    <div class="flex flex-col h-screen text-center items-center justify-center gap-4">

      <div class="text-3xl"> {{ language }} </div>

      <div class="text-xl opacity-50">
        Looks like you've followed a broken link or entered a URL that doesn't exist on this site.
      </div>

      <div>
        <UButton size="xl" @click="$router.back()" color="gray" variant="solid" label="Go back" :trailing="false" />
      </div>

      <pre v-if="isDev">{{ error }}</pre>
    </div>
  </NuxtLayout>
</template>
