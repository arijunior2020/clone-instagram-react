import Suggestion from './Suggestion';

function Suggestions() {
    const suggestionsData = [
        { img: 'assets/img/bad.vibes.memes.svg', user: 'bad.vibes.memes', reason: 'Segue você' },
        { img: 'assets/img/chibirdart.svg', user: 'chibirdart', reason: 'Segue você' },
        { img: 'assets/img/razoesparaacreditar.svg', user: 'razoesparaacreditar', reason: 'Novo no Instagram' },
        { img: 'assets/img/adorable_animals.svg', user: 'adorable_animals', reason: 'Segue você' },
        { img: 'assets/img/smallcutecats.svg', user: 'smallcutecats', reason: 'Segue você' },
    ];

    return (
        <div className="sugestoes">
            <div className="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {suggestionsData.map((suggestion, index) => (
                <Suggestion
                    key={index}
                    img={suggestion.img}
                    user={suggestion.user}
                    reason={suggestion.reason}
                />
            ))}
        </div>
    );
}

export default Suggestions;
