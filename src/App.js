import {
  FormControl,
  FormLabel,
  FormHelperText,
  Textarea,
  Container,
} from "@chakra-ui/react";

import Navbar from "./Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Container p={4}>
        <FormControl id="email">
          <FormLabel>Review</FormLabel>
          <Textarea placeholder="Comment about the course..." />
          <FormHelperText>
            Share some comments about your experience in the course.
          </FormHelperText>
        </FormControl>
      </Container>
    </div>
  );
};

export default App;
