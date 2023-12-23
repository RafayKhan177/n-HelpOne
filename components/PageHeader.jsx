import { Heading } from "@chakra-ui/react";

export default function PageHeader({ text, size, color }) {
  return (
    <div
      style={{
        zIndex: 2,
        backgroundColor: color || "#0077b6",
        margin: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem 0",
        textTransform: "uppercase",
      }}
    >
      <Heading
        // style={{ backgroundColor: "#a8dadc", margin: "auto" }}
        as="h1"
        size={"md" || size}
        noOfLines={1}
      >
        {text || "No Heading"}
      </Heading>
    </div>
  );
}
