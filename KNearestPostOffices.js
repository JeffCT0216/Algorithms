// Q3 K Nearest Post Offices
// Find the k post offices located closest to you, given your location and a list of locations of all post offices available.
// Locations are given in 2D coordinates in [X, Y], where X and Y are integers.
// Euclidean distance is applied to find the distance between you and a post office.
// Assume your location is [m, n] and the location of a post office is [p, q], the Euclidean distance between the office and you is SquareRoot((m - p) * (m - p) + (n - q) * (n - q)).
// K is a positive integer much smaller than the given number of post offices. from aonecode.com

// e.g.
// Input
// you: [0, 0]
// post_offices: [[-16, 5], [-1, 2], [4, 3], [10, -2], [0, 3], [-5, -9]]
// k = 3

// Output from aonecode.com
// [[-1, 2], [0, 3], [4, 3]] 
KNearestPostOffices([0, 0], [[-16, 5], [-1, 2], [4, 3], [10, -2], [0, 3], [-5, -9]], 3);
//storage optimization
function KNearestPostOffices(loc, pos, k) {
  if(k === 0 || pos.length === 0) return [];
  let sortedPOLocs = merge(loc, copyInput(pos));
  return sortedPOLocs.slice(0, k)
}

function copyInput(pos) {
  let result = [], l = pos.length, i = 0;
  while(i < l) {
    result.push(pos[i]);
    i++;
  }
  return result;
}

function merge(loc, pos) {
  if (pos.length === 1) return pos;
  let i = Math.floor(pos.length / 2);
  return sort(loc, merge(loc, pos.slice(0, i)), merge(loc, pos.slice(i)));
}

function sort(loc, pos1, pos2) {
  let i = 0, j = 0, n = pos1.length, m = pos2.length;
  let result = [];
  while (i < n && j < m) {
    if (calDist(loc, pos1[i]) < calDist(loc, pos2[j])) {
      result.push(pos1[i]);
      i++;
    } else {
      result.push(pos2[j]);
      j++;
    }
  }
  return result.concat(pos1.slice(i)).concat(pos2.slice(j));
}

function calDist(loc, po) {
  return Math.pow(loc[0] - po[0], 2) + Math.pow(loc[1] - po[1], 2);
}
