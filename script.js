function firstNonRepeatedChar(str) {
	let newMap=new Map()
	for(let char of str){
		newMap.set(char,(newMap.get(char) || 0)+1)
	}

	for (let [key,value] of newMap){
		if(value==1){
			return key
		}
	}
	return null
 // Write your code here
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 

