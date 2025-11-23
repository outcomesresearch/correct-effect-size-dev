import { Text, Stack, Tabs, List } from "@mantine/core";

function Example1() {
  return (
    <Stack gap="md">
      <Text fs={'italic'} mt={0}>
        Does the type of feedback (None, Positive, Negative) provided by physical therapists have an impact on the DASH questionnaire scores at the end of 8 weeks for patients with rotator cuff injury, as measured by the Cliff&apos;s delta effect size?
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
                Patients with rotator cuff injury were identified and recruited from orthopedic clinics or physical therapy practices. Inclusion criteria include individuals with a diagnosed rotator cuff injury, aged 18-65, and without any severe comorbidities.
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Variables under Study:</Text>
              <Stack gap={0}>
                <Text fw={500}>Independent/Predictor/Exposure:</Text>
                <Text>
                  Three different types of feedback provided by physical therapists: None (control group), Positive feedback, and Negative feedback.
                </Text>
              </Stack>
              <Stack gap={0}>
                <Text fw={500}>Dependent/Outcome:</Text>
                <Text>
                  DASH questionnaire score at the end of 8 weeks. The DASH (Disabilities of the Arm, Shoulder, and Hand) questionnaire is an ordinal measure where lower scores indicate better function and fewer symptoms, and higher scores indicate worse function and more severe symptoms.
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
                The effect size measure used is Cliff&apos;s delta (Δ), which assesses the ordinal association between the predictor (feedback type) and the dependent variable (DASH score). Cliff&apos;s delta is a non-parametric measure of effect size that quantifies the difference in probability of one random variable (e.g., a measurement in one group) being larger than another random variable (e.g., a measurement in another group). It is beneficial when dealing with ordinal data or when the assumption of normality is violated. Cliff&apos;s delta ranges from -1 to +1, where negative values indicate that one group tends to have lower scores than another, positive values indicate higher scores, and 0 means no difference.
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Minimal Clinically Important Difference (MCID):</Text>
              <Text>
                Not applicable for Cliff&apos;s delta as it measures the overall effect magnitude rather than a specific threshold difference. However, for context, a minimal clinically important difference of 10 points on the DASH scale is often cited in the literature.
              </Text>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="result" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>DASH score averages for the three feedback groups:</Text>
              <List spacing={2}>
                <List.Item>No feedback group: Average DASH score = 50</List.Item>
                <List.Item>Positive feedback group: Average DASH score = 30</List.Item>
                <List.Item>Negative feedback group: Average DASH score = 70</List.Item>
              </List>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Point Estimate:</Text>
              <Text>
                Cliff&apos;s Delta value: Δ = 0.70, indicating a large effect size.
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Confidence Interval:</Text>
              <Text>
                95% CI [0.40, 1.00], indicating a wide confidence interval.
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Probability Value (<Text span fs="italic">P</Text>-value):</Text>
              <Text><Text span fs="italic">p</Text> &lt; 0.001, indicating a statistically significant difference.</Text>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="discussion" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Interpretation of Results:</Text>
              <Text>
                The results suggest that patients who received positive feedback from physical therapists had the lowest average DASH scores (30), indicating better functional status and fewer symptoms associated with their rotator cuff injury. The negative feedback group had the highest average DASH scores (70), indicating poorer outcomes and greater functional limitations. The non-feedback group showed intermediate results (50).
              </Text>
              <Text>
                The large Cliff&apos;s Delta value of 0.70 suggests a substantial difference in the DASH scores between the feedback groups, indicating that there is a 70% probability that a randomly selected patient from a more favorable feedback group will have a better (lower) DASH score than a randomly selected patient from a less favorable feedback group. This represents a large effect according to standard interpretation guidelines (Δ ≥ 0.33).
              </Text>
              <Text>
                However, the wide confidence interval (0.40 to 1.00) indicates considerable uncertainty about the precise magnitude of the effect. While the lower bound (0.40) still falls within the large effect range, and the entire interval excludes small effects, the wide range prevents definitive conclusions about the exact effect size based on this single study. The upper bound reaching 1.00 (the maximum possible value) suggests the study may have been underpowered to estimate the effect precisely.
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Implications of Results:</Text>
              <Text>
                The results from this study imply that the type of feedback provided by physical therapists has a clinically meaningful impact on the functional limitations and symptoms experienced by patients with rotator cuff injuries. Specifically, positive feedback appears to enhance patient outcomes considerably, while negative feedback may be detrimental to recovery.
              </Text>
              <Text>
                These findings have important clinical implications for physical therapy practice. Physical therapists should be trained to provide predominantly positive, encouraging feedback to patients during rehabilitation for rotator cuff injuries. Healthcare organizations should consider implementing feedback training programs for physical therapists, emphasizing the therapeutic value of positive reinforcement and the potential harm of negative feedback.
              </Text>
              <Text>
                The substantial effect size suggests that feedback type is not merely a minor factor but rather a major determinant of rehabilitation outcomes. This highlights the importance of the therapist-patient relationship and communication style in achieving optimal functional recovery.
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Future Research:</Text>
              <List spacing={2}>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Increased sample size studies:</Text> Conduct studies with larger sample sizes to narrow the confidence interval and obtain more precise estimates of the effect size, allowing for more definitive conclusions about the magnitude of the feedback effect.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Mechanism exploration:</Text> Investigate the specific mechanisms or aspects of positive feedback that contribute to better results. This could include examining whether the effects are mediated by increased patient motivation, improved self-efficacy, better adherence to exercises, reduced pain catastrophizing, or enhanced neuroplasticity.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Feedback content analysis:</Text> Analyze the specific content, frequency, timing, and delivery methods of positive versus negative feedback to identify the most effective feedback strategies. This could involve coding and categorizing actual therapist-patient interactions.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Individual differences:</Text> Examine individual patient characteristics such as personality traits, baseline psychological status, coping styles, or response patterns to different feedback types to identify who benefits most from specific feedback approaches. This could enable personalized feedback strategies.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Long-term outcomes:</Text> Explore long-term effects and sustainability of the observed differences in DASH scores at 6 months, 1 year, and beyond to determine whether feedback effects persist or diminish over time.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Dose-response relationships:</Text> Investigate whether there is a dose-response relationship between the frequency or intensity of positive feedback and patient outcomes.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Comparative studies across conditions:</Text> Replicate this study design with other musculoskeletal conditions or injury types to assess the generalizability of feedback effects beyond rotator cuff injuries.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Training interventions:</Text> Develop and evaluate training programs for physical therapists focused on providing effective positive feedback, and assess whether such training improves patient outcomes in real-world clinical settings.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Mixed feedback approaches:</Text> Investigate whether certain combinations of feedback types (e.g., predominantly positive with strategic corrective feedback) might be more effective than purely positive feedback alone.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Mediator and moderator analyses:</Text> Conduct statistical analyses to identify potential mediators (mechanisms through which feedback affects outcomes) and moderators (factors that influence the strength of feedback effects) of the relationship between feedback type and functional outcomes.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Cost-effectiveness analysis:</Text> Evaluate the cost-effectiveness of implementing feedback training programs for physical therapists, considering the potential for improved patient outcomes and reduced need for extended rehabilitation.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Patient perspectives:</Text> Conduct qualitative research to understand patients&apos; perceptions and experiences of different types of feedback, including how feedback influences their engagement, motivation, and confidence during rehabilitation.
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

Example1.title = "Impact of Feedback from Physical Therapists on DASH Scores in Patients with Rotator Cuff Injury: A Longitudinal Study Assessing Different Feedback Types";

export default Example1;

