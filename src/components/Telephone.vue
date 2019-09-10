<template>
    <div class="container">
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Enter Phone Number</label>
          <input type="number" class="form-control" id="exampleInputEmail1"  placeholder="(XXX) XXX-XXX)" v-model="number">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
</template>

<script>
  export default {
    name: 'Telephone',
    data: function () {
      return{
        number: '',
      }
    },
    watch: {
      number(){
        this.number = this.number.replace(/^(\d{3})(\d{3})(\d{4})/g, '($1) $2-$3');
      }
    }
  }
</script>

<style scoped>
input{
  width: 400px;
}
.container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
