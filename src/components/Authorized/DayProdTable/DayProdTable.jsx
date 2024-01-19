import {
  ProdBlock,
  ProdTable,
  ProdTitleBlock,
  ProdTitle,
  ProdTitleTh,
  BtnDel,
  Svg,
} from './DayProdTable.styled';

import sprite from '../../../assets/sprite.svg';

const DayProdTable = () => {
  return (
    <>
      <ProdBlock>
        <ProdTable>
          <ProdTitleBlock>
            <ProdTitle>
              <ProdTitleTh>Title</ProdTitleTh>
              <ProdTitleTh>Category</ProdTitleTh>
              <ProdTitleTh>Calories</ProdTitleTh>
              <ProdTitleTh>Weight</ProdTitleTh>
              <ProdTitleTh>Recommend</ProdTitleTh>
            </ProdTitle>
          </ProdTitleBlock>
        </ProdTable>

        <BtnDel>
          <Svg>
            <use href={`${sprite}#icon-trash-03`} />
          </Svg>
        </BtnDel>
      </ProdBlock>
    </>
  );
};

export default DayProdTable;
