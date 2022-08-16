import React from "react";
import Answers from "./Answers";

function AllForms(new_form) {
  const question = new_form.new_form.question;
  const answer = new_form.new_form.answer;
  const type = new_form.new_form.type;
  if (type === "comboBox") {
    return (
      <div>
        <br />
        <label for="cars">{question}</label>
        <br />
        <select name={question}>
          {answer.map((x) => (
            <option value={x}>{x}</option>
          ))}
        </select>
        <br />
      </div>
    );
  }
  return (
    <div>
      <br />
      <form>
        <legend>
          {question}
          <br />
          {answer.map((x) => (
            <Answers prop={x} prop2={type} />
          ))}
        </legend>
        <br />
      </form>
    </div>
  );
}

export default AllForms;
