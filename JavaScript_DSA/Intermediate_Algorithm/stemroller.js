function steamrollArray(arr) {
    const flatten=(arr) => {
        const flat = [];
        const handleFlat = (array) => {
          let counter = 0
          while (counter < array.length) {
            const val = array[counter];
            if (Array.isArray(val)) {
              handleFlat(val);
            } else {
              flat.push(val)
            }
            counter++;
          }
        }
        handleFlat(arr);
        return flat;
    }
    return flatten(arr);
}
console.log(steamrollArray([1, [2], [3, [[4]]]]));