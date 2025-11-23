import { Text, Stack, Tabs, List } from "@mantine/core";

function Example1() {
  return (
    <Stack gap="md">
      <Text fs={'italic'} mt={0}>
        In adults with Zenker&apos;s diverticulum, does the choice of surgical technique (transcervical, transoral stapling, or mixed endoscopic) significantly impact the rate of reoperation to treat recurrent or persistent Zenker&apos;s diverticulum within 24 months after the initial episode?
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
                The study population consists of 125 adults diagnosed with Zenker&apos;s diverticulum who were identified and recruited from a tertiary referral center specializing in upper gastrointestinal disorders.
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Variables under Study:</Text>
              <Stack gap={0}>
                <Text fw={500}>Independent/Predictor/Exposure:</Text>
                <Text>
                  The independent variable is the choice of surgical technique, categorized into three groups: transcervical, transoral stapling, and mixed endoscopic.
                </Text>
              </Stack>
              <Stack gap={0}>
                <Text fw={500}>Dependent/Outcome:</Text>
                <Text>
                  The dependent variable is the rate of reoperation (yes/no) within 24 months after the initial episode of Zenker&apos;s diverticulum.
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
                Cramer&apos;s 𝑉 is used as the effect size measure. Cramer&apos;s 𝑉 is a statistical measure used as an effect size for nominal categorical data, particularly in the context of analyzing the strength of association between two categorical variables. Cramer&apos;s 𝑉 provides a standardized measure of the degree of association between the categorical variables and ranges from 0 to 1.
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Minimal Clinically Important Difference (MCID):</Text>
              <Text>
                Not applicable for Cramer&apos;s 𝑉 as it measures the overall association strength rather than a specific threshold difference.
              </Text>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="result" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Results:</Text>
              <Text>
                The rate of reoperation for the three techniques is: Transcervical 4 out of 42 (9%), Transoral stapling 8 out of 44 (18%), and Mixed endoscopic 2 out of 39 (4%).
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Point Estimate:</Text>
              <Text>
                The Cramer&apos;s 𝑉 for the overall effect of surgical technique on reoperation is 0.179, indicating a small association between surgical technique choice and reoperation rate.
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Confidence Interval:</Text>
              <Text>
                95% CI [0.129, 0.232], indicating a reasonably precise estimate.
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Probability Value (<Text span fs="italic">P</Text>-value):</Text>
              <Text><Text span fs="italic">p</Text> &lt; 0.05, indicating a statistically significant association.</Text>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="discussion" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Interpretation of Results:</Text>
              <Text>
                The Cramer&apos;s 𝑉 effect size measure of 0.179 suggests a small association between the choice of surgical technique and the rate of reoperation for Zenker&apos;s diverticulum. While the confidence interval (0.129 to 0.232) indicates precision in the estimate and remains within the small association range (0.1 to 0.2), the effect is modest. The mixed endoscopic technique demonstrated the lowest reoperation rate (4%), followed by transcervical (9%), and transoral stapling (18%), suggesting some clinically meaningful differences among the techniques despite the overall small association measure.
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Implications of Results:</Text>
              <Text>
                The study provides evidence that the choice of surgical technique is associated with the rate of reoperation for Zenker&apos;s diverticulum, though the overall association strength is small. The notably lower reoperation rate with the mixed endoscopic technique (4%) compared to transoral stapling (18%) may have practical clinical significance for surgical decision-making. Clinicians should consider these differences when selecting the most appropriate surgical approach for individual patients, while recognizing that other factors such as technical expertise, patient anatomy, and comorbidities may also influence treatment selection.
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Future Research:</Text>
              <List spacing={2}>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Pairwise comparisons:</Text> Conduct detailed pairwise analyses between the three surgical techniques using appropriate effect size measures (such as phi coefficient or odds ratios) to understand better which specific technique comparisons drive the observed differences in reoperation rates.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Mechanism exploration:</Text> Investigate specific factors that explain the differences in reoperation rates, such as technical challenges, anatomical considerations, surgeon experience, or patient-specific factors. Understanding why mixed endoscopic techniques show lower reoperation rates could inform technical refinements.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Long-term follow-up studies:</Text> Extend the follow-up period beyond 24 months to assess the durability of treatment outcomes and evaluate the impact of surgical technique on long-term postoperative complications and patient quality of life.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Subgroup analyses:</Text> Examine whether the association between surgical technique and reoperation varies across patient subgroups defined by age, diverticulum size, symptom severity, or comorbidities. This could help identify which patients benefit most from specific surgical approaches.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Multi-center trials:</Text> Conduct larger, multi-center studies to increase sample size and improve precision of effect size estimates. This would also help assess generalizability across different practice settings and surgeon expertise levels.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Patient-centered outcomes:</Text> Expand outcome assessment beyond reoperation rates to include quality of life measurements, symptom resolution, procedural complications, recovery time, and patient satisfaction to provide a more comprehensive evaluation of treatment effectiveness.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Cost-effectiveness analysis:</Text> Evaluate the economic implications of each surgical technique, considering initial procedure costs, reoperation rates, and long-term healthcare utilization to inform resource allocation decisions.
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

Example1.title = "Comparative Analysis of Transcervical, Transoral Stapling, and Mixed Endoscopic Techniques for Zenker's Diverticulum: A Randomized Clinical Trial";

export default Example1;

