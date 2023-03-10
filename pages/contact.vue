<template>
  CONTACT
  {{ testStore.count }}
  <button @click="testStore.increment">Add</button>
</template>

<script lang="ts">
import { mapStores } from 'pinia';

export default {
  computed: {
    ...mapStores(useTest)
  }
}
</script>