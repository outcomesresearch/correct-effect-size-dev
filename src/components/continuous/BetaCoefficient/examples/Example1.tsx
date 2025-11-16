import { Text, Stack, Tabs, List } from "@mantine/core";

function Example1() {
  return (
    <Stack gap="md">
      <Text fs={'italic'} mt={0}>
        What is the impact of various demographic (age, gender) and clinical factors (visual acuity, hearing, olfaction, and comorbidity burden) on long-term cognitive performance in elderly adults?
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
              <Text>Observational</Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Study Population:</Text>
              <Text>
                Elderly patients (age &gt; 65 years) with no signs of cognitive impairment.
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Variables under Study:</Text>
              <Stack gap={0}>
                <Text fw={500}>Independent/Predictor/Exposure:</Text>
                <Text>Age, gender, visual acuity, hearing level, olfaction, and overall severity of comorbidity</Text>
              </Stack>
              <Stack gap={0}>
                <Text fw={500}>Dependent/Outcome:</Text>
                <Text>Cognitive performance as assessed by the Montreal Cognitive Assessment (MoCA).</Text>
              </Stack>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="effectSize" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Effect Size Measure used in the Analytical Approach</Text>
              <Text>
                Standardized beta coefficients will be used as the effect size measure to assess the independent impact of each independent variable on cognitive performance while controlling for other factors. To analyze the data, a multiple linear regression model is employed, which enables the researcher to quantify the strength of association between each independent variable and cognitive performance while considering the potential confounding effects of other variables.
              </Text>
              <Text>
                The width of the confidence intervals associated with the standardized beta estimates reflects the precision of these estimates.
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Minimal Clinically Important Difference (MCID)</Text>
              <Text>Not applicable</Text>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="result" pt="md">
          <Stack gap={'sm'}>
            <Text fw={500}>Point Estimate and 95% CI</Text>

            <Stack gap={0}>
              <Text fw={500}>Age (in years):</Text>
              <Text>
                The standardized beta coefficient for age is -0.30. This suggests that, on average, a one-year increase in age is associated with a 0.30 standard deviation decrease in cognitive performance after adjusting for other factors.
              </Text>
              <Text>
                The 95% confidence interval for this coefficient (-0.22 to -0.38) suggests that the estimate is imprecise.
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Gender:</Text>
              <Text>
                The standardized beta coefficient for gender is 0.05. This indicates that gender has a very small impact on cognitive performance.
              </Text>
              <Text>
                The wide confidence interval (-0.03 to 0.13) suggests weak precision.
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Baseline Visual Acuity:</Text>
              <Text>
                The standardized beta coefficient for baseline visual acuity is 0.06. This demonstrates a weak positive association, where patients with better baseline visual acuity tend to have better cognitive performance.
              </Text>
              <Text>
                The 95% confidence interval (-0.01 to 0.13) indicates relatively modest imprecision.
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Hearing Level:</Text>
              <Text>
                The standardized beta coefficient for hearing level is 0.18. This demonstrates a strong positive association, where patients with better baseline hearing level tend to have better long-term cognitive performance.
              </Text>
              <Text>
                The 95% confidence interval (0.12 to 0.24) suggests relatively modest precision.
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Olfaction:</Text>
              <Text>
                The standardized beta coefficient for olfaction is 0.20. This demonstrates a strong positive association, where patients with better olfaction tend to have better long-term cognitive performance.
              </Text>
              <Text>
                The 95% confidence interval (0.15 to 0.28) suggests relatively modest precision.
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Comorbidity Burden (None, Mild, Moderate, or Severe):</Text>
              <Text>
                The standardized beta coefficient for comorbidity burden is -0.10. For each increase in comorbidity severity, patients tend to have worse cognitive performance.
              </Text>
              <Text>
                The 95% confidence interval (-0.25 to 0.05) suggests moderate precision.
              </Text>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="discussion" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Interpretation of Results</Text>
              <Text>
                These findings provide insights into the impact of various demographic and clinical factors on long-term cognitive performance in elderly adults. Age, hearing level, olfaction, and comorbidity burden all show significant associations with cognitive performance.
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Implications of Results</Text>
              <Text>
                These findings can help clinicians identify elderly patients at higher risk for cognitive decline.
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Future Research</Text>
              <Text>
                Future studies could consider evaluating additional factors that may influence cognitive performance, such as lifestyle factors (e.g., physical activity, education), genetic factors, and social determinants of health. Overall, these findings contribute to the understanding of factors influencing cognitive performance in the elderly population and inform potential interventions and directions for further research in this field.
              </Text>
            </Stack>
          </Stack>
        </Tabs.Panel>
      </Tabs>
    </Stack>
  );
}

Example1.title = "Impact of Demographic and Clinical Factors on Long-Term Cognitive Performance in Elderly Adult Patients";

export default Example1;

