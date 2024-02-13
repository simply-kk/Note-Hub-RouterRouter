import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notes from "./pages/Notes";
import CreateNotes from "./pages/CreateNote";
import EditNotes from "./pages/EditNote";

const App = () => {
  return (
    <main id="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Notes />} />
          <Route path="/create-note" element={<CreateNotes />} />
          <Route path="/edit-notes" element={<EditNotes />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
