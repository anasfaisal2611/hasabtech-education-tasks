// Task 1: Implement a simple LRU Cache class with a fixed capacity.
// Methods: constructor(capacity), get(key), set(key, value), size()

class LRUCache {
  constructor(capacity) {
    if (!Number.isInteger(capacity) || capacity <= 0) {
      throw new TypeError("capacity must be a positive integer");
    }
    this.capacity = capacity;
    this.map = new Map(); // maintains insertion order; we will refresh on access
  }

  get(key) {
    if (!this.map.has(key)) return undefined;
    const val = this.map.get(key);
    // refresh key to mark as recently used
    this.map.delete(key);
    this.map.set(key, val);
    return val;
    }

  set(key, value) {
    if (this.map.has(key)) {
      this.map.delete(key);
    } else if (this.map.size >= this.capacity) {
      // delete least-recently-used (first item in Map)
      const lruKey = this.map.keys().next().value;
      this.map.delete(lruKey);
    }
    this.map.set(key, value);
    return this; // allow chaining
  }

  size() {
    return this.map.size;
  }
}

module.exports = { LRUCache };
