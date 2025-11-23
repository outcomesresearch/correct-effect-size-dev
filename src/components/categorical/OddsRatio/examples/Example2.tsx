import { Text, Stack, Tabs, List } from "@mantine/core";

function Example2() {
  return (
    <Stack gap="md">
      <Text fs={"italic"} mt={0}>
        In adults undergoing abdominal surgery, does minimally invasive surgery
        compared to open surgery affect the complication rate, after adjusting
        for age, comorbidity index, BMI, surgical indication, surgeon
        experience, and hospital volume?
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
              <Text>Retrospective cohort study</Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Study Population:</Text>
              <Text>
                Adults undergoing abdominal surgery were identified from
                hospital databases and surgical registries. Participants were
                identified through electronic health record review at tertiary
                and community hospitals. Inclusion criteria include adults aged
                18 years and older undergoing elective or urgent abdominal
                surgery for benign or malignant conditions. Exclusion criteria
                include emergency surgery, previous abdominal surgery within 30
                days, and incomplete medical records.
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Variables under Study:</Text>
              <Stack gap={0}>
                <Text fw={500}>Independent/Predictor/Exposure:</Text>
                <Text>
                  Surgical technique: Minimally Invasive Surgery (MIS) or Open
                  Surgery (OS)
                </Text>
                <Text>
                  Covariates: Age, Adult Comorbidity Evaluation-27 (ACE-27)
                  comorbidity index, body mass index (BMI), surgical indication,
                  surgeon experience (measured in years of practice and annual
                  surgical volume), and hospital volume (annual number of
                  abdominal surgeries performed).
                </Text>
              </Stack>
              <Stack gap={0}>
                <Text fw={500}>Dependent/Outcome:</Text>
                <Text>
                  Complication rate (Complications Present or Absent).
                  Complications were defined as any adverse event occurring
                  within 30 days of surgery, including surgical site infections,
                  anastomotic leaks, bleeding requiring transfusion, ileus,
                  pneumonia, urinary tract infection, wound dehiscence, or
                  readmission.
                </Text>
              </Stack>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="effectSize" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>
                Effect Size Measure used in the Analytical Approach:
              </Text>
              <Text>
                Adjusted odds ratio (aOR) analysis is performed to quantify the
                magnitude of the difference in complications between MIS and OS,
                while controlling for covariates. The adjusted odds ratio
                provides insight into how the surgical technique affects the
                odds of complications while controlling for the influence of
                other variables.
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>
                Minimal Clinically Important Difference (MCID):
              </Text>
              <Text>
                Not applicable for adjusted odds ratios as they measure the
                strength of association rather than a specific threshold
                difference. However, for context, any reduction in complication
                rates is considered clinically meaningful given the impact on
                patient outcomes, length of stay, and healthcare costs.
              </Text>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="result" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Results:</Text>
              <Text>
                Complication rate with MIS (Minimally Invasive Surgery): 15%
              </Text>
              <Text>Complication rate with OS (Open Surgery): 21%</Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Point Estimate:</Text>
              <Text>Adjusted odds ratio (aOR): 0.70</Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>Confidence Interval:</Text>
              <Text>95% CI [0.52, 0.92]</Text>
            </Stack>
            <Stack gap={0}>
              <Text fw={500}>
                Probability Value (
                <Text span fs="italic">
                  P
                </Text>
                -value):
              </Text>
              <Text>
                <Text span fs="italic">
                  p
                </Text>{" "}
                = 0.012, indicating a statistically significant difference.
              </Text>
            </Stack>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="discussion" pt="md">
          <Stack gap="md">
            <Stack gap={0}>
              <Text fw={500}>Interpretation of Results:</Text>
              <Text>
                Patients undergoing MIS have 30% lower odds of experiencing
                complications compared to those undergoing OS, after adjusting
                for age, comorbidity index, BMI, surgical indication, surgeon
                experience, and hospital volume. The adjusted odds ratio of 0.70
                (less than 1) indicates a protective effect of minimally
                invasive surgery, suggesting that this surgical approach is
                associated with reduced complication risk.
              </Text>
              <Text>
                The 95% confidence interval (0.52 to 0.92) is entirely below
                1.0, indicating that the association consistently suggests lower
                odds of complications with MIS. However, the width of the
                confidence interval (spanning from 48% to 8% reduction in odds)
                prevents making definitive conclusions about the precise
                magnitude of the reduction in complications. The lower bound
                suggests at least an 8% reduction in odds, while the upper bound
                suggests up to a 48% reduction in odds.
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Implications of Results:</Text>
              <Text>
                The findings suggest that Minimally Invasive Surgery (MIS) may
                be a preferable surgical technique compared to Open Surgery (OS)
                when it comes to reducing the risk of complications in abdominal
                surgery. The 30% reduction in odds of complications, after
                controlling for important confounding variables, represents a
                clinically meaningful benefit that could translate to improved
                patient outcomes, shorter hospital stays, reduced healthcare
                costs, and faster return to normal activities.
              </Text>
              <Text>
                However, it&apos;s important to consider the limitations of the
                study, such as the retrospective cohort design and the
                relatively wide confidence interval. The retrospective nature of
                the study means that unmeasured confounding variables may exist,
                and treatment allocation was not randomized, which could
                introduce selection bias. These limitations imply that further
                research is needed to confirm and refine these findings.
              </Text>
              <Text>
                Clinical decision-making should integrate these findings with
                consideration of patient-specific factors, surgical complexity,
                surgeon expertise with MIS techniques, available resources, and
                patient preferences. Not all patients or surgical conditions may
                be suitable for MIS, and the benefits must be weighed against
                potential limitations such as longer operative time in some
                cases and the learning curve associated with minimally invasive
                techniques.
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text fw={500}>Future Research:</Text>
              <List spacing={2}>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Prospective randomized controlled trials:
                    </Text>{" "}
                    Conduct prospective studies with larger sample sizes and
                    randomized treatment allocation to provide more robust
                    evidence and eliminate selection bias. If appropriate, use
                    of a randomized trial design would strengthen the evidence
                    regarding the relationship between type of surgical approach
                    and complications.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Specific complication analysis:
                    </Text>{" "}
                    Investigate specific complications and their severity in
                    relation to different surgical techniques. This could help
                    identify the specific areas where MIS provides the greatest
                    advantage (e.g., wound infections, ileus, pneumonia) and
                    further refine patient selection criteria and surgical
                    planning.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Additional confounding variables:
                    </Text>{" "}
                    Explore additional variables that might affect complication
                    rates, such as specific preoperative patient characteristics
                    (nutritional status, functional status, frailty scores),
                    intraoperative factors (operative time, blood loss, type of
                    anesthesia), and postoperative care protocols (early
                    mobilization, enhanced recovery pathways). Understanding
                    these factors could provide valuable insights into
                    optimizing surgical outcomes and improving patient care.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Cost-effectiveness analysis:
                    </Text>{" "}
                    Conduct comprehensive economic analyses comparing MIS and
                    OS, including direct costs (equipment, operative time,
                    hospital stay), indirect costs (time to return to work,
                    long-term complications), and quality-adjusted life years to
                    inform healthcare resource allocation decisions.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Long-term outcome assessment:
                    </Text>{" "}
                    Evaluate long-term outcomes beyond 30-day complications,
                    including quality of life, functional recovery, incisional
                    hernia rates, chronic pain, and long-term survival in
                    oncologic cases.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Subgroup analyses:
                    </Text>{" "}
                    Perform subgroup analyses based on surgical indication
                    (benign vs. malignant disease), procedure complexity,
                    patient age groups, comorbidity burden, and BMI categories
                    to identify which patient populations benefit most from MIS
                    and which may require open surgery.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Learning curve and surgeon experience:
                    </Text>{" "}
                    Investigate the impact of surgeon experience and case volume
                    with MIS techniques on complication rates to inform training
                    programs and credentialing requirements. Determine the
                    minimum case volume needed to achieve optimal outcomes with
                    MIS.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Hospital and system factors:
                    </Text>{" "}
                    Examine the role of hospital characteristics (teaching
                    status, case volume, availability of specialized equipment,
                    and support staff) in determining the success of MIS
                    programs and complication rates.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Patient-reported outcomes:
                    </Text>{" "}
                    Incorporate patient-reported outcome measures such as pain
                    scores, satisfaction with cosmetic results, quality of life
                    assessments, and return to normal activities to provide a
                    more comprehensive evaluation of the patient experience with
                    different surgical approaches.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    <Text span fw={500}>
                      Minimizing residual confounding:
                    </Text>{" "}
                    Use advanced statistical techniques such as propensity score
                    matching, instrumental variable analysis, or marginal
                    structural models to reduce potential confounding in
                    observational studies further when randomized trials are not
                    feasible.
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

Example2.title =
  "Impact of Surgical Techniques on Complication Rates in Abdominal Surgery";

export default Example2;
