// Define the types
type NodeType = "question" | "statement";

interface BaseNode {
  type: NodeType;
  title: string;
  color?: string;
  inputs: string[];
  examples?: React.ComponentType[];
}

interface QuestionNode extends BaseNode {
  type: "question";
  component: () => string | JSX.Element;
  choices: {
    answer: string;
    next: string;
    option_description?: string | { short: string; long: string };
  }[];
}

interface StatementNode extends BaseNode {
  type: "statement";
  flowChartTitle: string;
  component: React.ComponentType;
}

export type TreeNode = QuestionNode | StatementNode;
