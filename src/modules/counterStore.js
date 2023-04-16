import { MyService } from '@/services/MyService';

export default{
    namespaced: true,
    state:{
        private_counter:0,
        private_rate:0,
        private_age:0
    },
    mutations:{
        mutateCounter(state,counter){
            state.private_counter = state.private_counter + counter;
        },
        mutateRates(state,rate){
            state.private_rate = state.private_rate + rate;
        },
        mutateAge(state,age){
            state.private_age = age;
            console.log("Age" + state.private_age);
        }
    },
    actions:{
        updateCounter({commit},data){
            commit('mutateCounter',data.num);
        },
        updateRates({commit}){
            new MyService().getallData().then(res => {
                console.log("Action UpdateRates")
                console.log(res.data.bpi);
                commit('mutateRates',res.data.bpi.EUR.rate_float);
            });
        },
        updateAge({commit},age){
            commit('mutateAge',age);
        }
    },
    getters:{
        public_counter(state){ return state.private_counter; },
        public_rate(state){ return state.private_rate;}
    }
}