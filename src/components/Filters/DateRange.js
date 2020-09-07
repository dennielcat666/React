/* Календарь с выбором диапазона дат */

import React, { Component } from 'react'
import {connect} from 'react-redux'
import {changeDateRange, clearDateRange} from '../../AC'
import DayPicker, {DateUtils} from "react-day-picker"

import "react-day-picker/lib/style.css"

class DateRange extends Component {
	/* в редусере */
	/* state = {
		from: null,
		to: null
	} */

	handleDayClick = (day) => {
		const { changeDateRange, range } = this.props
		changeDateRange(DateUtils.addDayToRange(day, range))
		/* this.setState(DateUtils.addDayToRange(day, this.state)) */
		console.log("DateUtils.addDayToRange(day, range)", DateUtils.addDayToRange(day, range));
	}

	render() {
		const { from, to } = this.props.range;
		const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
		return (
			<div className="date-range">
				<DayPicker
					ref="daypicker"
					selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
					onDayClick={ this.handleDayClick }
				/>
				{selectedRange}
				<button onClick={this.handleClean}>Clean</button>
			</div>
		)
	}

	/* handleClean = () => {
		this.setState({
			from: null,
			to: null
		})
	} */

	handleClean = () => {
		const { clearDateRange } = this.props
		clearDateRange()

	}
}

export default connect(state => ({
	range: state.filters.dateRange,
	clearRange: state.filters.dateRange
}), { changeDateRange, clearDateRange })(DateRange)