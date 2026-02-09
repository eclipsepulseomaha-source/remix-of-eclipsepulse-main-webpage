import { lazy, Suspense } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

const SPLINE_URL = "https://prod.spline.design/animatedsun-uPq1kFZWf9UOnPCq24b09KBv/scene.splinecode";

const SplineBackground = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-60">
      <Suspense fallback={null}>
        <Spline scene={SPLINE_URL} />
      </Suspense>
    </div>
  );
};

export default SplineBackground;
