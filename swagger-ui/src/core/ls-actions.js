//localstorage actions

export function initHistory(){
  var hst = getXhrHistory()
  if(!hst) {
    window.localStorage.setItem('xhrHistory','[]')
  }
}

export function addHistory(saveToHistory){
  saveToHistory.dateAdded = new Date()
  var hst = getXhrHistory()
  hst.push(saveToHistory)
  window.localStorage.setItem('xhrHistory', JSON.stringify(hst))
}

export function getXhrHistory() {
  var hst=window.localStorage.getItem('xhrHistory')
  if(!hst) return []
  return JSON.parse(hst)
}