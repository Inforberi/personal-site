"use client";

export const isTouchDevice = () => {
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    (navigator as any).msMaxTouchPoints > 0
  );
};

export const isLowPowerMode = (batteryState: any) => {
  return (
    batteryState.isSupported &&
    batteryState.fetched &&
    batteryState.level * 100 <= 20
  );
};
