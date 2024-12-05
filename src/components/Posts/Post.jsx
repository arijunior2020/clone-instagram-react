function Post({ userImg, userName, contentImg, likedByImg, likedByUser, likes }) {
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
          <img src={contentImg} alt="" />
        </div>
        <div className="fundo">
          <div className="acoes">
            <div>
              <ion-icon name="heart-outline"></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              <ion-icon name="bookmark-outline"></ion-icon>
            </div>
          </div>
          <div className="curtidas">
            <img src={likedByImg} alt={likedByUser} />
            <div className="texto">
              Curtido por <strong>{likedByUser}</strong> e <strong>outras {likes.toLocaleString()} pessoas</strong>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Post;
  