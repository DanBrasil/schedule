import type { Meta, StoryObj } from "@storybook/react";
import Principal from "./index";
import Icon from "./components/icon";

const meta = {
  title: "main",
  component: Principal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Principal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "FINISH",
    row: 10,
    column: 5,
    children: Icon(),
  },
};
