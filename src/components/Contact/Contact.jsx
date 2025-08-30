import React,{useState} from 'react'
import './Contact.css'
const Contact = () => {
const [status, setStatus] = useState("");
const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    let response = await fetch("https://formsubmit.co/adititeena3458@gmail.com", {
      method: "POST",
      body: data,
    });

    if (response.ok) {
      setStatus("Message sent successfully!");
      form.reset();
    } else {
      setStatus("Oops! Something went wrong.");
    }
    setTimeout(() => {
      setStatus("");
    }, 3000);
  };

  return (
    
    <div className="contact">
      <div className='contact-col'>
        <p>I am always open to discussing new opportunities, collaborating on projects, or simply sharing ideas.
            <br></br> Feel free to reach out and I will get back to you as soon as possible.</p>
        <ul>
            <li><i class="fa-solid fa-envelope"></i>&nbsp; 
            &nbsp;adititeena3458@gmail.com</li>  
            <li><i class="fa-solid fa-phone"></i>&nbsp;&nbsp;+1 123 456 7890</li>
            <li><i class="fa-solid fa-location-dot"></i> &nbsp;&nbsp;&nbsp;National Institute of Technology, Uttarakhand</li>
        </ul>
      </div>
      <div className='contact-col'>
        <form id="contact-form" onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" name="name" placeholder="Enter your name" required></input>
            <label>Phone Number</label>
            <input type="tel" name="phone" placeholder="Enter your number" required></input>
            <label>Write your message..</label>
            <textarea name="message" placeholder="Enter your message" rows="6" required></textarea>
            <button type="submit" className="btn-dark" >Submit</button>
        </form>
        <p id="form-status">{status}</p>
        
      </div>

    </div>
  )
}

export default Contact
