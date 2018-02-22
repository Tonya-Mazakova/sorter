class Sorter {
  constructor() {
      this.arr = [];
      this.arr2 = [];
      this.indexArr = [];
      this.compare = false;
      this.turn = false;
  }

  add(element) {
      this.arr.push(element);
  }

  at(index) {
      return this.arr[index];

  }
  get length() {
    return this.arr.length;
  }

  toArray() {
      return this.arr;
  }

  sort(indices) {
      for(let i=0; i < indices.length; i++) {
          for (let j = 0; j < indices.length; j++) {
              if (this.arr[indices[j]] > this.arr[indices[j + 1]] & indices[j] < indices[j + 1]){
                  let indexTwo = this.arr[indices[j + 1]];
                  this.arr[indices[j + 1]] = this.arr[indices[j]];
                  this.arr[indices[j]] = indexTwo;
              }
              else if(this.arr[indices[j]] < this.arr[indices[j + 1]] & indices[j] > indices[j + 1]){
                  let indexTwo = this.arr[indices[j]];
                  this.arr[indices[j]] = this.arr[indices[j+1]];
                  this.arr[indices[j+1]] = indexTwo;
              }
          }
      }
      if(this.compare === true){
          for(let i=0; i < indices.length; i++){
              this.arr2.push(this.arr[indices[i]]);
              this.indexArr.push(indices[i]);
          }
          this.setComparator();
          this.turn = true;
      }

  }

  setComparator(compareFunction) {
      if(this.turn){
          this.compare = false;
      }
      else{
          this.compare = true;
      }
      this.turn = false;
      this.compareFunction = compareFunction;
      let arrSort = this.arr2.sort(this.compareFunction);
      this.indexArr.sort();
      for(let i=0; i < this.indexArr.length; i++){
          this.arr.splice(this.indexArr[i], 0, arrSort[i]);
      }
      return this.arr;
  }
}

module.exports = Sorter;