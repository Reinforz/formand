import { Meta, Story } from '@storybook/react';


import { LoadingButton, LoadingButtonProps } from '../src/components';


export default {
  title: 'Components/Form/Loading Button',
  component: LoadingButton
} as Meta;

const Template: Story<LoadingButtonProps> = (props)=> {
  return (
    <LoadingButton {...props} />
  );
};

export const Default = Template.bind({});
Default.args = {
    children:'Please Wait'
};
