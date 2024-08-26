import Counter from "./components/counter";
import ToDo from "./components/ToDo";

export const metadata = {
  title: "XPerience - ToDo Kata",
};

export default function Page() {
  return <div>
  <h1>XPerience - ToDo Kata</h1>
  <ToDo item = {{"title":"TDD", "description":"Training"}}></ToDo>
  </div>
}
