// Q1 Movies on Flight
// You are on a flight and wanna watch two movies during this flight. 
// You are given int[] movie_duration which includes all the movie durations. 
// You are also given the duration of the flight which is d in minutes. 
// Now, you need to pick two movies and the total duration of the two movies is less than or equal to (d - 30min). 
// Find the pair of movies with the longest total duration. If multiple found, return the pair with the longest movie.

// e.g. 
// Input
// movie_duration: [90, 85, 75, 60, 120, 150, 125]
// d: 250

// Output from aonecode.com
// [90, 125]
// 90min + 125min = 215 is the maximum number within 220 (250min - 30min)
moviesOnFlight1([90, 85, 75, 60, 120, 150, 125], 250);
function moviesOnFlight (movies, d) {
  let max = d - 30;
  let longest = 0;
  let combo = [];
  let m1 = 0;
  let m2 = m1 + 1;
  while(m1 < movies.length - 1) {
    let total = movies[m1] + movies[m2];
    let temp = movies[m1] > movies[m2] ? [movies[m2], movies[m1]] : [movies[m1], movies[m2]];
    if(total === max) return combo;
    if(total >= longest && total < max) {
      if(longest === 0) {
        combo = temp;
        longest = total;
      } else if (temp[1] >= combo[1]) {
        combo = temp;
        longest = total;
      }
    }
    if(m2 === movies.length - 1) {
      m1 += 1;
      m2 = m1 + 1;
    } else {
      m2 += 1;
    }
  }
  return combo;
}


// merge([90, 85, 75, 60, 120, 150, 125]);

function merge (arr) {
  if(arr.length === 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  return mergeSort(merge(left), merge(right));
}

function mergeSort (arr1, arr2) {
  let output = [];
  let p1 = 0;
  let p2 = 0;
  while (p1 < arr1.length && p2 < arr2.length) {
    if(arr1[p1] > arr2[p2]) {
      output.push(arr2[p2]);
      p2 += 1;
    } else {
      output.push(arr1[p1]);
      p1 += 1;
    }
  }
  return output.concat(arr1.slice(p1)).concat(arr2.slice(p2));
}

function moviesOnFlight1 (m, d) {
  let sortedM = merge(m);
  let f = 0;
  let b = sortedM.length - 1;
  let highest = 0;
  let combos = [];
  let max = d - 30;
  while(f !== b) {
    let total = sortedM[f] + sortedM[b];
    let temp = [sortedM[f], sortedM[b]];
    if(total === max) return temp;
    if(total > max) {
      b -= 1;
    }
    if(total < max) {
      if (total > highest) {
        combos = temp;
        highest = total;
      }
      f += 1;
    }
  }
  return combos;
}
