import { useState } from "react";

interface HeroProps {
  children: React.ReactNode;
}

const Hero: React.FC<HeroProps> = ({ children }) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const openLogin = () => {
    setIsLoginOpen(true);  
  };

  const closeLogin = () => {
    setIsLoginOpen(false); 
  };

  return (
    <>
      <main>
       
       {children}</section>
      </main>
    </>
  );
};

export default Hero;
