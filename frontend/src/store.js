import { createGlobalState } from 'react-hooks-global-state'

const { setGlobalState, useGlobalState } = createGlobalState({
  user: null
})

export const setUser = (user) => {
  setGlobalState('user', user);
}
export {
  useGlobalState
}
