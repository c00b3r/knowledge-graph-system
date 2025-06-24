import { NavLink } from 'react-router';
import './Question.css';

type QuestionProps = {
  text: string;
  id?: number;
};

const Question: React.FC<QuestionProps> = ({ text, id }) => {
  return (
    <NavLink to={`/editor/${id}`}>
      {({ isActive }) => (
        <div
          className={`${isActive ? 'question-active' : 'question'}`}
          title={text}
        >
          <p className='question-text'>{text}</p>
        </div>
      )}
    </NavLink>
  );
};

export default Question;
