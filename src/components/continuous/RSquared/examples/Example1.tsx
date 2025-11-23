import { Text, Stack, Tabs, List } from "@mantine/core";

function Example1() {
  return (
    <Stack gap="md">
      <Text fs={"italic"} mt={0}>
        How much of the variance in medication adherence for rheumatoid
        arthritis can be explained by patient characteristics (age, gender,
        education level, work status), social support, and medication regimen
        complexity?
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
              <Text>Observational study</Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Study Population:</Text>
              <Text>
                250 adults with rheumatoid arthritis were identified and
                recruited from a general medical clinic with rheumatoid
                arthritis.
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Variables under Study:</Text>
              <Stack gap={0}>
                <Text fw={500}>Independent/Predictor/Exposure:</Text>
                <Text>
                  Patient characteristics (age, gender, educational level),
                  social support, and medication regimen complexity
                </Text>
              </Stack>
              <Stack gap={0}>
                <Text fw={500}>Dependent/Outcome:</Text>
                <Text>
                  Medication adherence defined as the percentage of days per
                  month the participant uses medication.
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
                The R-squared (R²) will be used as the effect size measure to
                quantify the proportion of variance in medication adherence
                explained by the independent variables included in the
                regression model.
              </Text>
              <Text>
                R-squared, also known as the coefficient of determination,
                ranges from 0 to 1.
              </Text>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="result" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Point Estimate</Text>
              <Text>
                The R-squared value for this study is 0.50, indicating that
                approximately 50% of the variance in medication adherence can be
                explained by the variables included in the model.
              </Text>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="discussion" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Interpretation of Results</Text>
              <Text>
                The R-squared value of 0.50 indicates that the independent
                variables account for a substantial portion of the variance in
                medication adherence among individuals with rheumatoid
                arthritis. This indicates a reasonable fit of the model to the
                data; however, there is still unexplained variance, suggesting
                the presence of other factors that influence medication
                adherence.
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Implications of Results</Text>
              <Text>
                The R-squared value of 0.50 indicates a moderate level of
                goodness of fit, where 50% of the variance in medication
                adherence is accounted for by the variables considered in the
                model. It suggests that the model can reasonably explain
                adherence behaviors but acknowledges the presence of factors not
                included in the model that may also impact medication adherence.
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Future Research</Text>
              <Text>
                The study findings highlight the importance of patient
                characteristics, social support, and medication regimen
                complexity in explaining medication adherence among patients
                with rheumatoid arthritis. Future research could focus on
                identifying additional factors that contribute to adherence,
                such as psychological factors, healthcare provider-patient
                communication, or treatment-related barriers. Moreover,
                interventions targeting the identified factors could be explored
                to improve medication adherence among individuals with
                rheumatoid arthritis.
              </Text>
            </Stack>
          </Stack>
        </Tabs.Panel>
      </Tabs>
    </Stack>
  );
}

Example1.title =
  "Exploring the Influence of Patient Characteristics, Social Support, and Medication Regimen Complexity on Medication Adherence in a Cohort of Individuals with Rheumatoid Arthritis";

export default Example1;
