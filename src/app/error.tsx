"use client";

import Link from "next/link";
import { useEffect } from "react";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <>
      <h2>Error Page</h2>
      <div>
        <Link href="/">Return to Home Page</Link>
      </div>
    </>
  );
};

export default Error;
