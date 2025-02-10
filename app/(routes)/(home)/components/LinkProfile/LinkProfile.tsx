"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export function LinkProfile() {

  const [isCopiedLink, setIsCopiedLink] = useState(false);

  const copyLink = () => {
    const url = `${window.location.origin}/@justcoddevTest`;
    navigator.clipboard.writeText(url);
    setIsCopiedLink(true);
  };

  return (
    <div className="rounded-3xl bg-indigo-100">
      <div className="flex flex-col justify-center text-center py-4 px-4 items-center gap-2 md:flex-row md:justify-between md:text-left">
        <span className="text-sm">
          <span>🔥 Your LinkHub is live:</span>
          {window.location.origin} / @justcoddevTest
        </span>

        <Button
          variant="outline"
          className="rounded-full bg-white font-semibold text-xs md:text-[16px]"
          onClick={copyLink}>
          {isCopiedLink ? "Copied!" : "Copy your Justree URL"}
        </Button>
      </div>
    </div>
  )
}
