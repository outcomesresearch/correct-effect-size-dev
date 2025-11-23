// @ts-nocheck
import * as ids from "./ids";
import {
  CONTINUOUS_OUTCOME_MEASURE_SHORT_VERSION,
  CONTINUOUS_OUTCOME_MEASURE_LONG_VERSION,
  CATEGORICAL_OUTCOME_MEASURE_SHORT_VERSION,
  CATEGORICAL_OUTCOME_MEASURE_LONG_VERSION,
  TIME_TO_EVENT_OUTCOME_MEASURE_SHORT_VERSION,
  TIME_TO_EVENT_OUTCOME_MEASURE_LONG_VERSION,
} from "./ids";

import continuousStudyTree from "./continuous/tree";
import categoricalStudyTree from "./categorical/tree";
import timeToEventStudyTree from "./timeToEvent/tree";

const addIds = (tree) => {
  return Object.entries(tree).reduce((acc, [key, value]) => {
    acc[key] = { ...value, id: key };
    return acc;
  }, {});
};

const rootTree = {
  [ids.ROOT]: {
    title: ids.OUTCOME_MEASURE_TITLE,
    flowChartTitle:
      "Select the type of outcome variable being analyzed or compared.",
    component: ids.OUTCOME_MEASURE_SELECTION_COMPONENT,
    inputs: [],
    choices: [
      {
        answer: "Continous",
        next: ids.CONTINUOUS,
        option_description: {
          short: CONTINUOUS_OUTCOME_MEASURE_SHORT_VERSION,
          long: CONTINUOUS_OUTCOME_MEASURE_LONG_VERSION,
        },
      },
      {
        answer: "Categorical",
        next: ids.CATEGORICAL,
        option_description: {
          short: CATEGORICAL_OUTCOME_MEASURE_SHORT_VERSION,
          long: CATEGORICAL_OUTCOME_MEASURE_LONG_VERSION,
        },
      },
      {
        answer: "Time to Event",
        next: ids.TIME_TO_EVENT,
        option_description: {
          short: TIME_TO_EVENT_OUTCOME_MEASURE_SHORT_VERSION,
          long: TIME_TO_EVENT_OUTCOME_MEASURE_LONG_VERSION,
        },
      },
    ],
  },
  ...continuousStudyTree,
  ...categoricalStudyTree,
  ...timeToEventStudyTree,
};

export default addIds(rootTree);
