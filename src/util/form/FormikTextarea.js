import { useField } from "formik";
import { FormLabel, FormHelperText, Textarea } from "@chakra-ui/react";

import Error from "./Error";

const FormikTextarea = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  return (
    <>
      <FormLabel>
        {label} {meta.touched && meta.error && <Error>{meta.error}</Error>}
      </FormLabel>
      <Textarea {...field} {...props} />
      {props.helperText && <FormHelperText>{props.helperText}</FormHelperText>}
    </>
  );
};

export default FormikTextarea;
