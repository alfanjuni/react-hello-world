const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    value: 0,
    age: 17
}


//Reducer (fungsi untuk mengupdate store)
const rootReducer = (state = initialState, action) => {
   
    switch(action.type){
        case 'ADD_AGE' :
            return {
                ...state, //mencopy  state diatas agar value nya ngikut
                age: state.age +1
            }
        case 'CHANGE_VALUE' :
            return {
                ...state,
                value: state.value + action.newValue
            }
        default: 
            return state;
    }
}

// Strore (wadah besaar menyimpan value)
const store = createStore(rootReducer);
console.log(store.getState());

//Subscription 
store.subscribe(() => {
    console.log('store change:', store.getState());
    
})



//Dispatching action (proses pemanggilan task list reducer)
store.dispatch({type: 'ADD_AGE'}) //kapital
store.dispatch({type: 'CHANGE_VALUE', newValue: 12}) //kapital
console.log(store.getState());



