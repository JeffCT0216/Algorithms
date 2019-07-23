function validateIP(ip) {
	/**
	@param ip: string
	@return: boolean
	*/
   //edgess cases: 
   //the input has more than 4 numbers
   //any of the numbers are not actually numbers
   //numbers are greater than 255
   //empty string
   //approach
  let tmp = ip.split(".");
  if (tmp.length > 4) return false;
  for (let i = 0; i < tmp.length; i++) {
    if (/x/.test(tmp[i]) || tmp[i] === "") return false;
    let curr = Number(tmp[i]);
    console.log(curr);
    if (curr === NaN || curr < 0 || curr > 255) return false;
  }
  return true;

}
