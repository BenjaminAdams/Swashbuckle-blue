//localstorage actions

export function initHistory() {
  var hst = getXhrHistory()
  if (!hst) {
    window.localStorage.setItem('xhrHistory', '[]')
  }
}

export function addHistory(saveToHistory) {
  saveToHistory.dateAdded = new Date()
  var hst = getXhrHistory()

  //if(isItTheSameReq(saveToHistory, hst[0])) return 

  if (hst.length > 100) {
    //delete the oldest request to free up space
    removeTwoHistoryItems(hst)
  }

  hst.unshift(saveToHistory) //add history to start of array

  try {
    window.localStorage.setItem('xhrHistory', JSON.stringify(hst))
  }
  catch (e) {
    removeTwoHistoryItems(hst)
  }
}

export function getXhrHistory() {
  var hst = window.localStorage.getItem('xhrHistory')
  if (!hst) return []
  return JSON.parse(hst)
}

export function clearXhrHistory() {
  window.localStorage.setItem('xhrHistory', '[]')
}

//ensure we dont submit duplicate requests
function isItTheSameReq(saveToHistory, theLastReq) {
  if (!theLastReq) return false
  if (saveToHistory.parameters === theLastReq.parameters && saveToHistory.routeId === theLastReq.routeId) return true
  return false
}


function removeTwoHistoryItems(hst) {
  hst.splice(hst.length - 1, 2)
}