var arr = [];
for(let i=0;i<10;i++){
	let val = parseInt(Math.random()*20);
	arr.push(val);
}
// 冒泡排序
function maopao(val){
    let obj = JSON.parse(JSON.stringify(val));
	obj = obj.sort((a,b)=>{ return b-a })
	console.log(obj);
}

// maopao(arr);
// 最基础的冒泡法
function mymaopao(val){
    let arr = JSON.parse(JSON.stringify(val));
	let minVal = 0;
	let length = arr.length;
	let index = 0;
	for(let i=0;i<length;i++){
		for(let j=i+1;j<length;j++){
			index++;
			if(arr[i]>arr[j]){
				minVal = arr[i];
				arr[i] = arr[j];
				arr[j] = minVal;
			}
		}
	}
	console.log(arr, index);
}
console.log(arr);

// mymaopao( arr );
// 归并排序
var merges = {
	data(){
		return {
			arr: merges.dataFun(),
		}
	},
	dataFun(){
		var arr = [];
		for(let i=0;i<10;i++){
			let val = parseInt(Math.random()*20);
			arr.push(val);
		}
		console.log(arr,"merge--arr");
		return arr;
	},
	mergeSort(arr){
		if(arr.length == 1){
			return arr;
		}
		let leftLength = Math.floor(arr.length/2);
		let leftArr = arr.slice(0, leftLength);
		let rightArr = arr.slice(leftLength);
		return this.merge( this.mergeSort(leftArr), this.mergeSort(rightArr) );
	},
	merge(leftArr, rightArr){
		let result = [];
		while(rightArr.length && leftArr.length){
			if(leftArr[0] < rightArr[0]){
				result.push( leftArr.shift() );
			} else {
				result.push( rightArr.shift() );
			}
		}
		return result.concat(leftArr).concat(rightArr);
	},
	parseObj(val){
		return JSON.parse(JSON.stringify(val))
	}
}
var sortVal = merges.mergeSort( merges.parseObj(merges.data().arr) );
console.log(sortVal);
