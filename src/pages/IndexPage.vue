<template>
  <q-page class="q-ma-md">
    <div>
      <q-input
        color="green"
        filled
        v-model="value1"
        label="Enter Number"
        label-color="amber"
        class="q-mb-md"
      />
      {{ value1 }} x 2 = {{ result }}
    </div>
    <div>
      <q-input
        color="teal"
        filled
        v-model="mysearch"
        label="Search Menu"
        label-color="teal"
      >
        <template v-slot:prepend>
          <q-icon name="search" color="teal" />
        </template>
      </q-input>
    </div>
    <div v-for="result in getSearchResult" :key="result.id" class="listItem">
      {{ result.label }}
    </div>

    <div>
      Method Section
      <ul>
        <li v-for="val in 3" :key="val">{{ getRandomMethod() }}</li>
      </ul>
    </div>
    <div>
      omputed Section
      <ul>
        <li v-for="val in 3" :key="val">{{ getRamdomComputed }}</li>
      </ul>
    </div>
    <div>
      <q-option-group
        v-model="qOptionGroup"
        :options="qOptionObj"
        color="purple"
        type="toggle"
      />
    </div>
    <div>Your select items: {{ qOptionGroup }}</div>
    <div>
      <q-select v-model="qSelect" :options="options" label="Standard" />
    </div>
    <div>Your selction is {{ qSelect }}</div>
    <div>{{ name }}</div>
    <div>My age is {{ age }}</div>
    <div>
      <q-btn color="primary" label="Increment" @click="age++" />
      <q-btn color="red" label="Decrement" @click="age--" />
      <q-btn color="positive" label="+10" @click="plusten(10)" />
    </div>
    <div>
      <q-input
        outlined
        v-model="text"
        label="Type name"
        class="q-mt-md"
        color="pink"
        @keyup.alt.enter="clearText"
      />
    </div>
    <div>Gpa is {{ gpa }}</div>
    <div><span v-html="address"></span></div>
    <ul>
      <li v-for="(val, key) in hoppies" :key="key">{{ val }}</li>
    </ul>
    <ul v-if="showInfo">
      <li v-for="(val, property, index) in info" :key="index">
        {{ index }} {{ property }} {{ val }}
      </li>
    </ul>
    <div v-else>No information</div>
    <div>Status: {{ getGpa() }}</div>
    <q-img :src="url" spinner-color="white" :ratio="16 / 9">
      <div class="absolute-center text-center text-h1">Hello</div>
    </q-img>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
  data() {
    return {
      name: "myName",
      age: 20,
      gpa: 3.0,
      address: "<i>Phuket</i>",
      hoppies: ["running", "swimming", "tennis"],
      info: {
        sex: "not specific",
        weight: 111,
        height: 152,
      },
      url: "https://platinumlist.net/guide/wp-content/uploads/2023/03/8359_img_worlds_of_adventure-big1613913137.jpg-1024x683.webp",
      showInfo: true,
      text: "",
      qSelect: "",
      options: ["FB", "Google", "Email"],
      qOptionGroup: [],
      qOptionObj: [
        { label: "Milk Tea", value: "0", color: "orange" },
        { label: "Green Tea", value: "1", color: "red" },
        { label: "Thai Tea", value: "2", color: "green" },
        { label: "Banana Tea", value: "3", color: "blue" },
      ],
      fuits: [
        { id: 1, label: "Banana" },
        { id: 2, label: "Apple" },
        { id: 3, label: "Orange" },
      ],
      mysearch: "",
      value1: "",
      result: 0,
    };
  },
  methods: {
    getGpa() {
      if (this.gpa >= 2.0) return this.addition(50);
      else return "Fail";
    },
    addition(param) {
      return this.gpa + param;
    },
    plusten(param) {
      this.age += param;
    },
    clearText() {
      this.text = "";
    },
    getRandomMethod() {
      return Math.random();
    },
  },

  computed: {
    getRamdomComputed() {
      return Math.random();
    },
    getSearchResult() {
      if (this.mysearch) {
        return this.fuits.filter((item) => {
          return item.label
            .toString()
            .toLowerCase()
            .includes(this.mysearch.toString().toLowerCase());
        });
      } else return this.fuits;
    },
  },

  watch: {
    value1() {
      this.result = 2 * this.value1;
    },
  },
});
</script>

<style lang="scss" scoped>
.listItem {
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  background-color: pink;
}
</style>
