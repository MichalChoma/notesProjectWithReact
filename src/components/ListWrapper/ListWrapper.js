import React from 'react'
import ListItem from './ListItem/ListItem';
import './ListWrapper.css';


const ListWrapper = ({items}) => (
    <>
        {items.length ? (
            <ul className="listWrapper__wrapper">
                {items.map(item => (
                    <ListItem key={item.title} {...item}/>
                ))}        
            </ul>
        ) : (
            <h1 className='textIfNothing'>There`s nothing here yet, please add some items mate!</h1>
        )}
        
    </>
)


export default ListWrapper;