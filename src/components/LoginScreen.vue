<template>
    <div>
        <table>
            <tr>
                <td><label>UserName</label></td>
                <td><input v-model="username" /></td>
                <td>{{modifiedName}}</td>
            </tr>
            <tr>
                <td><label>Password</label></td>
                <td><input v-model="password" type="password" /></td>
            </tr>
            <tr>
                <td><button @click="verifyLogin">Login</button></td>
            </tr>
        </table>
    </div>
</template>

<script>
export default{
    name: "LoginScreen",
    props:{
    },
    data: function(){
        return{
            username: "",
            password: ""
        }
    },
    computed:{
        modifiedName: function(){
            return "Username -> " + this.username;
        }
    },
    methods:{
        verifyLogin(){
            if(this.username === "Arjun")
            {
                localStorage.setItem("username",this.username);
                this.$router.push("/HelloWorld")
            }
        }
    }

}
</script>

<style scoped>
</style>