'use client';
import Task from './task';
import styles from '../styles/TaskFeed.module.css';
import {taskFields} from '../types/displayTypes';

type taskFeedProps = {
    setEditorIndex: React.Dispatch<React.SetStateAction<number | null>>,
    sortList: taskFields[],
    setTaskList: React.Dispatch<React.SetStateAction<taskFields[]>>,
    sortSelect: React.RefObject<HTMLSelectElement>,
    setSortMethod: React.Dispatch<React.SetStateAction<string>>,
}

export default function TaskFeed({setEditorIndex, sortList, setTaskList, sortSelect, setSortMethod} : taskFeedProps) {

    return (
        <div className={styles.taskFeed}>
            <select ref={sortSelect} onChange={e => setSortMethod(e.target.value)}>
                <option>Sort by</option>
                <option>Date & Time</option>
                <option>Alphabetical</option>
                <option>Completed</option>
                <option>Pending</option>
                <option>Personal</option>
                <option>Professional</option>
                <option>Urgent</option>
            </select>
            <div className=''></div>
            {sortList && sortList.map((e, i) => {
                return <Task index={i} setEditorIndex={setEditorIndex} sortList={sortList} setTaskList={setTaskList} key={i}/>
            })}
        </div>
    )
}