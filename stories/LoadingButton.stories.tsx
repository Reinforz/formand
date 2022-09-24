import { Meta, Story } from '@storybook/react';
import LoadingButton, { LoadingButtonProps } from '../src/components/LoadingButton';


export default {
  title: 'Components/Form/Loading Button',
  component: LoadingButton
} as Meta;

const Template: Story<{ loadingButtonProps:LoadingButtonProps }> = ({ loadingButtonProps }) => (
  <LoadingButton {...loadingButtonProps} />
);

export const Default = Template.bind({});
Default.args = {
  loadingButtonProps: {
    children: 'Please Wait',
    variant: 'outlined'
  }
};
