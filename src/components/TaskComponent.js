import {useState} from "react";
import TaskComponentCss from './TaskComponent.css';

export default function TaskComponent({subtasks}){
    const [isExpanded, setIsExpanded] = useState(false);

    function onClickHandler() {
        if(subtasks.length) {
            setIsExpanded(!isExpanded);
        }
    }

    const subtaskHeaderClass = subtasks.length ? 'subtask-header-expandable':'subtask-header-nonexpandable';

    return (
        <div className='subtasks'>
            {
                !isExpanded ?
                    <span onClick={onClickHandler}>
                        ▶ <span className={subtaskHeaderClass}>
                            Show Subtasks
                            <span className='tooltip'>{subtasks.length}</span>
                        </span>
                        <>
                            {
                                subtasks
                            }
                        </>
                    </span>:
                    <span onClick={onClickHandler}>
                        ▼ <span className={subtaskHeaderClass}>Hide Subtasks</span>
                    </span>
            }
        </div>
    )
}

