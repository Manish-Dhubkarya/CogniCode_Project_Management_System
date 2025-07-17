// components/VerticalStepper.tsx
import React from "react";

interface ProgressTrackingProps {
  height?: number;
}

const steps = [
  { status: "completed" },
  { status: "completed" },
  { status: "completed" },
  { status: "completed" },
  { status: "completed" },
  { status: "completed" },
  { status: "active" },
  { status: "inactive" },
  { status: "inactive" },
];

const ProgressTracking2: React.FC<ProgressTrackingProps> = ({ height }) => {
  // Calculate the height for each connector
  const stepCount = steps.length;
  const circleHeight = 34; // Height of each step circle (34px)
  const connectorCount = stepCount - 1;
  const connectorHeight = height
    ? (height - stepCount * circleHeight) / connectorCount // Distribute remaining height
    : 55; // Default connector height if no height prop

  return (
    <div
      className="flex flex-col items-center"
      style={{ height: height ? `${height}px` : "auto" }} // Set container height
    >
      {steps.map((step, index) => (
        <div key={index} className="flex flex-col items-center">
          {/* Line before the circle */}
          {index !== 0 && (
            <div
              className="w-px bg-blue-500"
              style={{ height: `${connectorHeight}px` }} // Use inline style for dynamic height
            ></div>
          )}
          {/* Circle */}
          <div
            className={`rounded-full rotate-90 border ${
              step.status === "completed"
                ? "border-[#1B7BFF]"
                : step.status === "active"
                ? "border-[3px] border-[#1B7BFF]"
                : "border-[#1B7BFF] border-[1.5px]"
            } flex items-center justify-center`}
            style={{
              width: "34px",
              height: "34px",
              background:
                step.status === "completed"
                  ? "conic-gradient(from 90deg at 50% 50%, #011B40 0deg, #0348A6 360deg)"
                  : step.status === "active"
                  ? "#1B7BFF"
                  : "#D9D9D9",
              padding: step.status === "active" ? "3px" : "0px",
            }}
          >
            {/* Inner circle for active state */}
            {step.status === "active" && (
              <div className="p-3 border-[3.5px] border-[#104A99] rounded-full">
                <div className="rounded-full w-[14px] h-[14px]" />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProgressTracking2;