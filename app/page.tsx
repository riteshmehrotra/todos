import Counter from "./components/counter";
import ToDo from "./components/ToDo";
import ToDoList from "./components/ToDoList";

export const metadata = {
  title: "XPerience - ToDo Kata",
};

export default function Page() {
  return <div>
  <h1>XPerience - ToDo Kata</h1>
  <ToDoList></ToDoList>
  </div>
}
