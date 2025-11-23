import { Text, Stack, Tabs, List } from "@mantine/core";

function Example2() {
  return (
    <Stack gap="md">
      <Text fs={"italic"} mt={0}>
        What is the relationship between weekly exercise duration, dietary
        adherence, and baseline BMI on weight loss outcomes in adults
        participating in a structured weight management program?
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
              <Text>Prospective cohort study</Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Study Population:</Text>
              <Text>
                200 adults aged 25-55 years enrolled in a 12-week structured
                weight management program at a community health center.
                Participants had baseline BMI between 25-40 kg/m² and no
                contraindications to moderate exercise.
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Variables under Study:</Text>
              <Stack gap={0}>
                <Text fw={500}>Independent/Predictor/Exposure:</Text>
                <List spacing={2}>
                  <List.Item>
                    Weekly exercise duration (measured in hours per week)
                  </List.Item>
                  <List.Item>
                    Dietary adherence score (measured as percentage adherence to
                    prescribed meal plan, 0-100%)
                  </List.Item>
                  <List.Item>Baseline BMI (measured in kg/m²)</List.Item>
                </List>
              </Stack>
              <Stack gap={0}>
                <Text fw={500}>Dependent/Outcome:</Text>
                <Text>Weight loss (measured in kilograms) at 12 weeks</Text>
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
                Unstandardized beta coefficients will be used as the effect size
                measure to assess the independent impact of each predictor
                variable on weight loss while controlling for other factors.
                Multiple linear regression analysis will quantify the expected
                change in weight loss (in kilograms) for each unit change in the
                predictor variables.
              </Text>
              <Text>
                The unstandardized beta coefficients will provide clinically
                meaningful estimates that can be directly applied to patient
                counseling and program planning.
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>
                Minimal Clinically Important Difference (MCID)
              </Text>
              <Text>
                A weight loss of 2.0 kg or greater is considered clinically
                meaningful for health benefits.
              </Text>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="result" pt="md">
          <Stack gap={"md"}>
            <Text fw={500}>Point Estimate and 95% CI</Text>

            <Stack gap={0}>
              <Text fw={500}>Weekly Exercise Duration (hours per week):</Text>
              <Text>
                The unstandardized beta coefficient is -1.2 kg/h. This indicates
                that for each additional hour of exercise per week, participants
                lost an average of 1.2 kg, controlling for other factors.
              </Text>
              <Text>95% CI: -1.5 to -0.9 kg per hour</Text>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Dietary Adherence Score (percentage):</Text>
              <Text>
                The unstandardized beta coefficient is -0.08 kg per percentage
                point. This suggests that for each 1% increase in dietary
                adherence, participants lost an additional 0.08 kg on average.
              </Text>
              <Text>95% CI: -0.12 to -0.04 kg per percentage point</Text>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Baseline BMI (kg/m²):</Text>
              <Text>
                The unstandardized beta coefficient is -0.3 kg per unit increase
                in BMI. This indicates that for each unit increase in baseline
                BMI, participants lost an additional 0.3 kilograms on average,
                suggesting that individuals with higher starting BMI experienced
                greater absolute weight loss.
              </Text>
              <Text>95% CI: -0.5 to -0.1 kg per BMI unit</Text>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="discussion" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Interpretation of Results</Text>
              <Text>
                The unstandardized beta coefficients provide practical,
                clinically relevant information about weight loss expectations.
                Exercise duration showed the strongest association with weight
                loss, with each additional hour of weekly exercise associated
                with 1.2 kg of additional weight loss over the 12 weeks.
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Implications of Results</Text>
              <Text>
                <Text span fw={500}>
                  Clinical Practice:
                </Text>{" "}
                Healthcare providers can use these estimates to set realistic
                expectations with patients. For example, a patient who increases
                exercise from 2 to 5 hours per week (a 3-hour increase) could
                expect approximately 3.6 kg (3 × 1.2 kg) of additional weight
                loss, assuming other factors remain constant.
              </Text>
              <Text>
                <Text span fw={500}>
                  Program Planning:
                </Text>{" "}
                The results suggest that exercise duration is the most
                modifiable factor for achieving clinically meaningful weight
                loss. Increasing weekly exercise by just 2 hours would be
                expected to produce 2.4 kg additional weight loss, exceeding the
                MCID threshold.
              </Text>
              <Text>
                <Text span fw={500}>
                  Patient Counseling:
                </Text>{" "}
                The dietary adherence coefficient indicates that achieving 100%
                adherence (versus 75% adherence) would result in an additional
                2.0 kg weight loss (25% × 0.08 kg), which meets the clinical
                significance threshold.
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Future Research</Text>
              <Text>
                Future studies should investigate dose-response relationships
                for different types of exercise and examine whether the effects
                of exercise duration and dietary adherence are sustained beyond
                the initial 12-week intervention period. Long-term follow-up
                studies would help determine whether these relationships persist
                in maintaining weight.
              </Text>
            </Stack>
          </Stack>
        </Tabs.Panel>
      </Tabs>
    </Stack>
  );
}

Example2.title =
  "Impact of Exercise Duration on Weight Loss in Adult Participants: A 12-Week Intervention Study";

export default Example2;
