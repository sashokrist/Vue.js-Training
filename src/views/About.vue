<template>
  <div class="about">
    <input type="text" autocomplete="off" v-model="state" @input="filterStates">
    <div v-if="filteredStates">
      <ul>
        <li v-for="filteredState in filteredStates">{{ filteredState }}</li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    data: function () {
      return{
        state: '',
        states: [
          'florida',
          'Alabama',
          'Alaska',
          'Texas',
        ],
        filteredStates: [],
      }
    },
    methods: {
      filterStates(){
      this.filteredStates = this.states.filter(state => {
        return state.toLowerCase().startsWith(this.state.toLowerCase());
      })
    }
   }
  }
</script>
