<template>
  <div>
    <svg v-if="rating == 3" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.6001 4.46828L7.89075 3.68539L6.0001 0.399658V9.50435L9.461 11.0514L9.05928 7.28169L11.6001 4.46828Z" fill="#F9C800" />
      <path d="M4.10935 3.68576L0.400002 4.46865L2.94083 7.28205L2.5391 11.0517L6 9.50472V0.400024L4.10935 3.68576Z" fill="#FFE060" />
    </svg>
    <svg v-if="rating == 2" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 5.08578L9.36331 4.10717L7 1.27847e-08V11.3809L11.3261 13.3146L10.824 8.60254L14 5.08578Z" fill="#B8B6B6" />
      <path d="M4.63669 4.10717L0 5.08578L3.17603 8.60254L2.67387 13.3146L7 11.3809V1.27847e-08L4.63669 4.10717Z" fill="#D4D4D4" />
    </svg>
    <svg v-if="rating == 1" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.6001 4.46828L7.89075 3.68539L6.0001 0.399658V9.50435L9.461 11.0514L9.05928 7.28169L11.6001 4.46828Z" fill="#D86F0F" />
      <path d="M4.10935 3.68576L0.400002 4.46865L2.94083 7.28205L2.5391 11.0517L6 9.50472V0.400024L4.10935 3.68576Z" fill="#FB9E48" />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    rating: Number,
  },
};
</script>

<style lang="scss" scoped>
</style>