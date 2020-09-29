let nums = [-4, -3, -2, -1, 60];

var maximumProduct = function(nums) {
    let high1 = -Infinity;
    let high2 = -Infinity;
    let high3 = -Infinity;
    let low1 = Infinity;
    let low2 = Infinity;
    nums.forEach((num) => {
        if (num > high1) {
            [high1, high2, high3] = [num, high1, high2];
        } else if (num > high2) {
            [high2, high3] = [num, high2];
        } else if (num > high3) {
            high3 = num;
        }
        if (num < low1) {
            [low1, low2] = [num, low1];
        } else if (num < low2) {
            low2 = num;
        }
    });
    return Math.max((high1 * high2 * high3), (low1 * low2 * high1));
};