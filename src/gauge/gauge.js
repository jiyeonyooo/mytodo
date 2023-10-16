import './gauge.css';

const Gauge = ({ todos }) => {
    let percentage;
    if (todos.length === 0) percentage = 0;
    else {
        const achieveTodos = todos.filter((state) => {
            return state.checked === true;
        })
        console.log(achieveTodos);
        percentage = achieveTodos.length / todos.length * 100;
    }
    const roundPercentage = Math.round(percentage);
    console.log(roundPercentage);
    const rotateDeg = Math.round(percentage / 100 * 180);

    return (
        <div className="gauge-body">
            <div className="gauge-fill"
                style={{ transform: `rotate(${rotateDeg}deg)` }}></div>
            <div className="gauge-arc">
                <div className="percentage">{roundPercentage}%</div>
            </div>
        </div>
    );
};

export default Gauge;