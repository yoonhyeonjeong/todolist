import React, { useState } from "react";
import styled, { css } from "styled-components";
import { MdAdd } from "react-icons/md";

const TodoCreateBlock = styled.div`
  position: relative;
  height: 146px;
`;
const InputWrap = styled.div`
  padding: 20px 20px 80px;
  background: #f8f9fa;
  border-top: 1px solid #e9ecef;
  border-radius: 0 0 16px 16px;
`;
const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: none;
  box-sizing: border-box;
  font-size: 18px;
  border-radius: 4px;
  outline: none;
}
`;
const CircleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #38d9a9;
  border: none;
  cursor: pointer;
  width: 80px;
  height: 80px;
  font-size: 60px;
  color: white;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, 50%);
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }
  ${(props) =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;
function TodoCreate(props) {
  const { todotext } = props;
  const [open, setOpen] = useState(false);
  const onClick = () => {
    setOpen(!open);
  };
  return (
    <TodoCreateBlock>
      {open && (
        <InputWrap>
          <Input
            placeholder="할 일을 입력 후, Enter 를 누르세요"
            value={todotext}
          />
        </InputWrap>
      )}

      <CircleButton onClick={onClick} open={open}>
        <MdAdd />
      </CircleButton>
    </TodoCreateBlock>
  );
}
export default TodoCreate;
