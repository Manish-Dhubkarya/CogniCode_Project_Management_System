// components/HorizontalStepper.tsx
import React from "react";

interface ProgressTrackingProps {
  width?: number;
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

const ProgressTracking2: React.FC<ProgressTrackingProps> = ({ width }) => {
  return (
    <div
      className="flex items-center justify-start"
      style={{ width: width ? `${width}px` : "auto" }}
    >
      {steps.map((step, index) => (
        <div key={index} className="flex items-center">
          {/* Circle */}
          <div
            className={`rounded-full border rotate-90 ${
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

          {/* Line after the circle */}
          {index !== steps.length - 1 && (
            <div className="h-px bg-blue-500" style={{ width: "40px" }}></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProgressTracking2;
