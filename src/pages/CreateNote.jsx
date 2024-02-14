import { Link } from "react-router-dom";
import { IoIosArrowDropleftCircle } from "react-icons/io";
const CreateNotes = () => {
  return (
    <section>
      <header className="create-note__header">
        <Link to="/" className="btn">
         <IoIosArrowDropleftCircle />
        </Link>
        <button className="btn lg primary">Save</button>
      </header>
      <form className="create-note__form">
        <input type="text" autoFocus placeholder="Title" />
        <textarea rows="30" placeholder="Note Details"></textarea>
      </form>
    </section>
  );
};

export default CreateNotes;
