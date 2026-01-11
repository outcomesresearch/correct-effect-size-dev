import { Text, List, Stack } from "@mantine/core";

export default function CliffsDelta() {
  return (
    <Stack gap="lg">
      <Stack gap={4}>
        <Text>
          Cliff&apos;s delta (Δ) is a nonparametric effect size measure used to
          describe the degree of overlap between two distributions. Specifically,
          it quantifies the difference between two groups in terms of the
          probability that a randomly selected value from one group will be
          greater than a randomly selected value from the other group, minus the
          reverse probability. It is particularly useful when comparing
          distributions that are not assumed to be normal or that have the same
          variance.
        </Text>
      </Stack>
      <Stack gap={6}>
        <Stack gap={0}>
          <Text fw={500}>Range of Cliff&apos;s delta</Text>
          <Text>
            The values for Cliff&apos;s delta range from -1 to +1. The
            interpretation revolves around the difference in the distributions of
            the two groups being compared:
          </Text>
        </Stack>
        <List spacing={2}>
          <List.Item>
            <Text>
              <Text span fw={500}>
                Positive Δ (0 to +1):
              </Text>{" "}
              This indicates that a larger proportion of the scores in Group A are
              greater than the scores in Group B.
            </Text>
          </List.Item>
          <List.Item>
            <Text>
              <Text span fw={500}>
                Δ close to 0:
              </Text>{" "}
              This implies substantial overlap between the two distributions,
              which suggests minimal or no difference.
            </Text>
          </List.Item>
          <List.Item>
            <Text>
              <Text span fw={500}>
                Negative Δ (0 to -1):
              </Text>{" "}
              This indicates that a larger proportion of the scores in Group B are
              greater than the scores in Group A.
            </Text>
          </List.Item>
        </List>
      </Stack>
      <Stack gap={6}>
        <Stack gap={0}>
          <Text fw={500}>
            Interpretation of Cliff&apos;s delta as absolute values
          </Text>
          <Text>
            The interpretation of Cliff&apos;s delta as absolute values is as
            follows:
          </Text>
        </Stack>
        <List spacing={2}>
          <List.Item>
            <Text>
              <Text span fw={500}>
                Close to 0:
              </Text>{" "}
              Negligible effect size
            </Text>
          </List.Item>
          <List.Item>
            <Text>
              <Text span fw={500}>
                0.14 to 0.32:
              </Text>{" "}
              Small effect size
            </Text>
          </List.Item>
          <List.Item>
            <Text>
              <Text span fw={500}>
                0.33 to 0.46:
              </Text>{" "}
              Medium effect size
            </Text>
          </List.Item>
          <List.Item>
            <Text>
              <Text span fw={500}>
                0.47 to 1.00:
              </Text>{" "}
              Large effect size
            </Text>
          </List.Item>
        </List>
      </Stack>
    </Stack>
  );
}
