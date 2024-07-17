function mincost(arr)
{ 
//write your code here
// return the min cost
  let n = arr.length;
	if(n<2){
		return "array length should be greater than 1";
	}
	let totalSum = 0;
	for(let i=0;i<n-1;i++){
		let firstSmallest = Infinity;
		let secondSmallest = Infinity;
		
		for(let j=0;j<arr.length;j++){
			if(arr[j]<firstSmallest){
				secondSmallest = firstSmallest;
				firstSmallest = arr[j]
			}else if(arr[j]<secondSmallest && arr[j] != firstSmallest){
				secondSmallest = arr[j];
			}
		}
		if(secondSmallest == Infinity){
			return "No second smallest found";
		}
		sum = firstSmallest+secondSmallest;
		totalSum+=sum;
		arr.splice(arr.indexOf(firstSmallest),1,sum);
		arr.splice(arr.indexOf(secondSmallest),1);
	}
	return totalSum
}
inpEle = prompt("Enter elements seperated by space");
inputEle = inpEle.split(" ").map(Number);
result = mincost(inputEle)
alert(result)  


// document.getElementById("min-cost").addEventListener("submit", function(e){
// 	e.preventDefault();
// 	inpEle = document.getElementById("inputElements").value;
// 	inputEle = inpEle.split(" ").map(Number);
// 	res = document.getElementById("result");
// 	res.innerText = mincost(inputEle)
// })

module.exports=mincost;
