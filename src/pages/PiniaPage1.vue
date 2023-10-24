<template>
  <q-page padding>
    <div>
      <h5>This is page 1</h5>
    </div>
    <div><a href="/#/count1">Page1</a> <a href="/#/count2">Page2</a></div>
    <div>
      <h4>{{ mystore.counter }}</h4>
      <q-btn icon="add" color="pink" @click="mystore.increment" />

      <h4>{{ mystore.counter }} x 2 = {{ mystore.doubleCount }}</h4>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { useCounterStore } from "stores/couter";
export default defineComponent({
  name: "PiniaPage1",
  data() {
    return {
      mystore: useCounterStore(),
    };
  },
});
</script>
