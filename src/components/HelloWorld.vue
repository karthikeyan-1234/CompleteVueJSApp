<template>
  <div class="red">
    <h1>{{ msg }}</h1>
    <h2>{{mymsg}}</h2>
    <h3>Public Counter {{public_counter}}</h3>
    <h3>Public Rates {{public_rate}}</h3>
    <h3>Private Age {{private_age}}</h3>
    <SubComp v-on:DataPublished="HandleEvent" msg="Sub Comp msg"></SubComp>
    <button @click="Dummy">Test Service</button>
  </div>
</template>

<script>
import { MyService } from '@/services/MyService';
import SubComp from './SubComp.vue'
import {mapState, mapGetters} from 'vuex'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    SubComp
  },
  computed:{
    ...mapState('counterStore',['private_age']),
    ...mapGetters({public_counter: 'counterStore/public_counter',public_rate : 'counterStore/public_rate'})
  },
  created(){
    console.log("Created hook fired");
  },
  mounted(){
    console.log("Mounted hook fired");
  },
  unmounted() {
    console.log("Unmounted hook fired");
  },
  data: function(){
    return{
      mymsg : "",
      service : new MyService()
    }
  },
  methods:{
    HandleEvent(value){
      console.log("Received from Child");
      console.log(value);
      this.mymsg = value.name;
    },
    async Dummy(){
      this.$store.dispatch("counterStore/updateCounter",{num: 100})
      this.$store.dispatch("counterStore/updateRates");
      this.$store.dispatch("counterStore/updateAge",20)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.frame{
  border: 1px solid red;
}
</style>
