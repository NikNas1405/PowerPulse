import styled from 'styled-components';
// import { globalColor } from '../../../styles/root';
import { Field, Form } from 'formik';
// import thumpUp from '../../../assets/exercises/thumpUp.png';

export const Input = styled(Field)`
  border: 2px solid gray;
  &:hover {
    border: 2px solid green;
  }
`;

export const Forma = styled(Form)`
  /* display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  gap: 10px;
  width: 200px;
  margin-bottom: 50px; */
`;

export const Label = styled.label`
  text-align: left;
`;

export const ButtonSubmit = styled.button`
  width: 151px;
  height: 42px;
  border: none;
  border-radius: 12px;
  background-color: rgba(230, 83, 60, 1);
  color: rgba(239, 237, 232, 1);
  font-weight: 500;
  font-size: 16px;
  line-height: 1.125;
  /* margin-right: auto; */

  @media (min-width: 768px) {
    margin-top: 53px;
    margin-left: 200px;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  width: 147px;
  height: 62px;
  color: rgba(239, 237, 232, 0.4);
  background-color: rgba(239, 237, 232, 0.2);
  border: 1px solid rgba(239, 237, 232, 0.05);
  padding: 12px 0px 0px 18px;
  border-radius: 12px;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;

  @media (min-width: 768px) {
    width: 168px;
    height: 70px;
  }
`;
export const DetailsSpan = styled.span`
  color: rgba(239, 237, 232, 1);
  font-weight: 700;
  font-size: 14px;
  line-height: 1.29;
  white-space: nowrap; /* Запобігає переносу тексту на новий рядок */
  overflow: hidden; /* Ховає зайвий текст, який не вміщається в контейнері */
  text-overflow: ellipsis;
`;

export const InfoBlock = styled.div`
  width: 302px;
  /* border: 1px solid red; */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin: 24px 0px 24px 0px;

  @media (min-width: 768px) {
    width: 350px;
    /* align-items: end; */
    margin-top: 48px;
    margin-bottom: 254px;
  }
`;

//
export const SuccesModal = styled.div`
  width: 335px;
  height: 384px;
  background-color: rgba(16, 16, 15, 1);
  border: 1px solid rgba(239, 237, 232, 0.2);
  display: flex;
`;

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  /* display: flex;
  flex-direction: column; */
  /* border: 2px solid white; */
  @media (min-width: 768px) {
    display: flex;
    width: 694px;
    height: 550px;
    gap: 16px;
  }
`;
// export const PostModalContainer = styled.div`
//   width: 50%;
//   height: 50%;
//   /* display: flex;
//   flex-direction: column; */
//   /* border: 2px solid white; */
//   @media (min-width: 768px) {
//     display: flex;
//     width: 694px;
//     height: 550px;
//     gap: 16px;
//   }
// `;

export const GifContainer = styled.div`
  width: 270px;
  height: 226px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 48px;
  margin-bottom: 32px;

  @media (min-width: 768px) {
    margin-left: 32px;
  }
`;

export const TimerContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    margin-left: 32px;
    /* align-items: start; */
  }
`;

export const ModalTextStyle = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: rgba(239, 237, 232, 0.3);
  margin-bottom: 4px;
`;
export const ModalInfoStyle = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: #e6533c;
  margin-bottom: 24px;
`;

export const ModalBlockFirst = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 2px solid green; */

  @media (min-width: 768px) {
    /* margin-bottom: 19px; */
  }
`;

export const ModalBlockSecond = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  /* border: 2px solid green; */

  @media (min-width: 768px) {
    /* width: 380px; */
    /* display: flex; */
    /* margin-bottom: 19px; */
  }
`;
