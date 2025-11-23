import { Text, Stack, Tabs, List } from "@mantine/core";

function Example1() {
  return (
    <Stack gap="md">
      <Text fs={'italic'} mt={0}>
        In patients with primary open-angle glaucoma, does medication A reduce the risk of developing glaucoma progression compared to medication B?
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
                    <Text span fw={500}>Number of participants:</Text> The study population consists of 500 individuals aged 40 and above who have been diagnosed with primary open-angle glaucoma.
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
                <Text fw={500}>Independent variable (exposure):</Text>
                <Text>
                  The intervention group (n=250) received medication A, while the control group (n=250) received medication B.
                </Text>
              </Stack>
              <Stack gap={0}>
                <Text fw={500}>Dependent variable (outcome):</Text>
                <Text>
                  The dependent variable is the risk of developing glaucoma progression.
                </Text>
              </Stack>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="effectSize" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Effect size measure:</Text>
              <Text>Risk difference in developing glaucoma progression.</Text>
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
              <Text fw={500}>Point Estimate</Text>
              <Text>
                In the intervention group (medication A), the risk of glaucoma progression was 20% (50/250), while in the control group (medication B), the risk was 35% (88/250). Thus, the risk difference in developing glaucoma progression was 15% (a reduction).
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>95% Confidence Interval:</Text>
              <Text>8% to 22%</Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Probability Value (<Text span fs="italic">p</Text>-Value):</Text>
              <Text><Text span fs="italic">p</Text> &lt; 0.001</Text>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="discussion" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Interpretation of Results</Text>
              <List spacing={2}>
                <List.Item>
                  <Text>
                    The results of this study indicate that medication A is associated with a significantly lower risk of glaucoma progression compared to medication B. The 15% absolute risk reduction in glaucoma progression is noteworthy and clinically relevant.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    The confidence interval (8% to 22%) suggests that the estimate is reasonably precise.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    The lower bound of the CI (8%) is slightly less than the MCID value of 10%. Thus, the investigators cannot conclude with certainty that medication A is definitively clinically superior to medication B. However, the preponderance of values for the risk difference, contained within the lower and upper bounds of the 95% CI, does suggest that medication A is better than medication B by an amount considered clinically meaningful.
                  </Text>
                </List.Item>
              </List>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Implications of Results</Text>
              <Text>
                Assuming there is no significant difference in cost or adverse effects, medication A should be considered over medication B for the treatment of patients with newly diagnosed open-angle glaucoma, to prevent glaucoma progression.
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Recommendations for Future Research</Text>
              <Text>
                While the lower bound of the confidence interval (8%) is slightly less than the MCID value of 10%, most values within the 95% CI suggest that Medication A is clinically better than Medication B. If the investigators interpret these results as indeterminate or require further validation, the following strategies can strengthen evidence:
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
                Else if the investigators interpret these results as definitive, where the overall difference between groups is large, and the confidence interval around the effect size is narrow and nearly all is above the MCID, the following strategies should be considered:
              </Text>
              <List spacing={2}>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Progress to Dissemination & Implementation (D&I):</Text> Move towards disseminating and implementing the intervention into real-world clinical practice. This involves translating research findings into practical applications and addressing the challenges associated with the adoption of evidence-based interventions in healthcare settings.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Create a Multidisciplinary Team:</Text> Assemble a multidisciplinary team of investigators and health-service researchers with diverse expertise to comprehensively address the multifaceted challenges of dissemination and implementation. This may include clinicians, implementation scientists, health economists, and other relevant stakeholders. Although facilitating the coordination and communication across various professions can be challenging, the end results obtained by a heterogenous team can be deeply informative.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Implement Health System-Level Interventions:</Text> Explore interventions at the health system level to facilitate the integration of the successful intervention into routine clinical practice. This involves collaborating with healthcare administrators and policymakers at an organizational level as well as addressing potential resistance (established practices, cultural norms) to change.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Adapt and Tailor:</Text> Refine the process of customizing interventions to different populations by systematically developing, testing, and refining adaptations. Document how each modification is made to maintain the core elements of the intervention while ensuring its effectiveness across diverse settings and populations.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Investigate Alternative Delivery Modes:</Text> Explore the feasibility and effectiveness of delivering the intervention through alternative modes such as telehealth, digital platforms, or mobile applications. This can expand the reach of the intervention and increase accessibility for a larger population.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>Pursue Policy Impact Studies:</Text> Investigate how your findings can inform and influence healthcare policy and practice at a systemic level. For positive results, this involves analyzing how the effective intervention can be integrated into existing healthcare systems, potentially leading to the development of new guidelines or the enhancement of current practices. Engage with policymakers to advocate for evidence-based changes that leverage your findings to improve patient outcomes and system efficiency. Examine the broader implications of adopting this intervention in practice, considering aspects like healthcare access, quality, and economic impacts.
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

Example1.title = "Optimal Medication for Glaucoma Intervention in Comparative Analysis (OPTIMA)";

export default Example1;

