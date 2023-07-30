import { useAppSelector } from "../store"

export function TodoList() {
  const todo = useAppSelector(store => {
    return store.todo
  })

  return (
    <ul>
      {todo.map(todos => <li key={todos}>{todos}</li>)}
    </ul>
  )
}