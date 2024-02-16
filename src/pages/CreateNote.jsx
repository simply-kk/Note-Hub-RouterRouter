import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import useCreateDate from "../components/useCreateDate";

const CreateNotes = ({setNotes}) => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const date = useCreateDate();
  const navigate = useNavigate();

  const handleSumbit = (e) => {
    e.preventDefault();

    if (title && details) {
      const note = {
        id: uuid(),
        title,
        details,
        date,
      };
      //! add this note  to the existing array of notes or create a new one?
      setNotes((prevNotes) => [note, ...prevNotes]);

      //! redirect to home page
      navigate('/')

    }
  };

  return (
    <section>
      <header className="create-note__header">
        <Link to="/" className="btn">
          <IoIosArrowDropleftCircle />
        </Link>
        <button className="btn lg primary" onClick={handleSumbit}>
          Save
        </button>
      </header>
      <form className="create-note__form" onSubmit={handleSumbit}>
        <input
          type="text"
          autoFocus
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          rows="30"
          placeholder="Note Details"
          onChange={(e) => setDetails(e.target.value)}
        ></textarea>
      </form>
    </section>
  );
};

export default CreateNotes;
