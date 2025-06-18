import { ZapIcon } from "lucide-react";
import React from "react";

const RateLimitUI = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <div className="bg-green-900/80 border border-green-700 text-white rounded-lg shadow-md">
        <div className="flex items-center gap-4 p-6">
          <div className="bg-green-700/50 p-4 rounded-full">
            <ZapIcon className="size-10 text-green-300" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Rate Limit Reached</h3>
            <p className="text-sm text-green-100">
              You've made too many requests in a short period. Please wait a moment.
            </p>
            <p className="text-xs text-green-200 mt-1">
              Try again in a few seconds for the best experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RateLimitUI;
