function flattenDictionary(dict) {
  // your code goes here
  let resultObj = {};
  BFS(dict, resultObj);
  return resultObj;
}

function BFS(dict, resultObj, currentKey = '') {
  for (key in dict) {
    let newKey;
    if (currentKey === '') { 
      newKey = key;
    } else if (currentKey !== '' && key !== '') {
      newKey = currentKey + '.' + key;  
    } else {
      newKey = currentKey;
    }
    if (typeof dict[key] !== 'object') {   
      resultObj[newKey] = dict[key];
    } else {
      BFS(dict[key], resultObj, newKey);    
    }
  }
}
