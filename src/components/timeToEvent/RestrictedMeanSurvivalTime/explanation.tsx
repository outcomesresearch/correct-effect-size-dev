import { Text, List, Stack } from "@mantine/core";

export default function RestrictedMeanSurvivalTime() {
  return (
    <Stack gap="lg">
      <Stack gap={4}>
        <Text>
          Restricted mean survival time (RMST) is a nonparametric statistic used
          to quantify the expected time to an event under a survival curve up to a
          specified time point. Specifically, it measures the average event-free
          time up to a specified time horizon. It is particularly useful when
          comparing the survival experiences of two or more groups, especially
          when the proportional hazards assumption is not met.
        </Text>
      </Stack>
      <Stack gap={6}>
        <Stack gap={0}>
          <Text fw={500}>Range of RMST</Text>
          <Text>
            RMST values are time-based measurements (like months or years). Unlike
            coefficients that range between specific numeric bounds, RMST provides
            an absolute difference or expected time. The interpretation revolves
            around the comparison of RMST values between two groups:
          </Text>
        </Stack>
        <List spacing={2}>
          <List.Item>
            <Text>
              <Text span fw={500}>
                Higher RMST for Group A vs. Group B:
              </Text>{" "}
              This indicates that Group A, on average, experiences the event later
              than Group B.
            </Text>
          </List.Item>
          <List.Item>
            <Text>
              <Text span fw={500}>
                Equivalent RMST values for both groups:
              </Text>{" "}
              This implies that both groups have a similar expected event-free
              time up to the specified time point.
            </Text>
          </List.Item>
          <List.Item>
            <Text>
              <Text span fw={500}>
                Lower RMST for Group A vs. Group B:
              </Text>{" "}
              This suggests that Group A, on average, experiences the event
              earlier than Group B.
            </Text>
          </List.Item>
        </List>
      </Stack>
      <Stack gap={0}>
        <Text fw={500}>Interpretation</Text>
        <Text>
          Because RMST is a time-based measurement and does not fall within a
          standardized numeric range (e.g., -1 to +1, 0 to 1), there are no fixed
          value categories like &quot;weak&quot; or &quot;strong.&quot; However,
          the significance or importance of differences in RMST can be assessed
          based on clinical or practical significance, background knowledge, or
          other contextual factors.
        </Text>
      </Stack>
    </Stack>
  );
}
