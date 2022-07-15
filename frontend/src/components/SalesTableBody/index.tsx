import axios from "axios";
import { useEffect, useState } from "react";
import { Sale } from "../../models/sale";
import { BASE_URL } from "../../utils/request";
import { NotificationButton } from "../NotificationButton";
import "./styles.css";

export function SalesTableBody() {
  const [sales, setSales] = useState<Sale[]>([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/sales`)
      .then((response) => setSales(response.data.content));
  }, []);

  return (
    <tbody>
      {sales.map((sale) => {
        return (
          <tr key={sale.id}>
            <td className="show992">{sale.id}</td>
            <td className="show576">{new Date(sale.date).toLocaleDateString()}</td>
            <td>{sale.sellerName}</td>
            <td className="show992">{sale.visited}</td>
            <td className="show992">{sale.deals}</td>
            <td>{`R$ ${sale.amount.toFixed(2)}`}</td>
            <td>
              <div className="dsmeta-red-btn-container">
                <NotificationButton />
              </div>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
}
