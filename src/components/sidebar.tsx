import styles from '../styles/Sidebar.module.css';
import {taskFields} from '../types/displayTypes';

type sidebarProps = {
    setEditorIndex: React.Dispatch<React.SetStateAction<number | null>>
    taskList: taskFields[],
    searchSelect: React.RefObject<HTMLInputElement>,
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>
} 

export default function Sidebar({setEditorIndex, taskList, searchSelect, setSearchQuery}: sidebarProps) {
    const SearchBox = () => {

        const handleSearchButton = () => {
            if (searchSelect.current && searchSelect.current.value) {
                setSearchQuery(searchSelect.current.value)
            };
        }

        return (
            <div className={styles.searchBoxWrapper}>
                <input ref={searchSelect} className={styles.searchBox}/>
                <button className={styles.searchButton} onClick={handleSearchButton}>Search</button>
            </div>
        )
    }

    const NewTaskBtn = () => {
        return (
            <button className={styles.newTaskBtn} onClick={() => {setEditorIndex(taskList.length)}}>New Task +
            {/* <svg viewBox='0 0 40 40'>
                <line x1='5' y1='20' x2='35' y2='20' stroke='var(--blue-1)' strokeWidth='5px'/>
                <line x1='20' y1='5' x2='20' y2='35' stroke='var(--blue-1)' strokeWidth='5px'/>
            </svg> */}

            </button>
        )
    }


    return (
        <div className={styles.sidebar}>
            <SearchBox />
            <NewTaskBtn />
        </div>
    )

}