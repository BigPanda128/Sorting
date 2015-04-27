function insertionSort() {
   print("Insertion Sort");
   var temp, inner;
   for (var outer = 1; outer <= this.dataStore.length-1; ++outer) {
      temp = this.dataStore[outer];
      inner = outer;
      while (inner > 0 && (this.dataStore[inner-1] >= temp)) {
	      //print("comparing " + temp + ' and ' + this.dataStore[inner-1]);
         this.dataStore[inner] = this.dataStore[inner-1];
         --inner;
      }
      //print("moving " + temp + " to position " + inner)
      this.dataStore[inner] = temp;
      //print(this.toString());
   }
}
