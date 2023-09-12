// Dependencies
import React, { useState } from 'react';

// Export component
const ChatGroup = (props: any) => {
    const [value, setValue] = useState('')
    const [formOpen, setFormOpen] = useState(false)

    const onSubmit = (e: any) => {
        e.preventDefault()
        props.onSubmit({ value })
        setValue('')
    };

    return (
        <div>
            {
                formOpen ?
                <form onSubmit={e => onSubmit(e)}>
                    <input
                        autoFocus
                        value={value}
                        placeholder={props.placeholder}
                        onBlur={() => setFormOpen(false)}
                        onChange={e => setValue(e.target.value)}
                    />
                </form>:
                <span className="flex items-center justify-between">
                    <span className="text-white text-lg font-medium">
                        {props?.title}
                    </span>
                    <button onClick={() => setFormOpen(true)}>
                      <img className="w-6 h-6" src="/images/icons/plus-circle.svg" alt={'plus'} />
                    </button>
                </span>
            }
        </div>
    );
}

export default ChatGroup;
