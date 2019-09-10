<template>
    <div class="wrapper justify-content-center">
      <button @click="currentFrequency = frequency" class="btn btn-primary"
      v-for="(price, frequency) in plans[0].pricing">{{ frequency }}</button>

      <div class="row justify-content-center">
        <div v-for="plan in plans" class="starter">
          <h1>{{ plan.name }}</h1>
          <ul>
            <li v-for="benefit in plan.benefits[currentFrequency]">{{ benefit }}</li>
          </ul>
          <div><h1>
            {{ getPrice(plan.pricing[currentFrequency].price) }}
            {{ plan.pricing[currentFrequency].label }}
          </h1></div>
        </div>
      </div>
      <div>
        <a href="#" @click.prevent=" currency= 'usd'" class="btn btn-info">USD</a>
        | <a href="#" @click.prevent="currency= 'eur'" class="btn btn-info">EUR</a>
      </div>
    </div>

</template>

<script>
  export default {
    methods: {
      getPrice(price){
        return this['currency' + this.currency.toUpperCase()](price);
      },

      currencyUSD(price){
        return '$' + price;
      },

      currencyEUR(price){
        return (price * 0.85) + '€';
      }
    },
    name: 'Pricing',
    data: function () {
      return{
        currentFrequency: 'monthly',
        currency: 'usd',
        plans: [
          {
            name: 'Starter',
            benefits:{
              monthly:['benefit1', 'benefit2', 'benefit3'],
              yearly: ['benefit1', 'benefit2', 'benefit3', 'benefit4'],
              lifetime: ['benefit1', 'benefit2', 'benefit3', 'benefit4', 'benefit5']
            },
            pricing: {
              monthly: { price: 100, label: '/mo'},
              yearly: { price: 300, label: '/yr'},
              lifetime: { price: 3000, label: ''}
            }
          },
          {
            name: 'Pro',
            benefits:{
              monthly:['benefit1', 'benefit2', 'benefit3'],
              yearly: ['benefit1', 'benefit2', 'benefit3', 'benefit4'],
              lifetime: ['benefit1', 'benefit2', 'benefit3', 'benefit4', 'benefit5']
            },
            pricing: {
              monthly: { price: 300, label: '/mo'},
              yearly: { price: 500, label: '/yr'},
              lifetime: { price: 5000, label: ''}
            },
          }
        ]
      }
    }
  }
</script>

<style scoped>
.wrapper{
  margin: auto;
  width: 50%;
  border: 3px solid #73AD21;
  padding: 10px;
  height: 400px;
  background-color: #2c3e50;
}
button{
  margin-left: 5px;
  margin-right: 5px;
  border: crimson 1px solid;
}
button:focus{
  background:olive;
}
.starter{
  color: white;
  width: 50%;
}
li {
  list-style-type: none;
}
</style>
