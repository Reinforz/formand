import { Meta, Story } from '@storybook/react';


import { LoadingButton, LoadingButtonProps } from '../src/components';


export default {
  title: 'Components/Form/Loading Button',
  component: LoadingButton
} as Meta;

const Template: Story<{loadingButtonProps:LoadingButtonProps}&{props:any}> = ({loadingButtonProps,props})=> {
  return (
    <LoadingButton {...loadingButtonProps} {...props} />
  );
};

export const Default = Template.bind({});
Default.args = {
    loadingButtonProps:{
      children:"Please Wait"
    }
};
