import './gauge.css';

const Gauge = () => {

    return (
        <div className="gauge-body">
            <div className="gauge-fill"></div>
            <div className="gauge-arc">
                <div className="percentage">nn%</div>
            </div>
        </div>
    );
};

export default Gauge;