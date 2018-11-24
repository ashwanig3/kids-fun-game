export function storeData(value) {
	return {
		type: 'STORE_DATA',
		value
	}
}

export function onDropElement(id) {
	return {
		type: 'ON_DROP',
		id
	}
}