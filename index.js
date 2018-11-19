function produceDrivingRange(blockRange) {
  return function(first, last) {
    let range = Math.abs(parseInt(first) - parseInt(last));
    if (range > blockRange) {
      return `${(Math.abs(range - blockRange))} blocks out of range`;
    } else if (range < blockRange) {
      return `within range by ${(Math.abs(range - blockRange))}`;
    };
  };
}

function produceTipCalculator(percent) {
  return function(total) { return total * percent };
}

function createDriver() {
  let driverId = 0;
  return class {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    }
  };
}
