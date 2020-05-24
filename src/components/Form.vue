<template>
  <div>
    <label for="flavor">Favorite ice cream flavor?</label>
    <input @input="changed" name="flavor">
  </div>
</template>

<script>
export default {
  methods: {
    changed: function(event) {
    //   alert(event.target.value)
      this.$store.commit('change', event.target.value)
    }
  }
}
</script>