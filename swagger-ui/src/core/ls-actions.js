//localstorage actions

export function initHistory(){
  var hst = getXhrHistory()
  if(!hst) {
    window.localStorage.setItem('xhrHistory','[]')
  }
}

//todo: ensure we dont submit duplicate requests
export function addHistory(saveToHistory){
  saveToHistory.dateAdded = new Date()
  var hst = getXhrHistory()
  hst.unshift(saveToHistory) //add history to start of array

  if(hst.length > 200) {
    //delete the oldest request to free up space
   hst.splice(hst.length-1, 1)
  }

  window.localStorage.setItem('xhrHistory', JSON.stringify(hst))
}

export function getXhrHistory() {
  var hst=window.localStorage.getItem('xhrHistory')
  if(!hst) return []
  return JSON.parse(hst)
}

export function clearXhrHistory() {
    window.localStorage.setItem('xhrHistory','[]')
}