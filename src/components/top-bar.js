import React from "react";
import "@styles/top-bar.scss";

const Topbar = ({ onOpenLeadForm }) => {
  return (
    <div className="kz-top-bar is-hidden-mobile">
      <p className="kz-top-bar-text">Próxima turma inicia 28 de Janeiro!</p>

      <button className="kz-top-bar-alert" onClick={onOpenLeadForm}>
        Tenho interesse
      </button>
    </div>
  );
};

export default Topbar;