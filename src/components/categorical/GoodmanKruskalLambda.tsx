import { Text, List, Stack } from "@mantine/core";
import ExplanationTabsLayout from "../layout/TabsLayout";

export default function GoodmanKruskalLambdaTabs() {
  const explanationSections = [
    <Stack gap={4}>
      <Text>
        Goodman and Kruskal&apos;s lambda (λ) measures the strength of association
        between two nominal or categorical variables in a contingency table. It is
        particularly useful when dealing with multivariate categorical data, such
        as when examining relationships between multiple categories or groups
        within a dataset. It is especially useful for demonstrating how well one
        categorical variable predicts another.
      </Text>
    </Stack>,
    <Stack gap={6}>
      <Stack gap={0}>
        <Text fw={500}>Range of Goodman and Kruskal&apos;s lambda</Text>
        <Text>
          The values for Goodman and Kruskal&apos;s lambda range from 0 to 1. The
          interpretation revolves around the predictive power of one variable over
          another:
        </Text>
      </Stack>
      <List spacing={2}>
        <List.Item>
          <Text>
            <Text span fw={500}>Closer to 1:</Text> This indicates strong
            predictive power and suggests that knowing the categories of one
            variable substantially improves the ability to predict the categories
            of the other variable.
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <Text span fw={500}>Close to 0:</Text> This implies minimal or no
            predictive power and suggests that the two variables have little to no
            association in terms of prediction.
          </Text>
        </List.Item>
      </List>
    </Stack>,
    <Stack gap={6}>
      <Stack gap={0}>
        <Text fw={500}>Interpretation of Goodman and Kruskal&apos;s lambda values</Text>
        <Text>
          The interpretation of Goodman and Kruskal&apos;s lambda values between
          variables is as follows:
        </Text>
      </Stack>
      <List spacing={2}>
        <List.Item>
          <Text>
            <Text span fw={500}>0:</Text> No association
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <Text span fw={500}>0.01 to 0.10:</Text> Small association
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <Text span fw={500}>0.11 to 0.30:</Text> Moderate association
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <Text span fw={500}>0.31 to 0.50:</Text> Medium association
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <Text span fw={500}>0.51 to 0.70:</Text> Large association
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <Text span fw={500}>0.71 to 0.99:</Text> Very large association
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <Text span fw={500}>1:</Text> Perfect association
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

