// src/components/effectSizes/index.jsx

export const PartPartialCorrelations = () => (
  <div>PartPartialCorrelations (β)</div>
);

// --- Correlation with continuous ---
export const PointBiSerialCorrelation = () => (
  <div>Point Bi-serial correlation</div>
);

// --- Two groups ---
export const OddsRatio = () => <div>Odds Ratio (OR)</div>;
export const RiskRatio = () => <div>Risk Ratio (RR)</div>;
export const RiskDifference = () => <div>Risk Difference</div>;
export const PhiCoefficient = () => <div>Phi coefficient (ɸ)</div>;

// --- Three or more groups (overall effects) ---
export const CramersV = () => <div>Cramer's V</div>;
export const GoodmanKruskalLambda = () => <div>Goodman–Kruskal λ</div>;
export const CliffsDelta = () => <div>Cliff's Δ</div>;
export const KendallsTau = () => <div>Kendall's τ</div>;

// --- Regression ---
export const PseudoRSquared = () => <div>Pseudo R²</div>;
export const CStatistic = () => <div>C-Statistic</div>;
export const PercentCorrectlyClassified = () => (
  <div>Percent correctly classified</div>
);

export const HazardRatio = () => <div>Hazard Ratio</div>;
export const SurvivalRateDifference = () => <div>Survival rate difference</div>;
export const MedianSurvivalTime = () => <div>Median survival time</div>;
export const RestrictedMeanSurvivalTime = () => (
  <div>Restricted mean survival time</div>
);

export const HarrellCIndex = () => <div>Harrell&apos;s C-index</div>;

export default {
  PointBiSerialCorrelation,
  OddsRatio,
  RiskRatio,
  RiskDifference,
  PhiCoefficient,
  CramersV,
  GoodmanKruskalLambda,
  CliffsDelta,
  KendallsTau,
  PseudoRSquared,
  CStatistic,
  PercentCorrectlyClassified,
  HazardRatio,
  SurvivalRateDifference,
  MedianSurvivalTime,
  RestrictedMeanSurvivalTime,
  HarrellCIndex,
};
