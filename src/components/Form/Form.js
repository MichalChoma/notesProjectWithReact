import React from "react";
import styles from './Form.module.scss'
import AppContext from "../../context";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Title from "../Title/Title";
import Radio from "../Radio/Radio";

const types = {
    twitter:'twitter',
    article:'article',
    note:'note',
}

const descriptions = {
    twitter:"favorite Twitter Account",
    article:"Article",
    note:"Note",
}


class Form extends React.Component{

    state = {
        type: types.twitter,
        title:'',
        link:'',
        image:'',
        description:'',
    }

    handleRadioButtonChange = type => {
        this.setState({
            type:type,
        })
    }

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
        // console.log(`
        //     title: ${this.state.title},
        //     link: ${this.state.link},
        //     image: ${this.state.image},
        //     description: ${this.state.description},
        // `)
    }

    render(){

        const { type } = this.state;

        return (
            <AppContext.Consumer>
                {
                    (context) => (
                        <form autoComplete="off" onSubmit={(e) => context.addItem(e, this.state)} className={styles.form}>
                            <Title>Add new {descriptions[type]}</Title>
                            <div className={styles.wrapForRadio}>
                                <Radio id={types.twitter} checked={type === types.twitter} changeFn={() => this.handleRadioButtonChange(types.twitter)}>Twitter</Radio>
                                <Radio id={types.article} checked={type === types.article} changeFn={() => this.handleRadioButtonChange(types.article)}>Article</Radio>
                                <Radio id={types.note} checked={type === types.note} changeFn={() => this.handleRadioButtonChange(types.note)}>Note</Radio>
                            </div>
                            <Input onChange={this.handleInputChange} value={this.state.title} name="title" placeholder={type === types.twitter ? "Twitter name" : "name"} />
                            {type!==types.note ? <Input onChange={this.handleInputChange} value={this.state.link} name="link" placeholder={type === types.twitter ? "Twitter link" : "link"} /> : null}
                            {type === types.twitter ? <Input onChange={this.handleInputChange} value={this.state.image} name="image" placeholder="image" /> : null}
                            <Input onChange={this.handleInputChange} value={this.state.description} placeholder="description" name="description" tag="textarea" />
                            <Button>add new item</Button>
                        </form>
                    )
                }
            </AppContext.Consumer>
        )
    }
}

// const Form = ({submitFunction}) => {

//     return (
//             <form autoComplete="off" onSubmit={submitFunction} className={styles.form}>
//                 <Title>Add new twitter account</Title>
//                 <Input name="name" />
//                 <Input name="twitterLink" />
//                 <Input name="image" />
//                 <Input name="description" tag="textarea" />
//                 <Button>add new item</Button>
//             </form>
//     )
// }

export default Form;

