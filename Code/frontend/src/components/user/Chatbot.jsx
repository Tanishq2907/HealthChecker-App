import { useState, useRef, useEffect } from 'react';
import { Box, TextField, Button, Avatar, Typography, Paper } from '@mui/material';
import { Send as SendIcon } from '@mui/icons-material';
import { getAIDiagnosis } from '../../services/chatbot.service';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      text: 'Hello! I\'m your health assistant. How can I help you today?',
      sender: 'ai',
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: 'user' };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    try {
      const response = await getAIDiagnosis(input);
      const aiMessage = {
        text: response.diagnosis,
        sender: 'ai',
        suggestions: response.suggestions,
        doctors: response.recommendedDoctors,
      };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      const errorMessage = {
        text: "Sorry, I'm having trouble. Please try again.",
        sender: 'ai',
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '70vh' }}>
      <Box
        sx={{
          flexGrow: 1,
          overflowY: 'auto',
          p: 2,
          mb: 2,
          bgcolor: 'background.default',
          borderRadius: 2,
        }}
      >
        {messages.map((message, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              mb: 2,
              justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: message.sender === 'user' ? 'row-reverse' : 'row',
                alignItems: 'flex-start',
                gap: 1,
                maxWidth: '80%',
              }}
            >
              <Avatar
                sx={{
                  bgcolor: message.sender === 'user' ? 'primary.main' : 'secondary.main',
                }}
              >
                {message.sender === 'user' ? 'U' : 'AI'}
              </Avatar>
              <Paper
                elevation={1}
                sx={{
                  p: 2,
                  bgcolor: message.sender === 'user' ? 'primary.light' : 'background.paper',
                }}
              >
                <Typography variant="body1">{message.text}</Typography>
                {message.suggestions && (
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="subtitle2" fontWeight="bold">
                      Suggested Actions:
                    </Typography>
                    <ul style={{ margin: 0, paddingLeft: 20 }}>
                      {message.suggestions.map((suggestion, i) => (
                        <li key={i}>
                          <Typography variant="body2">{suggestion}</Typography>
                        </li>
                      ))}
                    </ul>
                  </Box>
                )}
              </Paper>
            </Box>
          </Box>
        ))}
        {isTyping && (
          <Box sx={{ display: 'flex', mb: 2, justifyContent: 'flex-start' }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
              <Avatar sx={{ bgcolor: 'secondary.main' }}>AI</Avatar>
              <Paper elevation={1} sx={{ p: 2 }}>
                <Box sx={{ display: 'flex', gap: 0.5 }}>
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      bgcolor: 'text.secondary',
                      animation: 'pulse 1s infinite',
                      '@keyframes pulse': {
                        '0%': { opacity: 0.5 },
                        '50%': { opacity: 1 },
                        '100%': { opacity: 0.5 },
                      },
                    }}
                  />
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      bgcolor: 'text.secondary',
                      animation: 'pulse 1s infinite',
                      animationDelay: '0.2s',
                    }}
                  />
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      bgcolor: 'text.secondary',
                      animation: 'pulse 1s infinite',
                      animationDelay: '0.4s',
                    }}
                  />
                </Box>
              </Paper>
            </Box>
          </Box>
        )}
        <div ref={messagesEndRef} />
      </Box>

      <Box sx={{ display: 'flex', gap: 1 }}>
        <TextField
          fullWidth
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Describe your symptoms..."
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <Button
          variant="contained"
          onClick={handleSend}
          disabled={isTyping}
          sx={{ minWidth: 56 }}
        >
          <SendIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default Chatbot;