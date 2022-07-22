import React, { useEffect,useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { listTodo } from "../actions/todoActions.js";

const TodoScreen = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const [filter,setFilter]=useState("")

  let index = 1;
  const listTodos = useSelector((state) => state.listTodos);
  const { loading, todos, error } = listTodos;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("todo from todoScreen", todos);
      dispatch(listTodo());
    if (!userInfo) {
      navigate("/login");
    }
  }, [userInfo, navigate, dispatch]);

  const clickHandler = (e) => {
    e.preventDefault();
    navigate("/addtodo");
  };
  return (
    <Container>
      <input
        value={filter}
        placeholder="Enter todo"
        type="text"
        onChange={(e) => setFilter(e.target.value)}
      />

      <Table striped bordered hover size="sm">
        {loading && <Loader />}
        {error && <Message variant="danger">{error}</Message>}
        <thead>
          <tr>
            <th>##</th>
            <th>Todo</th>
            <th>Date of Completion</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {todos
            ? todos
                .filter((item) => {
                  if (item === "") {
                    return item;
                  } else if (
                    item.todo.toLowerCase().includes(filter.toLowerCase())
                  ) {
                    return item;
                  }
                })

                .map((todo) => (
                  <tr key={todo._id}>
                    <td>{index++}</td>
                    <td>{todo.todo}</td>
                    <td>{todo.date}</td>
                    <td>
                      {todo.completion === true ? "Complete" : "Not complete"}
                    </td>
                  </tr>
                ))
            : "No data"}
        </tbody>
      </Table>
      <Button type="submit" onClick={clickHandler}>
        Add More
      </Button>
    </Container>
  );
};

export default TodoScreen;
