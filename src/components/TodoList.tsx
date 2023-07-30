import { useSelector } from "react-redux"

export function TodoList() {
  const todo = useSelector(store => {
    return store.todo
  })

  console.log(todo)

  return (
    <ul>
      {todo.map(todos => <li key={todos}>{todos}</li>)}
    </ul>
  )
}