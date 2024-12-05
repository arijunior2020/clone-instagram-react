import React, { useState } from "react";

function Post({ userImg, userName, contentImg, likedByImg, likedByUser, likes }) {

    const [simSalvo, setSimSalvo] = useState(false); // false = não salvo, true = salvo
    const [simCurtido, setSimCurtido] = useState(false); // false = não curtido, true = curtido
    const [curtidas, setCurtidas] = useState(likes); // Quantidade de curtidas

    const toogleSalvo = () => setSimSalvo(!simSalvo); // Alterna entre true (salvo) e false (não salvo)
    const toogleCurtido = () => {
        if (simCurtido) {
            setCurtidas(curtidas - 1);
        } else {
            setCurtidas(curtidas + 1);
        }
        setSimCurtido(!simCurtido);   
    }
    const toogleApenasCurtido = () => {
        if (!simCurtido) {
          setSimCurtido(true); // Define como curtido
          setCurtidas(curtidas + 1); // Incrementa curtidas apenas
        }
    };

    return (
      <div className="post">
        <div className="topo">
          <div className="usuario">
            <img src={userImg} alt={userName} />
            {userName}
          </div>
          <div className="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>
        <div className="conteudo">
          <img onClick={toogleApenasCurtido} src={contentImg} alt="" />
        </div>
        <div className="fundo">
          <div className="acoes">
            <div>
              <ion-icon name={simCurtido ? "heart" : "heart-outline"}
              className={simCurtido ? "liked" : ""} onClick={toogleCurtido}
              style={{color: simCurtido ? "red" : "black"}}>
              </ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div onClick={toogleSalvo} style={{cursor: "pointer"}}>
                {simSalvo ? <ion-icon name="bookmark"></ion-icon> : <ion-icon name="bookmark-outline"></ion-icon>}
            </div>
          </div>
          <div className="curtidas">
            <img src={likedByImg} alt={likedByUser} />
            <div className="texto">
              Curtido por <strong>{likedByUser}</strong> e <strong>outras {curtidas.toLocaleString()} pessoas</strong>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Post;
  