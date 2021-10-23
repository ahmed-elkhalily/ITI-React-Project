import { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Button, Container, Row } from "react-bootstrap";
import { addTodoAction } from "../../redux/todo/todo.actions";
// component
import FormInput from "../../components/formInput/FormInput.component";
import TodoShow from "../../components/todo-show/TodoShow.component";
import "./TodoLIst.page.scss";

const TodoList = () => {
    const [task, setTask] = useState("");
    const [description, setDescription] = useState("");
    const dispatch = useDispatch();
    function submitForm(e) {
        e.preventDefault();
        if (task && description) {
            dispatch(
                addTodoAction({
                    task: task,
                    description: description,
                    status: "inprogress",
                })
            );
            setTask("");
            setDescription("");
        }
    }
    return (
        <Container>
            <h2 className="todo-header mt-5 mb-5 text-center ">todo list</h2>
            <Row>
                <div className="col-8">
                    <TodoShow />
                </div>
                <Form className="col-4" onSubmit={submitForm}>
                    <FormInput
                        controlId="name"
                        labelName="taskName"
                        type="text"
                        placeholder="enter your task!"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                    />
                    <FormInput
                        controlId="description"
                        labelName="description"
                        as="textarea"
                        rows="3"
                        placeholder="descripe your task!"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <Button className="w-100 task__form-btn" type="submit">
                        Add Task
                    </Button>
                </Form>
            </Row>
        </Container>
    );
};
export default TodoList;
