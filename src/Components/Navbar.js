import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      {/* Card */}
      <div>
        <div className="flex place-content-between">
          <div className="flex gap-6 cursor-pointer">
            <p>
              <Link to="/home">/Home</Link>
            </p>
            <p>
              <Link to="/settings">/Settings</Link>
            </p>
            <p>
              <Link to="/info">/Info</Link>
            </p>
          </div>
          {/* Darkmode test */}
          <div className="flex">
            <button>
              hey
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
