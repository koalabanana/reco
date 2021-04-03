import { useField } from "formik";
import { FormLabel, FormHelperText, Input } from "@chakra-ui/react";

import Error from "./Error";

const FormikInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <FormLabel>
        {label} {meta.touched && meta.error && <Error>{meta.error}</Error>}
      </FormLabel>
      <Input {...field} {...props} />
      {props.helperText && <FormHelperText>{props.helperText}</FormHelperText>}
    </>
  );
};

export default FormikInput;
