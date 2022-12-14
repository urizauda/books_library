import React from 'react'
import StarRating from '../components/StarRating';
import styles from './css/booklist.module.css';
import { FaPlus } from "react-icons/fa";

export default function Details({ books, setBooks, text, setText, details, setRating }) {
    let temp = [...books]
    let obj = temp[details.id - 1]
    let notes = localStorage.setItem("notes", JSON.stringify(text))

    return (
        <div>
            <h1>Details</h1>
            <div className={styles.container}>
                <StarRating bookRating={setRating} id={obj.id} initRate={obj.rating} />
                <img src={obj.img} className={styles.img} />
                <div className={styles.content}>
                    <h2>{obj.name}</h2>
                    <h3>{obj.author}</h3>
                    <p>{obj.description}</p>
                </div>
                <div>
                <textarea className={styles.texterea} placeholder='Add Note...' value={text} onChange={(e) => setText(e.target.value)} />
                <button className={styles.addComment} title='Add Comment' onClick={() => { obj.comment.push(text); setBooks(temp) }}><FaPlus /></button>
                {notes}
                </div>
                <br></br>
            </div>
        </div>)
}
