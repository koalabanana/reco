import React from "react";
import {
  Container,
  Box,
  UnorderedList,
  ListItem,
  Button,
} from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box p={4}>
      <UnorderedList display="inline-flex" styleType="none">
        <ListItem mx={2}>
          <Button variant="ghost">Home</Button>
        </ListItem>
        <ListItem mx={2}>
          <Button variant="ghost">Create</Button>
        </ListItem>
      </UnorderedList>
    </Box>
  );
};

export default Navbar;
