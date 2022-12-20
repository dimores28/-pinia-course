<template>
  <div>Hello Pina!</div>
  <div class="wrapper">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <button @click="logout" v-if="authStore.isAuthenticated">Logout</button>
      <button @click="login" v-else>Login</button>
    </nav>
  </div>
  <router-view></router-view>
</template>

<script setup>
import { useAuthStore } from "@/stores/auth";
const authStore = useAuthStore();

function logout() {
  authStore.$patch((state) => {
    (state.isAuthenticated = false), (state.user = {});
  });
}

function login() {
  // authStore.$patch((state) => {
  //   (state.isAuthenticated = true),
  //     (state.user = {
  //       name: "Sarthak",
  //       email: "arthak@bitfumes.com"
  //     });
  // });

  authStore.$reset();
}
</script>

<script>
export default {
  name: "App"
};
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}
.logo {
  display: block;
  margin: 0 auto 2rem;
}
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}
nav a.router-link-exact-active {
  color: var(--color-text);
}
nav a.router-link-exact-active:hover {
  background-color: transparent;
}
nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}
nav a:first-of-type {
  border: 0;
}
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
  .logo {
    margin: 0 2rem 0 0;
  }
  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
