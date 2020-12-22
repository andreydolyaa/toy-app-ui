

import { toyService } from '../services/toyService.js';




export default {
  state: {
    toys: null,
    user: null
  },
  getters: {
    getToysToDisplay(state) {
      return state.toys;
    },
    getUser(state) {
      return state.user;
    }
  },
  mutations: {
    setToys(state, payload) {
      state.toys = payload.toys;
    },
    setUser(state, payload) {
      state.user = payload.user;
    },
    saveToy(state, payload) {
      state.toys.unshift(payload.toy);
    },
    updateToy(state, payload) {
      const idx = state.toys.findIndex(toy => toy._id === payload.toy._id);
      state.toys.splice(idx, 1, payload.toy);
    },
    update(state, payload) {
      const idx = state.toys.findIndex(toy => toy._id === payload.toy._id);
      state.toys.splice(idx, 1, payload.toy);
    },
    deleteToy(state, payload) {
      const idx = state.toys.findIndex(toy => toy._id === payload.toy._id);
      state.toys.splice(idx, 1);
    },
    filterByName(state, payload) {
      state.toys = payload.toys;
    },
    filterByStock(state, payload) {
      state.toys = payload.toys;
    },
    filterByType(state, payload) {
      state.toys = payload.toys;
    },
    searchQuery(state, payload) {
      state.toys = payload.toys;
    }
  },
  actions: {
    loadToys(context) {
      toyService.query()
        .then(toys => {
          context.commit({ type: 'setToys', toys });
        });
    },
    // loadUser(context) {
    //   userService.loadUser()
    //     .then(res => {
    //       context.commit({ type: 'setUser', user: res });
    //     })
    // },
    saveToy(context, payload) {
      // if(!payload.user.isAdmin){
      //   console.log('NOT ADMIN, CANNOT ADD!');
      //   return;
      // };
      const action = (payload.toy._id) ? 'updateToy' : 'saveToy';
      toyService.save(payload.toy, payload.toy._id).then(res => {
        context.commit({ type: action, toy: payload.toy });
      })
    },
    updateToy(context, payload) {
      // if (!payload.user.isAdmin) {
      //   console.log('NOT ADMIN, CANNOT UPDATE!');
      //   return;
      // };
      toyService.update(payload.toy)
        .then(res => {
          context.commit({ type: 'update', toy: payload.toy })
        })
    },
    deleteToy(context, payload) {
      // if(!payload.user.isAdmin){
      //   console.log('NOT ADMIN, CANNOT DELETE!');
      //   return;
      // };
      toyService.remove(payload.toy._id)
        .then(res => {
          context.commit({ type: 'deleteToy', toy: payload.toy });
        })
    },
    searchByName(context, payload) {
      toyService.query(payload.name)
        .then(res => {
          context.commit({ type: 'filterByName', toys: res });
        })
    },
    searchByStock(context, payload) {
      console.log(payload.filterBy);
      toyService.query(payload.filterBy)
      .then(res => {
          context.commit({ type: 'filterByStock', toys: res });
        })
    },
    searchByType(context, payload) {
      toyService.query(null, payload.byType)
        .then(res => {
          context.commit({ type: 'filterByType', toys: res });
        })
    },
    searchQuery(context,payload){
      toyService.query(payload.search)
      .then(res => {
        context.commit({type:'searchQuery',toys:res})
      })
    }
  },
}