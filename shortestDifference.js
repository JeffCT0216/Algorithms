//["20:10", "9:53", "23:57", "0:10"]
//find shorted difference
//calcaulate time to 00:00
//[1210, 597, 2397, 10]
shortestDifference(["20:10", "9:53", "23:57", "0:10"]);
function shortestDifference (arr) {
  let sortedMins = convertStr(arr).sort((a, b) => a - b);
  let f = 0;
  let shortest = 1440 - sortedMins[sortedMins.length - 1] + sortedMins[f];
  while (f < sortedMins.length - 1) {
    let diff = sortedMins[f + 1] - sortedMins[f];
    shortest = shortest < diff ? shortest : diff;
    f += 1;
  }
  return shortest;
}

function convertStr(arr) {
  let n = 0;
  let output = [];
  while (n < arr.length) {
    let time = arr[n].split(":");
    let totalMin = 60 * Number(time[0]) + Number(time[1]);
    output.push(totalMin);
    n += 1;
  }
  return output;
}
