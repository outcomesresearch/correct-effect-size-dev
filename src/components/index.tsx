// src/components/effectSizes/index.jsx
export const PearsonCorrelationCoefficientR = () => (
  <div>Pearson Correlation Coefficient (r)</div>
);
export const SpearmansRho = () => <div>Spearman’s Rho (ρ)</div>;
export const CoefficientOfDeterminationR2 = () => (
  <div>Coefficient of Determination (R²)</div>
);
export const MeanDifference = () => <div>Mean Difference</div>;
export const MedianDifference = () => <div>Median Difference</div>;
export const CohensD = () => <div>Cohen’s d</div>;
export const GlassDelta = () => <div>Glass’s Δ</div>;
export const HedgesG = () => <div>Hedges’ g</div>;
export const RNonParametric = () => <div>r (Nonparametric)</div>;
export const EtaSquared = () => <div>Eta Squared (η²)</div>;
export const OmegaSquared = () => <div>Omega Squared (ω²)</div>;
export const BetaCoefficient = () => <div>Beta Coefficient (β)</div>;
export const RSquared = () => <div>R Squared (R²)</div>;
export const AdjustedRSquared = () => <div>Adjusted R Squared (Adj. R²)</div>;

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

export default {
  PearsonCorrelationCoefficientR,
  SpearmansRho,
  CoefficientOfDeterminationR2,
  MeanDifference,
  MedianDifference,
  CohensD,
  GlassDelta,
  HedgesG,
  RNonParametric,
  EtaSquared,
  OmegaSquared,
  BetaCoefficient,
  RSquared,
  AdjustedRSquared,
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
};
