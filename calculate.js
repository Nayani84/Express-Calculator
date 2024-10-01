function stringArrToNumsArr(nums) {
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        let strToInt = Number(nums[i]);

        if (Number.isNaN(strToInt)) {
            return new Error(
                `The value '${nums[i]}' at index ${i} is not a valid number.`
            )
        }

        result.push(strToInt);
    }
    return result;
}


function calculateMean(nums) {
    let sum = 0;
    if (nums.length === 0) return 0;
    for (i = 0; i < nums.length; i++) {
      sum += nums[i];
    }
    return sum / nums.length;
  }
  

  function calculateMedian(nums) {
    let median = 0,
      numsLen = nums.length;
    nums.sort();
  
    // if nums length is even
    if (numsLen % 2 === 1) {
        median = nums[(numsLen - 1) / 2];
    } else {
        median = (nums[(numsLen / 2) - 1] + nums[numsLen / 2]) / 2;
    }
    return median;
  }


  function calculateMode(nums) {
    const frequency = {};

    nums.forEach(num => {
        frequency[num] = (frequency[num] || 0) + 1;
    });

    // Find the maximum frequency
    let maxFrequency = 0;
    let modes = [];

    for (const num in frequency) {
        if (frequency[num] > maxFrequency) {
            maxFrequency = frequency[num];
            modes = [Number(num)]; 
        } else if (frequency[num] === maxFrequency) {
            modes.push(Number(num));
        }
    }

    if (maxFrequency === 1) {
        return []; 
    }

    return modes; 
}



module.exports = {
    stringArrToNumsArr,
    calculateMean,
    calculateMedian,
    calculateMode,
  };