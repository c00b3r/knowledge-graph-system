import './Question.css';

type QuestionProps = {
  text:string;
}

const Question: React.FC<QuestionProps> = ({ text }) => {
  return (
    <div className="question">
        <p className='question-text'>{text}</p>
    </div>
  )
}

export default Question;
