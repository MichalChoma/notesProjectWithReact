import './Root.css';
import React from 'react';
import AppContext from '../../context';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TwitterView from '../TwitterView/TwitterView';
import ArticlesView from '../ArticlesView/ArticlesView';
import NotesView from '../NotesView/NotesView';
import Header from '../../components/Header/Header';
import Modal from '../../components/Modal/Modal';





class Root extends React.Component {

  state = {
      twitter: [],
      article:[],
      note:[],
      isModalOpen: true,
  }
  
  addItem = (e,newItem) => {
    e.preventDefault();
    this.setState(prevState => ({
      [newItem.type]: [...prevState[newItem.type], newItem]
    }));
    this.closeModal();
    
  }

  openModal = () => {
    this.setState({
      isModalOpen:true,
    })
  }

  closeModal = () => {
    this.setState({
      isModalOpen:false,
    })
  }

  render(){

    const contextElements = {
      ...this.state,
      addItem: this.addItem
    }

    return (
      <BrowserRouter>
        <AppContext.Provider value={contextElements}>
          <Header openModalFunction={this.openModal}/>
          <Routes>
            <Route path="/" element={<TwitterView />} />
            <Route path="/articles" element={<ArticlesView />} />
            <Route path="/notes" element={<NotesView />} />
          </Routes>
          { this.state.isModalOpen && <Modal closeModalFunction={this.closeModal}/>}
        </AppContext.Provider>
      </BrowserRouter>
    )
  };
}

export default Root;
