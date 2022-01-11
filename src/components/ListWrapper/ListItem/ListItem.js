import React from "react";
import PropTypes from "prop-types";
import styles from './ListItem.module.scss';
import Button from "../../Button/Button";
import Title from "../../Title/Title";


const ListItem = (props) => {
    
    const ImageTag = props.image ? 'img' : 'div';

    return (
        <li className={styles.wrapper}>
            { props.image && <ImageTag src={props.image} alt={`${props.title} img`} className={props.image ? styles.img : styles.imageNone}/>}
            <div>
                <Title>{props.title}</Title>
                <p className={styles.description}>{props.description}</p>
                {props.link && <a href={props.link} rel="noreferrer" target="_blank"><Button>{props.image ? 'visit twitter page' : 'visit page'}</Button></a>}
            </div>
        </li>
    )
};

ListItem.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string
}

ListItem.defaultProps = {
    link:null,
    image:null,
}


export default ListItem;
