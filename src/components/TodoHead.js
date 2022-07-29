import React from "react";
import styled from "styled-components";

const TodoHeadBlock = styled.div`
  padding: 48px 32px 24px 32px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
  .tasks_left {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

function TodoHead(props) {
  return (
    <TodoHeadBlock>
      <h1>2022년 07월 28일</h1>
      <div className="day">수요일</div>
      <div className="tasks_left">할 일 2개 남음</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;
