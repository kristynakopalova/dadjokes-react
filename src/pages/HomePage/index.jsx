import './style.css';
import { Joke } from '../components/joke';

const response = await fetch('http://localhost:4000/api/jokes');
const data = await response.json();
const jokes = data.result;

export const HomePage = () => {
  return (
    <div className="container">
      {jokes.map((joke) => (
        <Joke
          key={joke.id}
          userAvatar={joke.avatar}
          userName={joke.name}
          text={joke.text}
          likes={joke.likes}
          dislikes={joke.dislikes}
        />
      ))}
    </div>
  );
};
