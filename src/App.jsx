import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notes from "./pages/Notes";
import CreateNotes from "./pages/CreateNote";
import EditNotes from "./pages/EditNote";
import { useState, useEffect } from "react";
// import dummyNotes from "./dummy_notes";

const App = () => {
  const [notes, setNotes] = useState([]);
  console.log(notes);



  return (
    <main id="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Notes notes={notes} />} />
          <Route
            path="/create-note"
            element={<CreateNotes setNotes={setNotes} />}
          />
          <Route path="/edit-notes" element={<EditNotes />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
