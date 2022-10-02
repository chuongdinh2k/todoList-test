import styled from 'styled-components';

interface IAppInputProps {
  value: string | number;
  handleOnChange: (event: any) => void;
  placeholder?: string;
  error?: any;
  name?: string;
  touched?: any;
}
const AppInput = (props: IAppInputProps) => {
  const { value, handleOnChange, placeholder, error, name, touched } = props;
  return (
    <StyledAppInput>
      <input
        value={value}
        onChange={handleOnChange}
        placeholder={placeholder}
        className="inputStyle"
        name={name}
        onKeyUp={handleOnChange}
      />
      {!!error && !!touched && <p className="msgError">{error}</p>}
    </StyledAppInput>
  );
};

const StyledAppInput = styled.div`
  width: 100%;
  .inputStyle {
    width: 100%;
    padding: 10px;
    font-size: 15px;
  }
  .form {
    &__title {
      font-weight: 600;
      font-size: 20px;
    }
  }
  .msgError {
    color: ${p => p.theme.colors.error};

  }
`;

export default AppInput;
