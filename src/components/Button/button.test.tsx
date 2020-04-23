import React from "react";
import {fireEvent, render} from "@testing-library/react";
import Button, {ButtonProps, ButtonSize, ButtonType} from "./button";

const defaultProps = {
  onClick:jest.fn()
}

const testProps:ButtonProps = {
  btnType:ButtonType.Primary,
  size:ButtonSize.Small,
  className:'test'
}

describe('Button Test',()=>{
  it('默认测试',()=>{
    const wrapper = render(<Button {...defaultProps}>Hello</Button>)
    const el = wrapper.getByText('Hello')
    expect(el).toBeInTheDocument()
    expect(el.tagName).toEqual('BUTTON')
    expect(el).toHaveClass('btn btn-default')
    fireEvent.click(el)
    expect(defaultProps.onClick).toHaveBeenCalled()
  })
  it('不同props测试',()=>{
    const wrapper = render(<Button {...testProps}>Hello</Button>)
    const el = wrapper.getByText('Hello')
    expect(el).toBeInTheDocument()
    expect(el).toHaveClass('btn-primary btn-small test')
  })
  it('链接测试',()=>{})
  it('disabled测试',()=>{})
})