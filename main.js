var current_str = ""
var solution = ""
var numList = ["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"]

//from the first integer given from the arguments
for (var i = 2; i< process.argv.length;i ++)  {
  var current_num = process.argv[i]
  
  while (current_num > 0)  {
    var mod = current_num % 10;
    current_str = numList[mod] + current_str 
    current_num = Math.floor(current_num/10);
  }
  
  //adding to the output
  solution += current_str
  if (i != process.argv.length - 1) {
    solution += ","
  }
  
  //resetting for next number
  current_str = ""
}

console.log(solution)