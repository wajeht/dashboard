<script setup lang="ts">
definePageMeta({ middleware: 'auth' });

const { data: cards, error } = await useFetch('/api/cards')

</script>

<template>
  <div class="max-w-4xl mx-auto flex gap-2 flex-col p-2">
    <UCard v-for="card in cards" :key="`key-${card.id}`">{{ card }}</UCard>
  </div>
</template>

<style>
</style>
