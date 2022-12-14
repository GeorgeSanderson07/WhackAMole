"use strict"; // do not modify or delete this line


//Task 1
//data is a string, patterns is an array of patterns
function find(data, patterns) {
	let frequencies={};
	let offsets={};

	patterns.forEach(pat => offsets[pat] = (getOffsets(pat, data, [], 0).arr));
	patterns.forEach(pat => frequencies[pat] = getOffsets(pat, data, [], 0).fr);
	console.log(offsets);
	console.log(frequencies);
}

function getOffsets(pattern, data, workingret, freq) {
	if(data.includes(pattern))
	{
		let index = data.indexOf(pattern);
		let newData = data.slice(index+1);
		if(freq!=0)
		{
			workingret[freq] = workingret[freq-1]+index;
		}
		else
		{
			workingret[freq] = index;
		}
		return getOffsets(pattern, newData, workingret, freq+1);
	}
	else
	{
		//stick bits together in proper format and return
		let returnData = {pat: pattern, arr: workingret, fr: freq};
		return returnData;
	}
}

//use these for results of analyse1, analyse2 and analyse3
const results1 = {};
const results2 = {};
const results3 = {};

//Task 2
function analyse1(dataFile, patternFile){
	//your implementation goes here
}

//Task 3

const readFilePromise = (filePath) => {
	//your implementation goes here
}

function analyse2(dataFile, patternFile){
	//your implementation goes here
}

//Task 4 

//your implementation for analyse3 goes here



//-------------------------------------------------------------------------------
//do not modify this function
function print(){
	console.log("Printing results...");
	Object.keys(results).forEach(function(elem){
		console.log("sequence: ", elem);
		console.log("frequencies are: ", results[elem].frequencies);
		console.log("offsets are: ", results[elem].offsets);
		console.log("---------------------------");
	});
}
//--------------- export the find function (required for the marking script)
module.exports ={find}; //do not modify this line

find("‘CCAAATT’", ["AA", "AT", "CCA"]);
