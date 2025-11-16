import { Text, Stack, Tabs, List } from "@mantine/core";

function Example1() {
  return (
    <Stack gap="md">
      <Text fs={'italic'} mt={0}>
        Among adults, what is the strength of association between blood glucose and BMI?
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
              <Text>
                Cross-sectional study, collecting data from a diverse sample of adults (aged
                18 to 65 years).
              </Text></Stack>
            <Stack gap={0}>
              <Text fw={500}>Study Population:</Text>
              <Text>1000 Veterans attending a general medical clinic in a large urban setting.</Text>
            </Stack>


            <Stack gap={0}>
              <Text fw={500}>Variables under Study:</Text>
              <Text>
                Participants undergo measurements of fasting blood glucose levels, weight
                (measured in kilograms) and height (measured in meters).
              </Text></Stack>
            <Stack gap={0}>
              <Text fw={500}>Independent/Predictor/Exposure:</Text>
              <Text>
                Pearson correlation is not directional therefore defining variables as
                independent and dependent is not necessary. Cross-sectional study design does
                not support defining variables as independent, predictor, or exposure.
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Dependent Outcome:</Text>
              <Text>
                Due to cross-sectional study design, there is no dependent or outcome measure.
              </Text>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="effectSize" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Effect Size Measure used in the Analytical Approach</Text>
              <Text>
                The Pearson correlation coefficient (r) is calculated to measure the strength
                and direction of the association between blood glucose level and BMI.
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>
                Minimal Clinically Important Difference for Strength of Association
              </Text>
              <Text>
                The minimal clinically important difference (MCID) for the strength of
                association between blood glucose levels and BMI was not determined by the
                investigators nor has it been established in the literature. However, based
                on Cohen&apos;s guidelines a value of 0.4 (moderate association) might be
                considered a clinically meaningful association.
              </Text>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="result" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Point Estimate:</Text>
              <Text>
                Pearson Correlation Coefficient (r) between Blood Glucose Levels and BMI =
                0.70
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Confidence Interval:</Text>
              <Text>95% CI = 0.67-0.73</Text>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Probability Value (p-value):</Text>
              <Text>p &lt; 0.0001</Text>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="discussion" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Discussion</Text>
              <Text>
                Using the interpretation guide, the Pearson correlation coefficient (r) of 0.70
                indicates a strong positive correlation between blood glucose levels and BMI in
                the studied adult population – higher blood glucose levels are associated with
                higher BMI levels.
              </Text>
            </Stack>
            <Text>
              The researchers can conclude with 95% confidence that the true value for the
              correlation coefficient (r) between blood glucose levels and BMI in the
              population could be as low as 0.67 and as high as 0.73. In this case, the 95%
              CI around the correlation coefficient is considered precise because all
              plausible values for the true correlation between blood glucose and BMI (i.e.,
              0.67 to 0.73) indicate a strong relationship.
            </Text>
            <Text>
              The probability value (p-value) of &quot;&lt;0.0001&quot; indicates that the
              likelihood of obtaining a Pearson correlation coefficient (r) of 0.70 or
              greater by chance alone, assuming there is no relationship between these two
              variables, is extremely unlikely. However, the p-value must be interpreted with
              caution, especially given the large sample size of 1000 in this study. Larger
              sample sizes can produce highly significant p-values for the correlation
              coefficient even for small or modest correlations, which may not be practically
              meaningful. Therefore, the strength of the association, as indicated by the
              correlation coefficient, should be considered more closely than the p-value alone
              to understand the practical significance of the results.
            </Text>

            <Stack gap={0}>
              <Text fw={500}>Implications of Results</Text>
              <Text>
                This study provides robust evidence of a strong correlation between blood
                glucose levels and BMI in adults.
              </Text>
            </Stack>
            <Text>
              Higher blood glucose levels are associated with higher BMI levels, which is
              consistent with established knowledge regarding the risk of metabolic disorders,
              including diabetes, in individuals with obesity.
            </Text>

            <Stack gap={0}>
              <Text fw={500}>Future Research</Text>
              <List spacing="xs">
              <List.Item>
                <Text>
                  <Text span fw={500}>Longitudinal Studies:</Text> Conduct longitudinal
                  studies to explore how changes in BMI over time relate to changes in blood
                  glucose levels and the development of metabolic disorders.
                </Text>
              </List.Item>
              <List.Item>
                <Text>
                  <Text span fw={500}>Subgroup Analyses:</Text> To better understand the
                  nature of the association, investigate whether the association varies by age,
                  gender, and ethnic background.
                </Text>
              </List.Item>
              <List.Item>
                <Text>
                  <Text span fw={500}>Mechanistic Research:</Text> Explore the underlying
                  mechanisms driving the association between BMI and blood glucose levels,
                  such as insulin resistance and adipokine secretion.
                </Text>
              </List.Item>
              <List.Item>
                <Text>
                  <Text span fw={500}>Intervention Studies:</Text> Assess the impact of weight
                  management interventions on blood glucose control to determine if reducing
                  BMI can mitigate the risk of elevated blood glucose.
                </Text>
              </List.Item>
              <List.Item>
                <Text>
                  <Text span fw={500}>Dietary and Lifestyle Factors:</Text> Investigate how
                  dietary patterns and physical activity influence the relationship between BMI
                  and blood glucose levels.
                </Text>
              </List.Item>
              <List.Item>
                <Text>
                  <Text span fw={500}>Genetic and Molecular Studies:</Text> Explore genetic
                  and molecular markers that may mediate or modify the association between BMI
                  and blood glucose levels.
                </Text>
              </List.Item>
              </List>
            </Stack>
          </Stack>
        </Tabs.Panel>
      </Tabs>
    </Stack >
  );
}

Example1.title = "Association Between Blood Glucose Levels and Body Mass Index (BMI) in Adults: A Cross-Sectional Analysis";

export default Example1;

