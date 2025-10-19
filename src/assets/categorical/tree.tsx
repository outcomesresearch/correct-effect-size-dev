// src/trees/categorical.tsx
import {
  // --- effect size components (provide these in ../../components) ---
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
} from "../../components";

import { TreeNode } from "../types";
import * as ids from "./ids";
import * as descriptions from "./descriptions";
import {
  CATEGORICAL,
  FOCUS_OF_ANALYSIS_SELECTION_COMPONENT,
  FOCUS_OF_ANALYSIS_TITLE,
  EFFECT_SIZE_SELECTION_COMPONENT,
  EFFECT_SIZE_SELECTION_TITLE,
  ROOT,
} from "../ids";
import { Text } from "@mantine/core";

const tree: Record<string, TreeNode> = {
  // Root question for the categorical branch
  [CATEGORICAL]: {
    type: "question",
    title: FOCUS_OF_ANALYSIS_TITLE,
    component: FOCUS_OF_ANALYSIS_SELECTION_COMPONENT,
    inputs: [ROOT],
    choices: [
      {
        answer: "Correlation with continuous measure",
        // Only one measure applies (Point biserial) → go directly to its statement
        next: ids.POINT_BISERIAL,
        option_description:
          "Assess the association between a binary categorical variable and a continuous variable.",
      },
      {
        answer: "Comparison of 2 groups",
        // Multiple measures → go to a selection screen
        next: ids.TWO_GROUPS_EFFECT_SIZES,
        option_description:
          "Compare outcome between two categorical groups using effect size metrics.",
      },
      {
        answer: "Comparison of 3 or more groups",
        // Needs a split between pairwise vs overall → question node
        next: ids.COMPARISON_OF_THREEMORE_GROUPS,
        option_description:
          "Compare outcomes across three or more groups — either pairwise or via overall association.",
      },
      {
        answer: "Regression model",
        // Leads to another question (adjusted association vs overall model fit)
        next: ids.REGRESSION_MODEL,
        option_description:
          "Model a categorical DV or include categorical predictors; report adjusted associations or overall model fit.",
      },
    ],
  },

  // ---------------- CORRELATION WITH CONTINUOUS MEASURE (single measure) ----------------
  [ids.POINT_BISERIAL]: {
    type: "statement",
    title: "Point Bi-serial correlation",
    flowChartTitle: "Point Bi-serial",
    component: PointBiSerialCorrelation,
    color: "teal-darken-2",
    inputs: [CATEGORICAL],
  },

  // ---------------- COMPARISON OF TWO GROUPS (multiple measures) ----------------
  [ids.TWO_GROUPS_EFFECT_SIZES]: {
    type: "question",
    title: EFFECT_SIZE_SELECTION_TITLE,
    component: EFFECT_SIZE_SELECTION_COMPONENT,
    inputs: [CATEGORICAL],
    choices: [
      {
        answer: "Odds Ratio (OR)",
        next: ids.ODDS_RATIO,
        option_description: descriptions.ODDS_RATIO_DESCRIPTION,
      },
      {
        answer: "Risk Ratio (RR)",
        next: ids.RISK_RATIO,
        option_description: descriptions.RISK_RATIO_DESCRIPTION,
      },
      {
        answer: "Risk Difference",
        next: ids.RISK_DIFFERENCE,
        option_description: descriptions.RISK_DIFFERENCE_DESCRIPTION,
      },
      {
        answer: "Phi coefficient (ɸ)",
        next: ids.PHI_COEFFICIENT,
        option_description: descriptions.PHI_DESCRIPTION,
      },
    ],
  },
  [ids.ODDS_RATIO]: {
    type: "statement",
    title: "Odds Ratio (OR)",
    flowChartTitle: "Odds Ratio",
    component: OddsRatio,
    color: "indigo-darken-2",
    inputs: [ids.TWO_GROUPS_EFFECT_SIZES],
  },
  [ids.RISK_RATIO]: {
    type: "statement",
    title: "Risk Ratio (RR)",
    flowChartTitle: "Risk Ratio",
    component: RiskRatio,
    color: "indigo-darken-2",
    inputs: [ids.TWO_GROUPS_EFFECT_SIZES],
  },
  [ids.RISK_DIFFERENCE]: {
    type: "statement",
    title: "Risk Difference",
    flowChartTitle: "Risk Difference",
    component: RiskDifference,
    color: "indigo-darken-2",
    inputs: [ids.TWO_GROUPS_EFFECT_SIZES],
  },
  [ids.PHI_COEFFICIENT]: {
    type: "statement",
    title: "Phi coefficient (ɸ)",
    flowChartTitle: "Phi (ɸ)",
    component: PhiCoefficient,
    color: "indigo-darken-2",
    inputs: [ids.TWO_GROUPS_EFFECT_SIZES],
  },

  // ---------------- COMPARISON OF THREE OR MORE GROUPS ----------------
  [ids.COMPARISON_OF_THREEMORE_GROUPS]: {
    type: "question",
    title: "Comparison of 3 or more groups",
    component: () => (
      <Text c="dimmed" size="md">
        For 3+ groups, you may report pairwise differences or an overall
        association.
      </Text>
    ),
    inputs: [CATEGORICAL],
    choices: [
      {
        answer: "Reporting pairwise differences",
        next: ids.PAIRWISE_EFFECT_SIZES,
      },
      { answer: "Reporting overall effect", next: ids.OVERALL_EFFECT_SIZES },
    ],
  },

  // Pairwise: reuse the 2-group set (multiple measures → selection)
  [ids.PAIRWISE_EFFECT_SIZES]: {
    type: "question",
    title: EFFECT_SIZE_SELECTION_TITLE,
    component: EFFECT_SIZE_SELECTION_COMPONENT,
    inputs: [ids.COMPARISON_OF_THREEMORE_GROUPS],
    choices: [
      {
        answer: "Odds Ratio (OR)",
        next: ids.ODDS_RATIO,
        option_description: descriptions.ODDS_RATIO_DESCRIPTION,
      },
      {
        answer: "Risk Ratio (RR)",
        next: ids.RISK_RATIO,
        option_description: descriptions.ODDS_RATIO_DESCRIPTION,
      },
      {
        answer: "Risk Difference",
        next: ids.RISK_DIFFERENCE,
        option_description: descriptions.RISK_DIFFERENCE_DESCRIPTION,
      },
      {
        answer: "Phi coefficient (ɸ)",
        next: ids.PHI_COEFFICIENT,
        option_description: descriptions.PHI_DESCRIPTION,
      },
    ],
  },

  // Overall effect for 3+ groups: nominal & ordinal measures (multiple → selection)
  [ids.OVERALL_EFFECT_SIZES]: {
    type: "question",
    title: EFFECT_SIZE_SELECTION_TITLE,
    component: EFFECT_SIZE_SELECTION_COMPONENT,
    inputs: [ids.COMPARISON_OF_THREEMORE_GROUPS],
    choices: [
      {
        answer: "Cramer's V",
        next: ids.CRAMERS_V,
        option_description: descriptions.CRAMERS_V_DESCRIPTION,
      },
      {
        answer: "Goodman–Kruskal λ",
        next: ids.GOODMAN_KRUSKAL_LAMBDA,
        option_description: descriptions.GOODMAN_KRUSKAL_LAMBDA_DESCRIPTION,
      },
      {
        answer: "Cliff's Δ",
        next: ids.CLIFFS_DELTA,
        option_description: descriptions.CLIFFS_DELTA_DESCRIPTION,
      },
      {
        answer: "Kendall's τ",
        next: ids.KENDALLS_TAU,
        option_description: descriptions.KENDALLS_TAU_DESCRIPTION,
      },
    ],
  },
  [ids.CRAMERS_V]: {
    type: "statement",
    title: "Cramer's V",
    flowChartTitle: "Cramer's V",
    component: CramersV,
    color: "orange-darken-2",
    inputs: [ids.OVERALL_EFFECT_SIZES],
  },
  [ids.GOODMAN_KRUSKAL_LAMBDA]: {
    type: "statement",
    title: "Goodman–Kruskal λ",
    flowChartTitle: "GK λ",
    component: GoodmanKruskalLambda,
    color: "orange-darken-2",
    inputs: [ids.OVERALL_EFFECT_SIZES],
  },
  [ids.CLIFFS_DELTA]: {
    type: "statement",
    title: "Cliff's Δ",
    flowChartTitle: "Cliff's Δ",
    component: CliffsDelta,
    color: "orange-darken-2",
    inputs: [ids.OVERALL_EFFECT_SIZES],
  },
  [ids.KENDALLS_TAU]: {
    type: "statement",
    title: "Kendall's τ",
    flowChartTitle: "Kendall's τ",
    component: KendallsTau,
    color: "orange-darken-2",
    inputs: [ids.OVERALL_EFFECT_SIZES],
  },

  // ---------------- REGRESSION MODEL ----------------
  [ids.REGRESSION_MODEL]: {
    type: "question",
    title: "Regression model",
    component: () => (
      <Text c="dimmed" size="md">
        Report adjusted associations for predictors or overall model
        fit/quality.
      </Text>
    ),
    inputs: [CATEGORICAL],
    choices: [
      {
        answer: "Adjusted association with predictor",
        next: ids.ADJUSTED_ASSOCIATION_EFFECT_SIZES,
      },
      { answer: "Overall model", next: ids.REGRESSION_OVERALL_EFFECT_SIZES },
    ],
  },

  // Adjusted association (multiple → selection)
  [ids.ADJUSTED_ASSOCIATION_EFFECT_SIZES]: {
    type: "question",
    title: EFFECT_SIZE_SELECTION_TITLE,
    component: EFFECT_SIZE_SELECTION_COMPONENT,
    inputs: [ids.REGRESSION_MODEL],
    choices: [
      {
        answer: "Odds Ratio (OR)",
        next: ids.ODDS_RATIO,
        option_description: descriptions.ODDS_RATIO_DESCRIPTION,
      },
      {
        answer: "Risk Ratio (RR)",
        next: ids.RISK_RATIO,
        option_description: descriptions.RISK_RATIO_DESCRIPTION,
      },
    ],
  },

  // Overall model (multiple → selection)
  [ids.REGRESSION_OVERALL_EFFECT_SIZES]: {
    type: "question",
    title: EFFECT_SIZE_SELECTION_TITLE,
    component: EFFECT_SIZE_SELECTION_COMPONENT,
    inputs: [ids.REGRESSION_MODEL],
    choices: [
      {
        answer: "Pseudo R²",
        next: ids.PSEUDO_R2,
        option_description: descriptions.PSEUDO_R2_DESCRIPTION,
      },
      {
        answer: "C-Statistic",
        next: ids.C_STATISTIC,
        option_description: descriptions.C_STATISTIC_DESCRIPTION,
      },
      {
        answer: "Percent correctly classified",
        next: ids.PERCENT_CORRECTLY_CLASSIFIED,
        option_description:
          descriptions.PERCENT_CORRECTLY_CLASSIFIED_DESCRIPTION,
      },
    ],
  },
  [ids.PSEUDO_R2]: {
    type: "statement",
    title: "Pseudo R²",
    flowChartTitle: "Pseudo R²",
    component: PseudoRSquared,
    color: "purple-darken-2",
    inputs: [ids.REGRESSION_OVERALL_EFFECT_SIZES],
  },
  [ids.C_STATISTIC]: {
    type: "statement",
    title: "C-Statistic",
    flowChartTitle: "C-Statistic",
    component: CStatistic,
    color: "purple-darken-2",
    inputs: [ids.REGRESSION_OVERALL_EFFECT_SIZES],
  },
  [ids.PERCENT_CORRECTLY_CLASSIFIED]: {
    type: "statement",
    title: "Percent correctly classified",
    flowChartTitle: "% Correctly Classified",
    component: PercentCorrectlyClassified,
    color: "purple-darken-2",
    inputs: [ids.REGRESSION_OVERALL_EFFECT_SIZES],
  },
};

export default tree;
