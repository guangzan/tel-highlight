<script lang='ts' setup>
import { telHighlight } from 'tel-highlight'

const telData = telHighlight({ tel: 12345678910, highlight: '5678' })
</script>

<template>
  <div>
    <span
      v-for="(item, index) in telData"
      :key="index"
      :class="{ highlight: item.isHighlight }"
      >{{ item.num }}</span
    >
  </div>
</template>

<style scoped>
.highlight {
  color: red;
}
</style>
