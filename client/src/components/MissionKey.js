import React from "react";

export default function MissionKey() {
  return (
    <div className="my-3">
      <p>
        <span className="px-3 mr-10 bg-success" /> = Success
      </p>
      <p>
        <span className="px-3 mr-10 bg-danger" /> = Failed
      </p>
    </div>
  );
}
