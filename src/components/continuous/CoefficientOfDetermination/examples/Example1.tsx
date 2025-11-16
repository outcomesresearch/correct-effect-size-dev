import { Text, Stack, Tabs, List } from "@mantine/core";

function Example1() {
  return (
    <Stack gap="md">
      <Text fs={'italic'} mt={0}>
        In adults diagnosed with hypertension, how well do lifestyle factors such as diet, exercise, and stress levels explain the variance in blood pressure?
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
                85 adults diagnosed with hypertension, identified through electronic health records from a network of primary care clinics.
              </Text>
            </Stack>
            <Text>
              Participants were included if they had a documented diagnosis of hypertension, complete records of lifestyle factors (diet, exercise, stress levels), and blood pressure measurements.
            </Text>
            <Stack gap={0}>
              <Text fw={500}>Variables under Study:</Text>
              <Text fw={500}>Independent/Predictor/Exposure:</Text>
              <List spacing="xs">
                <List.Item>
                  <Text>Diet (measured by dietary sodium intake and adherence to a DASH diet)</Text>
                </List.Item>
                <List.Item>
                  <Text>Exercise (measured by frequency and duration of physical activity per week)</Text>
                </List.Item>
                <List.Item>
                  <Text>Stress Levels (measured by a standardized stress questionnaire)</Text>
                </List.Item>
              </List>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Dependent/Outcome:</Text>
              <Text>Blood Pressure (measured as systolic and diastolic blood pressure)</Text>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="effectSize" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Effect Size Measure used in the Analytical Approach</Text>
              <Text>
                Coefficient of Determination (R²) is commonly used to quantify how well the independent variables explain the variance in the dependent variable. In this study, R² will be used to indicate the proportion of variance in blood pressure that can be explained by factors such as diet, exercise, and stress levels.
              </Text>
            </Stack>
            <Text>
              95% confidence intervals (CI) are reported to indicate the precision of the estimates.
            </Text>
            <Stack gap={0}>
              <Text fw={500}>Minimal Clinically Important Difference (MCID)</Text>
              <Text>
                The investigators established an R² value of 0.3 (30%) and above as clinically meaningful.
              </Text>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="result" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Point Estimate:</Text>
              <Text>R² value = 0.45</Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Confidence Interval:</Text>
              <Text>95% confidence interval (CI) of 0.40 to 0.50</Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Probability Value (<Text span fs="italic">p</Text>-value):</Text>
              <Text><Text span fs="italic">P</Text>=0.0004</Text>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="discussion" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Interpretation of Results</Text>
              <Text>
                The R² value of 0.45 indicates that the combined effects of diet, exercise, and stress levels can explain 45% variance in blood pressure among the study population. The results demonstrate that lifestyle factors have a substantial impact on blood pressure levels in adults with hypertension.
              </Text>
            </Stack>
            <Text>
              The 95% CI of [0.40, 0.50] suggests that the true proportion of variance explained by these lifestyle factors is likely between 40% and 50%. Since all plausible values for the true proportion of variance explained lie above the minimal clinically important difference (MCID) value of 0.30, the estimate is considered precise.
            </Text>

            <Stack gap={0}>
              <Text fw={500}>Implications of Results</Text>
              <Text>
                These findings underscore the importance of lifestyle modifications in the management of hypertension. Interventions focusing on dietary changes, increased physical activity, and stress reduction could significantly improve blood pressure control in hypertensive patients. Healthcare providers should consider incorporating these lifestyle factors into hypertension management plans.
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Future Research</Text>
              <List spacing="xs">
                <List.Item>
                  <Text>
                    <Text span fw={500}>The long-term effects of lifestyle modifications on blood pressure and overall cardiovascular health.</Text> Future research should investigate how sustained lifestyle changes, including diet, exercise, and stress management, influence not only blood pressure but also broader cardiovascular outcomes over extended periods. This longitudinal approach can provide insights into the durability and comprehensive health benefits of lifestyle interventions.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>The impact of specific dietary patterns, types of exercise, and stress management techniques on blood pressure.</Text> Studying the differential effects of varied dietary patterns (e.g., DASH diet, Mediterranean diet), types of exercise (e.g., aerobic vs. resistance training), and stress reduction strategies (e.g., mindfulness, yoga) on blood pressure can elucidate which interventions are most effective for different patient profiles. This research could inform personalized recommendations for hypertension management.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>The interaction between lifestyle factors and pharmacological treatments for hypertension.</Text> Investigating how lifestyle modifications interact with pharmacotherapy in lowering blood pressure could reveal synergistic effects or potential conflicts. Understanding these interactions is crucial for optimizing treatment strategies and enhancing therapeutic outcomes for hypertensive patients.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>The role of personalized lifestyle interventions based on genetic and individual variability in optimizing blood pressure control.</Text> Future studies should investigate how genetic factors and individual variability in lifestyle responsiveness impact the effectiveness of interventions targeting blood pressure control. This personalized approach could lead to tailored lifestyle recommendations that maximize benefits and improve adherence among diverse patient populations.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Progress to Dissemination & Implementation (D&I).</Text> Move towards disseminating and implementing the intervention into real-world clinical practice. This involves translating research findings into practical applications and addressing the challenges associated with implementing evidence-based interventions in healthcare settings.
                  </Text>
                </List.Item>
              </List>
            </Stack>
          </Stack>
        </Tabs.Panel>
      </Tabs>
    </Stack>
  );
}

Example1.title = "The Influence of Lifestyle Factors on Blood Pressure in Adults: An Observational Study";

export default Example1;

