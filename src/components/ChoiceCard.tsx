import { useState } from "react";
import { Text, Card, Title, useMantineTheme, Modal, Stack } from "@mantine/core";

const TRUNCATE_DELIMITER = "|||";

const ChoiceCard = ({
  onClick,
  title,
  description,
  isSelected,
}: {
  onClick: () => void;
  title: string;
  description: string;
  isSelected: boolean;
}) => {
  const theme = useMantineTheme();
  const [descriptionModalOpened, setDescriptionModalOpened] = useState(false);

  // Check if description contains the truncate delimiter
  const truncateIndex = description.indexOf(TRUNCATE_DELIMITER);
  const shouldTruncate = truncateIndex !== -1;

  const truncatedDescription = shouldTruncate
    ? description.substring(0, truncateIndex).trim()
    : description;

  const fullDescription = shouldTruncate
    ? description.replace(TRUNCATE_DELIMITER, "").trim()
    : description;

  // Split by \n to create hard line breaks
  const descriptionLines = fullDescription.split("\n");

  const handleReadMoreClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setDescriptionModalOpened(true);
  };

  return (
    <>
      <Card
        variant="light"
        shadow="none"
        withBorder
        styles={{
          root: {
            borderColor: isSelected
              ? theme.colors.green[5]
              : theme.colors.gray[3],
          },
        }}
        color="gray"
        p="xs"
        maw={350}
        onClick={onClick}
        bg={isSelected ? "green.1" : "unset"}
      >
        <Title c={isSelected ? "green.9" : "gray.9"} order={5} fw={500}>
          {title}
        </Title>
        <Text
          c={isSelected ? "green.9" : "gray.9"}
          style={{ whiteSpace: "pre-wrap" }}
        >
          {truncatedDescription}
          {shouldTruncate && (
            <Text
              fs="italic"
              size="sm"
              component="span"
              c={isSelected ? "green.7" : "blue.6"}
              style={{ cursor: "pointer", textDecoration: "underline" }}
              onClick={handleReadMoreClick}
              ml={4}
            >
              (read more)
            </Text>
          )}
        </Text>
      </Card>
      <Modal
        opened={descriptionModalOpened}
        styles={{ title: { fontSize: 18, fontWeight: 500, lineHeight: 1.3, marginRight: 5 }, }}
        onClose={() => setDescriptionModalOpened(false)}
        title={title}
        size="md"
      >
        <Stack gap="xs">
          {descriptionLines.map((line, index) => (
            <Text key={index}>
              {line}
            </Text>
          ))}
        </Stack>
      </Modal >
    </>
  );
};

export default ChoiceCard;
