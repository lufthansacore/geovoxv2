import React, { useState, useEffect } from 'react'
import styles from '@/styles/AIChatHistory.module.css'

interface ChatMessage {
  role: string
  content: string
}

export default function AIChatHistory() {
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([])

  useEffect(() => {
    // Fetch chat history from an API or local storage
    const fetchChatHistory = async () => {
      // Replace this with actual API call or local storage retrieval
      const mockHistory: ChatMessage[] = [
        { role: 'user', content: 'Hello, AI!' },
        { role: 'assistant', content: 'Hello! How can I help you today?' },
        { role: 'user', content: 'What\'s the weather like?' },
        { role: 'assistant', content: 'I\'m sorry, but I don\'t have access to real-time weather information. You might want to check a weather website or app for the most up-to-date forecast.' },
      ]
      setChatHistory(mockHistory)
    }

    fetchChatHistory()
  }, [])

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>AI Chat History</h1>
      <div className={styles.chatContainer}>
        {chatHistory.map((message, index) => (
          <div key={index} className={`${styles.message} ${styles[message.role]}`}>
            <strong>{message.role === 'user' ? 'You' : 'AI'}:</strong> {message.content}
          </div>
        ))}
      </div>
    </div>
  )
}