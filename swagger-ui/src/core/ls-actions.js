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

  //if(isItTheSameReq(saveToHistory, hst[0])) return 

  hst.unshift(saveToHistory) //add history to start of array

  if(hst.length > 150) {
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

//ensure we dont submit duplicate requests
function isItTheSameReq(saveToHistory, theLastReq) {
  if(!theLastReq) return false       
  if(saveToHistory.parameters === theLastReq.parameters && saveToHistory.routeId === theLastReq.routeId) return true
  return false
}