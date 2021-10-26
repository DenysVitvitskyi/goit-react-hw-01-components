import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 10px;
  margin-bottom: 5px;
  width: 150px;
  cursor: pointer;
  border: 1px solid rgb(150, 135, 135);
  background: rgb(10, 238, 200);
  &:hover {
    background: ${prop => (prop.evtType ? `rgb(121, 241, 137)` : `tomato`)};
    border: 1px solid rgb(230, 118, 14);
  }
`;

export const StatusOn = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: greenyellow;
`;

export const StatusOf = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: red;
`;

export const Avatar = styled.img`
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Name = styled.p`
  font-weight: 700;
`;