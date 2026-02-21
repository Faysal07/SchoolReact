import { useState } from "react";
import './ContactForm.css';

function ContactForm() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [mobileNo, setMobileNo] = useState("")
    const [comment, setComment] = useState("")

    const formValidation = (name !== "" && email !== "" && mobileNo !== "" && comment !== "");

    const [count, setCount] = useState(0)

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formValidation) {
            setCount(count + 1);
            setName("");
            setEmail("");
            setMobileNo("");
            setComment("");
        }
    };

    return(
        <div>
            <h2 className="title">Contact Me</h2>
            <p className="sur_title">When You give me valuable Suggestion.</p>

            <form className="contact_form" onSubmit={handleSubmit}>
                <label>Enter Your Name</label>
                <input type="text" name="" id="" placeholder="Write your Name" value={name} onChange={(e) => setName(e.target.value)}/>

                <label>Enter Your Email</label>
                <input type="email" name="" id="" placeholder="Write your Mail" value={email} onChange={(e) => setEmail(e.target.value)}/>

                <label>Enter your Mobile No</label>
                <input type="tel" name="" id="" placeholder="write your Mobile no" value={mobileNo} onChange={(e) => setMobileNo(e.target.value)}/>

                <label>Enter Your Comment</label>
                <textarea name="" id="" cols="30" rows="10" placeholder="Write your Commint" value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
            
                 <button className="submit_button" type="submit" disabled={!formValidation}>Submit</button>
            </form>



            <p>Submitted Review : {count} Person</p>

        </div>
    )

}


export default ContactForm;