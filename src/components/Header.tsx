import { useAppSelector } from "../store"
import { useCurrentLesson } from "../store/slices/player"

export function Header() {
  const { currentModule, currentLesson } = useCurrentLesson()

  return (
    <div className="flex flex-col gap-1" >
      <h1 className="text-2xl font-bold">{currentLesson.title}</h1>
      <span className="text-sm text-zinc-100">{currentModule.title}</span>
    </div>

  )
}