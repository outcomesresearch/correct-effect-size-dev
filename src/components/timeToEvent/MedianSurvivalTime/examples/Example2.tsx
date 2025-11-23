import { Text, Stack, Tabs, List } from "@mantine/core";

function Example2() {
  return (
    <Stack gap="md">
      <Text fs={'italic'} mt={0}>
        Among patients diagnosed with glioblastoma multiforme (GBM), does the use of an experimental immunotherapy approach lead to a significant difference in median survival time over the study period as compared with standard therapy?
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
                    <Text span fw={500}>Number of participants:</Text> 450
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Location of recruitment:</Text> Patients were identified through collaboration with multiple cancer centers and hospitals specializing in neuro-oncology
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Inclusion/exclusion criteria:</Text> Patients diagnosed with GBM
                  </Text>
                </List.Item>
              </List>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Variables Under Study:</Text>
              <Stack gap={0}>
                <Text fw={500}>Independent/predictor/exposure:</Text>
                <Text>
                  Treatment approach: standard therapy vs. experimental immunotherapy
                </Text>
              </Stack>
              <Stack gap={0}>
                <Text fw={500}>Dependent/outcome:</Text>
                <Text>
                  Median survival time (in months) after receiving either immunotherapy or standard chemotherapy
                </Text>
              </Stack>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="effectSize" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Effect size measure used in the analytical approach:</Text>
              <Text>Median survival time was used to compare the two treatment protocols</Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Minimal clinically important difference (MCID):</Text>
              <Text>
                Prior to the study, members of the National Brain Tumor Study defined the MCID as a difference in median survival time of 6 months or more
              </Text>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="result" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Point Estimate:</Text>
              <Text>
                The median survival time for the experimental immunotherapy is 22 months (i.e., at 22 months, half of the subjects who received this therapy died). The median survival time for the standard therapy approach is 12 months. The point estimate for the median survival time difference is 10 months, which indicates a large effect size.
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Confidence Interval:</Text>
              <Text>
                The 95% confidence interval (CI) for the median survival time difference is -2 months to 22 months. The extremely wide range of the CI results in a high level of uncertainty about where the actual effect size value could lie.
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Probability Value (<Text span fs="italic">P</Text>-Value):</Text>
              <Text><Text span fs="italic">P</Text> = 0.456</Text>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="discussion" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Interpretation of Results:</Text>
              <List spacing={2}>
                <List.Item>
                  <Text>
                    The 10-month difference in median survival time derived from a randomized controlled trial illustrates a potential cause-and-effect relationship. This suggests that the use of immunotherapy results in a 10-month increase in median survival time compared to the standard therapy protocol.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    The results, as indicated by the confidence interval bounds, are consistent with a median survival time difference of up to 22 months for immunotherapy, as well as a survival benefit of 2 months for the standard chemotherapy protocol.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    The lower bound of the CI (-2 months) is significantly less than the 6 months recognized by the members of the National Brain Tumor Study as clinically important and meaningful.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    Since the lower limit of the CI crosses 0, the results from this study are considered &quot;not statistically significant.&quot;
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    Because of the imprecision of the CI, the high uncertainty of the results, and the possibility that both clinically meaningless and meaningful differences are plausible, this study&apos;s results are called &quot;indeterminate.&quot;
                  </Text>
                </List.Item>
              </List>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Implications of Results:</Text>
              <Text>
                Although there is a 10-month median survival difference between the two protocols, the uncertainty around the true survival time gap (which could be as large as 22 months in favor of immunotherapy or as small as 2 months in favor of standard chemotherapy) makes it impossible to definitively determine whether the intervention leads to a clinically meaningful survival difference.
              </Text>
              <Text>
                Since the majority of the CI falls below the clinically meaningful effect range, this study suggests that the immunotherapy protocol is unlikely to produce a clinically significant survival difference. However, a definitive conclusion cannot be drawn.
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Future Research:</Text>
              <List spacing={2}>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Perform a Follow-up Study.</Text> Perform a follow-up study to verify the clinically significant difference in median survival time. To improve the accuracy of the estimate, consider increasing the sample size and using techniques that enhance research quality.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Larger Sample Size.</Text> A larger sample size will improve the accuracy of the estimate by reducing the width of the CI.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Reduce Systematic Error.</Text> Implement strategies to reduce systematic error, such as standardizing the delivery of the immunotherapy and chemotherapy protocols.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Good Clinical Practice.</Text> Following good clinical practice guidelines as outlined in the FDA Code of Federal Regulations improves clinical research by encouraging standardized procedures, data integrity, patient safety, and strict oversight. By minimizing both random and systematic errors, good clinical practice increases the reliability and accuracy of effect size estimates, ultimately supporting the validity of clinical trial outcomes and the progress of evidence-based medicine.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Additional Factors.</Text> Explore additional factors that might identify unique prognostic subgroups where the selected protocol correlates with improved (or diminished) survival outcomes.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Replication Studies.</Text> Consider conducting replication studies with enhanced methodological rigor to achieve more accurate estimates of the treatment effect.
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

Example2.title = "Comparing Median Survival Time Among Patients with Glioblastoma Multiforme: Immunotherapy vs. Standard Therapy (Example B)";

export default Example2;

