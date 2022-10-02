import clsx from "clsx";
import styled from "styled-components";

interface IAppButtonProps {
  text: string;
  btnStyle?: any;
  className?: string;
  handleOnClick?: () => void;
}
const AppButton = (props: IAppButtonProps) => {
  const { text, btnStyle, className, handleOnClick } = props;
  return (
    <StyledAppButton
      onClick={handleOnClick}
      className={clsx("btn", className)}
      style={btnStyle}
    >
      {text}
    </StyledAppButton>
  );
};

const StyledAppButton = styled.button`
  width: 100%;
  text-align: center;
  border-radius: 6px;
  border: none;
  outline: none;
  padding: 10px;
  color: ${(p) => p.theme.colors.white};
  font-size: 16px;
`;
export default AppButton;
