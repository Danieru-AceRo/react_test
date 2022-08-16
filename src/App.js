import './App.css';
import AllForms from './components/AllForms';

const allForms = [
  {
    id: 2,
    question: "Modern Web browsers can read JSX directly ",
    type: "checkBox",
    answer: ["true", "false"]
  }, 
  {
    id: 3,
    question: "In a web browser a JSX file needs to be transformed into a regular JavaScript",
    type: "checkBox",
    answer: ["true", "false"]
  }, 
  {
    id: 4,
    question: "DOM stands for Document Only Module",
    type: "checkBox",
    answer: ["true", "false"]
  }, 
  {
    id: 5,
    question: "The next component belongs to ES6 standards",
    type: "comboBox",
    answer: ["true", "false"]
  }, 
  {
    id: 6,
    question: "The next component belongs to ES6 standards",
    type: "comboBox",
    answer: ["true", "false"]
  }, 
  {
    id: 7,
    question: "The next Require declaration belongs to ES6 standards",
    type: "radio",
    answer: ["true", "false"]
  }, 
  {
    id: 8,
    question: "The next Require declaration belongs to ES6 standards",
    type: "radio",
    answer: ["true", "false"]
  }, 
]
function App() {
  return (
    <div>
      {allForms.map((form) =>
        <AllForms key={form.id} new_form={form}/>
      )}
    </div>
  );
}

export default App;
