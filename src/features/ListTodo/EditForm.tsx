import { Formik } from "formik";
import { useState } from "react";
import styled from "styled-components";
import AppButton from "../../components/AppButton/AppButton";
import AppDatePicker from "../../components/AppDatePicker/AppDatePicker";
import AppInput from "../../components/AppInput/AppInput";
import { AppSelect } from "../../components/AppSelect";
import AppTextArea from "../../components/AppTextArea/AppTextAre";
import { optionSelectPiority } from "../../components/helper";
import {
  LABEL_BTN_UPDATE,
  LABEL_INPUT_DATE,
  LABEL_INPUT_DESCRIPTION,
  LABEL_INPUT_PIORITY,
  PLACEHOLDER_ADD_INPUT,
} from "../../configs/constant";
import { theme } from "../../themes";
import { addNewFormSchema } from "../../validations";

interface IEditFormProps {
  data: any;
  handleSubmit: (value: any) => void;
}
export const EditForm = (props: IEditFormProps) => {
  const { data, handleSubmit } = props;
  const [date, setDate] = useState(new Date());
  //form values
  const initialValuesPackage = {
    title: data[0]?.title,
    description: data[0]?.description,
    piority: data[0]?.piority,
  };

  // function
  const onChangeDate = (date: any) => {
    setDate(date);
  };
  return (
    <StyledEditForm>
      <Formik
        initialValues={initialValuesPackage}
        enableReinitialize
        onSubmit={(values) => {
          handleSubmit({
            id: data[0].id,
            title: values.title,
            description: values.description,
            dueDate: date,
            piority: values.piority,
          });
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
                  text={LABEL_BTN_UPDATE}
                  btnStyle={{ backgroundColor: theme.colors.lightGreen }}
                  handleOnClick={handleSubmit}
                />
              </div>
            </div>
          );
        }}
      </Formik>
    </StyledEditForm>
  );
};
const StyledEditForm = styled.div`
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
    padding-top: 20px;
    &__input {
      text-align: left;
    }
    &__btn {
      padding-top: 50px;
    }
  }
`;
