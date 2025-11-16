import { Text, Stack, Tabs, List } from "@mantine/core";

function Example1() {
  return (
    <Stack gap="md">
      <Text fs={'italic'} mt={0}>
        What is the overall effect of different pain management interventions (standard opioid therapy, multimodal analgesia, and nerve block technique) on post-operative pain scores in patients undergoing knee replacement surgery?
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
              <Text>Randomized Controlled Trial</Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Study Population:</Text>
              <Text>
                The study population comprises 150 adult patients aged 50-80 years who are scheduled for elective knee replacement surgery. They were recruited from orthopedic surgery departments at three academic medical centers. Patients were randomized into three equal groups of 50 participants each.
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Variables under Study:</Text>
              <Stack gap={0}>
                <Text fw={500}>Independent/Predictor/Exposure:</Text>
                <Text>Pain management intervention type:</Text>
                <List spacing={2}>
                  <List.Item>Group 1: Standard opioid therapy (morphine-based protocol)</List.Item>
                  <List.Item>Group 2: Multimodal analgesia (combination of acetaminophen, NSAIDs, and reduced opioids)</List.Item>
                  <List.Item>Group 3: Nerve block technique (regional anesthesia with femoral nerve block)</List.Item>
                </List>
              </Stack>
              <Stack gap={0}>
                <Text fw={500}>Dependent/Outcome:</Text>
                <Text>
                  Post-operative pain scores measured using Visual Analog Scale (VAS) at 24 hours post-surgery (0-10 scale, where 0 = no pain and 10 = worst pain imaginable)
                </Text>
              </Stack>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="effectSize" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Effect Size Measure used in the Analytical Approach</Text>
              <Text>
                omega squared (ω²) as the effect size measure to quantify the proportion of the total variance in post-operative pain scores that can be attributed to the overall effect of pain management intervention type. This analysis focuses on understanding how much of the variability in pain outcomes can be explained by the choice of pain management approach across all three groups collectively.
              </Text>
              <Text>
                95% CI to indicate the precision of the estimate of the strength of the association.
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Minimal Clinically Important Difference (MCID)</Text>
              <Text>
                A difference of 1.0 point or greater on the VAS pain scale is considered clinically meaningful.
              </Text>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="result" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Point Estimate</Text>
              <Text>Mean (±SD) VAS pain scores by group:</Text>
              <List spacing={2}>
                <List.Item>Standard opioid therapy: 6.2 (±1.8)</List.Item>
                <List.Item>Multimodal analgesia: 4.1 (±1.5)</List.Item>
                <List.Item>Nerve block technique: 3.8 (±1.3)</List.Item>
              </List>
              <Text>Omega squared (ω²) value of 0.18</Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Confidence Interval</Text>
              <Text>95% CI 0.12 to 0.24</Text>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="discussion" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Interpretation of Results</Text>
              <Text>
                The study provides evidence that the overall effect of pain management intervention type accounts for 18% of the variance in postoperative pain scores. This represents a large effect size, indicating that the choice of pain management approach has a substantial impact on patient pain outcomes.
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Implications of Results</Text>
              <Text>
                The results demonstrate that the type of pain management intervention has a clinically meaningful impact on postoperative pain control. The nerve block technique and multimodal analgesia both showed superior pain control compared to standard opioid therapy. The large omega-squared value indicates that the intervention accounts for a substantial portion of the variance in pain outcomes, suggesting that clinical decision-making regarding pain management approach can significantly influence patient experience.
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Future Research</Text>
              <Text>
                Future research should investigate the long-term effects of these interventions on functional recovery and patient satisfaction. Additionally, cost-effectiveness analyses comparing these three approaches would inform healthcare policy decisions. Studies examining patient-specific factors that predict optimal response to each intervention type support personalized pain management strategies.
              </Text>
            </Stack>
          </Stack>
        </Tabs.Panel>
      </Tabs>
    </Stack>
  );
}

Example1.title = "Effectiveness of Three Pain Management Interventions on Post-Operative Pain Scores: A Randomized Controlled Trial";

export default Example1;

