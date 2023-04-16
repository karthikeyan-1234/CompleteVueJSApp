import {createStore} from 'vuex';
import counterStore from '@/modules/counterStore';

export default createStore({
    modules:{counterStore}
})