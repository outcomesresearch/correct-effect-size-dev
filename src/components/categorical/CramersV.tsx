import { Text, List, Stack } from "@mantine/core";
import ExplanationTabsLayout from "../TabsLayout";

export default function CramersVTabs() {
  const explanationSections = [
    <Stack gap={4}>
      <Text>
        Cramér&apos;s V is a statistical measure used as an effect size for
        categorical data, particularly in the context of analyzing the strength
        and association between two categorical variables. Derived from the
        chi-square statistical test, Cramér&apos;s V provides a standardized
        measure of the degree of association between the categorical variables.
        Cramér&apos;s V values range from 0 to 1. A larger value of Cramér&apos;s
        V indicates a stronger association between the categorical variables.
      </Text>
    </Stack>,
    <Stack gap={6}>
      <Stack gap={0}>
        <Text fw={500}>Range of Cramér&apos;s V</Text>
        <Text>
          Cramér&apos;s V values can range from 0 to 1:
        </Text>
      </Stack>
      <List spacing={2}>
        <List.Item>
          <Text>
            <Text span fw={500}>Closer to 1:</Text> This indicates a strong
            association between the two variables, which implies that knowing the
            category of one variable can predict the category of the other
            variable with high accuracy.
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <Text span fw={500}>Close to 0:</Text> This suggests that there is
            little to no association between the two variables, which implies
            that the variables are independent of each other.
          </Text>
        </List.Item>
      </List>
    </Stack>,
    <Stack gap={6}>
      <Stack gap={0}>
        <Text fw={500}>Interpretation of Cramér&apos;s V values</Text>
        <Text>
          The interpretation of Cramér&apos;s V values is as follows:
        </Text>
      </Stack>
      <List spacing={2}>
        <List.Item>
          <Text>
            <Text span fw={500}>0.00 to 0.19:</Text> Very weak association
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <Text span fw={500}>0.20 to 0.39:</Text> Weak association
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <Text span fw={500}>0.40 to 0.59:</Text> Moderate association
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <Text span fw={500}>0.60 to 0.79:</Text> Strong association
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <Text span fw={500}>0.80 to 1.00:</Text> Very strong association
          </Text>
        </List.Item>
      </List>
      <Text mt={4}>
        The maximum possible value for Cramér&apos;s V (approaching 1) is
        influenced by the number of rows and columns in the contingency table;
        hence, it is essential to consider this factor when interpreting the
        Cramér&apos;s V value.
      </Text>
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

