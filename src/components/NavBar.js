import React from "react";
import { Link } from "react-router-dom";
import { SiNasa } from "react-icons/si";

export default function NavBar() {
  return (
    <>
      <header className="absolute top-0 left-0 right-0 flex items-center justify-center px-5">
        <div>
          <Link to="/home">
            <SiNasa className="text-8xl text-white" data-testid="nasa-logo" />{" "}
            {/* Add data-testid */}
          </Link>
        </div>
      </header>
    </>
  );
}
