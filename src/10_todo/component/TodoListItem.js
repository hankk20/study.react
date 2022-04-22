import React, {useCallback} from "react";
import './TodoListItem.scss'
import {MdCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircleOutline} from "react-icons/md";
import cn from 'classnames'

const TodoListItem = ({todo, onDelete, onToggle, style}) => {

    const {id, text, checked} = todo;

    const onClick = () => {
        onDelete(id);
    }

    return (
        <div className={"TodoListItem-virtualized"} style={style}>
            <div className={"TodoListItem"}>
                <div className={cn('checkbox', {checked})} onClick={() => onToggle(id)}>
                    {checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
                    <div className={"text"}>{text}</div>
                </div>
                <div className={"remove"} onClick={onClick}>
                    <MdRemoveCircleOutline/>
                </div>
            </div>
        </div>
    )
}

export default React.memo(
    TodoListItem,
    ((prevProps, nextProps) => prevProps.todo === nextProps.todo),
    );