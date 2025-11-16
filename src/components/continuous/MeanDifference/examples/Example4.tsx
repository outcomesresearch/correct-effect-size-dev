import { Text, Stack, Tabs, List } from "@mantine/core";

function Example4() {
  return (
    <Stack gap="md">
      <Text fs={'italic'} mt={0}>
        Among adults with lower back pain, is there a difference in short-term outcomes defined by the Oswestry Disability Index between physical therapy, use of opioid medication, or a mindfulness-based stress reduction (MBSR) therapy program?
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
                300 adults with chronic lower back pain and moderate disability are recruited from an outpatient general medical clinic.
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Variables under Study:</Text>
              <Stack gap={0}>
                <Text fw={500}>Independent/Predictor/Exposure:</Text>
                <Text>Type of intervention - physical therapy (n=100), use of opioid medication (n=100), or a mindfulness-based stress reduction (MBSR) therapy program (n=100).</Text>
              </Stack>
              <Stack gap={0}>
                <Text fw={500}>Dependent/Outcome:</Text>
                <Text>
                  Oswestry Disability Index (ODI) The ODI is comprised of 10 questions that ask patients about their ability to manage everyday life, and covers intensity of pain, lifting, ability to care for oneself, ability to walk, ability to sit, sexual function, ability to stand, social life, sleep quality, and ability to travel. Each question contains 6 statements that correlate to a score of 0 through 5, where the patient is to choose the statement that best matches their ability.
                </Text>
                <Text>
                  The final score/index ranges from 0-100, with 0 representing no disability and 100 representing total disability.
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
                The overall effect size for the comparison of ODI between the three study groups would be eta squared, but since we are interested in quantifying the pairwise differences of ODI score in each group from the other two study groups, mean difference (unstandardized) or Cohen&apos;s <Text span fs="italic">d</Text> (standardized) would be more informative and valuable.
              </Text>
              <Text>
                The difference in the post-intervention means ODI for the subjects randomized to the different treatments.
              </Text>
              <Text>
                The 95% CI around the difference in the mean values will be calculated as a measure of the precision of the estimate and to interpret the results in the light of clinical importance.
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Minimal Clinically Important Difference (MCID)</Text>
              <Text>
                Minimal clinically important difference (MCID) has been evaluated across numerous types of interventions and has been shown to vary significantly. It is generally agreed that 10 to 12 points on the ODI results in meaningful patient improvement.
              </Text>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="result" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Physical Therapy vs. Opioid Medication:</Text>
              <List spacing={2}>
                <List.Item>Mean ODI for Physical Therapy: 18.2 (SD = 11.3)</List.Item>
                <List.Item>Mean ODI for Opioid Medication: 24.5 (SD = 12.6)</List.Item>
                <List.Item>Difference in the means 6.3 (95% CI: 3.0 to 9.6)</List.Item>
                <List.Item>Probability value (<Text span fs="italic">p</Text>-value): &lt;0.001</List.Item>
              </List>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Physical Therapy vs. MBSR:</Text>
              <List spacing={2}>
                <List.Item>Mean ODI for Physical Therapy: 18.2 (SD = 11.3)</List.Item>
                <List.Item>Mean ODI for MBSR: 15.8 (SD = 12.2)</List.Item>
                <List.Item>Difference in means 2.4 (95% CI: -0.88 to 5.7)</List.Item>
                <List.Item>Probability value (<Text span fs="italic">p</Text>-value): 0.151</List.Item>
              </List>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Opioid Medication vs. MBSR:</Text>
              <List spacing={2}>
                <List.Item>Mean ODI for Opioid Medication: 24.5 (SD = 12.6)</List.Item>
                <List.Item>Mean ODI for MBSR: 15.8 (SD = 12.2)</List.Item>
                <List.Item>Difference in means: 8.7 (95% CI: 5.2 to 12.2)</List.Item>
                <List.Item>Probability value (<Text span fs="italic">p</Text>-value): &lt;0.001</List.Item>
              </List>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="discussion" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Interpretation of Results:</Text>
              <Text>
                <Text span fw={500}>Physical Therapy vs. Opioid Medication:</Text> The mean difference of 6.3 in favor of physical therapy is statistically significant (<Text span fs="italic">p</Text>&lt;0.001). However, all plausible population values (estimated by the 95% CI of 3.0 to 9.6) fall below the minimal clinically important difference (MCID) of 10-12 points. This indicates that while physical therapy produces statistically better outcomes than opioid medication, the difference does not reach the threshold for clinical importance.
              </Text>
              <Text>
                <Text span fw={500}>Physical Therapy vs. MBSR:</Text> The mean difference of 2.4 in favor of MBSR is not statistically significant (<Text span fs="italic">p</Text>=0.151) and falls well below the MCID threshold. The 95% CI (-0.88 to 5.7) indicates imprecision in the estimate and includes zero, suggesting the possibility of no true difference between these interventions. All values within this range are below the MCID, indicating no clinically meaningful difference between physical therapy and MBSR.
              </Text>
              <Text>
                <Text span fw={500}>Opioid Medication vs. MBSR:</Text> The mean difference of 8.7 in favor of MBSR is statistically significant (<Text span fs="italic">p</Text>&lt;0.001). The 95% CI (5.2 to 12.2) includes values below the MCID threshold (5.2 to 10) as well as values that would be considered clinically meaningful (10 to 12.2). This imprecision prevents a definitive conclusion about whether the difference is clinically meaningful, despite statistical significance.
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Implications of Results:</Text>
              <List spacing={2}>
                <List.Item>MBSR appears to be the most effective short-term treatment for chronic low back pain, as it is associated with the lowest ODI scores.</List.Item>
                <List.Item>Opioid medication is associated with the highest (worst) ODI scores, suggesting it may be less effective than the other treatments, although the differences do not consistently reach the threshold for clinical significance.</List.Item>
                <List.Item>Physical therapy effectiveness falls between MBSR and opioid therapy.</List.Item>
                <List.Item>Further research with larger sample sizes are needed to increase precision in estimating the true differences between these treatments. However, the 95% confidence intervals suggest that many of the observed differences, while statistically significant, may not reach the threshold for clinical importance (MCID of 10-12 points) and thus future studies of a similar design and study population are unlikely to be valuable.</List.Item>
              </List>
            </Stack>
          </Stack>
        </Tabs.Panel>
      </Tabs>
    </Stack>
  );
}

Example4.title = "Comparative Efficacy of Physical Therapy, Opioid Medication, and Mindfulness-Based Stress Reduction (MBSR) for Chronic Low Back Pain";

export default Example4;

