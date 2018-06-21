const logger = (store) = (next) = (action) => {
  console.group(action.type)
    console.log('The action: ', action)
    const resultValue = next(action)
    console.log('The new state: ', action.getState())
  console.groupEnd()
}

export default logger