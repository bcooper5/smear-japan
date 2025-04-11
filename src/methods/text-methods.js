// src/methods/text-methods.js
export function initialCaps(inputString) {
    if (typeof inputString !== 'string' || inputString.length === 0) {
      return inputString; // Return unchanged for invalid inputs
    }
    return inputString.slice(0, 1).toUpperCase() + inputString.slice(1);
  }