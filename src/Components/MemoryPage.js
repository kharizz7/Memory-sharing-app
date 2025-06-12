import React, { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import html2canvas from 'html2canvas';
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  doc,
  updateDoc,
} from 'firebase/firestore';
import { db, auth } from '../firebase';

import './MemoryPage.css';

const fontStyles = [
  "'Comic Sans MS', cursive, sans-serif",
  "'Courier New', Courier, monospace",
  "'Pacifico', cursive",
  "'Indie Flower', cursive",
  "'Gloria Hallelujah', cursive",
];

const bgColors = [
  '#fff9c4', '#b2ebf2', '#f8bbd0', '#dcedc8', '#ffe0b2',
  '#d1c4e9', '#c5cae9', '#f0f4c3', '#f48fb1', '#ffccbc'
];

const MemoryPage = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const { state } = useLocation();
  const personImg = state?.image || '';

  const [memories, setMemories] = useState([]);
  const [newMemory, setNewMemory] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editedMessage, setEditedMessage] = useState('');

  const memoryRef = useRef(null);

  useEffect(() => {
    fetchMemories();
  }, [name]);

  const fetchMemories = async () => {
    const q = query(collection(db, 'memories'), where('name', '==', name));
    const snapshot = await getDocs(q);
    const memoryList = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setMemories(memoryList);
  };

  const handleAddMemory = async () => {
    if (!newMemory.trim()) return;

    const user = auth.currentUser;

    await addDoc(collection(db, 'memories'), {
      name,
      message: newMemory,
      email: user?.email || 'Anonymous',
      timestamp: new Date()
    });

    setNewMemory('');
    fetchMemories();
  };

  const handleDownload = async () => {
    if (!memoryRef.current) return;

    const originalPadding = memoryRef.current.style.padding;
    const originalBackground = memoryRef.current.style.backgroundColor;

    memoryRef.current.style.padding = '30px';
    memoryRef.current.style.backgroundColor = '#e85f9f';

    const canvas = await html2canvas(memoryRef.current, {
      backgroundColor: null,
      useCORS: true,
      scrollY: -window.scrollY,
    });

    const link = document.createElement('a');
    link.download = `${name}-memories.png`;
    link.href = canvas.toDataURL();
    link.click();

    memoryRef.current.style.padding = originalPadding;
    memoryRef.current.style.backgroundColor = originalBackground;
  };

  const handleEdit = (id, message, email) => {
  const user = auth.currentUser;
  if (!user || user.email !== email) return;
  setEditingId(id);
  setEditedMessage(message);
};


  const handleSaveEdit = async () => {
    if (!editedMessage.trim()) return;
    const memoryDoc = doc(db, 'memories', editingId);
    await updateDoc(memoryDoc, { message: editedMessage });
    setEditingId(null);
    setEditedMessage('');
    fetchMemories();
  };

  const randomStyle = () => {
    const font = fontStyles[Math.floor(Math.random() * fontStyles.length)];
    const rotate = Math.floor(Math.random() * 20 - 10);
    const bgColor = bgColors[Math.floor(Math.random() * bgColors.length)];
    return {
      fontFamily: font,
      transform: `rotate(${rotate}deg)`,
      backgroundColor: bgColor,
      padding: '12px',
      margin: '10px',
      borderRadius: '12px',
      boxShadow: '2px 2px 6px rgba(0,0,0,0.2)',
      transition: 'transform 0.3s ease',
      cursor: 'pointer'
    };
  };
  const getNameFromEmail = (email) => {
  if (!email) return 'Anonymous';

  const namePart = email.split('@')[0]; 
  const nameWords = namePart
    .replace(/[\.\_\-]/g, ' ')        
    .replace(/[0-9]/g, '')            
    .split(' ')                       
    .filter(Boolean)                
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)); 

  return nameWords.join(' ');
};



  return (
    <div className="memory-container">
      <h2>One Family</h2>

      {personImg && (
        <img src={personImg} alt={name} className="person-image" />
      )}

      <div className="input-section">
        <textarea
          value={newMemory}
          onChange={(e) => setNewMemory(e.target.value)}
          placeholder="Write a memory..."
        />

        <div className="button-group">
          <button onClick={handleAddMemory}>Add</button>
          
          <button onClick={handleDownload}>📥 Download</button>
        </div>

        {editingId && (
          <>
            <textarea
              className="edit-box"
              value={editedMessage}
              onChange={(e) => setEditedMessage(e.target.value)}
            />
            <button onClick={handleSaveEdit}>Save</button>
          </>
        )}

        <h2>
          Memories for <span className="highlight">{name}</span>
        </h2>
      </div>

      <div className="messages-container">
        <div className="message-area" ref={memoryRef}>
        {memories.map((m) => (
  <div
    key={m.id}
    className="message-card"
    style={randomStyle()}
    onDoubleClick={() => handleEdit(m.id, m.message, m.email)}
  >
    ✨ {m.message}
    <br />
    <small style={{ fontSize: '0.8em', color: '#555' }}>
      — {getNameFromEmail(m.email) || 'Anonymous'}
    </small>
  </div>
))}

        </div>
      </div>
    </div>
  );
};

export default MemoryPage;
