import styled from 'styled-components';

const SContainer = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  width: calc(100% / 3);
`;
const SHeader = styled.div`
  font-weight: bold;
  margin: 0 0 8px 0;
`;
const SInputContainer = styled.div`
  display: block;
`;
const SInputTitle = styled.label`
  color: #4d4d4d;
  font-weight: bold;
  letter-spacing: 0.01875em;
  font-size: 14px;
  line-height: 20px;
`;
const SInput = styled.input`
  background-color: #fff;
  border: 1px solid;
  border-color: #cdcdcd;
  color: #4d4d4d;
  padding: 8px;
  width: 100%;
  font-size: 14px;
  height: 40px;
  margin: 0 0 16px 0;
  border-radius: 2px;
  box-sizing: border-box;
  overflow: visible;
`;

const Input = ({ title, id, value }) => {
  const handleOnChange = () => {};

  return (
    <SInputContainer>
      <SInputTitle htmlFor={id}>{title}</SInputTitle>
      <SInput id={id} defaultValue={value} onChange={handleOnChange}></SInput>
    </SInputContainer>
  );
};

const DeliverTo = () => {
  return (
    <SContainer>
      <SHeader>Deliver to</SHeader>
      <Input title="Name" value={'Michael Scott'} />
      <Input title="Delivery Addresss" value={'123 Main Street Sydney'} />
      <Input title="Mobile Number" value={'0401 234 567'} />
    </SContainer>
  );
};

export default DeliverTo;
