import Story from './Story';

function Stories() {
  const storiesData = [
    { img: 'assets/img/9gag.svg', user: '9gag' },
    { img: 'assets/img/meowed.svg', user: 'meowed' },
    { img: 'assets/img/barked.svg', user: 'barked' },
    // Adicione mais stories aqui...
  ];

  return (
    <div className="stories">
      {storiesData.map((story, index) => (
        <Story key={index} img={story.img} user={story.user} />
      ))}
      <div className="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}

export default Stories;
