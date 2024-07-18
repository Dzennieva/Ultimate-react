import { useState } from "react";
import "./App.css";

function dateCounter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const currDate = new Date();
  currDate.setDate(currDate.getDate() + count);

  // const isToday = count === 0;

  const handleReset = () => {
    setCount(0);
    setStep(1);
  };

  return (
    <article>
      <div>
        <button type="button" onClick={() => setStep((s) => s - 1)}>
          -
        </button>
        <input
          type="range"
          min="-100"
          max="100"
          value={step}
          onChange={(e) => setStep(+e.target.value)}
        />
        <span>Step: {step}</span>
        <button type="button" onClick={() => setStep((s) => s + 1)}>
          +
        </button>
      </div>
      <div>
        <button type="button" onClick={() => setCount((c) => c - step)}>
          -
        </button>
        <span>Count: {count}</span>
        <button type="button" onClick={() => setCount((c) => c + step)}>
          +
        </button>
        <p>
          <span>
            {count === 0
              ? "Today is "
              : count === 1
              ? "Tomorrow will be "
              : count > 1
              ? `In ${count} days, it will be `
              : `${-count} day${count == -1 ? "" : "s"} ago, it was `}
          </span>
          <span>{currDate.toDateString()}</span>
        </p>
      </div>
      <button onClick={handleReset}>Reset</button>
    </article>
  );
}

export default dateCounter;
