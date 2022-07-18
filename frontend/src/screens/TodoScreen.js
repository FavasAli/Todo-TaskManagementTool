import React, { useEffect } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { listTodo } from "../actions/todoActions.js";

const TodoScreen = () => {



  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  let index=1
  const listTodos = useSelector((state) => state.listTodos);
  const { loading, todos, error } = listTodos;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("todo from todoScreen",todos)
    dispatch(listTodo());
    if (!userInfo) {
      navigate("/login");
    }
  }, [userInfo,navigate,dispatch]);

  const clickHandler=(e)=>{
    e.preventDefault()
    navigate('/addtodo')
  }
  return (
    <Container>
      <Table striped bordered hover size="sm">
      {loading && <Loader />}
      {error && <Message variant="danger">{error}</Message>}
      <thead>
        <tr>
          <th>##</th>
          <th>Todo</th>
          <th>Date of Completion</th>
          <th>Complete</th>
        </tr>
      </thead>
      <tbody>
        {todos &&
          todos.map((todo) => (
            <tr key={todo._id}>
              <td>{index++}</td>
              <td>{todo.todo}</td>
              <td>{todo.date}</td>
              <td>{todo.completion===true?'Complete':"Not complete"}</td>
            </tr>
          ))}
      </tbody>
    </Table>
    <Button type='submit' onClick={clickHandler}>Add More</Button>
    </Container>
  );
};

export default TodoScreen;
