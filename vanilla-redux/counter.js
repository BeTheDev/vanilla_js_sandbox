const counter = document.querySelector("h1")
const btnIncrease = document.querySelector("#increase")
const btnDecrease = document.querySelector("#decrease")

const initalState = {
  counter: 0,
}

const INCREASE = "INCREASE"
const DECREASE = "DECREASE"

const increase = () => ({ type: INCREASE })
const decrease = () => ({ type: DECREASE })

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        counter: state.counter + 1,
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

import { createStore } from "redux"

const store = createStore(reducer)

const updateCounter = () => {
  const state = store.getState()
  counter.innerText = state.counter
}

store.subscribe(updateCounter)

//dispatch

btnIncrease.onclick = () => {
  store.dispatch(increase(1))
}
btnDecrease.onclick = () => {
  store.dispatch(decrease(0))
}
