import React, { useState, useRef, useEffect } from 'react';

const Chatbot = ({ isOpen, setIsOpen }) => {
  const [messages, setMessages] = useState([
    { text: "👋 Hi! I'm Sanjai's AI assistant. Ask me about his skills, projects, education, or experience!", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotReply = (question) => {
    const q = question.toLowerCase();
    if (q.includes('skill')) return "Sanjai is skilled in C, Python, PHP, JavaScript, MySQL, HTML/CSS, Git, Bootstrap.";
    if (q.includes('project')) return "He built: Emotion Detection, Voice Chatbot, Portfolio, Shadowws Website, Employee CRUD, Hospital CRUD. Check GitHub!";
    if (q.includes('education')) return "B.E. CSE at Fatima Michael College, CGPA 8.2. HSC 72%, SSLC 66%.";
    if (q.includes('experience')) return "Web Developer Intern at Shadowws Company (PHP, MySQL, JS).";
    if (q.includes('contact')) return "Email sanjaidevan06@gmail.com or call +91 98653 16246.";
    if (q.includes('timing')) return "Yes, flexible for US timezones.";
    return "Ask about Sanjai's skills, projects, education, or contact!";
  };

  const handleSendMessage = () => {
    if (input.trim() === '') return;

    const userMessage = { text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);

    setTimeout(() => {
      const botReply = { text: getBotReply(input), sender: 'bot' };
      setMessages(prev => [...prev, botReply]);
    }, 400);

    setInput('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      <div className={`chatbot-container ${isOpen ? 'open' : ''}`} id="chatbotContainer">
        <div className="chat-header">
          AI Assistant
          <span
            id="closeChat"
            style={{ cursor: 'pointer' }}
            onClick={() => setIsOpen(false)}
          >
            ✕
          </span>
        </div>
        <div className="chat-messages" id="chatMessages">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <div className="chat-input-area">
          <input
            type="text"
            id="chatInput"
            placeholder="Ask me anything..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button id="sendChatBtn" onClick={handleSendMessage}>
            <i className="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
