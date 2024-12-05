import { useState } from 'react';

function User() {

    const [nome, setNome] = useState('canoacomics');
    const [imagem, setImagem] = useState('assets/img/catanacomics.svg');

    const inserirNome = () => {
        const nomeDigitado = prompt('Digite o nome:');
        if (nomeDigitado && nomeDigitado.trim() !== '') {
            setNome(nomeDigitado);
        }
    }

    const inserirImagem = () => {
        const imagemDigitada = prompt('Digite a URL da imagem:');
        if (imagemDigitada && imagemDigitada.trim() !== '') {
            setImagem(imagemDigitada);
        }
    }

    return (
        <div className="usuario">
            <img onClick={inserirImagem} src={imagem} alt="imagem de perfil" />
            <div className="texto">
                <span>
                    <strong>{nome}</strong>
                    <button onClick={inserirNome}><ion-icon name="pencil"></ion-icon></button>
                </span>
            </div>
        </div>
    );
}

export default User;
