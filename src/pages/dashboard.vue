<script setup lang="ts">
const { data, error } = await useFetch('/api/cards')

</script>

<template>
  <div>
    <span v-if="error">{{ error }}</span>
    <pre v-if="data">{{ data }}</pre>
  </div>
</template>

<style>
</style>
