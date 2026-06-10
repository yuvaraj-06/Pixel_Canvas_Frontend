import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const primaryColor = '#0066FF'; // Pixel Canvas Primary
  const accentColor = '#22c55e'; // Pixel Canvas Accent

  const features = [
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-4m0 0l4-4m-4 4L10 4m0 16L6 12m4 4l-4-4m0 0l-4-4"></path>
        </svg>
      ),
      title: 'Custom Branded Experiences',
      description: 'Tailored 3D environments that perfectly reflect your brand identity and messaging.',
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-1-3m-6.938-9h13.856c1.54 0 2.502 1.667 1.732 3L13.732 17c-.77 1.333-2.694 1.333-3.464 0L3.34 9c-.77-1.333.192-3 1.732-3z"></path>
        </svg>
      ),
      title: 'Browser & Device Agnostic',
      description: 'Reach your audience anywhere, anytime, on any device without downloads or installations.',
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.002 2.002M16 16l2.002 2.002M12 18h.01M6 6h.01"></path>
        </svg>
      ),
      title: 'Unreal Engine 5 Power',
      description: 'Experience unparalleled visual fidelity and interactive capabilities with the latest in real-time 3D technology.',
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
        </svg>
      ),
      title: 'Virtual Events & Conferences',
      description: 'Host engaging virtual events, product launches, and conferences in stunning 3D environments.',
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"></path>
        </svg>
      ),
      title: 'Digital Twin Capabilities',
      description: 'Create precise digital replicas of real-world assets, products, or environments for simulation and interaction.',
    },
    {
      icon: (
        <svg className="w-8 h