import addListener from './add-listener'

function preventDefault(event) {
  event.preventDefault()
  return false
}

function preventEvent(element, type) {
  return addListener(element, type, preventDefault)
}

export default preventEvent
