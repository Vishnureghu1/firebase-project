<template>
  <div>
    <div v-if="error" class="error">{{ error.message }}</div>
    <form @submit.prevent="pressed">
      Registeration
      <div class="email">
        <input type="email" class="input" v-model="email" placeholder="Email" />
      </div>
      <div>
        <input
          type="password"
          class="input"
          v-model="password"
          placeholder="password"
        />
      </div>
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
import * as firebase from "firebase/app";

export default {
  name: "user-register",
  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },
  methods: {
    async pressed() {
      try {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password);
        this.$router.replace({ name: "secret" });
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.error {
  color: red;
  font-size: 18px;
}
.input {
  width: 400px;
  padding: 30px;
  margin: 20px;
  font-size: 21px;
}
button {
  width: 400px;
  height: 175px;
  font-size: 100px;
}
</style>
