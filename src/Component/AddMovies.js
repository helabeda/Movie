import React, {useState}  from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal} from 'react-bootstrap';
import Stars from "./Stars";
import {Link} from "react-router-dom";

const AddMovies = ({handleAdd}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [form, setForm] = useState({
      name:'',
      image:'',
      date:'',
      description:'',
      rating: 1,
  })
  const handleSubmit = (e) =>{
    e.preventDefault();
    let movie = {...form, id: Math.random()}
    console.log(form.name === "" || form.image === "")
    if (form.name === "" || form.image === "" || form.date === "" || form.description === "" ){alert(" files is required")}
    else{
      handleAdd(movie);
      handleClose();
      setForm({
        name:'',
        image:'',
        date:'',
        description:'',
        rating: 1,
      })
    }
  }
  const handelRate = (rate) => {
    setForm({ ...form, rating: rate });
  };
  return (
    <div>
      <form className="addform">
        <Modal.Header closeButton>
          <Modal.Title className="add">Add Movie</Modal.Title>
        </Modal.Header>
        <label>Movie Name</label>
        <input type="text" placeholder="Movie Name"  onChange={(e)=> setForm({...form,name : e.target.value})} value={form.name}/>
        <label>Image URL</label>
        <input type="url" required placeholder="URL" onChange={(e)=> setForm({...form,image: e.target.value})} value={form.image}/>
        <label>Date</label>
        <input type="date" onChange={(e)=> setForm({...form,date : e.target.value})} value={form.date} />
        <label>Description</label>
        <input type="text" placeholder="Description" onChange={(e)=> setForm({...form,description : e.target.value})} value={form.description}/>
        <label>Rating</label>
        <Stars rating={form.rating} handleRate={handelRate} />
        <Modal.Footer>
          <Link to="/"><Button variant="secondary">
            Close
          </Button></Link>
          <Button variant="primary">
           Add
          </Button>
        </Modal.Footer>
        </form>
    </div>
  );
};

export default AddMovies;
