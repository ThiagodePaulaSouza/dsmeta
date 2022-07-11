import { InputDate } from "../InputDate";
import { SalesTable } from "../SalesTable";
import "./styles.css";

export function Sales() {
  return (
    <section id="sales">
      <div className="dsmeta-container">
        <div className="dsmeta-card">
          <h2 className="dsmeta-sales-title">Vendas</h2>
          <div>
            <InputDate />
            <InputDate />
          </div>
          <SalesTable />
        </div>
      </div>
    </section>
  );
}
