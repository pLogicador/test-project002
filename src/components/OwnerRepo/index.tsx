"use client";

import Image from "next/image";
import { useState } from "react";

interface OwnerRepoProps {
  name: string;
  avatar_url: string;
}

export function OwnerRepo({ avatar_url, name }: OwnerRepoProps) {
  const [show, setShow] = useState(false);

  return (
    <div>
      {show && (
        <>
          <Image
            src={avatar_url}
            alt="User Github Photo"
            width={34}
            height={34}
            style={{ borderRadius: 50 }}
          />

          <strong>{name}</strong>
        </>
      )}

      <button onClick={() => setShow(!show)}>
        {show ? "Hide name" : "Show name"}
      </button>
    </div>
  );
}
