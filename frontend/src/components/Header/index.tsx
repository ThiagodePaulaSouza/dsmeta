import Logo from "../../assets/img/logo.svg";
import "./styles.css";

export function Header() {
  return (
    <header>
      <div className="logo-container">
        <img src={Logo} alt="logo do projeto" />
        <h1>DSMETA</h1>
        <p>
          Desenvolvido por
          <a href="https://www.instagram.com/salequi_lapua/">@salequi_lapua</a>
        </p>
      </div>
    </header>
  );
}
