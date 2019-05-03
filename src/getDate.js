export function returnWeekDay(index = 0) {
    const weekDays = ['Niedziela','Poniedziałek','Wtorek','Środa', 'Czwartek','Piątek','Sobota'];
    let today = weekDays[(new Date().getDay() + index) % weekDays.length];
	return today;
}