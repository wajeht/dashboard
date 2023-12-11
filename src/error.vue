<script setup>
const props = defineProps({ error: Object })
const isDev = process.dev
const message = computed(() => String(props.error?.message || ''))
const is404 = computed(() => props.error?.statusCode === 404 || message.value?.includes('404'))
const language = computed(() => is404 ? 'This page could not be found' : 'An error occurred')
</script>

<template>
  <NuxtLayout>
    <div class="flex flex-col h-screen text-center items-center justify-center gap-4">
      <div class="text-4xl font-bold tracking-tight text-center text-gray-200">
        {{ language }}
      </div>
      <div class="text-lg leading-8 text-gray-400 text-center">
        Looks like you've followed a broken link or entered a URL that doesn't exist on this site.
      </div>

      <div>
        <UButton
          size="xl" color="gray"
          variant="solid" label="Go back" :trailing="false" @click="$router.back()"
        />
      </div>

      <pre v-if="isDev" class="text-left">{{ error }}</pre>
    </div>
  </NuxtLayout>
</template>
