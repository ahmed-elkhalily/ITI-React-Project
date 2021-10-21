import { Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
    removeTodoAction,
    completeTodoTask,
} from "../../redux/todo/todo.actions";
import "./TodoShow.component.scss";
const TodoShow = () => {
    const todo = useSelector((state) => state.todo);
    const dispatch = useDispatch();

    return todo.length ? (
        <Container>
            {todo.map((task, index) => (
                <div className="task" key={index}>
                    <div className="task__header d-flex">
                        <h6
                            className={`task__title ${
                                task.status === "completed" ? "completed" : ""
                            }`}
                        >
                            {task.task}
                        </h6>
                        <div className="task__btns-group">
                            <button
                                className="task__btn task__btn-check"
                                onClick={() =>
                                    dispatch(completeTodoTask(index))
                                }
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M9 21.035l-9-8.638 2.791-2.87 6.156 5.874 12.21-12.436 2.843 2.817z" />
                                </svg>
                            </button>
                            <button
                                className="task__btn task__btn-del"
                                onClick={() =>
                                    dispatch(removeTodoAction(index))
                                }
                            >
                                <svg
                                    width="24"
                                    height="24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                >
                                    <path d="M5.662 23 .293 17.635a.996.996 0 0 1 0-1.414L15.222 1.293a1.001 1.001 0 0 1 1.414 0l7.071 7.073a.994.994 0 0 1 .293.708.995.995 0 0 1-.293.707L12.491 21h5.514v2H5.662zm3.657-2-5.486-5.486-1.419 1.414L6.49 21h2.829zm.456-11.429-4.528 4.528 5.658 5.659 4.527-4.53-5.657-5.657z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <p className="task__desc">{task.description}</p>
                </div>
            ))}
        </Container>
    ) : (
        <div className="text-danger d-flex justify-content-center align-items-center h-100">
            <h6>there's no tasks todo yet!</h6>
        </div>
    );
};
export default TodoShow;
