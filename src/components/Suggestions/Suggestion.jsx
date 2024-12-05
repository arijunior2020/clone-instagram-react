function Suggestion({ img, user, reason }) {
    return (
      <div className="sugestao">
        <div className="usuario">
          <img src={img} alt={user} />
          <div className="texto">
            <div className="nome">{user}</div>
            <div className="razao">{reason}</div>
          </div>
        </div>
        <div className="seguir">Seguir</div>
      </div>
    );
  }
  
  export default Suggestion;
  