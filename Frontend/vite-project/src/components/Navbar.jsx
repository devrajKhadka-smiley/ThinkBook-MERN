import React from "react";
import { Link } from "react-router-dom";
import { GitPullRequestCreate } from "lucide-react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-base-300 border-b border-base-content/10  shadow-[0_4px_8px_0_rgba(0,255,157,0.3)]">
      <div className="mx-auto max-w-6xl p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-primary font-mono tracking-tight">
            ThinkBoard
          </h1>
          <div className="flex items-center gap-4">
            <Link to={"/create"} className="btn btn-primary">
              <GitPullRequestCreate className="size-5" />
              <span>New Note</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
