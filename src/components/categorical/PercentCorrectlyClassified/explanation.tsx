import { Text, List, Stack } from "@mantine/core";
import ExplanationTabsLayout from "../../layout/TabsLayout";

export default function PercentCorrectlyClassifiedTabs() {
  const explanationSections = [
    <Stack gap={4}>
      <Text>
        Percent correctly classified is a statistic used to quantify the accuracy
        of classification models. Specifically, it measures the proportion of
        observations that are accurately predicted by the model. It is
        particularly useful for evaluating the performance of models in
        categorical outcome scenarios, such as binary or multinomial classification
        tasks.
      </Text>
    </Stack>,
    <Stack gap={6}>
      <Stack gap={0}>
        <Text fw={500}>Range of percent correctly classified</Text>
        <Text>
          Percent correctly classified values range from 0% to 100%. The
          interpretation revolves around the model&apos;s ability to predict the
          correct categories:
        </Text>
      </Stack>
      <List spacing={2}>
        <List.Item>
          <Text>
            <Text span fw={500}>Closer to 100%:</Text> This indicates a high level
            of accuracy, with a larger proportion of observations correctly
            classified by the model.
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <Text span fw={500}>Around 50% (for binary classification):</Text>{" "}
            This implies that the model performs no better than random guessing.
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <Text span fw={500}>Closer to 0%:</Text> This suggests a low level of
            accuracy, with a larger proportion of observations misclassified by the
            model.
          </Text>
        </List.Item>
      </List>
    </Stack>,
    <Stack gap={6}>
      <Stack gap={0}>
        <Text fw={500}>Interpretation of percent correctly classified</Text>
        <Text>
          The interpretation of the percent correctly classified between variables
          is as follows:
        </Text>
      </Stack>
      <List spacing={2}>
        <List.Item>
          <Text>
            <Text span fw={500}>&lt;60%:</Text> Very low percent correctly
            classified. The model&apos;s predictive accuracy is minimal, and its
            ability implies near-random performance.
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <Text span fw={500}>60% to 69%:</Text> Low percent correctly
            classified. The model&apos;s predictive accuracy is limited, and its
            performance may not be reliable or satisfactory.
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <Text span fw={500}>70% to 89%:</Text> Moderate percent correctly
            classified. The model demonstrates reasonable predictive accuracy, but
            there is room for improvement.
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <Text span fw={500}>&gt;90%:</Text> High percent correctly classified.
            The model has a strong ability to accurately classify cases, thus
            indicating good predictive performance.
          </Text>
        </List.Item>
      </List>
    </Stack>,
  ];

  return (
    <ExplanationTabsLayout
      explanationSections={explanationSections}
      example1={
        <Text>
          Example 1 content will go here (e.g., a scatterplot, numerical example,
          or walkthrough).
        </Text>
      }
    />
  );
}

