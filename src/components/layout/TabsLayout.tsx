import { Tabs, Stack } from "@mantine/core";
import type { ReactNode } from "react";

type ExplanationTabsLayoutProps = {
  /** Array of section blocks; each block can be a <Stack gap={0}> group, etc. */
  explanationSections: ReactNode[];

  /** Optional content for Example 1 tab/panel */
  example1?: ReactNode;

  /** Optional content for Example 2 tab/panel (3rd tab) */
  example2?: ReactNode;

  /** Tab labels — can override if needed */
  explanationLabel?: ReactNode;
  example1Label?: ReactNode;
  example2Label?: ReactNode;

  /** Which tab should be selected by default */
  defaultTab?: "explanation" | "example1" | "example2";
};

export default function ExplanationTabsLayout({
  explanationSections,
  example1,
  example2,
  explanationLabel = "Explanation",
  example1Label = "Example 1",
  example2Label = "Example 2",
  defaultTab = "explanation",
}: ExplanationTabsLayoutProps) {
  const hasExample1 = Boolean(example1);
  const hasExample2 = Boolean(example2);

  return (
    <Tabs defaultValue={defaultTab}>
      <Tabs.List>
        <Tabs.Tab value="explanation">{explanationLabel}</Tabs.Tab>

        {hasExample1 && <Tabs.Tab value="example1">{example1Label}</Tabs.Tab>}

        {hasExample2 && <Tabs.Tab value="example2">{example2Label}</Tabs.Tab>}
      </Tabs.List>

      <Tabs.Panel value="explanation" pt="md">
        <Stack gap="lg">
          {explanationSections.map((section, index) => (
            <div key={index}>{section}</div>
          ))}
        </Stack>
      </Tabs.Panel>

      {hasExample1 && (
        <Tabs.Panel value="example1" pt="md">
          {example1}
        </Tabs.Panel>
      )}

      {hasExample2 && (
        <Tabs.Panel value="example2" pt="md">
          {example2}
        </Tabs.Panel>
      )}
    </Tabs>
  );
}
