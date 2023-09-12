// Dependencies
import React, { useEffect, useState } from 'react';
import { Droppable, Draggable, DragDropContext, DropResult } from 'react-beautiful-dnd';

// Components
import { MainLayout } from '../../../components/layouts/MainLayout';

// Contexts
import { TASK, useTaskContext } from '../../../contexts/TaskContext';


// Export page
const TasksPage = () => {
    const [newTaskTitle, setNewTaskTitle] = useState('');
    const [tasks, setTasks] = useState<TASK[]>([]);

    const {
        tasks: originTasks,
        finishedTasks,
        deletedTasks,
        addTask,
        deleteTask,
        completeTask,
        undoCompletingTask,
        undoDeletingTask,
        deleteAll,
        clearAll,
    } = useTaskContext();

    const handleAddTask = () => {
        addTask(newTaskTitle);
        setNewTaskTitle('');
    };

    const handleDragEnd = (result: DropResult) => {
      const array = Array.from(tasks);
      const [removed] = array.splice(result.source.index, 1);
      array.splice(result.destination?.index || 0, 0, removed);

      setTasks(array);
    };

    useEffect(() => {
      setTasks(originTasks);
    }, [originTasks])

    return (
        <MainLayout>
            <div className="container pt-[58px]">
                <div className="mb-12">
                    <p className="font-bold font-[Manrope] text-[28px] text-[#01174F] mb-4">New Task</p>
                    <div className="flex items-center">
                        <input
                            className="flex-1 rounded-[12px] bg-[#FFFFFF75] card-shadow px-4 py-[14px] text-[22px] font-[600] leading-[30.05px] focus:outline-none"
                            value={newTaskTitle}
                            onChange={e => setNewTaskTitle(e.target.value)}
                            placeholder="Input title..."
                        />
                        <button
                            className="w-[130px] h-[58px] ml-8 rounded-[12px] text-[22px] bg-buttonPrimary text-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]"
                            onClick={handleAddTask}
                        >Add</button>
                    </div>
                </div>
                <div className='mb-12'>
                    <p className="font-bold font-[Manrope] text-[28px] text-[#01174F] mb-4">My Task</p>
                    <DragDropContext onDragEnd={handleDragEnd}>
                        <Droppable droppableId="droppable">
                            {(provided, snapshot) => (
                                <div {...provided.droppableProps} ref={provided.innerRef}>
                                    {tasks.map((task, index) => (
                                        <Draggable key={task.id} draggableId={task.id} index={index}>
                                            {(provided, snapshot) => (
                                                <div
                                                    className='flex select-none items-center bg-[#FFFFFF75] card-shadow rounded-[12px] px-4 py-[14px] mb-4'
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    style={provided.draggableProps.style}
                                                >
                                                    <img className='w-[13px] h-[23px]' src='/images/icons/handle.svg' alt='' />
                                                    <p className='ml-[20px] text-[#01174F] font-[600] text-[22px] flex-1'>{task.title}</p>
                                                    <button className='ml-3' onClick={() => completeTask(task.id)}>
                                                        <img className='w-[36px] h-[36px]' src='/images/icons/check_circle.svg' alt='' />
                                                    </button>
                                                    <button className='ml-3' onClick={() => deleteTask(task.id)}>
                                                        <img className='w-[36px] h-[36px]' src='/images/icons/delete_circle.svg' alt='' />
                                                    </button>
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </DragDropContext>
                </div>
                <div className='mb-12'>
                    <p className="font-bold font-[Manrope] text-[28px] text-[#01174F] mb-4">Finished Tasks</p>
                    {finishedTasks.map((task, index) => (
                        <div key={`finished-task-item-${index}`} className='mb-4 h-[58px] bg-[#FFFFFF75] card-shadow rounded-[12px] flex items-center px-4 py-[14px]'>
                            <p className='text-[#C0C0C0] text-[22px] font-[600] flex-1'>{task.title}</p>
                            <button className='bg-buttonPrimary rounded-full px-6 py-[6px] text-white ml-[10px]' onClick={() => undoCompletingTask(task.id)}>Undo</button>
                        </div>
                    ))}
                    {!!finishedTasks.length && (
                        <button
                            className='border-[2px] border-[#E10000] bg-white card-shadow px-[21px] py-[14px] rounded-[12px] mt-6 text-[#E10000] text-[22px] font-[600]'
                            onClick={clearAll}
                        >Clear All</button>
                    )}
                </div>
                <div className='mb-12'>
                    <p className="font-bold font-[Manrope] text-[28px] text-[#01174F] mb-4">Recently Deleted</p>
                    {deletedTasks.map((task, index) => (
                        <div key={`finished-task-item-${index}`} className='mb-4 h-[58px] bg-[#FFFFFF75] card-shadow rounded-[12px] flex items-center px-4 py-[14px]'>
                            <p className='text-[#C0C0C0] text-[22px] font-[600] flex-1'>{task.title}</p>
                            <button className='bg-buttonPrimary rounded-full px-6 py-[6px] text-white ml-[10px]' onClick={() => undoDeletingTask(task.id)}>Undo</button>
                        </div>
                    ))}
                    {!!deletedTasks.length && (
                        <button
                            className='border-[2px] border-[#E10000] bg-white card-shadow px-[21px] py-[14px] rounded-[12px] mt-6 text-[#E10000] text-[22px] font-[600]'
                            onClick={deleteAll}
                        >Delete All</button>
                    )}
                </div>
            </div>
        </MainLayout>
    );
}

export default TasksPage;
