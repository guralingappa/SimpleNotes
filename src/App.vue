<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="q-mb-md">
      <router-link to="/about">About</router-link>
      <router-link to="/">Home</router-link>
    </q-header>
    <q-page-container class="q-mt-lg">
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import NavBar from "./components/NavBar.vue";

export default defineComponent({
  name: "LayoutDefault",

  components: {
    HelloWorld,
    NavBar,
  },

  setup() {
    return {
      leftDrawerOpen: ref(false),
    };
  },
});
</script>
