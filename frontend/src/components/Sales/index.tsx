import { InputDate } from "../InputDate";
import { SalesTable } from "../SalesTable";
import "./styles.css";

export function Sales() {
  const minDate = new Date(new Date().setDate(new Date().getDate() - 365));
  const maxDate = new Date();

  return (
    <section id="sales">
      <div className="dsmeta-container">
        <div className="dsmeta-card">
          <h2 className="dsmeta-sales-title">Vendas</h2>
          <div>
            <InputDate date={minDate} />
            <InputDate date={maxDate} />
          </div>
          <SalesTable />
        </div>
      </div>
    </section>
  );
}
