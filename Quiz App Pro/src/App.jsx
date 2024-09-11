import Header from './Componets/Header.jsx';
import Main from './MainApp.jsx';
import Loader from './Componets/Loader.jsx';
import Error from './Componets/Error.jsx';
import './Componets/index.css';
import { useEffect } from 'react'
import { useReducer } from 'react'
import StartScreen from './Componets/StartScreen.jsx';
import Question from './Componets/Question.jsx';
import NextButton from './Componets/NextButton.jsx';
import Progress from './Componets/Progress.jsx';
import FinishScreen from './Componets/FinishScreen.jsx';
import Footer from './Componets/Footer.jsx';
import Timer from './Componets/Timer.jsx';

const SECS_PER_QUESTION = 30;

const initialState = {
  questions: [],
  status: 'Loading',
  index: 0,
  answer: null,
  points: 0,
  highScore: 0,
  secondsRemaining: null,
};

const reduser = (state, action) => {
  switch (action.type) {
    case 'dataResponse':
      return {
        ...state,
        questions: action.payload,
        status: 'ready'
      };
      case 'dataFeiled':
        return {
          ...state,
          status: 'Error' 
        };
        case 'start':
          return {
            ...state, 
            status: 'active',
            secondsRemaining: state.questions.length * SECS_PER_QUESTION
          };
          case 'newAnswer': 
          const question = state.questions.at(state.index);
          return {
            ...state,
            answer: action.payload,
            points: action.payload === question.correctOption 
            ? state.points + question.points
            : state.points
          };
          case 'nextQuestion': 
          return {
            ...state,
            index: state.index + 1,
            answer: null
          };
          case 'finished': 
          return {
            ...state,
            status: 'finished',
            highScore: state.points > state.highScore
            ? state.points
            : state.highScore
          };
          case 'restart':
            return {
              ...initialState, 
              question: state.question,
              status: 'ready'
            };
            case 'tick': 
            return {
              ...state, 
              secondsRemaining: state.secondsRemaining - 1,
              questions: state.questions,
              status: state.secondsRemaining === 0
              ? 'finished' 
              : state.status
            };
      default: new Error("action unkonwn")
  };
};

export default function App() {
  const [{questions, status, index, answer, points, highScore, secondsRemaining}, dispatch] = useReducer(reduser, initialState);

  const numQuestions = questions.length;
  const maxPoints = questions.reduce(
    (prev, cur) => prev + cur.points,
    0
  );

  useEffect(() => {
    fetch('http://localhost:8000/questions')
    .then(res => res.json())
    .then(data => dispatch({type: 'dataResponse', payload: data}))
    .catch(error => dispatch({type: 'dataFeiled'}))
  }, [])

  return (
    <div className='app'>
      <Header />

      <Main>
        {status === 'Loading' && <Loader />}
        {status === 'Error' && <Error />}
        {status === 'ready' && <StartScreen
        numQuestions={numQuestions}
        onDispatch={dispatch} />}
        {status === 'active' &&
        <>
        <Progress 
        index={index}
        answer={answer}
        points={points}
        maxPoints={maxPoints}
        numQusetions={numQuestions}/>
        <Question
        questions={questions[index]}
        onDispatch={dispatch}
        answer={answer}/>
        <Footer>
        <Timer 
        onDispatch={dispatch}
        SecondsRemaining={secondsRemaining} />
        <NextButton 
        onDispatch={dispatch} 
        answer={answer}
        index={index} 
        numQuestions={numQuestions} />
        </Footer>
        </>
        }
        {status === 'finished' && <FinishScreen 
        points={points}
        maxPoints={maxPoints}
        highScore={highScore}
        onDispatch={dispatch} />}
      </Main>
    </div>
  )
};
