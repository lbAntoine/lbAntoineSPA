<script lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

export default {
  props: {
    to: { type: String, required: true}
  },
  setup(props: { to: string }) {
    const route = useRoute()
    const isActive = computed(() => route.path === props.to)
    return { isActive };
  }
}
</script>

<template>
    <router-link :to="to" class="link" :class="{ active: isActive }">
      <slot />
    </router-link>
</template>