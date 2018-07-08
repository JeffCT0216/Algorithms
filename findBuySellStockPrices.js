function findBuySellStockPrices(arr) {
  let buyingPrice = arr[0];
  let sellingPrice = arr[1];
  let globalProf = sellingPrice - buyingPrice;
  for (let i = 1; i < arr.length; i++) {
    let currentProf = arr[i] - buyingPrice;
    console.log(buyingPrice, sellingPrice, globalProf, currentProf);
    if (globalProf < currentProf) {
      sellingPrice = arr[i];
      globalProf = currentProf;
    }
    if (buyingPrice > arr[i]) {
      buyingPrice = arr[i];
    }
  }
  return [sellingPrice - globalProf, sellingPrice];
}
