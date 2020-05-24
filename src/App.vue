<template>
  <div id="app">
    <div class="container">
      <Counter></Counter>
      <br />
      <div class="columns">
        <div class="column is-11">
          <AddCounter></AddCounter>
        </div>
        <div class="column auto">
          <RemoveCounter></RemoveCounter>
        </div>
      </div>
    </div>
    <br><br>
    <div>
      <Form/>
      <Display/>
    </div>
  </div>
</template>

<script>
import Counter from "./components/Counter.vue";
import AddCounter from "./components/AddCounter.vue";
import RemoveCounter from "./components/RemoveCounter.vue";
import Form from './components/Form'
import Display from './components/Display'

export default {
  name: "App",
  components: {
    Counter,
    AddCounter,
    RemoveCounter,
    Form,
    Display,
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
