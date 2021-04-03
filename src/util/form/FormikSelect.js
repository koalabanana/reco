import { useField } from "formik";
import { FormLabel, FormHelperText } from "@chakra-ui/react";
import Select from "react-select";

import Error from "./Error";

const FormikSelect = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  const { options } = props;
  const { setValue } = helpers;

  return (
    <>
      <FormLabel>
        {label} {meta.touched && meta.error && <Error>{meta.error}</Error>}
      </FormLabel>
      <Select
        options={options}
        name={field.name}
        onChange={(option) => setValue(option.value)}
      />
      {props.helperText && <FormHelperText>{props.helperText}</FormHelperText>}
    </>
  );
};

export default FormikSelect;
