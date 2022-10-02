import styled from "styled-components";

interface IAppTextAreaProps {
  value: string | number;
  handleOnChange: (event: any) => void;
  placeholder?: string;
  error?: any;
  name?: string;
  numberRows?: number;
}

const AppTextArea = (props: IAppTextAreaProps) => {
  const {
    value,
    handleOnChange,
    placeholder,
    error,
    name,
    numberRows = 4,
  } = props;
  return (
    <StyledAppTextArea>
      <textarea
        value={value}
        onChange={handleOnChange}
        placeholder={placeholder}
        className="inputStyle"
        name={name}
        rows={numberRows}
      />
      {!!error && <p className="msgError">{error}</p>}
    </StyledAppTextArea>
  );
};

const StyledAppTextArea = styled.div`
  width: 100%;
  .inputStyle {
    width: 100%;
    padding: 10px;
    font-size: 15px;
  }
`;

export default AppTextArea;
