import { Text, Stack, Tabs, List } from "@mantine/core";

function Example1() {
  return (
    <Stack gap="md">
      <Text fs={"italic"} mt={0}>
        Among adults between the ages of 65 and 80 who are interested in
        improving cardiovascular fitness, what is the impact of three different
        types of exercise – Aerobic, Strength, and Flexibility on improvement in
        cardiovascular fitness as measured by increased VO2 max (a common
        measure of cardiovascular endurance)?
      </Text>
      <Tabs defaultValue="studyDesign">
        <Tabs.List>
          <Tabs.Tab value="studyDesign">Study Design and Methods</Tabs.Tab>
          <Tabs.Tab value="effectSize">Effect Size Measure & MCID</Tabs.Tab>
          <Tabs.Tab value="result">Result</Tabs.Tab>
          <Tabs.Tab value="discussion">Discussion and Future Research</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="studyDesign" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Clinical Research Study Design:</Text>
              <Text>Randomized clinical trial</Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Study Population:</Text>
              <Text>
                Participants were recruited from the local community, and a
                total of 150 adults (75 male and 75 female) were included.
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Variables under Study:</Text>
              <Stack gap={0}>
                <Text fw={500}>Independent/Predictor/Exposure:</Text>
                <List spacing={2}>
                  <List.Item>
                    Aerobic Exercise Group: Engaged in supervised aerobic
                    exercises (e.g., running, cycling) for 45 minutes, three
                    times a week.
                  </List.Item>
                  <List.Item>
                    Strength Exercise Group: Participated in strength training
                    (e.g., weightlifting) for 45 minutes, three times a week.
                  </List.Item>
                  <List.Item>
                    Flexibility Exercise Group: Focused on flexibility exercises
                    (e.g., yoga, stretching) for 45 minutes, three times a week.
                  </List.Item>
                </List>
              </Stack>
              <Stack gap={0}>
                <Text fw={500}>Dependent/Outcome:</Text>
                <Text>
                  Improvement in cardiovascular fitness was assessed by
                  measuring the change in participants&apos; VO2 max before and
                  after the 12-week exercise program.
                </Text>
              </Stack>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="effectSize" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>
                Effect Size Measure used in the Analytical Approach
              </Text>
              <Text>
                A linear regression model was used to analyze the data, with
                exercise type (categorical: Aerobic, Strength, Flexibility), age
                (continuous), and gender (categorical: Male, Female) as
                predictor variables. Least Square Means (LS Means) were
                calculated to estimate the average predicted values of VO2 max
                improvement for each exercise group while controlling for age
                and gender.
              </Text>
              <Text>
                95% confidence intervals (CIs) were generated around the LS
                Means as a measure of the precision of the estimates.
              </Text>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="result" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Point Estimate</Text>
              <List spacing={2}>
                <List.Item>
                  Aerobic Exercise Group: LS Mean: 8.7 ml/kg/min (95% CI [7.8 to
                  9.6])
                </List.Item>
                <List.Item>
                  Strength Exercise Group: LS Mean: 7.9 ml/kg/min (95% CI [6.9
                  to 8.9])
                </List.Item>
                <List.Item>
                  Flexibility Exercise Group: LS Mean: 7.5 ml/kg/min (95% CI
                  [6.6 to 8.4])
                </List.Item>
              </List>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Confidence Interval</Text>
              <Text>
                All three LS Means have wide 95% CIs, indicating low precision
                in the estimates. Hence, no definitive conclusions can be made
                about the true benefit of the three different types of exercise.
              </Text>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="discussion" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Interpretation of Results</Text>
              <Text>
                Although the study suggests some potential effects of aerobic
                exercise on improving cardiovascular fitness when compared to
                the strength and flexibility exercises, the imprecision of the
                estimates prevents making definitive conclusions.
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Implications of Results</Text>
              <Text>
                At this time, no specific recommendation about a particular
                training program should be made based on the results from this
                study.
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Future Research</Text>
              <Text>
                Given the observed magnitude of the difference in the change in
                participants&apos; VO2 max before and after the 12-week exercise
                program among the three different exercise groups, which appears
                to be substantial and potentially clinically significant, it is
                recommended that further studies with larger sample sizes be
                considered to enhance the precision of the estimate.
              </Text>
            </Stack>
          </Stack>
        </Tabs.Panel>
      </Tabs>
    </Stack>
  );
}

Example1.title =
  "Impact of Three Exercise Types on Cardiovascular Fitness in Older Adults";

export default Example1;
