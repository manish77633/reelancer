"use client";
import {useEffect,useState} from "react";
import Link from "next/link";
import {ArrowUpRight,Menu,X} from "lucide-react";
import "./studio.css";
export default function Navbar(){const[open,setOpen]=useState(false);useEffect(()=>{const close=(e:KeyboardEvent)=>{if(e.key==='Escape')setOpen(false)};window.addEventListener('keydown',close);return()=>window.removeEventListener('keydown',close)},[]);return <div className="s-site"><header className="s-nav"><div className="s-shell s-nav-inner"><Link href="/" className="s-logo">reelancer<span>✳</span></Link><nav className={`s-nav-links ${open?'open':''}`} aria-label="Main navigation">{[['Services','services'],['Work','work'],['Toolkit','kit'],['Our process','process']].map(([label,id])=><Link key={id} href={`/#${id}`} onClick={()=>setOpen(false)}>{label}</Link>)}</nav><Link href="/#contact" className="s-button s-nav-button">Start a project<ArrowUpRight size={16}/></Link><button className="s-menu" aria-expanded={open} aria-label={open?'Close navigation':'Open navigation'} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></div></header></div>}
