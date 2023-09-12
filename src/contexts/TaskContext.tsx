// Dependencies
import React, { useState, createContext, useContext, FC } from 'react';
import { v4 as uuidv4 } from 'uuid';

export enum TASK_STATE {
    HIGH = 'High',
    MEDIUM = 'Med',
    LOW = 'Low'
}

export interface TASK {
    id: string;
    title: string;
    state: TASK_STATE;
    deleted_at?: string;
    completed_at?: string;
}

interface TaskContextProps {
    tasks: TASK[];
    deletedTasks: TASK[];
    finishedTasks: TASK[];
    addTask: (title: string) => void;
    deleteTask: (id: string) => void;
    undoDeletingTask: (id: string) => void;
    completeTask: (id: string) => void;
    undoCompletingTask: (id: string) => void;
    deleteAll: () => void;
    clearAll: () => void;
}

const initialValues = {
    tasks: [],
    deletedTasks: [],
    finishedTasks: [],
    addTask: () => {},
    deleteTask: () => {},
    undoDeletingTask: () => {},
    completeTask: () => {},
    undoCompletingTask: () => {},
    deleteAll: () => {},
    clearAll: () => {},
}

const TaskContext = createContext<TaskContextProps>(initialValues);

export const TaskProvider: FC<any> = ({ children }) => {
    const [tasks, setTasks] = useState<TASK[]>(initialValues.tasks);

    const addTask = (title: string) => {
        const newTask: TASK = {
            id: uuidv4(),
            title,
            state: TASK_STATE.HIGH,
        };

        setTasks(prev => [...prev, newTask]);
     };

    const deleteTask = (id: string) => {
        setTasks(prev => prev.map((task) => task.id === id ? ({
            ...task,
            deleted_at: new Date().toLocaleString(),
        }) : task));
    };

    const undoDeletingTask = (id: string) => {
        setTasks(prev => prev.map((task) => task.id === id ? ({
            ...task,
            deleted_at: undefined,
        }) : task));
    };

    const completeTask = (id: string) => {
        setTasks(prev => prev.map((task) => task.id === id ? ({
            ...task,
            completed_at: new Date().toLocaleString(),
        }) : task));
    };

    const undoCompletingTask = (id: string) => {
        setTasks(prev => prev.map((task) => task.id === id ? ({
            ...task,
            completed_at: undefined,
        }) : task));
     };

    const deleteAll = () => {
        setTasks(prev => prev.filter(({ deleted_at }) => !deleted_at));
    };

    const clearAll = () => {
        setTasks(prev => prev.filter(({ completed_at }) => !completed_at));
    };

    const value = {
        tasks: tasks.filter(({ deleted_at, completed_at }) => !deleted_at && !completed_at),
        deletedTasks: tasks.filter(({ deleted_at }) => !!deleted_at),
        finishedTasks: tasks.filter(({ completed_at }) => !!completed_at),
        addTask,
        deleteTask,
        undoDeletingTask,
        completeTask,
        undoCompletingTask,
        deleteAll,
        clearAll,
    }

    return (
        <TaskContext.Provider value={value}>
            {children}
        </TaskContext.Provider>
    );
}

export const useTaskContext = () => {
    return useContext(TaskContext);
}
