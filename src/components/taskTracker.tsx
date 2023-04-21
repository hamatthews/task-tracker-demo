'use client';

import {useState, useRef} from 'react';

import Navbar from './navbar';
import Sidebar from './sidebar';
import TaskFeed from './taskFeed';
import TaskEditor from './taskEditor';

import styles from '../styles/TaskTracker.module.css';

import {taskFields} from '../types/displayTypes';

export default function TaskTracker() {

    const [editorIndex, setEditorIndex] = useState<number | null>(null);
    const [taskList, setTaskList] = useState<taskFields[]>([]);
    const [sortMethod, setSortMethod] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    const searchSelect = useRef<HTMLInputElement>(null);

    const sortSelect = useRef<HTMLSelectElement>(null);
    let sortList = [...taskList];

        if (sortList[0]) {
            if (sortMethod) {
                switch (sortMethod) {
                    case 'Date & Time':
                        sortList.sort((a: taskFields, b: taskFields) => {
                            if (a === undefined || b === undefined || +a.time.split(':').join('') < +b.time.split(':').join('')) return 1;
                            else return -1;
                        })
                        .sort((a: taskFields, b: taskFields) => {
                            if (a === undefined || b === undefined || new Date(a.date) > new Date(b.date)) return 1;
                            else return -1;
                        })
                        break;
                    case 'Alphabetical':
                        sortList.sort((a: taskFields, b: taskFields) => {
                            if (a === undefined || b === undefined || a.title > b.title) return 1;
                            else return -1;
                        })
                        break;
                    case 'Completed':
                        sortList.sort((a: taskFields, b: taskFields) => {
                            if (a === undefined || b === undefined || !a.completed && b.completed) return 1;
                            else return -1;
                        })
                        break;
                    case 'Pending':
                        sortList.sort((a: taskFields, b: taskFields) => {
                            if (a === undefined || b === undefined || a.completed && !b.completed) return 1;
                            else return -1;
                        })
                        break;
                    case 'Personal':
                        sortList.sort((a: taskFields, b: taskFields) => {
                            if (a === undefined || b === undefined || !a.labels.personal) return 1;
                            else return -1;
                        })
                        break;
                    case 'Professional':
                        sortList.sort((a: taskFields, b: taskFields) => {
                            if (a === undefined || b === undefined || !a.labels.professional) return 1;
                            else return -1;
                        })
                        break;
                    case 'Urgent':
                        sortList.sort((a: taskFields, b: taskFields) => {
                            if (a === undefined || b === undefined || !a.labels.urgent) return 1;
                            else return -1;
                        })
                        break;
                    }
                    
            }   
            
            sortList = sortList.filter(e => {
                if (searchSelect.current) {
                    return e.title.toString().toLowerCase().includes(searchQuery.toString().toLowerCase()) || e.description.toString().toLowerCase().includes(searchQuery.toString().toLowerCase())
                }
                else true;
            })
        }    


    return (
        <div className={styles.taskTracker}>
            <Navbar />
            <Sidebar setEditorIndex={setEditorIndex} taskList={taskList} searchSelect={searchSelect} setSearchQuery={setSearchQuery}/>
            <TaskFeed setEditorIndex={setEditorIndex} sortList={sortList} setTaskList={setTaskList} sortSelect={sortSelect} setSortMethod={setSortMethod}/>
            {editorIndex !== null && <TaskEditor editorIndex={editorIndex} setEditorIndex={setEditorIndex} sortList={sortList} setTaskList={setTaskList}/>}
        </div> 
    )
}