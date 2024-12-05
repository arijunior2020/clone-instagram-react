import React, { useState } from "react";

function Suggestion({ img, user, reason }) {
    const [seguindo, setSeguindo] = useState(false);

    const toogleSeguindo = () => setSeguindo(!seguindo);
    
    return (
      <div className="sugestao">
        <div className="usuario">
          <img src={img} alt={user} />
          <div className="texto">
            <div className="nome">{user}</div>
            <div className="razao">{reason}</div>
          </div>
        </div>
        <div className={`seguir} ${seguindo ? "seguindo" : ""}`} onClick={toogleSeguindo} style={{cursor: "pointer", color: seguindo ? "#555": "#139EF2"}}>{seguindo ? "seguindo" : "seguir"}</div>
      </div>
    );
  }
  
  export default Suggestion;
  