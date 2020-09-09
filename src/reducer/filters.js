import { CHANGE_DATE_RANGE, CHANGE_SELECTION, DELETE_ARTICLE, CLEAR_DATE_RANGE } from '../constants'

const defaultFilters = {
	selected: [],
	dateRange: {
		from: null,
		to: null
	}
}

export default (filters = defaultFilters, action) => {
	const { type, payload } = action
	console.log("type", type);
	console.log("payload", payload);

	switch (type) {
		case CHANGE_DATE_RANGE:
			/* return Object.assign({}, filters, { dateRange: payload.dateRange}) 		то же что и внизу, только по старому стандарту*/ 
			return {...filters, dateRange: payload.dateRange}


			/* для отдельного экшена */
		/* case CLEAR_DATE_RANGE:
			return {...filters, dateRange: defaultFilters.dateRange} */

		case CHANGE_SELECTION:
			return {...filters, selected: payload.selected}

		case DELETE_ARTICLE:
			return {...filters, selected: filters.selected.filter(id => id !== payload.id)}
	}

	return filters
}