import React, { useState } from "react";
import { useRef } from "react";

export default function CustomuseMemo(cb, deps) {
  const memoized = useRef(null);

  if (!memoized.current || !areEqual(memoized.current.deps, deps)) {
    memoized.current = {
      value: cb(),
      deps,
    };
  }
  function areEqual(currentDeps, newDeps) {
    if (currentDeps === null) return false;
    if (currentDeps.length !== newDeps.length) return false;
    for (let i = 0; i < currentDeps.length; i++) {
      if (currentDeps[i] !== newDeps[i]) {
        return false;
      }
    }
    return true;
  }

  return memoized.current.value;
}
