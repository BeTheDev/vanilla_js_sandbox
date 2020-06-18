//스토어 만들기
import { createStore } from "redux"
const store = createStore(reducer)

const divToggle = document.querySelector(".toggle")
const counter = document.querySelector("h1")
const btnIncrease = document.querySelector("#increase")
const btnDecrease = document.querySelector("#decrease")

//Actions

const TOGGLE_SWITCH = "TOGGLE_SWITCH"
const INCREASE = "INCREASE"
const DECREASE = "DECREASE"

//Action Type 함수

const toggleSwitch = () => ({
  type: TOGGLE_SWITCH,
})

const increase = (difference) => ({ type: INCREASE, difference })
const decrease = () => ({ type: DECREASE })

//초기값 (initial setting)

const initialState = {
  toggle: false,
  counter: 0,
}

//Reducer

//* State 가 undefined 일때는 initital state 을 기본으로 적용
function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_SWITCH:
      return {
        ...state, // 불변성 유지를 해주어야 합니다
        toggle: !state.toggle,
      }
    case INCREASE:
      return {
        ...state,
        counter: state.counter + action.difference,
      }
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      }
    default:
      return state
  }
}

//Render 함수 만들기 (상태 업데이트 때마다 호출)

const render = () => {
  const state = store.getState() //현 상태를 불러온다
  //토글 처리
  if (state.toggle) {
    divToggle.classList.add("active")
  } else {
    divToggle.classList.remove("active")
  }

  //카운터 처리
  counter.innerText = state.counter
}

// render()
store.subscribe(render)

//dispatch 액션을 발생시킴
divToggle.onclick = () => {
  store.dispatch(toggleSwitch())
}
btnIncrease.onclick = () => {
  store.dispatch(increase(1))
}
btnDecrease.onclick = () => {
  store.dispatch(decrease(0))
}
