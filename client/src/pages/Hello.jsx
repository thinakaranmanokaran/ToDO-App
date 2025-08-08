import React, { useState } from 'react'
import { motion } from "motion/react";

const Hello = () => {

    const [todos, setTodos] = useState([]);


    const Data = [
        {
            title: 'Hello World',
            content: 'This is a simple hello world component.'
        },
        {
            title: 'Hello World',
            content: 'This is a simple hello world component.'
        },
        {
            title: 'Hello World',
            content: 'This is a simple hello world component.'
        },
        {
            title: 'Hello World',
            content: 'This is a simple hello world component.'
        },
        {
            title: 'Hello World',
            content: 'This is a simple hello world component.'
        }
    ]

    return (
        <div>
            <button onClick={() => setTodos(!todos)} className='bg-primary p-2 m-2'>Add</button>
            {todos && Data.map((item, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className='bg-primary p-10 m-2 w-fit  '>
                    <h2>{item.title}</h2>
                    <p>{item.content}</p>
                </motion.div>
            ))}
        </div>
    )
}

export default Hello