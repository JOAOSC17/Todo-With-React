import React from 'react'
import ListItem from './ListItem'
function List(props){
    function DoneImg(props){
        if(props.done){
            return (<img src="./on.png" alt="done"></img>)
        }else{
            return (<img src="./off.png" alt="undone"></img>)
        }   
    }
    return (
        <ul>
            {props.items.map(item => <ListItem key={item.id} item={item} onDone={props.onDone} onItemDeleted={props.onItemDeleted}></ListItem>)}
        </ul>
    )
}

export default List;