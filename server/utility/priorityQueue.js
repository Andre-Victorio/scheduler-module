"use strict";
module.exports = class PriorityQueue {
  constructor() {
    this.queue = [];
    this.counter = 1;
    this.maxPriority = 60; // Set maximum priority number to 60
  }

  enqueue() {
    const priorityNumber = this.counter % this.maxPriority;
    this.queue.push(priorityNumber);
    this.counter++;
    return priorityNumber;
  }

  dequeue() {
    let highestPriorityIndex = 0;
    for (let i = 1; i < this.queue.length; i++) {
      if (this.queue[i] < this.queue[highestPriorityIndex]) {
        highestPriorityIndex = i;
      }
    }
    return this.queue.splice(highestPriorityIndex, 1)[0];
  }

  size() {
    return this.queue.length;
  }

  setQueue(priorityNumber) {
    this.counter = priorityNumber + 1;
  }
};
