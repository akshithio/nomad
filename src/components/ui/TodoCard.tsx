import { useState } from "react"

export interface Todo{
    content: string,
    sourceComplete: boolean
}


export default function TodoCard({content, sourceComplete}: Todo){
    const [completed, setCompleted] = useState(sourceComplete)
    return (
        <div className="rounded-lg bg-neutral-100 px-12 py-4 space-x-2">   
            <input type="checkbox" className="border-neutral-400" checked={completed} onClick={(i) => {
                setCompleted(i.currentTarget.checked)
            }}/>
            <span className={completed ? "line-through" : ""}>{content}</span>
        </div>
    )
}