import { Text, Stack, Tabs, List } from "@mantine/core";

function Example2() {
  return (
    <Stack gap="md">
      <Text fs={'italic'} mt={0}>
        Among adults with asthma who are on a prescribed medication regimen, what is the strength of the association between medication adherence levels and disease control as measured by peak expiratory flow?
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
              <Text>Cross-sectional study, collecting data from patients with asthma who are on a prescribed medication regimen at a single time point.</Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Study Population:</Text>
              <Text>
                50 adults receiving care from a general medical clinic associated with an extensive urban multi-specialty group practice.
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Variables under Study:</Text>
              <List spacing="xs">
                <List.Item>
                  <Text>
                    Medication adherence levels (Excellent, Good, Adequate, Fair, Poor, Very Poor, Non-Adherent) are defined using pharmacy refill data.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    Peak expiratory flow is measured according to established clinical guidelines on a continuous scale.
                  </Text>
                </List.Item>
              </List>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Independent/Predictor/Exposure:</Text>
              <Text>
                Spearman&apos;s rho is a non-directional measure of correlation, so defining variables as independent (predictor/exposure) or dependent is not necessary. Furthermore, the cross-sectional study design does not inherently support the classification of variables as independent, predictor, or exposure.
              </Text>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="effectSize" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Effect Size Measure used in the Analytical Approach</Text>
              <Text>
                Spearman&apos;s rho is calculated to evaluate the strength and direction of the association between medication adherence and peak expiratory flow.
              </Text>
            </Stack>
            <Text>
              95% confidence interval (CI) is reported to indicate the precision of the estimate.
            </Text>
            <Stack gap={0}>
              <Text fw={500}>Minimal Clinically Important Difference (MCID)</Text>
              <Text>
                Before conducting the study, the investigators determined that a Spearman&apos;s rho of 0.40 or greater (moderate association) would be clinically important.
              </Text>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="result" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Point Estimate:</Text>
              <Text>Spearman&apos;s rho between medication adherence levels and disease control = -0.28</Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Confidence Interval:</Text>
              <Text>95% CI = -0.44 to -0.12</Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Probability Value (<Text span fs="italic">p</Text>-value):</Text>
              <Text><Text span fs="italic">P</Text> = 0.895</Text>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="discussion" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Interpretation of Results</Text>
              <Text>
                The Spearman&apos;s rho of -0.28 suggests a weak negative relationship between medication adherence levels and disease control in asthma.
              </Text>
            </Stack>
            <Text>
              The researchers can conclude with 95% confidence that the actual value for the negative correlation coefficient (ρ) between medication adherence levels and disease control in the population could be moderate (ρ = -0.44) to very weak (ρ = -0.12). In this case, the 95% confidence interval (CI) around the correlation coefficient is considered imprecise because the range includes values indicating moderate, weak, and very weak associations. Thus, this study provides limited evidence about the true strength of the relationship.
            </Text>
            <Text>
              The probability value (<Text span fs="italic">p</Text>-value) of 0.895 indicates that the likelihood of obtaining a Spearman&apos;s rho (ρ) of -0.28 or greater by chance alone, assuming there is no relationship between these two variables, is exceptionally high. Therefore, the investigators cannot reject the null hypothesis of no relationship. The strength of the association, as indicated by the correlation coefficient, should be considered more closely than the <Text span fs="italic">p</Text>-value alone to understand the practical significance of the results.
            </Text>

            <Stack gap={0}>
              <Text fw={500}>Implications of Results</Text>
              <Text>
                This exploratory study provides initial evidence of a potential negative association between higher medication adherence levels and better disease control. However, the weak association and wide CI indicate considerable uncertainty.
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Future Research</Text>
              <List spacing="xs">
                <List.Item>
                  <Text>
                    <Text span fw={500}>Larger Sample Size:</Text> Conduct a larger-scale study to obtain more precise estimates of the correlation.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Reduce the Number of Chronic Diseases Studied:</Text> The investigators did not exclude subjects with other chronic medical conditions and this likely introduced a large amount of variation that contributes to the imprecision of the estimate. The investigator may want to exclude subjects with multiple other chronic comorbid health conditions to more accurately explore the relationship between medication adherence and asthma control.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Reduce Variability in the Measurement of the Key Variables:</Text> Variability and imprecision in the measurements can be reduced with attention to standardizing the measurements with a variety of different techniques, including creating a standard operating procedure (SOP) manual, standardize and validate the assessment of medication adherence levels, and calibrate the instruments used to measure the various measures of disease control.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Comprehensive Data Collection:</Text> Collect additional data on potential confounding variables, such as severity of overall comorbid health conditions, socioeconomic status, healthcare access, and psychosocial factors.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Objective Adherence Measures:</Text> Incorporate objective measures of medication adherence (e.g., electronic pill bottles, pharmacy records) to reduce self-report bias.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Patient Education and Support:</Text> Develop and evaluate interventions that target improving medication adherence in patients with chronic conditions.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Health System Interventions:</Text> Investigate the impact of healthcare system-level interventions (e.g., electronic reminders, pharmacist consultations) on medication adherence and disease control.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Subgroup Analyses:</Text> Explore whether the relationship between medication adherence and disease control varies by severity of asthma or specific medication regimens.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Longitudinal Studies:</Text> Conduct longitudinal studies to examine changes in medication adherence levels and disease control over time and assess causality.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Controlled Interventions:</Text> Randomized controlled trials to investigate the impact of interventions (e.g., medication adherence interventions) on disease control outcomes would be the ideal way to assess the relationship. However, the current exploratory study showing a weak association is unlikely to be adequate evidence to support a proposed clinical trial. Additional observational studies with stronger methodology are required to explore a possible association before moving on to a controlled intervention trial.
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

Example2.title = "Medication Adherence Levels and Disease Control in Asthma: An Exploratory Analysis";

export default Example2;

