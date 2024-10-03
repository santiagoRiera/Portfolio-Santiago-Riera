"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from 'next/link';
import emailjs from 'emailjs-com';
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+54) 3515529191"
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "santilrier@gmail.com"
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Cordoba, Argentina"
  },
  {
    icon: <FaLinkedin />,
    title: "Linkedin",
    description: "santi-riera",
    link: "https://www.linkedin.com/in/santi-riera/"
  }
]


function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("success");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_tk2gty9', 
      'template_qi9cn7c', 
      formData, 
      '8JpSuMlLC_Yp6K9cV'
    ).then(
      (result) => {
        setAlertMessage('Message sent successfully!');
        setAlertType('success');
        setAlertOpen(true);
        setFormData({ firstName: "", lastName: "", email: "", phone: "", service: "", message: "" });
      },
      (error) => {
        setAlertMessage('Failed to send the message.');
        setAlertType('error');
        setAlertOpen(true);
      }
    );
  };

  return (
    <motion.section 
      initial={{opacity: 0}} 
      animate={{
        opacity: 1,
        transition: {delay: 0.8, duration: 0.1, ease: "easeIn"}
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Form */}
          <div className="xl:w-[64%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl" onSubmit={sendEmail}>
              <h3 className="text-4xl text-accent-default">Let's work together</h3>
              <p className="text-white/80">Whether you have a project in mind or just want to chat, I'm here to help. Let's connect!</p>
            
              {/* Input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" name="firstName" placeholder="First name" onChange={handleChange} value={formData.firstName} required />
                <Input type="text" name="lastName" placeholder="Last name" onChange={handleChange} value={formData.lastName} required />
                <Input type="email" name="email" placeholder="Email" onChange={handleChange} value={formData.email} required />
                <Input type="phone" name="phone" placeholder="Phone number" onChange={handleChange} value={formData.phone} />
              </div>

              {/* Select */}
              <Select name="service" onValueChange={(value) => setFormData({ ...formData, service: value })}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="Frontend">Frontend</SelectItem>
                    <SelectItem value="Backend">Backend</SelectItem>
                    <SelectItem value="FullStack">FullStack</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* Textarea */}
              <Textarea name="message" placeholder="Type your message here" className="h-[200px]" onChange={handleChange} value={formData.message} required />

              {/* Button */}
              <Button size="md" className="max-w-40" type="submit">Send message</Button>
            </form>
          </div>

          {/* Info */}
          <div className="flex items-center flex-1 order-1 mb-8 xl:justify-end xl:order-none xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex gap-6 items-center">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c]
                     text-accent-default rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      {item.link ? (
                        <Link href={item.link} target="_blank" rel="noopener noreferrer">
                          <h3 className="text-xl hover:text-accent-default transition-colors">{item.description}</h3>
                        </Link>
                      ) : (
                        <h3 className="text-xl">{item.description}</h3>
                      )}
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
      {/* AlertDialog */}
      <AlertDialog open={alertOpen} onOpenChange={setAlertOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{alertType === 'success' ? 'Success' : 'Error'}</AlertDialogTitle>
            <AlertDialogDescription>{alertMessage}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setAlertOpen(false)}>OK</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </motion.section>
  )
}

export default Contact;
