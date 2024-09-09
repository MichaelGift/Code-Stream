import { useState } from 'react'
import EditorWindow from "./MonacoEditor.tsx";
import './App.css'

function App() {

  return (
    <>
        <div className="App">
            <header className="Code stream">
            </header>
            <EditorWindow />
        </div>
    </>
  )
}

export default App
