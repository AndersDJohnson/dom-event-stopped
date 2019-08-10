# dom-event-stopped
Detect and react to a DOM event that was stopped or prevented.

```js
import domEventStopped from 'dom-event-stopped'

function onFocusStopped(e, ...args) {
  // stuff to do when event was stopped...
}

function onFocus(e, ...args) {
  if (domEventStopped(e, onFocusStopped, ...args)) return false
  
  // stuff to do when event was not stopped...
}

document.querySelector('.foo').addEventListener('focus', onFocus)
```
