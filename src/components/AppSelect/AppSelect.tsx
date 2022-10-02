import styled from "styled-components";

interface IAppSelect {
  options: any[];
  handleSelectChange: (value: any) => void;
  selectedValue: number | any;
  name?: string;
}

export const AppSelect = (props: IAppSelect) => {
  const { handleSelectChange, options, name, selectedValue } = props;
  const handleOnChange = (event: any) => {
    handleSelectChange(event.target.value as string);
  };
  return (
    <StyledAppSelect>
      <select className="wrapSelect" name={name} onChange={handleOnChange}>
        {options?.map((option: any) => (
          <option
            key={option.value}
            value={option?.value}
            selected={option.value === parseInt(selectedValue) ? true : false}
          >
            {option?.label}
          </option>
        ))}
      </select>
    </StyledAppSelect>
  );
};

const StyledAppSelect = styled.div`
  width: 100%;
  .wrapSelect {
    width: 100%;
    height: 35px;
    padding-left: 10px;
  }
`;
