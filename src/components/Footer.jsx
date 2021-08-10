import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Projeto de Estudo do Desenvolvedor João Mário - {year}</p>
    </footer>
  );
}

export default Footer;