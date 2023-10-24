<template>
  <div class="">
    <CardSlot>
      <template #card-header> Student No. {{ id }}</template>
      <template #card-content>{{ name }}</template>
      <template #card-footer>
        <q-icon name="delete" size="md" color="white" @click="removeStd(id)" />
      </template>
    </CardSlot>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import CardSlot from "./CardSlot.vue";
export default defineComponent({
  name: "SecondComponent",
  props: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  methods: {
    removeStd(id) {
      this.$emit("del", id);
    },
  },
  components: { CardSlot, CardSlot },
});
</script>
