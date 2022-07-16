import axios from "axios";
import { toast } from "react-toastify";
import Icon from "../../assets/img/notification-icon.svg";
import { BASE_URL } from "../../utils/request";
import "./styles.css";

interface Props {
  saleId: number;
}

const handleClick = (id: number) => {
  axios
      .get(`${BASE_URL}/sales/${id}/notification`)
      .then((response) => toast.info("SMS enviado com sucesso"))
}

export function NotificationButton({ saleId }: Props) {
  return (
    <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
      <img src={Icon} alt="Notificar" />
    </div>
  );
}
