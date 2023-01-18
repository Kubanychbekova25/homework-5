import "../Chart/chartBar.css";

export const ChartBar = ({ maximumPrice, currentPrice, label }) => {
  const fillHeight = (100*currentPrice) / maximumPrice;
  console.log(fillHeight);

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: `${fillHeight}%` }}
        ></div>
      </div>
      <p className="chart-bar__label">{label}</p>
    </div>
  );
};
