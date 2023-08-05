import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

export const metadata = {
  title: "Rakesh Contact Information",
  description: "This is Contact Page",
};

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="text" placeholder="email" className={styles.input} />
          <textarea
            className={styles.textArea}
            placeholder="message"
            cols="30"
            rows="10"
          ></textarea>
          <Button url="#" text="Send"/>
        </form>
      </div>
    </div>
  );
};

export default Contact;

// "use client"
// import React, { useState } from 'react';
// import emailjs from "@emailjs/browser";
// import { useRef } from 'react';
// import styles from "./page.module.css";
// import Image from "next/image";
// import Button from "@/components/Button/Button";

// export const metadata = {
//   title: "Rakesh Contact Information",
//   description: "This is Contact Page",
// };

// const Contact = () => {
//   const ref = useRef();
//   const [success, setSuccess] = useState(null);
//   const [form,setForm]=useState({
//     name:"",
//     email:"",
//     message:""
//   });

//   function setform(e){
//    const{name,value} =e.target;
//    setForm(function(prev){
//     return {...prev,[name]:value}
//   });
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_et4dha3",
//         "template_6r2c7a9",
//         ref.current,
//         "IOVfu7FGo-01DVraz"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//           setSuccess(true);
//           setForm({
//             name:"",
//             email:"",
//             message:""

//           });
//         },
//         (error) => {
//           console.log(error.text);
//           setSuccess(false);
//         }
//       );
//   };

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.title}>Let's Keep in Touch</h1>
//       <div className={styles.content}>
//         <div className={styles.imgContainer}>
//           <Image
//             src="/contact.png"
//             alt=""
//             fill={true}
//             className={styles.image}
//           />
//         </div>
//         {success ?  (
//         <div>
//           <h3 className={styles.title}>
//           {success && "Thank you for getting in touch!"}</h3>
//         </div>
//       ):(
//         <form ref={ref} onSubmit={handleSubmit}  className={styles.form}>
//           <input type="text" placeholder="name" className={styles.input} name="name" value={form.name} onChange={setform}/>
//           <input type="text" placeholder="email" className={styles.input} name="email" value={form.email} onChange={setform}/>
//           <textarea
//             className={styles.textArea}
//             placeholder="message"
//             cols="30"
//             rows="10"
//             value={form.message}
//             name="message"
//            onChange={setform}
//           ></textarea>
//           <Button type="button" onClick={handleSubmit}/>
//         </form>)}
//       </div>
//     </div>
//   );
// };

// export default Contact;