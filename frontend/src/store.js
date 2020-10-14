import { createGlobalState } from 'react-hooks-global-state'

const { setGlobalState, useGlobalState } = createGlobalState({
  user: {
    email: "test@test.com",
    password: "asdf",
    firstname: "test",
    lastname: "test",
    street: "Ave",
    house: "9705 91a",
    postal: "T8V 0G7",
    country: "Canada"
  },
  message: "",
  error: ""
})

export const setUser = (user) => {
  setGlobalState('user', user);
}

export const setMessage = (message) => {
  setGlobalState('message', message);
}

export const setError = (error) => {
  setGlobalState('error', error);
}
export {
  useGlobalState
}
