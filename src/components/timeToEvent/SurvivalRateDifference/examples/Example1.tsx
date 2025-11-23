import { Text, Stack, Tabs, List } from "@mantine/core";

function Example1() {
  return (
    <Stack gap="md">
      <Text fs={'italic'} mt={0}>
        Among pediatric patients diagnosed with acute lymphoblastic leukemia (ALL), does one chemotherapy protocol lead to a significantly higher survival rate at 5 years as compared with another chemotherapy protocol?
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
              <Text>Randomized controlled trial.</Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Study Population:</Text>
              <List spacing={2}>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Number of participants:</Text> 260
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Location of recruitment:</Text> Patients were identified through a nationwide registry of pediatric cancer cases and enrolled in the study at the time of their diagnosis
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Inclusion/exclusion criteria:</Text> Pediatric patients diagnosed with ALL
                  </Text>
                </List.Item>
              </List>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Variables Under Study:</Text>
              <Stack gap={0}>
                <Text fw={500}>Independent/predictor/exposure:</Text>
                <Text>
                  The choice of chemotherapy protocol, Protocol A and Protocol B, is compared
                </Text>
              </Stack>
              <Stack gap={0}>
                <Text fw={500}>Dependent/outcome:</Text>
                <Text>
                  Patients&apos; vital status (alive or dead) at 5 years after chemotherapy.
                </Text>
              </Stack>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="effectSize" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Effect size measure used in the analytical approach:</Text>
              <Text>Survival rate difference was employed to compare the two chemotherapy protocols.</Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Minimal clinically important difference (MCID):</Text>
              <Text>
                Before the study, a physician group associated with the National Cancer Institute defined the MCID as a survival rate difference of 0.25 (25%) or greater
              </Text>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="result" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Point Estimate:</Text>
              <Text>
                <Text span fw={500}>5-Year Survival Rate:</Text>
              </Text>
              <List spacing={2}>
                <List.Item>Protocol A: 55%</List.Item>
                <List.Item>Protocol B: 25%</List.Item>
              </List>
              <Text>
                <Text span fw={500}>Survival Difference:</Text> The survival rate difference point estimate is 30%, which indicates a large effect size.
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Confidence Interval:</Text>
              <Text>
                The 95% confidence interval (CI) for the survival rate difference is moderately wide and ranges from 20% to 40%. The range of the CI allows for a moderately precise estimate of the true value of the effect of the chemotherapy.
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Probability Value (<Text span fs="italic">P</Text>-Value):</Text>
              <Text><Text span fs="italic">P</Text> &lt; 0.001</Text>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="discussion" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Interpretation of Results:</Text>
              <Text>
                The survival rate difference of 30% derived from a randomized controlled trial illustrates a cause-and-effect relationship. This demonstrates that the choice of Protocol A results in a remarkable 30% increase in the 5-year survival rate as compared with Protocol B.
              </Text>
              <Text>
                The lower bound of the 95% CI (20%) suggests that a survival difference as small as 20% is compatible with the results. This difference of 20% is less than the 25% identified by the physician group associated with the National Cancer Institute as clinically important and meaningful.
              </Text>
              <Text>
                Since the lower bound of the CI does not cross 0, the results from this study are statistically significant.
              </Text>
              <Text>
                Despite the statistical significance, the results are imprecise, and the lower bound of the confidence interval of 20% suggests that the true difference may be clinically meaningless since 20% is less than the value of 25% deemed MCID. Thus, the results of this study are referred to as &quot;indeterminate.&quot;
              </Text>
              <Text>
                Because the preponderance of the CI is within the clinically meaningful effect range, this study provides some evidence that the use of Protocol A results in a clinically meaningful difference in survival duration. However, no definitive conclusion can be drawn.
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Implications of Results:</Text>
              <Text>
                Despite a 30% difference in survival rates between the two chemotherapy protocols, the uncertainty around the true extent of this difference—ranging from as high as 40% to as low as 20%—prevents definitive conclusions about whether Protocol A offers a clinically meaningful survival benefit.
              </Text>
              <Text>
                This study provides some evidence supporting the use of Protocol A, but further research with increased precision is needed to draw definitive conclusions.
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Future Research:</Text>
              <List spacing={2}>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Larger Sample Size.</Text> Conduct a larger study to achieve more accurate estimates of the effect of the selected protocol on survival. A bigger sample size will improve the estimate&apos;s accuracy by narrowing the CI. The investigator can adopt strategies to minimize systematic error, such as standardizing treatment protocols and follow-up procedures.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Identify Additional Factor.</Text> Explore additional factors that may define unique prognostic subgroups for whom the chosen protocol is associated with better (or worse) survival outcomes.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Long-Term Follow-up.</Text> Consider long-term follow-up studies to assess survival outcomes beyond 5 years and evaluate quality of life measures in survivors.
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

Example1.title = "Efficacy of Two Chemotherapy Protocols in Pediatric Acute Lymphoblastic Leukemia: A 5-Year Survival Analysis";

export default Example1;

