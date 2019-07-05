new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!",
    min: 0,
    max: 0
    // result: null
  },
  computed: {
    result() {
      if (this.max < this.min) {
        return "";
      }
      return Math.floor( Math.random() * (this.max - this.min +1) + this.min);
    }
  }
});
