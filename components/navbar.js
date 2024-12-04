import { Box } from "@chakra-ui/react";
import {
  BreadcrumbRoot,
  BreadcrumbLink,
  BreadcrumbCurrentLink,
} from "../components/ui/breadcrumb";

const Navbar = () => {
  return (
    <Box paddingY="50px">
      <BreadcrumbRoot size="lg">
        <BreadcrumbLink
          href="/"
          color="#fff"
          textShadow="2px 2px 4px rgba(0, 0, 0, 0.6)"
        >
          Home
        </BreadcrumbLink>
        <BreadcrumbCurrentLink
          color="#fff"
          textShadow="2px 2px 4px rgba(0, 0, 0, 0.6)"
        >
          About me.
        </BreadcrumbCurrentLink>
      </BreadcrumbRoot>
    </Box>
  );
};
export default Navbar;
