import { Tabs, Text, Box, Stack, Group, Image } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

// Define each tab shape
type TabConfiguration = {
  key:
    | "characteristics"
    | "purpose"
    | "whenToUse"
    | "variables"
    | "datasetSize"
    | "strengths"
    | "weaknesses";
  label: string;
  content: JSX.Element;
};

// Enforce array of exactly 7 TabConfigurations
type Props = {
  description: string;
  tabsConfiguration: [
    TabConfiguration,
    TabConfiguration,
    TabConfiguration,
    TabConfiguration,
    TabConfiguration,
    TabConfiguration,
    TabConfiguration
  ];
  imageLink: string;
  citation: string;
};

export default function CardLayout({
  description,
  tabsConfiguration,
  imageLink,
  citation,
}: Props) {
  const isMobile = useMediaQuery("(max-width: 700px)");

  return (
    <>
      <Text>{description}</Text>
      <Group
        wrap={isMobile ? "wrap" : "nowrap"}
        w="100%"
        justify="space-between"
        align="flex-start"
      >
        <Stack w={isMobile ? "100%" : "50%"}>
          <Tabs
            defaultValue="characteristics"
            orientation="vertical"
            styles={{
              tab: { paddingLeft: 0, minWidth: 120, maxWidth: 120, width: 120 },
              tabLabel: { whiteSpace: "wrap", lineHeight: 1.5 },
              list: {
                minWidth: 120,
                maxWidth: 120,
                width: 120,
              },
            }}
          >
            <Tabs.List>
              {tabsConfiguration.map((tab) => (
                <Tabs.Tab key={tab.key} value={tab.key}>
                  {tab.label}
                </Tabs.Tab>
              ))}
            </Tabs.List>

            <Box ml="md">
              {tabsConfiguration.map((tab) => (
                <Tabs.Panel key={tab.key} value={tab.key}>
                  <Stack>{tab.content}</Stack>
                </Tabs.Panel>
              ))}
            </Box>
          </Tabs>
        </Stack>

        <Box w={isMobile ? "100%" : "50%"}>
          <Image src={imageLink} w="100%" height="auto" />
          <Text size="xs" c="dimmed" mt={3} fs="italic">
            {citation}
          </Text>
        </Box>
      </Group>
    </>
  );
}
