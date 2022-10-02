import { Formik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import AppButton from "../../components/AppButton/AppButton";
import AppDatePicker from "../../components/AppDatePicker/AppDatePicker";
import AppInput from "../../components/AppInput/AppInput";
import { AppSelect } from "../../components/AppSelect";
import AppTextArea from "../../components/AppTextArea/AppTextAre";
import { optionSelectPiority } from "../../components/helper";
import { v4 as uuidv4 } from "uuid";
import {
  LABEL_BTN_ADD,
  LABEL_INPUT_DATE,
  LABEL_INPUT_DESCRIPTION,
  LABEL_INPUT_PIORITY,
  PLACEHOLDER_ADD_INPUT,
} from "../../configs/constant";
import { addNewWork } from "../../redux/slices/listTodo";
import { theme } from "../../themes";
import { addNewFormSchema } from "../../validations";
import {toast} from "react-toastify";

const AddNewForm = () => {
  // hooks
  const dispatch = useDispatch();
  // form value
  const initialValuesPackage = {
    title: "",
    description: "",
    dueDate: "",
    piority: "2",
  };
  // component states
  const [date, setDate] = useState(new Date());
  const onChangeDate = (date: any) => {
    setDate(date);
  };
  return (
    <StyledAddNewForm>
      <p className="title">Add New Form</p>
      <Formik
        initialValues={initialValuesPackage}
        onSubmit={(values, { resetForm }) => {
          dispatch(
            addNewWork({
              id: uuidv4(),
              title: values.title,
              description: values.description,
              piority: values.piority,
              dueDate: date,
            })
          );
          toast.success("Created work successfully!");
          resetForm();
        }}
        validationSchema={addNewFormSchema}
      >
        {({ handleSubmit, handleChange, values, errors, touched }) => {
          return (
            <div className="form">
              <AppInput
                value={values.title}
                placeholder={PLACEHOLDER_ADD_INPUT}
                handleOnChange={handleChange("title")}
                error={errors.title}
                touched={touched.title}
              />
              <div className="form__input">
                <p className="form__input-label">{LABEL_INPUT_DESCRIPTION}</p>
                <AppTextArea
                  placeholder={LABEL_INPUT_DESCRIPTION}
                  value={values.description}
                  name="description"
                  handleOnChange={handleChange("description")}
                />
              </div>
              <div className="row">
                <div className="form__input select">
                  <p className="form__input-label">{LABEL_INPUT_DATE}</p>
                  <AppDatePicker date={date} handleOnChange={onChangeDate} />
                </div>
                <div className="form__input select">
                  <p className="form__input-label">{LABEL_INPUT_PIORITY}</p>
                  <AppSelect
                    name="piority"
                    selectedValue={values.piority}
                    options={optionSelectPiority}
                    handleSelectChange={handleChange("piority")}
                  />
                </div>
              </div>
              <div className="form__btn">
                <AppButton
                  text={LABEL_BTN_ADD}
                  btnStyle={{ backgroundColor: theme.colors.lightGreen }}
                  handleOnClick={handleSubmit}
                />
              </div>
            </div>
          );
        }}
      </Formik>
    </StyledAddNewForm>
  );
};

const StyledAddNewForm = styled.div`
  padding-top: 20px;
  border: 1px solid ${(p) => p.theme.colors.black};
  min-height: 100vh;
  .title {
    font-size: 20px;
    font-weight: 600;
  }
  .row {
    @media (min-width: ${(p) => p.theme.breakPoints.breakMedium}) {
      display: flex;
      justify-content: space-between;
      column-gap: 30px;
    }
  }
  .select {
    width: 100%;
    @media (min-width: ${(p) => p.theme.breakPoints.breakMedium}) {
      width: 50%;
    }
  }
  .form {
    padding: 20px;
    &__input {
      text-align: left;
    }
    &__btn {
      padding-top: 50px;
    }
  }
`;
export default AddNewForm;
