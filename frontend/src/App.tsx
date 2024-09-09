import { useState } from 'react'
import EditorWindow from "./MonacoEditor.tsx";

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
