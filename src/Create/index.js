import {
  FormControl,
  FormHelperText,
  Container,
  Button,
} from "@chakra-ui/react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { FormikTextarea, FormikSelect, FormikInput } from "../util/form";
import { groupedUnis, groupedSubjects } from "./data";

const createSchema = Yup.object().shape({
  university: Yup.string().required("Required"),
  subject: Yup.string().required("Required"),
  course_name: Yup.string()
    .min(2, "Too Short!")
    .max(100, "Too Long!")
    .required("Required"),
  course_code: Yup.string()
    .min(2, "Too Short!")
    .max(10, "Too Long!")
    .required("Required"),
  review: Yup.string().min(2, "Too Short!").required("Required"),
});

const Create = () => {
  const onFormSubmit = async (values) => {
    await new Promise((r) => setTimeout(r, 500));
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <Container p={4}>
      <Formik
        initialValues={{
          university: "",
          subject: "",
          course_name: "",
          course_code: "",
          review: "",
        }}
        validationSchema={createSchema}
        onSubmit={onFormSubmit}
      >
        {(props) => (
          <Form>
            <FormControl my={4} id="university">
              <FormikSelect
                label="University"
                name="university"
                options={groupedUnis}
                helperText="Select the university you took this course at."
              />
            </FormControl>
            <FormControl my={4} id="subject">
              <FormikSelect
                label="Subject"
                name="subject"
                options={groupedSubjects}
                helperText="Select the subject this course belongs to."
              />
            </FormControl>
            <FormControl my={4} id="course">
              <FormikInput
                label="Course"
                name="course_name"
                placeholder="Course name"
              />
              <FormikInput
                name="course_code"
                placeholder="Course code"
                helperText="Enter the name and code for this course when you took it."
              />
            </FormControl>
            <FormControl my={4} id="review">
              <FormikTextarea
                label="Review"
                name="review"
                placeholder="Comment about the course..."
                helperText="Share some comments about your experience in the course."
              />
            </FormControl>
            <Button type="submit">Submit</Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default Create;
