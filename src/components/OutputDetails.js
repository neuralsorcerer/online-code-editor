import React from "react";

const OutputDetails = ({ outputDetails }) => {
  return (
    <div className="metrics-container mt-4 flex flex-col space-y-3">
      <p className="text-sm text-white">
        Status:{" "}
        <span className="font-semibold px-2 py-1 rounded-md bg-gray-100 text-black">
          {outputDetails?.status?.description}
        </span>
      </p>
      <p className="text-sm text-white">
        Memory:{" "}
        <span className="font-semibold px-2 py-1 rounded-md bg-gray-100 text-black">
          {outputDetails?.memory}
        </span>
      </p>
      <p className="text-sm text-white">
        Time:{" "}
        <span className="font-semibold px-2 py-1 rounded-md bg-gray-100 text-black">
          {outputDetails?.time}
        </span>
      </p>
    </div>
  );
};

export default OutputDetails;
