import styled from "styled-components";
import AppButton from "../../../components/AppButton/AppButton";
import { LABEL_BTN_DETAIL, LABEL_BTN_REMOVE } from "../../../configs/constant";
import { theme } from "../../../themes";

interface IItemHomeWorkProps {
  onClick?: (values: any) => void;
  data: any;
  onRemove: () => void;
  onView?: () => void;
  onSelect?: () => void;
  checked?: boolean;
}
export const ItemWork = (props: IItemHomeWorkProps) => {
  const {onRemove, data, onView, onSelect, checked} = props;
  console.log(data?.title);
  return (
    <StyledItemWork>
      <div className="wrapCheckbox">
        <input
          type="checkbox"
          className="checkbox"
          checked={checked}
          onChange={onSelect}
        />
        <label className="name">{data?.title}</label>
      </div>
      <div className="wrapButton">
        <AppButton
          text={LABEL_BTN_DETAIL}
          btnStyle={{ backgroundColor: theme.colors.primary }}
          handleOnClick={onView}
        />
        <AppButton
          text={LABEL_BTN_REMOVE}
          btnStyle={{ backgroundColor: theme.colors.error }}
          handleOnClick={onRemove}
          className="btnRemove"
        />
      </div>
    </StyledItemWork>
  );
};

const StyledItemWork = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 10px;
  margin-top: 10px;
  border: 1px solid ${(p) => p.theme.colors.black};
  .checkbox {
    width: 25px;
    height: 25px;
  }
  .name {
    font-size: 16px;
    padding-left: 5px;
  }
  .wrapCheckbox {
    display: flex;
    align-items: center;
  }
  .wrapButton {
    display: flex;
  }
  .btnRemove {
    margin-left: 10px;
  }
`;
