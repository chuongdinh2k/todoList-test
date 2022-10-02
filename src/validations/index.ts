import * as Yup from "yup";

export const addNewFormSchema = Yup.object().shape({
  title: Yup.string().required("The title is required!"),
});