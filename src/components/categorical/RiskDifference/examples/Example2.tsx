import { Text, Stack, Tabs, List } from "@mantine/core";

function Example2() {
  return (
    <Stack gap="md">
      <Text fs={'italic'} mt={0}>
        In patients with primary open-angle glaucoma, what is the effect of medication A, medication B, or medication C on the risk of developing glaucoma progression?
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
              <Text>
                This study is a randomized controlled trial (RCT). The study followed participants over 2 years, utilizing regular follow-up visits, visual field tests, and optic nerve evaluations to assess glaucoma progression.
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Study Population:</Text>
              <List spacing={2}>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Number of participants:</Text> The study population consists of 750 individuals aged 40 and above who have been diagnosed with primary open-angle glaucoma.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Location of recruitment:</Text> Participants were recruited from ophthalmology clinics in a tertiary care center.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Inclusion/exclusion criteria:</Text> New diagnosis of primary open-angle glaucoma without previous medical treatment.
                  </Text>
                </List.Item>
              </List>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Variables Under Study:</Text>
              <Stack gap={0}>
                <Text fw={500}>Independent/Predictor/Exposure:</Text>
                <Text>
                  The independent variable is the type of medication intervention. Group 1 (n=250) received medication A, Group 2 (n=250) received medication B, and Group 3 (n=250) received medication C.
                </Text>
              </Stack>
              <Stack gap={0}>
                <Text fw={500}>Dependent/Outcome:</Text>
                <Text>
                  The dependent variable is the risk of developing glaucoma progression (yes/no).
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
                The effect size measure used in this study is the risk difference (RD). It quantifies the absolute difference in risk of glaucoma progression between different medication groups.
              </Text>
              <Text>
                The risk difference and 95% confidence intervals can be calculated for the pair-wise comparisons between the three groups (Group 1 vs. Group 2, Group 1 vs. Group 3, Group 2 vs. Group 3). These values provide estimates of the effect size and the precision of the estimates between the intervention groups.
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Minimal Clinically Important Difference (MCID):</Text>
              <Text>
                Before the study, the investigators surveyed a group of expert ophthalmologists and determined that a risk difference of 10% or more in the rate of glaucoma progression is considered clinically meaningful. Thus, the investigators declared the MCID for the risk difference for this study to be 10% or greater.
              </Text>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="result" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Point Estimate:</Text>
              <List spacing={2}>
                <List.Item>Group 1 (Medication A): Risk of glaucoma progression was 20% (50/250)</List.Item>
                <List.Item>Group 2 (Medication B): Risk of glaucoma progression was 35% (88/250)</List.Item>
                <List.Item>Group 3 (Medication C): Risk of glaucoma progression was 28% (70/250)</List.Item>
              </List>
              <Text mt="sm">
                <Text span fw={500}>Group 1 (Medication A) vs. Group 2 (Medication B):</Text> Risk difference = 15% reduction (Medication A has 15% lower absolute risk than Medication B)
              </Text>
              <Text>
                <Text span fw={500}>Group 1 (Medication A) vs. Group 3 (Medication C):</Text> Risk difference = 8% reduction (Medication A has 8% lower absolute risk than Medication C)
              </Text>
              <Text>
                <Text span fw={500}>Group 3 (Medication C) vs. Group 2 (Medication B):</Text> Risk difference = 7% reduction (Medication C has 7% lower absolute risk than Medication B)
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Confidence Interval:</Text>
              <List spacing={2}>
                <List.Item>
                  <Text>
                    Group 1 (Medication A) vs. Group 2 (Medication B): 95% CI [8%, 22%], indicating a reasonably precise estimate.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    Group 1 (Medication A) vs. Group 3 (Medication C): 95% CI [1%, 15%], indicating a reasonably precise estimate.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    Group 3 (Medication C) vs. Group 2 (Medication B): 95% CI [0%, 14%], indicating a reasonably precise estimate.
                  </Text>
                </List.Item>
              </List>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Probability Value (<Text span fs="italic">P</Text>-value):</Text>
              <List spacing={2}>
                <List.Item>Group 1 (Medication A) vs. Group 2 (Medication B): <Text span fs="italic">p</Text> &lt; 0.001</List.Item>
                <List.Item>Group 1 (Medication A) vs. Group 3 (Medication C): <Text span fs="italic">p</Text> = 0.02</List.Item>
                <List.Item>Group 3 (Medication C) vs. Group 2 (Medication B): <Text span fs="italic">p</Text> = 0.048</List.Item>
              </List>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="discussion" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Interpretation of Results:</Text>
              <Text>
                These results suggest that Medication A demonstrates the lowest risk of glaucoma progression (20%), followed by Medication C (28%), and then Medication B (35%).
              </Text>
              <Text>
                The comparison between Medication A and Medication B shows a 15% absolute risk reduction, which exceeds the MCID of 10%. The confidence interval (8% to 22%) is reasonably precise, and the lower bound (8%) is slightly less than the MCID value of 10%. Thus, the investigators cannot conclude with certainty that Medication A is definitively clinically superior to Medication B. However, the preponderance of values for the risk difference, contained within the lower and upper bounds of the 95% CI, does suggest that Medication A is better than Medication B by an amount considered clinically meaningful.
              </Text>
              <Text>
                The comparison between Medication A and Medication C shows an 8% absolute risk reduction, which is below the MCID of 10%. The confidence interval (1% to 15%) crosses the MCID threshold, indicating uncertainty about whether this difference is clinically meaningful. While statistically significant, the clinical significance remains indeterminate.
              </Text>
              <Text>
                The comparison between Medication C and Medication B shows a 7% absolute risk reduction, which is below the MCID of 10%. The confidence interval (0% to 14%) crosses both the null value and the MCID threshold, indicating substantial uncertainty about both statistical and clinical significance.
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Implications of Results:</Text>
              <Text>
                Assuming there is no significant difference in cost or adverse effects among the three medications, Medication A should be considered as the preferred treatment option for patients with newly diagnosed open-angle glaucoma to prevent glaucoma progression. The comparison of Medication A to Medication B provides the strongest evidence, with a clinically meaningful risk reduction suggested by most values within the confidence interval.
              </Text>
              <Text>
                The relative positioning of Medication C compared to both Medication A and Medication B is less clear, with risk differences that do not consistently exceed the MCID threshold. Additional research may be needed to clarify the clinical significance of differences involving Medication C.
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Recommendations for Future Research:</Text>
              <Text>
                Based on the results of the pairwise comparisons between the three groups, the following research strategies are recommended:
              </Text>
              <Text>
                <Text span fw={500}>For comparisons where results are indeterminate or require further validation (particularly Medication A vs. Medication C and Medication C vs. Medication B):</Text>
              </Text>
              <List spacing={2}>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Conduct Additional Research with Increased Sample Size:</Text> To obtain more precise estimates of the effect size, conduct the study with a larger sample size. This approach enables authors and readers to be more certain of where the actual effect size value lies and whether the results are compatible with clinically meaningful effects. However, resource constraints, such as funding, time, and participant availability, should be considered.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Improve Study Quality by Reducing Error:</Text> Enhance the reliability and precision of effect size estimates by minimizing both random and systematic errors. Adherence to Good Clinical Practice (GCP) guidelines is a highly effective strategy for promoting standardized processes, ensuring data quality, enhancing patient safety, and ensuring rigorous oversight.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Improve Methodological Quality and Rigor:</Text> Enhance the study design via randomization, blinding, and control of confounding variables to address uncertainties in indeterminate study outcomes. These enhancements are critical for reducing bias and increasing the reliability of results.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Reduce Variability in Measurement:</Text> Standardize measurements through methods like Standard Operating Procedure (SOP) manuals, validated assessments, and calibrated instruments. Additionally, evaluate the sensitivity and specificity of measurement tools to ensure they can detect clinically significant changes.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Pursue an Adaptive Trial Design:</Text> Adaptive trial designs allow for modifications to the study protocol based on interim data analysis, providing a flexible approach to refining research as it progresses and potentially resolving areas of uncertainty.
                  </Text>
                </List.Item>
              </List>
              <Text>
                <Text span fw={500}>For the comparison where results suggest clinical superiority (Medication A vs. Medication B):</Text>
              </Text>
              <List spacing={2}>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Progress to Dissemination & Implementation (D&I):</Text> Move towards disseminating and implementing Medication A as a preferred intervention into real-world clinical practice. This involves translating research findings into practical applications and addressing the challenges associated with the adoption of evidence-based interventions in healthcare settings.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Create a Multidisciplinary Team:</Text> Assemble a multidisciplinary team of investigators and health-service researchers with diverse expertise to comprehensively address the multifaceted challenges of dissemination and implementation. This may include ophthalmologists, implementation scientists, health economists, and other relevant stakeholders. Although facilitating the coordination and communication across various professions can be challenging, the end results obtained by a heterogenous team can be deeply informative.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Implement Health System-Level Interventions:</Text> Explore interventions at the health system level to facilitate the integration of Medication A into routine clinical practice as a first-line treatment. This involves collaborating with healthcare administrators and policymakers at an organizational level as well as addressing potential resistance (established practices, cultural norms, medication formulary constraints) to change.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Adapt and Tailor:</Text> Refine the process of customizing the intervention to different populations by systematically developing, testing, and refining adaptations. Document how each modification is made to maintain the core elements of the intervention while ensuring its effectiveness across diverse settings and populations.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Investigate Cost-Effectiveness:</Text> Conduct economic analyses comparing the three medications to determine the cost-effectiveness of Medication A relative to alternatives. This information is crucial for healthcare policy decisions and resource allocation.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Subgroup Analyses:</Text> Investigate whether treatment effects vary across patient subgroups defined by age, disease severity, comorbidities, or genetic factors. This could identify patients who benefit most from each medication and support personalized treatment approaches.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Long-term Follow-up Studies:</Text> Extend the follow-up period beyond 2 years to assess the durability of treatment effects and identify any long-term differences in progression rates or adverse events among the three medications.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Pursue Policy Impact Studies:</Text> Investigate how your findings can inform and influence healthcare policy and practice at a systemic level. Engage with policymakers to advocate for evidence-based changes in glaucoma treatment guidelines that leverage your findings to improve patient outcomes and system efficiency.
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

Example2.title = "Comparative Effectiveness of Three Medications for Glaucoma Progression Prevention: A Randomized Controlled Trial (TRIPLE-G)";

export default Example2;

