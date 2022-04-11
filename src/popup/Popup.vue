<template>
  <div>
    <p>popup sample</p> 
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Popup',
  data() {
    return { 
    }
  },
  setup() {
    return {}
  },
  mounted(){
  },
  methods: {
  },
})

</script>

<style scoped>
.c-Button {
  border: none;
  border-radius: 2px;
}

.c-Button--close {
  background-color: yellow;
}
</style>