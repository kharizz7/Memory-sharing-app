import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import { EffectCards, Autoplay, Pagination } from 'swiper/modules';

import { auth, provider, signInWithPopup } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';

import image1 from '../assests/image1.jpeg';
import image2 from '../assests/image2.jpeg';
import image3 from '../assests/image3.jpeg';
import image4 from '../assests/image4.jpeg';
import image5 from '../assests/image5.jpeg';

function Home() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const memoryImages = [image1, image2, image3, image4, image5];

  useEffect(() => {
    
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      }
    });

    return () => unsubscribe(); 
  }, []);

  const handleWriteMemory = async () => {
    if (!user) {
      try {
        const result = await signInWithPopup(auth, provider);
        setUser(result.user);
        navigate('/classmates');
      } catch (error) {
        console.error("Google sign-in failed:", error.message);
      }
    } else {
      navigate('/classmates');
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg,rgb(184, 79, 169),rgb(222, 134, 212))',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: '40px 20px'
    }}>
      <h1 style={{
        fontFamily: 'Comic Sans MS',
        color: 'yellow',
        fontSize: '2.5em',
        marginBottom: '20px'
      }}>
        Welcome to Class Memory Board
      </h1>

      <p style={{
        fontSize: '1.2em',
        color: '#333',
        marginBottom: '30px',
        fontStyle: 'italic',
      }}>
        Together we laugh, together we rise our bond, a circle time can't break. In every moment, we craft memories and joy that no force can erase
      </p>

      <button
        onClick={handleWriteMemory}
        style={{
          marginTop: '30px',
          padding: '12px 24px',
          fontSize: '1em',
          borderRadius: '12px',
          border: 'none',
          backgroundColor: '#66ccff',
          color: '#fff',
          cursor: 'pointer',
          fontFamily: 'Comic Sans MS',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)'
        }}
      >
        Write a Memory
      </button>

      {user && (
        <p style={{ color: '#fff', marginTop: '10px' }}>
          Signed in as <strong>{user.displayName}</strong>
        </p>
      )}

      <h2 style={{
        fontFamily: 'Comic Sans MS',
        marginTop: '20px',
        marginBottom: '10px',
        color: '#ffffff'
      }}>
         Our Best Memories
      </h2>

      <Swiper
  slidesPerView={1}
  loop={true}
  autoplay={{ delay: 2500, disableOnInteraction: false }}
  pagination={{ clickable: true }}
  modules={[Autoplay, Pagination]}
  style={{ width: '100%', maxWidth: '600px', paddingBottom: '20px' }}
  onInit={(swiper) => {
    if (swiper.pagination && swiper.pagination.el) {
      swiper.pagination.el.style.display = 'none';
    }
  }}
>
  {memoryImages.map((src, index) => (
    <SwiperSlide key={index}>
      <img
        src={src}
        alt={`memory-${index}`}
        style={{
          width: '100%',
          height: '250px',
          objectFit: 'cover',
          borderRadius: '5px',
          boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
        }}
        onContextMenu={(e) => e.preventDefault()}
      />
    </SwiperSlide>
  ))}
</Swiper>


    </div>
  );
}

export default Home;
