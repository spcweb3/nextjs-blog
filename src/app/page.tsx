import Image from "next/image";
import Link from 'next/link';
import Posts from './components/Posts';

export default function Home() {
  return (
    <>
    <h1>Welcome to Pengcheng's Blog.</h1>
    <Posts />
    </>
  );
} 
