<template>

  <div>
    <GoogleLogin :callback="callback" prompt auto-login/>


  </div>

  <div class="red">
    <h1>{{ msg }}</h1>
    <h2>{{mymsg}}</h2>
    <h3>Public Counter {{public_counter}}</h3>
    <h3>Public Rates {{public_rate}}</h3>
    <h3>Private Age {{private_age}}</h3>
    <h3>Private Rate {{private_rate}}</h3>
    <SubComp v-on:DataPublished="HandleEvent" msg="Sub Comp msg"></SubComp>
    <button @click="Dummy">Test Service</button>
  </div>
</template>

<script>
import { MyService } from '@/services/MyService';
import SubComp from './SubComp.vue'
import {mapState, mapGetters} from 'vuex'
import { decodeCredential } from 'vue3-google-login'


export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    SubComp
  },
  computed:{
    ...mapState('counterStore',['private_age','private_counter','private_rate']),
    ...mapGetters({public_counter: 'counterStore/public_counter',public_rate : 'counterStore/public_rate'})
  },
  created(){
    console.log("Created hook fired");
  },
  mounted(){
    // googleOneTap({ autoLogin: true })
    // .then((response) => {
    //   // This promise is resolved when user selects an account from the the One Tap prompt
    //   console.log("Handle the response", response)
    // })
    // .catch((error) => {
    //   console.log("Handle the error", error)
    // })

  },
  unmounted() {
    console.log("Unmounted hook fired");
  },
  data: function(){
    return{
      mymsg : "",
      service : new MyService(),
      clientId:"7869761026-kk1jjp94hcb7vp4lsd8ask4vhu4a65pd.apps.googleusercontent.com"
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
    },
    callback(response) {
      console.log(response);
      console.log(response.credential);
    const userData = decodeCredential(response.credential)
  console.log("Handle the userData", userData)
    // You can perform further actions with the JWT here
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
