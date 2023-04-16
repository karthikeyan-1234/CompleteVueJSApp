<template>
<div class="frame">
<h3>Subcomp</h3>
<h2>{{msg}}</h2>

<div class="center">
  <ul>
      <li v-for="(link,index) in links" :key="index">{{link}}</li>
  </ul>
</div>

<div :id="divId">
  <button :disabled="buttonStatus" @click="SendData()">Send Data to Parent</button>
</div>

<div v-if="num == 0">
  <h4>The number is Zero</h4>
</div>

<div v-if="num !== 0">
  <h4>The number is not Zero</h4>
</div>

<div>
  <button @click="GotoBye">Go To Bye</button>
</div>

</div>
</template>

<script>
export default {
  name: 'SubComp',
  props: {
    msg: String
  },
  data() {
    return {
      links: ['Home','Test','Return'],
      divId: "hello",
      buttonStatus: false,
      status:"soldout",
      num: 1
    }
  },
  emits:['DataPublished'],
  methods:{
    SendData: function(){
      console.log("Clicked..!!");
      this.$emit("DataPublished",{'name':'Arjun'});
    },

    GotoBye(){
      this.$router.push('/byeworld');
    }

  }
}
</script>

<style scoped>
.soldout{
  color:red
}
.available{
  color:green
}

.center{
  align-content: center;
  width: fit-content;
}

.frame{
  border: 1px solid black;
}
</style>