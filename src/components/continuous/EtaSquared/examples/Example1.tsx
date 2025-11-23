import { Text, Stack, Tabs, List } from "@mantine/core";

function Example1() {
  return (
    <Stack gap="md">
      <Text fs={"italic"} mt={0}>
        How strong is the association between overall severity of comorbid
        ailments and control of diabetes?
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
                150 adult patients, aged 30 and above, diagnosed with diabetes
                mellitus and from diverse demographic and socioeconomic
                backgrounds. Subjects were recruited from a multispecialty group
                in a suburban area.
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Variables under Study:</Text>
              <Stack gap={0}>
                <Text fw={500}>Independent/Predictor/Exposure:</Text>
                <Text>
                  Patients are classified into one of four groups based on the
                  overall severity of comorbidities as defined on the Adult
                  Comorbidity Evaluation-27 (ACE-27) index. The Adult
                  Comorbidity Evaluation 27 (ACE-27) is a validated instrument
                  that reflects the number and severity of medical comorbidity.
                  ACE-27 grades individual comorbid ailments into 1 of 4
                  comorbidity classes: none, mild, moderate, or severe.
                </Text>
                <Text>
                  The overall ACE-27 score can be None (0), Mild (1), Moderate
                  (2) or Severe (3) and is defined according to the highest
                  scored ailment. In cases with two or more grade 1 ailments, a
                  final score of 1 assigned. In cases with two or more grade 2
                  ailments in different organ systems, a final score of 3 is
                  assigned.
                </Text>
              </Stack>
              <Stack gap={0}>
                <Text fw={500}>Dependent/Outcome:</Text>
                <Text>
                  The primary outcome is the control of diabetes, as measured by
                  glycated hemoglobin (HbA1c) levels over a one-year follow-up
                  period.
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
                The study uses eta-squared (η²) as the effect size measure to
                quantify the proportion of variance in glycated hemoglobin
                (HbA1c) diabetes control explained by the overall severity of
                comorbidity.
              </Text>
              <Text>
                95% CI indicate the precision of the estimate of the strength of
                the association between presence and severity of comorbidity and
                control of diabetes.
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>
                Minimal Clinically Important Difference (MCID)
              </Text>
              <Text>Not applicable</Text>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="result" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Point Estimate</Text>
              <Text>
                Average Hemoglobin A1c value for each comorbidity severity
                grouping:
              </Text>
              <List spacing={2}>
                <List.Item>None: 5.8%</List.Item>
                <List.Item>Mild: 6.5%</List.Item>
                <List.Item>Moderate: 7.8%</List.Item>
                <List.Item>Severe: 8.8%</List.Item>
              </List>
              <Text>eta-squared (η²) value of 0.023</Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Confidence Interval</Text>
              <Text>95% CI = 0.018 to 0.029</Text>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="discussion" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Interpretation of Results</Text>
              <Text>
                The study provides strong evidence that diabetes control is
                strongly associated with the overall severity of comorbidity.
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Implications of Results</Text>
              <Text>
                <Text span fw={500}>
                  Clinical Practice:
                </Text>{" "}
                Healthcare providers should consider the overall burden of
                comorbidity when managing diabetes patients, as diabetes control
                is strongly associated with the severity of comorbidities.
              </Text>
              <Text>
                <Text span fw={500}>
                  Patient Education:
                </Text>{" "}
                Patients with high comorbidity burden may benefit from targeted
                education and management strategies to improve diabetes control.
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Future Research</Text>
              <Text>
                <Text span fw={500}>
                  Further Exploration:
                </Text>{" "}
                Investigate the mechanisms by which overall comorbidity burden
                affects diabetes control, enabling more tailored interventions.
              </Text>
              <Text>
                <Text span fw={500}>
                  Longitudinal Studies:
                </Text>{" "}
                Conduct long-term studies to assess the persistence of the
                association between comorbidity severity and diabetes control
                over time.
              </Text>
              <Text>
                <Text span fw={500}>
                  Intervention Studies:
                </Text>{" "}
                Evaluate the effectiveness of interventions targeting both
                diabetes and the specific comorbidity to optimize diabetes
                control.
              </Text>
            </Stack>
          </Stack>
        </Tabs.Panel>
      </Tabs>
    </Stack>
  );
}

Example1.title =
  "Impact of Comorbidities on Diabetes Control: An Observational Analysis";

export default Example1;
