<template>
  <h6>This is MainComponent Page</h6>
  <StudentComponent
    v-for="(item, key) in students"
    :key="key"
    :id="item.id"
    :name="item.name"
    @del="removeItem"
  />
</template>

<script>
import StudentComponent from "src/components/StudentComponent.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "MainComponentPage",
  components: { StudentComponent },

  data() {
    return {
      students: [
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
        { id: 3, name: "Eve" },
      ],
    };
  },

  methods: {
    removeItem(id) {
      this.students = this.students.filter((item) => {
        return item.id !== id;
      });
    },
  },
});
</script>
