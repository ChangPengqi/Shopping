import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store={
	state:{
		demo:{}
	},
	mutations:{
		GET_DEMO(state,info){
			state.demo=info
		}
	},
	actions:{
		getDemo({commit},info){
			commit('GET_DEMO',info)
		}
	}
}

export default new Vuex.Store(store)