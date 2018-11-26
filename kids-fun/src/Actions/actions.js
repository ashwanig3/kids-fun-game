export function storeData(value) {
	return {
		type: 'STORE_DATA',
		value
	}
}

export function onDropElement(value) {
	return {
		type: 'ON_DROP',
		value
	}
}

export function decreaseAttempt() {
	console.log('fired')
	return {
		type : "DECREASE_ATTEMPT"
	}
}
