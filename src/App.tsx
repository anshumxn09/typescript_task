import React, { useState } from 'react';
import './App.css';
import AddNote from './components/AddNote';
import CardBox from './components/CardBox';
import Header from './components/Header';
import NotFound from './components/NotFound';
import NoteObject from './models/Note';

function App() {
  const [items, setItems] = useState<NoteObject[]>([])
  const addToList = (note : NoteObject) => {
    setItems([
        note,
      ...items
    ])
  }
  return (
    <>
      <Header/>
      {
        items.length === 0 ? <NotFound/> : <CardBox items={items}/>
      }
      <AddNote addToList={addToList}/>
    </>
  );
}

export default App;
