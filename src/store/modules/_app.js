/**
 * @author:	Emmanuel SMITH <emmanuel.smith@live-session.fr>
 * project:	customDefault
 * file: 	_app.js
 * Date: 	31-May-20
 * Time: 	15:56
 */

const state = () => ({
	processing: false
});

// getters
const getters = {
	getProcessing: ( state ) => {
		return state.processing;
	}
};

// actions
const actions = {};

// mutations
const mutations = {
	setProcessing( state, value ) {
		state.processing = value;
	}
};

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
};
