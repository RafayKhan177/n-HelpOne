import { Heading } from "@chakra-ui/react";

export default function PageHeader({ h, text, size, color }) {
  return (
    <div
      style={{
        // zIndex: ,
        backgroundColor: color || "#0077b6",
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
    </div>
  );
}
