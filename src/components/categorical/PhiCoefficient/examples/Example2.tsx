import { Text, Stack, Tabs, List } from "@mantine/core";

function Example2() {
  return (
    <Stack gap="md">
      <Text fs={'italic'} mt={0}>
        In children with acute peritonsillar abscess, what is the effect of antibiotics only, incision and drainage with antibiotics, or tonsillectomy on the rate of recurrence of peritonsillar abscess within the next 24 months?
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
                The study population consists of children diagnosed with acute peritonsillar abscess. Participants are identified through collaboration with pediatric clinics, hospitals, and otolaryngology departments.
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Variables under Study:</Text>
              <Stack gap={0}>
                <Text fw={500}>Independent/Predictor/Exposure:</Text>
                <Text>
                  The independent variable in this study is the type of intervention. The experimental group 1 receives antibiotics only, the experimental group 2 undergoes incision and drainage with antibiotics, and the experimental group 3 undergoes tonsillectomy.
                </Text>
              </Stack>
              <Stack gap={0}>
                <Text fw={500}>Dependent/Outcome:</Text>
                <Text>
                  The dependent variable is the rate of recurrence of peritonsillar abscess, categorized as &quot;Yes&quot; or &quot;No&quot;, indicating whether the child experiences another episode within the next 24 months.
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
                The effect size measure used in this study is the Phi Coefficient. It quantifies the strength and direction of association between the different interventions and the rate of recurrence of peritonsillar abscess.
              </Text>
              <Text>
                The Phi Coefficient and 95% confidence intervals can be calculated for the pair-wise comparisons between the three interventions (Group 1 vs. Group 2, Group 1 vs. Group 3, Group 2 vs. Group 3). These values provide estimates of the effect size and the precision of the estimates between the interventions.
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Minimal Clinically Important Difference (MCID):</Text>
              <Text>Not applicable in this situation</Text>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="result" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Point Estimate:</Text>
              <List spacing={2}>
                <List.Item>
                  <Text>
                    Group 1 (Antibiotics only) vs. Group 2 (Incision and drainage with antibiotics): Phi Coefficient = 0.11, indicating a small effect size.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    Group 1 (Antibiotics only) vs. Group 3 (Tonsillectomy): Phi Coefficient = 0.34, indicating a medium effect size.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    Group 2 (Incision and drainage with antibiotics) vs. Group 3 (Tonsillectomy): Phi Coefficient = 0.09, indicating a small effect size.
                  </Text>
                </List.Item>
              </List>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Confidence Interval:</Text>
              <List spacing={2}>
                <List.Item>
                  <Text>
                    Group 1 (Antibiotics only) vs. Group 2 (Incision and drainage with antibiotics): 95% CI [0.08, 0.14], indicating a precise estimate.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    Group 1 (Antibiotics only) vs. Group 3 (Tonsillectomy): 95% CI [0.32, 0.36], indicating a precise estimate.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    Group 2 (Incision and drainage with antibiotics) vs. Group 3 (Tonsillectomy): 95% CI [0.06, 0.12], indicating a precise estimate.
                  </Text>
                </List.Item>
              </List>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="discussion" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Interpretation of Results</Text>
              <Text>
                These results suggest that the lowest rate of recurrence is observed after tonsillectomy (Group 3), while the highest rate is associated with antibiotics only (Group 1). The effect sizes indicate a smaller difference between Group 1 and Group 2 (Antibiotics vs. Incision and drainage with antibiotics), a medium difference between Group 1 and Group 3 (Antibiotics vs. Tonsillectomy), and a smaller difference between Group 2 and Group 3 (Incision and drainage with antibiotics vs. Tonsillectomy).
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Implications of Results</Text>
              <Text>
                The results of this study can elucidate the effectiveness of different interventions for preventing the recurrence of peritonsillar abscess in children. It can guide clinicians in making evidence-based decisions regarding the optimal management strategy for this condition.
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Future Research</Text>
              <Text>
                Based on the results of the pairwise comparisons between the three groups, there are a few potential areas for future research in this field:
              </Text>
              <List spacing={2}>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Long-term follow-up:</Text> Conducting a study with a longer follow-up period could provide insights into the durability of the interventions and their impact on recurrence rates over time. This would help determine whether the observed differences in recurrence rates persist in the long term.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Patient characteristics:</Text> Investigate the influence of patient-specific factors on treatment outcomes. Factors such as age, comorbidities, severity of the abscess, and anatomical considerations may play a role in the effectiveness of different interventions. Analyzing these variables may help inform treatment decisions and identify patient subgroups that may benefit more from specific interventions.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Cost-effectiveness analysis:</Text> Evaluate the cost-effectiveness of each intervention to help guide healthcare decision-makers in allocating resources. Understanding the economic implications of each treatment option can assist in determining the most efficient use of healthcare resources while considering the clinical benefits.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Patient-centered outcomes:</Text> Expand the research to incorporate patient-centered outcomes, such as quality-of-life measurements, pain levels, and patient satisfaction. This would provide a more comprehensive understanding of the impact of different interventions on the overall well-being and experience of the patients.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Comparative effectiveness studies:</Text> Conduct these studies to compare not only the interventions used in this study but also other potential treatment options, such as minimally invasive procedures or alternative antibiotic regimens. Comparing these interventions head-to-head can provide additional insights into their relative effectiveness and guide treatment decisions.
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

Example2.title = "Assessing Interventions for Peritonsillar Abscess Recurrence in Children: Antibiotics, Drainage, or Tonsillectomy?";

export default Example2;

