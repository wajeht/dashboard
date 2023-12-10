<script setup lnag="ts">

const { data } = await useFetch('/api/cards/index');

</script>
<template>
  <div>
    <!-- <NuxtWelcome /> -->
    <pre>{{ data }}</pre>
  </div>
</template>
