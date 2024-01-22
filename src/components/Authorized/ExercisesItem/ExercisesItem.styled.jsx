import styled from 'styled-components';
// import { globalColor } from '../../../styles/root';
import { Field, Form } from 'formik';

export const Input = styled(Field)`
  border: 2px solid gray;
  &:hover {
    border: 2px solid green;
  }
`;

export const Forma = styled(Form)`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  gap: 10px;
  width: 200px;
  margin-bottom: 50px;
`;

export const Label = styled.label`
  text-align: left;
`;

export const ButtonSubmit = styled.button`
  width: 150px;
  margin-left: auto;
  margin-right: auto;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  width: 147px;
  height: 62px;
  color: rgba(239, 237, 232, 0.4);
  background-color: rgba(239, 237, 232, 0.2);
  border: 1px solid rgba(239, 237, 232, 0.05);
  padding: 12px 0 0 18px;
  border-radius: 12px;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
`;
export const DetailsSpan = styled.span`
  color: rgba(239, 237, 232, 1);
  font-weight: 700;
  font-size: 14px;
  line-height: 1.29;
  word-wrap: break-word;
`;

export const InfoBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

//
export const SuccesModal = styled.div`
  width: 335px;
  height: 384px;
  background-color: rgba(16, 16, 15, 1);
  border: 1px solid rgba(239, 237, 232, 0.2);
  display: flex;
`;
