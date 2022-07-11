import { SalesTableBody } from "../SalesTableBody";
import { SalesTableHead } from "../SalesTableHead";
import "./styles.css";
export function SalesTable() {
  return (
    <div>
      <table className="dsmeta-sales-table">
        <SalesTableHead />
        <SalesTableBody />
      </table>
    </div>
  );
}
