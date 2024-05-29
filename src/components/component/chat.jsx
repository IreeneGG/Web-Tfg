"use client"
import React, { useState, useRef, useEffect } from 'react';
import styles from './chat.module.css';
import Image from 'next/image';

const Chat = () => {
    const [inputValue, setInputValue] = useState('');
    const [messages, setMessages] = useState([]);
    const chatMessagesRef = useRef(null); // Referencia al contenedor chatMessages

    useEffect(() => {
        // Desplaza hacia abajo al finalizar la carga o al cambiar los mensajes
        if (chatMessagesRef.current) {
            chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
        }
    }, [messages]); // Se ejecuta cada vez que cambian los mensajes

    const sendMessage = async () => {
        if (inputValue.trim() === '') return;

        try {
            const response = await fetch('http://localhost:9000/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ prompt: inputValue.trim() })
            });

            if (!response.ok) {
                throw new Error('Failed to send message');
            }

            const data = await response.json();
            setMessages(prevMessages => [
                ...prevMessages,
                { sender: 'user', content: inputValue.trim() },
                { sender: 'bot', content: data.response }
            ]);
            setInputValue('');
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    const handleInputChange = event => {
        setInputValue(event.target.value);
    };

    const handleKeyPress = event => {
        if (event.key === 'Enter') {
            sendMessage();
        }
    };

    return (
        <div className={styles.chatContainer}>
            <div ref={chatMessagesRef} className={styles.chatMessages}>
                {messages.map((message, index) => (
                    <div key={index} className={styles.chatRow}>
                        {message.sender === 'user' ? (
                            <div className={styles.userMessage}>
                                {message.content}
                            </div>
                        ) : (
                            <>
                                <div className={styles.botImage}>
                                    <Image
                                        src="/imagen.svg"
                                        width={10}
                                        height={10}
                                        alt="Sensor"
                                        className="relative w-full h-auto rounded-tr-[18px] rounded-tl-[18px] transition-all duration-500"
                                    />
                                </div>
                                <div className={styles.botMessage}>
                                    {message.content}
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
            <div className={styles.chatInput}>
                <input
                    type="text"
                    placeholder="Type a message..."
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    className={styles.inputField}
                />
                <button onClick={sendMessage} className={styles.sendButton}>Send</button>
            </div>
        </div>
    );
};

export default Chat;
