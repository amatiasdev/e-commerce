import { Carousell } from "../../components/Carousell";
import { Navbar } from "../../components/Navbar";

export const Main = ({ message }: any): JSX.Element => (
  <div>
    <Carousell />
    <Navbar />
  </div>
);
