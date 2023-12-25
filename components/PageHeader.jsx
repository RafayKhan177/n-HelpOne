import { Heading } from "@chakra-ui/react";
import { rem } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import Link from "next/link";

export default function PageHeader({ h, text, size, color }) {
  return (
    <Link href={"/Contribution"}>
      <div
        style={{
          // zIndex: ,
          backgroundColor: color || "#023e8a",
          margin: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 0",
          textTransform: "uppercase",
        }}
      >
        <Heading
          style={{ height: h, display: "flex", alignSelf: "center" }}
          as="h1"
          size={size || 34}
          p={2}
          noOfLines={1}
          color={"#fff"}
        >
          {text || "No Heading"}
        </Heading>
        
        <IconChevronRight
              style={{ width: rem(14), height: rem(14), color: "#fff" }}
              stroke={3.5}
            />
      </div>
    </Link>
  );
}
