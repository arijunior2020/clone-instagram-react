import Post from './Post';

function Posts() {
  const postsData = [
    {
      userImg: 'assets/img/meowed.svg',
      userName: 'meowed',
      contentImg: 'assets/img/gato-telefone.svg',
      likedByImg: 'assets/img/respondeai.svg',
      likedByUser: 'respondeai',
      likes: 101523,
    },
    {
      userImg: 'assets/img/barked.svg',
      userName: 'barked',
      contentImg: 'assets/img/dog.svg',
      likedByImg: 'assets/img/adorable_animals.svg',
      likedByUser: 'adorable_animals',
      likes: 99159,
    },
  ];

  return (
    <div className="posts">
      {postsData.map((post, index) => (
        <Post key={index} {...post} />
      ))}
    </div>
  );
}

export default Posts;
