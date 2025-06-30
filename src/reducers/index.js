const initState = { 
	data : [], 
	attemptsLeft : 3,
	dropObj: {
		animals :[],
		colours : [],
		fruits : [],
		numbers : []
	},
	correctAns: 0
};

export default (state=initState, action) => {
	switch(action.type) {
	case 'STORE_DATA':
	{

		const keys = Object.keys(action.value);
			
		function shuffleArray(array) {
			for (let i = array.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1));
				[array[i], array[j]] = [array[j], array[i]];
			}
			return array;
		}

		const objectToBeReturend = {};
		var valuesArr = [];
		for(const key of keys) {
			valuesArr = action.value[key];
			var firstThree = [];
			for(let i = 0; i < 3; i++) {
				firstThree.push(valuesArr[i]);
			}
				
			objectToBeReturend[key] = firstThree;
		}
		var newArr = [...objectToBeReturend.Fruits, ...objectToBeReturend.Animals, ...objectToBeReturend.Colours, ...objectToBeReturend.Numbers];


		const randomArr = shuffleArray(newArr);

		var mappedArr = randomArr.map((item,id) => {
			return {
				...item,	
				id
			};
		});

		return {
			data: mappedArr,
			attemptsLeft : 3,
			dropObj : {animals :[],
				colours : [],
				fruits : [],
				numbers : []
			},
			correctAns: null 
		};

	}
	case 'ON_DROP': {
		const itemsArr = [...state.data];

		let valuesArr = [];
		for(const item of itemsArr) {
			valuesArr.push(item.value);
		}

		const index = valuesArr.indexOf(action.value);

		const item = itemsArr[index];

		const droppedObject = {...state.dropObj};

		let insertedArray = [...droppedObject[item.type], item];

		droppedObject[item.type] = insertedArray;
		let scoreArr = 	[
			...state.dropObj.animals,
			...state.dropObj.fruits,
			...state.dropObj.numbers,
			...state.dropObj.colours
		];
			
		let scoreCount = (scoreArr.length + 1) * 10;
			
	

		let dropElement = itemsArr.splice(index, 1);

		return {
			...state,
			data : itemsArr,
			dropObj : droppedObject,
			correctAns: scoreCount
		};
	}
	case 'DECREASE_ATTEMPT': {
		return {
			...state,
			attemptsLeft : --state.attemptsLeft
		};
	}
		
	default: return state;
		
	}
};