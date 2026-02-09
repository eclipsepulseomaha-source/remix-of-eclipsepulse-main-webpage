import { lazy, Suspense } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

const SPLINE_URL = "https://my.spline.design/animatedsun-uPq1kFZWf9UOnPCq24b09KBv/";

interface SplineBackgroundProps {
  className?: string;
}

const SplineBackground = ({ className = "" }: SplineBackgroundProps) => {
  return (
    <div className={`absolute inset-0 z-0 pointer-events-none overflow-hidden ${className}`}>
      <Suspense fallback={null}>
        <Spline scene={SPLINE_URL} className="w-full h-full" />
      </Suspense>
    </div>
  );
};

export default SplineBackground;
