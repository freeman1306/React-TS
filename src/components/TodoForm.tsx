import React, { useRef } from 'react'


interface TodoFormProps {
    onAdd(title: string): void
}

export const TodoForm: React.FC<TodoFormProps> = (props) => {
    // const [title, setTitle] = useState<string>('')

    // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setTitle(event.target.value)
    // }



    const ref1 = useRef<HTMLInputElement>(null)

    const onKeyHandler = (event: React.KeyboardEvent) => {
        if (event.key === "Enter") {
            props.onAdd(ref1.current!.value);

            ref1.current!.value = ''
            // console.log({ title })
        };

    }


    return (
        <div className="input-field">

            <input
                // onChange={changeHandler}
                // value={title}
                type="text"
                ref={ref1}
                id="title"
                placeholder='enter value'
                onKeyPress={onKeyHandler}
            />
            <label htmlFor="title" className="active">ddddddd</label>

        </div>

    )
}