import React from 'react'
import {action} from '@storybook/addon-actions'
import Button, {ButtonSize, ButtonType} from "./button";
import {storiesOf} from "@storybook/react";

const defaultButton = () => <Button onClick={action('默认按钮')}>默认按钮</Button>
const buttonWithDiffSize = () => (
  <div className="btn-style">
    <Button size={ButtonSize.Small}>小型按钮</Button>
    <Button size={ButtonSize.Large}>小型按钮</Button>
  </div>
)
const buttonWithDiffType = () => (
  <div className="btn-style">
    <Button btnType={ButtonType.Default}>默认样式</Button>
    <Button btnType={ButtonType.Primary}>初级样式</Button>
    <Button btnType={ButtonType.Danger}>危险样式</Button>
    <Button btnType={ButtonType.Link} href="https://asenwang.top">链接样式</Button>
  </div>
)
const buttonDisable = () => (
  <div className="btn-style">
    <Button btnType={ButtonType.Link} href="https://asenwang.top" disabled>不能点击</Button>
    <Button disabled>不能点击</Button>
  </div>
)

storiesOf('按钮组件(Button)', module)
  .add('默认Button',defaultButton)
  .add('尺寸不同的Button',buttonWithDiffSize)
  .add('样式不同的Button',buttonWithDiffType)
  .add('不能点击的Button',buttonDisable)