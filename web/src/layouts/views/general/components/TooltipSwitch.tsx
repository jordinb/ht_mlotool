import { Box, Group, Switch, Tooltip } from "@mantine/core";
import { BsQuestionCircle } from 'react-icons/bs';

interface Props {
  infoCircle?: string;
  label: string;
  value: boolean;
  toggle: () => void;
}

const TooltipSwitch: React.FC<Props> = ({ infoCircle, label, value, toggle }) => {
  return (
    <Group spacing={8} align='center'>
      <Switch label={label} checked={value} onChange={() => toggle()} />
      <Tooltip label={infoCircle} withArrow arrowSize={10} multiline width={200}>
        <Box>
          <BsQuestionCircle size={18} />
        </Box>
      </Tooltip>
    </Group>
  );
};

export default TooltipSwitch;
