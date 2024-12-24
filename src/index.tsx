import "./styles/tailwind.css";
import Table from "./components/table";
import { IExample } from "./interface";

const Example = (props: IExample) => {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        rowGap: "40px",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <h1>{props.title}</h1>
      <Table {...props} />
    </main>
  );
};

export default Example;
