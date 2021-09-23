function main() {
	
	let matrix = [[0,0,0],[0,0,0],[0,0,0]]

	console.log(`INITAL MATRIX`)
	for(let i in matrix)
		console.log(matrix[i])

	applyRandomNumbers(matrix)

	console.log(`BEFORE MATRIX`)
	for(let i in matrix)
		console.log(matrix[i])
	
	updateNumbersInSequence(matrix)
	
	console.log(`AFTER MATRIX`)
	for(let i in matrix)
		console.log(matrix[i])
}

function applyRandomNumbers(matrix) {
	let max = 4
	let min = 1
	for(let i in matrix) {
		for(let y in matrix[i]) {
			matrix[i][y] = Math.floor(Math.random() * (max - min) + min)
		}
	}
}

function updateNumbersInSequence(matrix) {
	for(let i in matrix) {
		setNumbersInSequence(matrix[i])
	}
}

function setNumbersInSequence(array) {
	index = []
	count = 0
	for(let i = 0; i < array.length; i++) {
		if(array[i] == array[i+1]) {
			index[count] = i
			index[count+1] = i+1
			count+=2
		}
	}
	for(let i in index)
		array[index[i]] = 0
}

main()