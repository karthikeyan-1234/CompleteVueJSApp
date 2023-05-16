import { createApp } from 'vue'
import App from './App.vue'
import {createRouter,createWebHistory} from 'vue-router'
import HelloWorldVue from './components/HelloWorld.vue';
import ByeWorldVue from './components/ByeWorld.vue';
import LoginScreenVue from './components/LoginScreen.vue';
import axios from "axios";
import store from './store';
import vue3GoogleLogin from 'vue3-google-login';



axios.interceptors.request.use(
    request => {
        //console.log(request);
        //request.headers.Custom = "Customer Header Value";
        return request;
    },
    error =>{
        console.log(error);
    }
)

const app = createApp(App);

const Routes=[
    {path:"/",component:LoginScreenVue, name: "Login"},
    {path:"/HelloWorld",component:HelloWorldVue, props:{msg: "Logged In"}, name: "HelloWorld"},
    {path:"/ByeWorld",component:ByeWorldVue},
    {path: "/LoginScreen",component: LoginScreenVue, name: "LoginScreen"}
]
const router = createRouter({
    history: createWebHistory(),
    routes: Routes
})


router.afterEach(async(from) => {

    if(localStorage.getItem("username")==null && (from.path != "/LoginScreen" && from.path != "/"))
    {
        console.log("Redirecting to LoginScreen");
        router.push('/LoginScreen');
    }
})   

app.use(vue3GoogleLogin, {
    clientId: '7869761026-kk1jjp94hcb7vp4lsd8ask4vhu4a65pd.apps.googleusercontent.com'
  })
app.use(store)
app.use(router);
app.mount('#app')
