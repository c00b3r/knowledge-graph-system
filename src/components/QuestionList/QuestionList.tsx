import Question from "../Question/Question";
import { Flex } from "antd";

type QuestionsListProps = {
    questions: string[];
    count: number;
}; 

const QuestionsList: React.FC<QuestionsListProps> = ({ questions, count }) => { 
    return (
        <Flex vertical gap={'2px'}>
            {questions.slice(0, count).map((question, index) => (
                <Question key={index} text={question} />
            ))}
        </Flex>
    );
};

export default QuestionsList;
