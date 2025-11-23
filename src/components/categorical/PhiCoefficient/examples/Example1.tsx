import { Text, Stack, Tabs, List } from "@mantine/core";

function Example1() {
  return (
    <Stack gap="md">
      <Text fs={'italic'} mt={0}>
        In children with croup, does the administration of corticosteroids reduce the rate of hospitalization compared to a placebo?
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
                The study population consists of 150 children diagnosed with croup. They were identified through collaboration with pediatric clinics, hospitals, and primary care providers.
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Variables under Study:</Text>
              <Stack gap={0}>
                <Text fw={500}>Independent/Predictor/Exposure:</Text>
                <Text>
                  The independent variable in this study is the administration of corticosteroids, specifically dexamethasone. The experimental group receives dexamethasone, while the control group receives a placebo.
                </Text>
              </Stack>
              <Stack gap={0}>
                <Text fw={500}>Dependent/Outcome:</Text>
                <Text>
                  The dependent variable is the rate of hospitalization, categorized as &quot;hospitalized&quot; or &quot;not hospitalized&quot;, indicating whether the child was hospitalized for the management of croup.
                </Text>
              </Stack>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="effectSize" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Effect Size Measure used in the Analytical Approach:</Text>
              <Text>
                The effect size measure used in this study is the Phi Coefficient. It quantifies the strength and direction of association between the administration of corticosteroids and the rate of hospitalization.
              </Text>
              <Text>
                The 95% confidence interval provides a range within which the true effect size is likely to fall with 95% confidence.
              </Text>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="result" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Point Estimate</Text>
              <Text>Phi coefficient (ɸ) = 0.40</Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Confidence Interval</Text>
              <Text>95% CI [0.3, 0.5]</Text>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="discussion" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Interpretation of Results</Text>
              <Text>
                A Phi Coefficient of 0.40 suggests a moderate association between the administration of corticosteroids and the rate of hospitalization in children with croup. The narrow confidence interval provides the investigator and reader with the understanding that all plausible results are compatible with a medium effect.
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Implications of Results</Text>
              <Text>
                This indicates that the corticosteroid intervention has a non-negligible impact on reducing the likelihood of hospitalization for these patients.
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Future Research</Text>
              <Text>
                While the study demonstrates a moderate effect size, further research is recommended to enhance knowledge in this area. Here are some suggestions for future research:
              </Text>
              <List spacing={2}>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Subgroup Analysis:</Text> Explore whether the effect of corticosteroids on hospitalization rates varies among different subgroups, such as age, severity of illness, or specific viral strains causing croup. This could provide valuable insights into tailoring treatment strategies based on individual patient characteristics.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Optimal Dosage and Duration:</Text> Determine the optimal dosage and duration of corticosteroid therapy for croup treatment. By establishing the most effective regimen, clinical guidelines could be refined to optimize patient outcomes.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Adverse Events:</Text> Conduct further investigation into potential adverse events associated with corticosteroid administration in children with croup. Understanding the safety profile of these interventions is essential for weighing the benefits against potential risks.
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

Example1.title = "A Randomized Clinical Trial Assessing the Impact of Corticosteroids on the Rate of Hospitalization in Children with Croup";

export default Example1;

