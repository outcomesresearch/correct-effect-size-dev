import { Text, Stack, Tabs, List } from "@mantine/core";

function Example2() {
  return (
    <Stack gap="md">
      <Text fs={'italic'} mt={0}>
        Is there a difference in the mean hemoglobin value after 6 weeks of therapy among adult patients with end-stage kidney disease and anemia who receive different erythropoietin-stimulating agents (ESA) - epoetin alfa, darbepoetin alfa, or methoxy polyethylene glycol-epoetin beta?
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
                The study population consists of 45 adult patients with end-stage kidney disease and anemia. They were identified from a pool of patients at a healthcare institution specializing in kidney disease treatment.
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Variables Under Study:</Text>
              <Stack gap={0}>
                <Text fw={500}>Independent/predictor/exposure:</Text>
                <Text>The independent/predictor/exposure variable is the administration of three different erythropoietin-stimulating agents (ESA) protocols - epoetin alfa (n=15), darbepoetin alfa (n=15), or methoxy polyethylene glycol-epoetin beta (n=15).</Text>
              </Stack>
              <Stack gap={0}>
                <Text fw={500}>Dependent/outcome:</Text>
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
                Hedge&apos;s <Text span fs="italic">g</Text> will be used as the effect size measure to demonstrate the magnitude of the difference in hemoglobin values between the pairwise comparisons of the three drug interventions.
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Minimal Clinically Important Difference (MCID)</Text>
              <Text>Not defined in this situation.</Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Effect Size Measure Definition: Hedge&apos;s <Text span fs="italic">g</Text></Text>
              <Text>
                Hedge&apos;s <Text span fs="italic">g</Text> is a standardized measure that represents the magnitude of the difference between two groups in terms of standard deviations, similar to Cohen&apos;s <Text span fs="italic">d</Text> and Glass&apos;s ∆. The difference is that it incorporates the correction of biases in small sample sizes, thus making it an unbiased estimator of the population effect size.
              </Text>
              <Text>
                Hedge&apos;s <Text span fs="italic">g</Text> is particularly useful when dealing with small sample sizes due to its bias correction.
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Interpretation</Text>
              <Text>The interpretation of Hedge&apos;s <Text span fs="italic">g</Text> as an absolute value is as follows:</Text>
              <List spacing={2}>
                <List.Item>
                  <Text>
                    <Text span fw={500}>0.00 to 0.19:</Text> Negligible effect size
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>0.20 to 0.39:</Text> Small effect size
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>0.40 to 0.59:</Text> Medium effect size
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>0.60 to 0.79:</Text> Large effect size
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>0.80 to 1.00:</Text> Very large effect size
                  </Text>
                </List.Item>
              </List>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="result" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Point Estimate</Text>
              <Text>The mean pre-study hemoglobin value for all three groups is 8.5 g/dL.</Text>
              <Text>
                After 6 weeks of therapy, the mean (±SD) hemoglobin values for the three groups are as follows: darbepoetin alfa - 10.3 (1.2) g/dL, methoxy polyethylene glycol-epoetin beta - 10.1 (1.3) g/dL, and epoetin alfa - 10.0 (1.1) g/dL.
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Pairwise Comparisons</Text>
              
              <Stack gap={0}>
                <Text fw={500}>1. Epoetin alfa vs. darbepoetin alfa</Text>
                <Text>Darbepoetin associated with increase of 0.3 g/dl hemoglobin as compared to epoetin alfa</Text>
                <List spacing={2}>
                  <List.Item>Hedge&apos;s <Text span fs="italic">g</Text> = 0.26</List.Item>
                  <List.Item>95% CI = 0.15 to 0.35</List.Item>
                </List>
              </Stack>

              <Stack gap={0}>
                <Text fw={500}>2. Epoetin alfa vs. methoxy polyethylene glycol-epoetin beta</Text>
                <Text>Methoxy polyethylene glycol-epoetin is associated with an increase of 0.1 g/dl hemoglobin as compared to epoetin alfa.</Text>
                <List spacing={2}>
                  <List.Item>Hedge&apos;s <Text span fs="italic">g</Text> = 0.08</List.Item>
                  <List.Item>95% CI = 0.01 to 0.15</List.Item>
                </List>
              </Stack>

              <Stack gap={0}>
                <Text fw={500}>3. Darbepoetin alfa vs. methoxy polyethylene glycol-epoetin beta</Text>
                <Text>Darbepoetin alfa is associated with an increase of 0.2 g/dl hemoglobin as compared to methoxy polyethylene glycol-epoetin beta.</Text>
                <List spacing={2}>
                  <List.Item>Hedge&apos;s <Text span fs="italic">g</Text> = 0.16</List.Item>
                  <List.Item>95% CI = 0.06 to 0.26</List.Item>
                </List>
              </Stack>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="discussion" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Interpretation of Results</Text>
              <Text>
                The results of the study suggest that there is a small difference in mean hemoglobin value after 6 weeks of therapy among the three different erythropoietin-stimulating agents. Darbepoetin alfa appears to have the largest increase in hemoglobin while methoxy polyethylene glycol-epoetin beta has the smallest increase. The upper bound of the confidence intervals suggest that no pairwise difference is greater than a small effect.
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Implications of Results</Text>
              <Text>
                The clinical significance of these differences needs to be further explored, but it seems unlikely to be clinically meaningful.
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Future Research</Text>
              <Text>
                <Text span fw={500}>Do Not Repeat the Study:</Text> Considering that the observed results are both precise and definitive, there generally is no need to conduct a repeat or similarly designed study, thus avoiding research waste. However, it&apos;s essential to acknowledge exceptions where replication studies can be particularly valuable, especially in diverse populations or settings, to validate the universality of findings. In most instances, prioritizing new research questions or unexplored avenues is more beneficial, ensuring efficient use of resources and the robustness of scientific inquiry.
              </Text>
              <Text>
                <Text span fw={500}>Explore Other Clinical and Patient-Reported Outcomes:</Text> Exploring other clinical outcomes and patient-reported outcomes may provide a comprehensive understanding of the benefits and risks associated with each drug intervention.
              </Text>
              <Text>
                <Text span fw={500}>Reduce Variability in the Measurement of Key Variables:</Text> To diminish variability and enhance precision, standardize measurements through methods like a Standard Operating Procedure (SOP) manual, validated assessments, and calibrated instruments. Additionally, evaluate the sensitivity and specificity of these measurement tools to ensure they can detect small but clinically significant changes. While promoting consistency is crucial, it&apos;s equally important to consider potential limitations of standardization, such as missing context-specific factors that might influence results. This comprehensive approach helps in accurately capturing the nuances of the study&apos;s outcomes.
              </Text>
              <Text>
                <Text span fw={500}>Improve Methodological Quality and Rigor of Subsequent Studies:</Text> Strengthen the study design, through rigorous randomization, blinding, and controlling confounding variables, to confirm and validate the findings of definitive negative studies. In this context, enhancing methodological rigor is crucial to ensure that negative results are not a product of study design flaws but are indeed reflective of the intervention&apos;s ineffectiveness. Such improvements are key to minimizing bias and enhancing the validity of conclusions. Researchers must navigate the practical challenges of implementing these methodologies while ensuring the study remains feasible and accurate.
              </Text>
              <Text>
                <Text span fw={500}>Utilize Technology-Assisted Data Collection:</Text> Employ technologies like wearables and mobile apps to provide real-time measurements and possibly refine data accuracy, crucial for re-examining negative results. This approach minimizes errors and variability, potentially revealing subtle effects that were initially overlooked. Enhanced data precision through technological assistance can provide deeper insights into treatment efficacy and help distinguish between true negative results and measurement limitations.
              </Text>
            </Stack>
          </Stack>
        </Tabs.Panel>
      </Tabs>
    </Stack>
  );
}

Example2.title = "A Randomized Clinical Trial Comparing the Effect of Three Different Erythropoietin-Stimulating Agents on Hemoglobin Levels in Adult Patients with End-Stage Kidney Disease and Anemia";

export default Example2;

