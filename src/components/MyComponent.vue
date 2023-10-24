<template>
  <h6>This is my component</h6>
  <SecondComponent />
</template>

<script>
import { defineComponent } from "vue";
import SecondComponent from "./SecondComponent.vue";
export default defineComponent({
  name: "MyComponent",
  components: { SecondComponent },
});
</script>
