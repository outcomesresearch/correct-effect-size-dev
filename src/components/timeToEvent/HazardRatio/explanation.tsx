import { Text, List, Stack } from "@mantine/core";

export default function HazardRatio() {
  return (
    <Stack gap="lg">
      <Stack gap={4}>
        <Text>
          The hazard ratio (HR) is used to quantify the relative risk of
          experiencing an event between two groups over time. Specifically, it
          measures the rate at which events happen in one group as compared with
          another group. It is particularly useful in survival analysis and for
          time-to-event data to compare the efficacy of different treatments or
          exposures.
        </Text>
      </Stack>
      <Stack gap={6}>
        <Stack gap={0}>
          <Text fw={500}>Range of HR</Text>
          <Text>
            HR values typically start from 0 and can theoretically extend to
            infinity. The interpretation revolves around the comparison of event
            rates between two groups:
          </Text>
        </Stack>
        <List spacing={2}>
          <List.Item>
            <Text>
              <Text span fw={500}>
                HR = 1:
              </Text>{" "}
              This indicates no difference in the hazard rates between the two
              groups.
            </Text>
          </List.Item>
          <List.Item>
            <Text>
              <Text span fw={500}>
                HR &gt; 1:
              </Text>{" "}
              This implies that the event rate is higher in Group A as compared
              with Group B. For example, an HR of 2 suggests that Group A has
              twice the risk of experiencing the event over time as compared with
              Group B.
            </Text>
          </List.Item>
          <List.Item>
            <Text>
              <Text span fw={500}>
                HR &lt; 1:
              </Text>{" "}
              This suggests that the event rate is lower in Group A as compared
              with Group B. For example, an HR of 0.5 suggests that Group A has
              half the risk of experiencing the event over time as compared with
              Group B.
            </Text>
          </List.Item>
        </List>
      </Stack>
    </Stack>
  );
}
