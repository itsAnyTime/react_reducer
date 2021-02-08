import './App.css';
import Show from './Show';
import { createStore } from "redux"; // installed redux extension

const initialState = {
  buttonClicked: 'no',
  divVisible: 'no'
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "BUTTON_CLICKED":
      return { ...state, buttonClicked: 'yes' }
    case "DIV_VISIBLE":
      return { ...state, divVisible: 'yes' }
    default:
      return state;
  }
  // depending of action type we will change the state accordingly
  // return state;
}

const store = createStore(rootReducer);

// add 2 redux methods (actions)
function btnClick() {

  const btnClickedAction = {
    type: "BUTTON_CLICKED"
  }

  const divVisibleAction = {
    type: "DIV_VISIBLE"
  }

  store.dispatch(btnClickedAction);
  // store.subscribe(divVisibleAction); // changes state
  store.dispatch(divVisibleAction);
}

store.subscribe(function () {
  if (store.getState().divVisible === 'yes') {
    const div = document.getElementById('mydiv');
    div.style.display = 'block';
  }
})
function App() {
  return (
    <div className="App">
      <Show click={btnClick} />
    </div>
  );
}

export default App;