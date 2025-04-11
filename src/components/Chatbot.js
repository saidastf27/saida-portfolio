import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FaUser, FaRobot } from 'react-icons/fa';
import './Chatbot.css';

function Chatbot() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/messages');
        setMessages(res.data);
      } catch (error) {
        console.error('Error loading messages:', error);
      }
    };

    fetchMessages();
  }, []);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const res = await axios.post('http://localhost:5000/api/chat', {
        message: input,
      });
      const botMessage = { role: 'bot', content: res.data.response };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      const errorMessage = error.response
        ? 'Server error: ' + error.response.data.error
        : 'Communication error with the server.';
      setMessages((prev) => [
        ...prev,
        { role: 'bot', content: errorMessage },
      ]);
    }

    setLoading(false);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="container-chat mt-4">
      <div className="card-chat shadow">
        <div className="card-header-chat text-white">
          <h4 className="mb-0">💬 Chatbot</h4>
        </div>
        <div className="card-body-chat">
          {messages.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`d-flex ${
                message.role === 'user'
                  ? 'justify-content-end'
                  : 'justify-content-start'
              }`}
            >
              <div
                className={`alert ${
                  message.role === 'user'
                    ? 'alert-primary'
                    : 'alert-secondary'
                } rounded-pill px-3 d-flex align-items-center gap-2`}
              >
                {message.role === 'user' ? <FaUser /> : <FaRobot />}
                <span>{message.content}</span>
              </div>
            </motion.div>
          ))}

          {loading && (
            <motion.div
              className="d-flex justify-content-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="alert alert-secondary rounded-pill px-3">
                <FaRobot /> <em>The bot is typing...</em>
              </div>
            </motion.div>
          )}

          <div ref={messagesEndRef} />
        </div>
        <div className="card-footer-chat d-flex">
          <input
            type="text"
            className="form-control me-2"
            placeholder="Type your message here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          />
          <button
            className="btn btn-primary"
            onClick={handleSend}
            disabled={loading}
          >
            {loading ? '...' : 'Send'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
