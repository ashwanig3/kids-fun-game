const initState = { 
	data : []
}

export default (state=initState, action) => {
	switch(action.type) {
		case 'STORE_DATA':
		{
			function randomIndex() {
				return Math.floor(Math.random() * 4);
				
			}

			const keys = Object.keys(action.value);
			
			const objectToBeReturend = {}
			var randomArr = [];
			var valuesArr = [];
			for(const key of keys) {
				valuesArr = action.value[key];
				for(let j = 0; j < 2; j++) {
					randomArr.push(valuesArr[randomIndex()])
				}
				objectToBeReturend[key] = randomArr;
				randomArr = []
			}
			var newArr = [...objectToBeReturend.Fruits, ...objectToBeReturend.Animals, ...objectToBeReturend.Colours, ...objectToBeReturend.Numbers]

			var mappedArr = newArr.map((item,id) => {
				return {
					item,
					id 	 	
				}
			})

			return {
				data: [...state.data, ...mappedArr]
			}

		}
		case 'ON_DROP': {
			const itemsArr = [...state.data];
			itemsArr.splice(action.id, 1);
			return {
				...state,
				data : itemsArr
			}
		}
		
		default: return state;
		
	}
}