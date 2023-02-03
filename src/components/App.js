import React, { useState, useEffect } from 'react'

import { mainUser, contactsMessages, Message } from '../GenerateFakeData'
import Avatar from './Avatar';
import ContactBox from './ContactBox';
import MessagesBox from './MessageBox';
import ChatInputBox from './ChatInputbox';
import Search from './Search';
import Welcome from './Welcome';
import '../App.css'

function App() {
    const [data, setData] = useState(contactsMessages)
    const [contactSelected, setContactSelected] = useState({})
    const [currentMessages, setCurrentMessages] = useState([])
    const [message, setMessage] = useState('')
    const [search, setSearch] = useState('')
    const [filteredContacts, setFilterContacts] = useState([])

    useEffect(() => {
        const currContact = data.find((d) => d.contact.id === contactSelected.id)
        setCurrentMessages((currContact && currContact.messages) || [])
        filterContacts(data, search)
    }, [contactSelected, data, search])

    function pushMessage() {
        const index = data.findIndex((d) => d.contact.id === contactSelected.id)
        const newData = Object.assign([], data, {
            [index]: {
                contact: contactSelected,
                messages: [...data[index].messages, new Message(true, message, new Date())],
            },
        })
        localStorage.setItem("data", JSON.stringify(newData));
        setData(newData)
        setMessage('')
    }

    function filterContacts(data, search) {
        const result = data.filter(({ contact }) => {
            return !search || contact.name.toLowerCase().includes(search.toLowerCase())
        })
        setFilterContacts(result)
    }

    return (
        <div className="app">
            <aside>
                <header>
                    <Avatar user={mainUser} />
                </header>
                <Search search={search} setSearch={setSearch} />
                <div className="contact-boxes">
                    {filteredContacts.map(({ contact, messages }) => (
                        <ContactBox
                            contact={contact}
                            key={contact.id}
                            setContactSelected={setContactSelected}
                            messages={messages}
                        />
                    ))}
                </div>
            </aside>
            {contactSelected.id ? (
                <main>
                    <header>
                        <Avatar user={contactSelected} showName />
                    </header>
                    <MessagesBox messages={currentMessages} />
                    <ChatInputBox message={message} setMessage={setMessage} pushMessage={pushMessage} />
                </main>
            ) : (
                <Welcome />
            )}
        </div>
    )
}

export default App
