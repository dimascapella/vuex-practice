<template>
  <div class="home">
      <div class="counter" :style="{color: $store.state.colorCode}">
          {{ $store.state.counter }}
      </div>
      <div class="counter-squared">
          {{$store.state.counter}}
          <sup>{{$store.state.pow}}</sup> = 
          {{$store.getters.counterSquared}}
      </div>
      <div>
          <input type="text" v-model="powValue">
      </div>
      <div class="button">
          <button @click="$store.dispatch('decreaseCounter')">-</button>
          <button @click="$store.dispatch('increaseCounter')">+</button>
      </div>
      <div>
          <input type="text" v-model="colorCode">
      </div>
  </div>
</template>

<script>
export default {
    computed: {
        colorCode: {
            get(){
                return this.$store.state.colorCode
            },
            set(newValue){
                this.$store.dispatch('setColorCode', newValue)
            }
        },
        powValue: {
            get(){
                return this.$store.state.pow
            },
            set(Value){
                this.$store.dispatch('setPowNumber', Value)
            }
        }
    }
}
</script>

<style>
    .home{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 100vh;
    }

    .counter{
        font-size: 90px;
    }
    
    button{
        width: 60px;
        height: 40px;
        font-size: 20px;
        font-weight: bold;
        margin: 15px 20px;
    }
</style>