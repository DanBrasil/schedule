import type { Meta, StoryObj } from "@storybook/react";
import Lala from "./index";
import Icon from "../icon";

const meta = {
  title: "exemplo",
  component: Lala, 
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Lala>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    row: 5,
    column: 7,
    children: Icon(),
  },
};
