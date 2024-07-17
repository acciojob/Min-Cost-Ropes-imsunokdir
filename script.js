function mincost(arr) {
    arr.sort((a, b) => a - b);

    let totalSum = 0;
    while (arr.length > 1) {
        let firstSmallest = arr.shift();
        let secondSmallest = arr.shift();

        let sum = firstSmallest + secondSmallest;
        totalSum += sum;
        let index = 0;
        while (index < arr.length && arr[index] <= sum) {
            index++;
        }
        arr.splice(index, 0, sum);
    }
    return totalSum;
}

// document.getElementById("min-cost").addEventListener("submit", function (e) {
//     e.preventDefault();
//     let inps = document.getElementById("inputElements").value;
//     let inpE = inps.split(" ").map(Number);
//     document.getElementById("result").innerHTML = mincost(inpE);
// });
module.exports = mincost