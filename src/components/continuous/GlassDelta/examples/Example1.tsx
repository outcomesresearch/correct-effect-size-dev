import { Text, Stack, Tabs, List } from "@mantine/core";

function Example1() {
  return (
    <Stack gap="md">
      <Text fs={'italic'} mt={0}>
        Among adults with moderate acne vulgaris, does the application of benzoyl peroxide gel compared to salicylic acid result in a greater reduction in the number of inflammatory acne lesions?
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
              <Text>Randomized controlled trial (RCT)</Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Study Population:</Text>
              <Text>
                30 adults with moderate acne vulgaris; recruited from a dermatological outpatient clinic in an academic medical center
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Variables under Study:</Text>
              <Stack gap={0}>
                <Text fw={500}>Independent/Predictor/Exposure:</Text>
                <Text>Type of acne treatment (benzoyl peroxide gel (n=18) or salicylic acid (n=13))</Text>
              </Stack>
              <Stack gap={0}>
                <Text fw={500}>Dependent/Outcome:</Text>
                <Text>Reduction in the number of inflammatory acne lesions.</Text>
              </Stack>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="effectSize" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Effect Size Measure used in the Analytical Approach</Text>
              <Text>
                Glass&apos;s delta will be used to compare the difference in the mean number of inflammatory acne lesions among participants using salicylic acid or benzoyl peroxide gel.
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Minimal Clinically Important Difference (MCID)</Text>
              <Text>
                The minimal clinically important difference (MCID) was determined pre-study by an expert panel of dermatologists and is a difference of 2 in the mean number of inflammatory acne lesions.
              </Text>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="result" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Values represent mean (±SD) number of inflammatory acne lesions</Text>
              <Text>Salicylic acid: 5.9 (±0.9) Benzoyl peroxide gel: 5.7 (±0.6) Mean difference: 0.2 (95% CI: -0.39 to 0.79)</Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Point Estimate:</Text>
              <Text>Glass&apos; Δ = 0.33</Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Confidence Interval:</Text>
              <Text>95% confidence interval = -0.98 to 0.46</Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Probability Value (<Text span fs="italic">p</Text>-value):</Text>
              <Text><Text span fs="italic">p</Text>-value = 0.464</Text>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="discussion" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Interpretation of Results</Text>
              <Text>
                The mean difference of 0.2 and Glass&apos;s Delta of 0.33 suggests a small difference in the magnitude of the change in the number of inflammatory acne lesions based on treatment. The 95% CI around the mean difference is wide (-0.39 to 0.79) and thus the observed result from this study provides an imprecise estimate of the true value for the difference.
              </Text>
            </Stack>
            <Text>
              The upper bound of the 95% CI for the difference in the number of inflammatory lesions is 0.79, which is well below the minimal clinically important difference (MCID) value of 2 or greater acne lesions. In fact, of the 30 participants, only 4 (13%) had a reduction of more than 2 inflammatory acne lesions.
            </Text>
            <Text>
              The probability value (<Text span fs="italic">p</Text>-value) indicates that the likelihood that the observed value for the mean difference of 0.2 is different from 0, assuming there is no difference, is 0.464, which is higher than 0.05 and thus the difference is classified as &quot;not significant&quot;.
            </Text>

            <Stack gap={0}>
              <Text fw={500}>Implication of Results</Text>
              <Text>
                Based on these findings, this study concludes that the difference between benzoyl peroxide gel and salicylic acid in reducing inflammatory acne lesions is very minor. However, the exact magnitude of the difference cannot be determined due to the imprecise estimates from this study.
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Future Research</Text>
              <List spacing="xs">
                <List.Item>
                  <Text>
                    <Text span fw={500}>Do Not Repeat the Study:</Text> Despite the wide confidence intervals, there is no need to conduct a repeat or similarly designed study as the upper bound of the CI is well below the clinically meaningful difference in the number of acne lesions of 2. However, it&apos;s important to recognize exceptions where replication studies can be valuable, especially in diverse populations or settings, to verify the universality of findings. In most instances, prioritizing new research questions or unexplored avenues is more beneficial, ensuring efficient use of resources and the robustness of scientific inquiry.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Reduce Variability in the Measurement of Key Variables:</Text> To diminish variability and enhance precision, standardize measurements through methods like a Standard Operating Procedure (SOP) manual, validated assessments, and calibrated instruments. Additionally, evaluate the sensitivity and specificity of these measurement tools to ensure they can detect small but clinically significant changes. While promoting consistency is crucial, it&apos;s equally important to consider potential limitations of standardization, such as missing context-specific factors that might influence results. This comprehensive approach helps in accurately capturing the nuances of the study&apos;s outcomes.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Improve Methodological Quality and Rigor of Subsequent Studies:</Text> Enhancing methodological rigor is crucial to ensure that negative results are not a product of study design flaws but are indeed reflective of the intervention&apos;s ineffectiveness. Such improvements are key to minimizing bias and enhancing the validity of conclusions. Researchers must navigate the practical challenges of implementing these methodologies while ensuring the study remains feasible and accurate.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Utilize Technology-Assisted Data Collection:</Text> Employ technologies to refine data accuracy, crucial for re-examining negative results. This approach minimizes errors and variability, potentially revealing subtle effects that were initially overlooked. Enhanced participant engagement through these technologies also contributes to higher quality data, aiding in a deeper understanding and reassessment of the study&apos;s conclusions.
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

Example1.title = "Efficiency of Benzoyl Peroxide Gel vs. Salicylic Acid in Reducing Inflammatory Acne Lesions: An RCT Perspective on Treatment Outcomes";

export default Example1;

