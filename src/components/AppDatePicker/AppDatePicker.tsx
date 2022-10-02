import styled from "styled-components";
import DatePicker from "react-datepicker";
import calendarIcon from "../../assets/images/calendar-icon.png";
import "react-datepicker/dist/react-datepicker.css";
import {useRef} from "react";

interface IAppInputProps {
  handleOnChange: (date: any) => void;
  date?: any;
}

const AppDatePicker = (props: IAppInputProps) => {
  const {handleOnChange, date} = props;
  const ref = useRef<any>(null);
  return (
    <StyledAppDatePicker>
      <div className="wrapDatePicker">
        <DatePicker
          onChange={handleOnChange}
          dateFormat="dd MMMM yyyy"
          className="datePicker"
          selected={date}
          ref={ref}
          minDate={new Date()}
        />
      </div>
      <div className="wrapIcon" onClick={() => ref?.current.setOpen(true)}>
        <img className="icon" src={calendarIcon} alt="icon" />
      </div>
    </StyledAppDatePicker>
  );
};

const StyledAppDatePicker = styled.div`
  display: flex;
  width: 100%;
  border: 1px solid ${(p) => p.theme.colors.back};
  .wrapDatePicker {
    flex: 1;
  }
  .datePicker {
    width: 100%;
    height: 30px;
    border: none;
    padding-left: 10px;
    &:focus {
      outline: none;
    }
  }
  .wrapIcon {
    padding: 5px;
    border-left: 1px solid ${(p) => p.theme.colors.back};
  }
  .icon {
    width: 20px;
    height: 20px;
  }
`;

export default AppDatePicker;
