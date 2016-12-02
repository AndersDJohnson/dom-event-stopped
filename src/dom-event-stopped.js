export default function domEventStopped(event, callback, ...args) {
  let returnValue
  if (callback) {
    returnValue = callback(event, ...args)
  }
  return returnCancels(returnValue) || event.defaultPrevented
}

export function returnCancels(returnValue) {
  return returnValue !== undefined && !returnValue
}
