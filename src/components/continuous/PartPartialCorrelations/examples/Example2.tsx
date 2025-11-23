import { Text, Stack, Tabs, List } from "@mantine/core";

function Example2() {
  return (
    <Stack gap="md">
      <Text fs={"italic"} mt={0}>
        What is the unique contribution of a low-sodium diet in reducing blood
        pressure among individuals with hypertension, while controlling for the
        effects of physical activity, age, and medication use?
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
              <Text>Randomized Clinical Trial</Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Study Population:</Text>
              <Text>
                225 adults diagnosed with hypertension. These participants were
                identified through clinical settings, such as primary care
                clinics or hospitals, where they received a diagnosis based on
                standardized criteria for hypertension.
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Variables under Study:</Text>
              <Stack gap={0}>
                <Text fw={500}>Independent/Predictor/Exposure:</Text>
                <List spacing={2}>
                  <List.Item>
                    Primary Independent Variable: Low-sodium diet adherence
                    (low-sodium diet group vs. control group).
                  </List.Item>
                  <List.Item>
                    Confounding variables include physical activity levels, age,
                    and medication use.
                  </List.Item>
                </List>
              </Stack>
              <Stack gap={0}>
                <Text fw={500}>Dependent/Outcome:</Text>
                <Text>Change in blood pressure levels.</Text>
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
                Partial correlation coefficients are used to quantify the unique
                contribution of low-sodium diet adherence to blood pressure
                reduction while controlling for the effects of physical
                activity, age, and medication use. Multiple regression analysis
                will build a predictive model for treatment response, with
                partial coefficients calculated for each predictor variable to
                assess their individual contributions while accounting for the
                effects of other variables in the model.
              </Text>
              <Text>
                95% confidence intervals around each partial coefficient will
                assess the precision of the estimates.
              </Text>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="result" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Point Estimate</Text>
              <Text>
                The partial correlation coefficient (
                <Text span fs="italic">
                  r
                </Text>
                _partial) for blood pressure was found to be -0.35 (
                <Text span fs="italic">
                  p
                </Text>
                -value &lt; 0.01)
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Confidence Interval</Text>
              <Text>The 95% CI ranges from -0.45 to -0.25.</Text>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="discussion" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Interpretation of Results</Text>
              <Text>
                The results suggest that there is a moderate negative
                association between low-sodium diet adherence and the reduction
                in blood pressure levels among individuals with hypertension,
                even when controlling for the effects of physical activity, age,
                and medication use. Specifically, the partial correlation of
                -0.35 indicates that those who adhered to the low-sodium diet
                experienced a significant reduction in their blood pressure
                levels compared to those who did not, independent of the effects
                of physical activity, age, and medication use.
              </Text>
              <Text>
                The 95% confidence interval (CI) around this point estimate is
                very precise, meaning the true value of the effect is
                confidently estimated to be close to -0.35.
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Implications of Results</Text>
              <Text>
                The findings imply that incorporating a low-sodium diet into the
                treatment regimen for individuals with hypertension can be
                beneficial in reducing blood pressure levels. Given the moderate
                effect size and the precision of the results, healthcare
                providers might consider recommending dietary interventions as
                part of a comprehensive treatment plan for hypertension.
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Future Research</Text>
              <Text>
                Future research should examine whether the blood
                pressure-lowering effects of a low-sodium diet are maintained
                over longer periods, such as six months or a year. Additional
                studies could investigate the effects of various dietary
                interventions, such as the DASH diet, Mediterranean diet, or
                plant-based diets, on blood pressure to identify which dietary
                patterns are most effective.
              </Text>
            </Stack>
          </Stack>
        </Tabs.Panel>
      </Tabs>
    </Stack>
  );
}

Example2.title =
  "The Impact of Dietary Interventions on Blood Pressure: A Randomized Controlled Trial";

export default Example2;
