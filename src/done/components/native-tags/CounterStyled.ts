import styled from 'styled-components';

export const Counter = styled.div`
  width: 50%;
  border: 1px solid #000;
  border-radius: 10px;
  padding: 20px;
`;

export const Label = styled.div`
  display: inline-block;
  font-weight: bold;
`;

// export const Value = styled.div`
//   display: inline-block;
//   font-size: 200%;
//   margin-left: 10px;
//   width: 1em;
// `;

export const Value = styled.div({
  display: 'inline-block',
  fontSize: '200%',
  marginLeft: '10px',
  width: '1em',
});

export const Buttons = styled.div`
  display: inline-block;

  /* button {
    border: 1px solid #999;
    border-radius: 3px;
    margin-left: 10px;
    padding: 10px;
  } */
`;

export const Button = styled.button`
  border: 1px solid #999;
  border-radius: 3px;
  margin-left: 10px;
  padding: 10px;
`;

export const AddButton = styled(Button)`
  background-color: lightgreen;

  &::after {
    content: '+';
  }
`;

export const SubtractButton = styled(Button)`
  background-color: ${(props) => (props.disabled ? 'gray' : 'lightcoral')};

  /* background-color: lightcoral; */

  &::after {
    content: '-';
  }
`;

export const SomeOtherDiv = styled.div`
  background-color: blue;

  /* foo: bar; */
`;
