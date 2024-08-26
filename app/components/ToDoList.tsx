import ToDo from "./ToDo"

const ToDoList = () => {
    return <div >
        <div title="toDoCard">
            <ToDo item={{ "title": "TDD", "description": "Blah" }}></ToDo>
        </div>
        <div title="toDoCard">
            <ToDo item={{ "title": "TDD2", "description": "Blah2" }}></ToDo>
        </div>
    </div>
}


export default ToDoList;