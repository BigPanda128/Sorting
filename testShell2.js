load("carray.js")
var nums = new CArray(100);
nums.setData();
print("Before Shellsort2: \n");
print(nums.toString());
nums.shellsort2();
print("\nAfter Shellsort2: \n");
print(nums.toString());
