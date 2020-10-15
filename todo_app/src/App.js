import React, { useState, useEffect } from "react";
import "./App.css";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import Todo from "./Todo";
import { db } from "./firebase";
import firebase from "firebase";
function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot(snapshot => {
        setTodos(
          snapshot.docs.map(doc => ({ id: doc.id, todo: doc.data().todo }))
        );
      });
  }, []);

  const addTodos = event => {
    event.preventDefault();
    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    setTodos([...todos, input]);
    setInput("");
  };
  return (
    <div className="App">
      <h2>Hey</h2>

      <form>
        <FormControl>
          <InputLabel>Type a Todo</InputLabel>
          <Input value={input} onChange={e => setInput(e.target.value)} />
        </FormControl>
        <Button
          disabled={!input}
          type="submit"
          onClick={addTodos}
          variant="contained"
          color="primary"
        >
          Add Todos
        </Button>
      </form>

      <ul>
        {todos.map(todo => (
          <Todo todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;

// https://github.com/sagarkb/Todo-App
