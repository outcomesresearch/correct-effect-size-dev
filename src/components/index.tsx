// src/components/effectSizes/index.jsx

export const PartPartialCorrelations = () => (
  <div>PartPartialCorrelations (β)</div>
);


export const HazardRatio = () => <div>Hazard Ratio</div>;
export const SurvivalRateDifference = () => <div>Survival rate difference</div>;
export const MedianSurvivalTime = () => <div>Median survival time</div>;
export const RestrictedMeanSurvivalTime = () => (
  <div>Restricted mean survival time</div>
);

export const HarrellCIndex = () => <div>Harrell&apos;s C-index</div>;

export default {
  HazardRatio,
  SurvivalRateDifference,
  MedianSurvivalTime,
  RestrictedMeanSurvivalTime,
  HarrellCIndex,
};
