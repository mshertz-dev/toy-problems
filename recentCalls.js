/*
https://leetcode.com/explore/featured/card/october-leetcoding-challenge/559/week-1-october-1st-october-7th/3480/
*/

/*

You have a RecentCounter class which counts the number of recent requests within a certain time frame.

Implement the RecentCounter class:

RecentCounter() Initializes the counter with zero recent requests.
int ping(int t) Adds a new request at time t, where t represents some time in milliseconds, and returns the number of requests that has happened in the past 3000 milliseconds (including the new request). Specifically, return the number of requests that have happened in the inclusive range [t - 3000, t].
It is guaranteed that every call to ping uses a strictly larger value of t than the previous call.

*/


var RecentCounter = function() {
  this.requests = [];
};

/*
  @param {number} t
  @return {number}
 */
RecentCounter.prototype.ping = function(t) {
  this.requests.push(t);
  let count = 0;
  this.requests.forEach((request) => {
    if (request >= t - 3000 && request <= t) {
      count++;
    }
  });
  return count;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */