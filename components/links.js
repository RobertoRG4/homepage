import Link from "next/link";
import { Button, Image } from "@chakra-ui/react";
const Links = ({ href, src, alt }) => {
  return (
    <Button as={Link} target="_blank" href={href} backgroundColor="transparent">
      <Image width="50px" src={src} alt={alt} />
    </Button>
  );
};
export default Links;
