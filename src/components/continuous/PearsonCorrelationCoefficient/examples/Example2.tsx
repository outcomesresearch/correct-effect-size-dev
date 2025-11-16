import { Text, Stack, Tabs, List } from "@mantine/core";

function Example2() {
  return (
    <Stack gap="md">
      <Text fs={'italic'} mt={0}>
        Among older adults without known cognitive impairments or sleep disorders, what is the strength of association between nightly sleep duration and cognitive performance?
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
              <Text>Cross-sectional</Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Study Population:</Text>
              <Text>
                100 older adults (aged 60 years and older) recruited from community centers and senior living facilities.
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Variables under Study:</Text>
              <Text>
                Participants undergo assessments of sleep duration, measured objectively using actigraphy, and cognitive function using standardized neuropsychological tests assessing memory, attention, and executive function.
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Independent/Predictor/Exposure:</Text>
              <Text>
                Pearson correlation is not directional, therefore defining variables as independent and dependent is not necessary. A cross-sectional study design does not support defining variables as independent, predictor, or exposure.
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Dependent Outcome:</Text>
              <Text>
                Due to the cross-sectional study design, there is no dependent or outcome measure.
              </Text>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="effectSize" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Effect Size Measure used in the Analytical Approach</Text>
              <Text>
                The Pearson correlation coefficient (r) is calculated to measure the strength and direction of the association between nightly sleep duration and cognitive performance. The 95% confidence interval (CI) is reported to indicate the precision of the estimates.
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>
                Minimal Clinically Important Difference for Strength of Association
              </Text>
              <Text>
                The minimal clinically important difference (MCID) for the strength of association between sleep duration and cognitive function was not determined by the investigators, nor has it been established in the literature. However, based on Cohen&apos;s guidelines, a value of 0.4 (moderate association) might be considered a clinically meaningful association.
              </Text>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="result" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Point Estimate:</Text>
              <Text>
                Pearson Correlation Coefficient (r) between Sleep Duration and Cognitive Performance = 0.62
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Confidence Interval:</Text>
              <Text>95% CI = 0.32 to 0.92</Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Probability Value (p-value):</Text>
              <Text>p = 0.4</Text>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="discussion" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Interpretation of Results</Text>
              <Text>
                Using the interpretation guide, the Pearson correlation coefficient (r) of 0.62 indicates a moderate to strong positive correlation between nightly sleep duration and cognitive performance in older adults – longer sleep duration is associated with increased mental performance.
              </Text>
            </Stack>
            <Text>
              The researchers can conclude with 95% confidence that the actual value for the correlation coefficient (r) between nightly sleep duration and cognitive performance in older adults in the population could range from 0.32 (weak association) to 0.92 (very strong association). In this case, the 95% confidence interval (CI) around the correlation coefficient is considered imprecise because the range includes values indicating weak, moderate, strong, and very strong associations. Thus, this study provides limited evidence about the true strength of the relationship.
            </Text>
            <Text>
              The probability value (p-value) of 0.4 indicates that the likelihood of obtaining a Pearson correlation coefficient (r) of 0.62 or greater by chance alone, assuming there is no relationship between these two variables, is relatively high. Therefore, the investigators cannot reject the null hypothesis of no relationship. The strength of the association, as indicated by the correlation coefficient, should be considered more closely than the p-value alone to understand the practical significance of the results.
            </Text>

            <Stack gap={0}>
              <Text fw={500}>Implications of Results</Text>
              <Text>
                While the correlation coefficient value of 0.62 suggests a moderate to strong positive correlation, the imprecision in this estimate, as indicated by the wide confidence interval, provides limited evidence of the actual relationship between longer sleep duration and better cognitive function in older adults.
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Future Research</Text>
              <List spacing="xs">
                <List.Item>
                  <Text>
                    <Text span fw={500}>Conduct Additional Research with Increased Sample Size:</Text> To obtain more precise estimates of the effect size, conduct the study with a larger sample size. This approach enables authors and readers to be more certain of where the true effect size value lies and whether the results are compatible with clinically meaningful effects. However, it&apos;s important to consider that increasing sample size may not always be feasible in every research context. Resource constraints, such as funding, time, and participant availability, can significantly limit the ability to expand the study. Therefore, while planning to increase the sample size, researchers should also work to ensure that the study remains viable and efficient.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Improve Study Quality via Reduction of Error:</Text> Enhance the reliability and precision of effect size estimates by reducing both random and systematic errors. Adherence to Good Clinical Practice (GCP) guidelines, as described in the FDA&apos;s Code of Federal Regulations, is one effective strategy. GCP promotes standardized processes, data quality, patient safety, and rigorous oversight, all contributing to improved clinical research and evidence-based medicine. However, it&apos;s also vital to acknowledge that the potential for error reduction is influenced by the specific nature and inherent variability of the study population, making a one-size-fits-all approach impractical.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Improve Methodological Quality and Rigor of Subsequent Studies:</Text> Enhance the methodological quality of the study via control of confounding. In such studies, focusing on methodological improvements is essential for clarifying ambiguous findings. These enhancements are critical for reducing bias and increasing the reliability of results, providing clearer direction for future research. While pursuing these methodological ideals, researchers should also consider the practical challenges, such as logistical constraints and participant-related hurdles, to conduct feasible yet robust studies.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Reduce Variability in the Measurement of Key Variables:</Text> To diminish variability and enhance precision, standardize measurements through methods like a Standard Operating Procedure (SOP) manual, validated assessments, and calibrated instruments. Additionally, evaluate the sensitivity and specificity of these measurement tools to ensure they can detect small but clinically significant changes. While promoting consistency is crucial, it&apos;s equally important to consider potential limitations of standardization, such as missing context-specific factors that might influence results. This comprehensive approach enables the accurate capture of the study&apos;s outcomes&apos; nuances.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Utilize Technology-Assisted Data Collection:</Text> Employ technologies such as wearables and mobile apps to provide real-time measurements of sleep duration that are more accurate than actigraphy, potentially refining data accuracy and making it crucial for re-examining indeterminate results. This approach minimizes errors and variability, potentially revealing subtle effects that were initially overlooked. Enhanced participant engagement through these technologies also contributes to higher-quality data, aiding in a deeper understanding and reassessment of the study&apos;s conclusions.
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

Example2.title = "Association Between Sleep Duration and Cognitive Function in Older Adults: A Cross-Sectional Analysis";

export default Example2;

