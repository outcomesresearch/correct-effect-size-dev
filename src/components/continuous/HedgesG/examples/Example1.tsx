import { Text, Stack, Tabs, List } from "@mantine/core";

function Example1() {
  return (
    <Stack gap="md">
      <Text fs={'italic'} mt={0}>
        Is there a difference in mean hemoglobin value after 6 weeks of therapy between adult patients with end-stage kidney disease and anemia who receive epoetin alfa or darbepoetin alfa?
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
                The study population consists of 30 adult patients with end-stage kidney disease and anemia. They were identified from a pool of patients at a healthcare institution specializing in kidney disease treatment.
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Variables Under Study:</Text>
              <Stack gap={0}>
                <Text fw={500}>Independent/Predictor/Exposure:</Text>
                <Text>
                  The independent/predictor/exposure variable is the administration of two different erythropoietin-stimulating agents (ESA) protocols - epoetin alfa (n=15) and darbepoetin alfa (n=15).
                </Text>
              </Stack>
              <Stack gap={0}>
                <Text fw={500}>Dependent/Outcome:</Text>
                <Text>The dependent variable is the mean hemoglobin value after 6 weeks of therapy.</Text>
              </Stack>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="effectSize" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Effect Size Measure used in the Analytical Approach</Text>
              <Text>
                Hedge&apos;s g will be used as the effect size measure to demonstrate the magnitude of the difference in hemoglobin value between the two groups.
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Minimal Clinically Important Difference (MCID)</Text>
              <Text>
                The minimal clinically important difference (MCID) was not defined in this situation.
              </Text>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="result" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Point Estimate:</Text>
              <Text>
                The mean pre-study hemoglobin value for the 30 participants is 8.6 g/dl. The post-intervention mean (±SD) hemoglobin value for the epoetin alfa group is 10.0 (1.1) g/dL, while for the darbepoetin alfa group it is 10.3 (1.2) g/dL, for a difference (95% CI) of 0.3 g/dL (-0.56 to 1.2)
              </Text>
              <Text>The Hedge&apos;s <Text span fs="italic">g</Text> value is 0.25.</Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Confidence Interval:</Text>
              <Text>The 95% confidence interval for Hedge&apos;s <Text span fs="italic">g</Text> is narrow, ranging from 0.05 to 0.45.</Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Probability Value (<Text span fs="italic">p</Text>-value):</Text>
              <Text><Text span fs="italic">p</Text>-value = 0.48</Text>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="discussion" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Interpretation of Results:</Text>
              <Text>
                The difference in hemoglobin is only 0.3 g/dL, which is small in favor of darbepoetin alfa. However, the confidence interval is wide, and the probability value (<Text span fs="italic">p</Text>-value) is 0.48. Thus, the results are imprecise and neither statistically significant nor clinically meaningful.
              </Text>
            </Stack>
            <Text>
              The Hedge&apos;s <Text span fs="italic">g</Text> value of 0.25, indicates a small effect size and the upper bound of the confidence interval suggest the largest effect consistent with the study results (0.45) is barely large enough to be considered a medium effect.
            </Text>
            <Text>
              The results of the study suggest that there is a small difference in mean hemoglobin value after 6 weeks of therapy between patients receiving epoetin alfa and darbepoetin alfa but the difference is neither statistically nor clinically meaningful.
            </Text>

            <Stack gap={0}>
              <Text fw={500}>Implications of Results:</Text>
              <Text>
                This difference may not have significant clinical implications.
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Future Research</Text>
              <List spacing="xs">
                <List.Item>
                  <Text>
                    <Text span fw={500}>Reduce Variability in the Measurement of Key Variables:</Text> To minimize variability and enhance precision, standardize measurements through methods such as a Standard Operating Procedure (SOP) manual, validated assessments, and calibrated instruments, as seen in the measurement of hemoglobin. Additionally, evaluate the sensitivity and specificity of these measurement tools to ensure they can detect small but clinically significant changes. While promoting consistency is crucial, it&apos;s equally important to consider potential limitations of standardization, such as missing context-specific factors that might influence results. This comprehensive approach enables the accurate capture of the study&apos;s outcomes&apos; nuances.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Conduct Additional Research with Increased Sample Size:</Text> To obtain more precise estimates of the effect size, conduct the study with a larger sample size. This approach enables authors and readers to be more certain of where the actual effect size value lies and whether the results are compatible with clinically meaningful effects. However, it&apos;s essential to consider that increasing sample size may not always be feasible in every research context. Resource constraints, such as funding, time, and participant availability, can limit the ability to significantly expand the study. Therefore, while planning to increase the sample size, researchers should also work to ensure that the study remains viable and efficient.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Improve Study Quality via Reduction of Error:</Text> Enhance the reliability and precision of effect size estimates by reducing both random and systematic errors. Adherence to Good Clinical Practice (GCP) guidelines, as described in the FDA&apos;s Code of Federal Regulations, is one effective strategy. GCP promotes standardized processes, data quality, patient safety, and rigorous oversight, all contributing to improved clinical research and evidence-based medicine. However, it&apos;s also vital to acknowledge that the potential for error reduction is influenced by the specific nature and inherent variability of the study population, making a one-size-fits-all approach impractical.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Improve Methodological Quality and Rigor of Subsequent Studies:</Text> Enhance the study design, via randomization, blinding, and control of confounding variables, to address the uncertainties in indeterminate study outcomes. In such studies, focusing on methodological improvements is essential for clarifying ambiguous findings. These enhancements are critical for reducing bias and increasing the reliability of results, providing clearer direction for future research. While pursuing these methodological ideals, researchers should also consider the practical challenges, such as logistical constraints and participant-related hurdles, to conduct feasible yet robust studies.
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

Example1.title = "A Randomized Clinical Trial Comparing the Efficacy of Epoetin Alfa and Darbepoetin Alfa in Adult Patients with End-Stage Kidney Disease and Anemia";

export default Example1;

