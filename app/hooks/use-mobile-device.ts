"use client";

import { useState } from "react";

function checkIfMobile() {
  if (typeof navigator === "undefined") {
    return true;
  }

  const maxTouchPoints = navigator.maxTouchPoints || 0;
  const isMultiTouch = maxTouchPoints > 2;
  const isMobileUserAgent =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent,
    );
  const isMobilePlatform = /Android|iPhone|iPad|iPod/i.test(
    navigator.platform,
  );
  const isMacUserAgent = /Macintosh/i.test(navigator.userAgent);
  const isIpadPro = isMacUserAgent && isMultiTouch;

  return isMobileUserAgent || isMobilePlatform || isIpadPro;
}

export default function useMobileDevice() {
  const [isMobileDevice] = useState(checkIfMobile);

  return isMobileDevice;
}
