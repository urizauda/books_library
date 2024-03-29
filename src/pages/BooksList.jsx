import React, { useState } from 'react'
import styles from './css/booklist.module.css';
import { FaAngleDoubleDown, FaPlus, FaSistrix } from "react-icons/fa";

export default function BooksList({ books, setBooks }) {
    const [search, setSearch] = useState("")
    const [moreBooks, setMoreBooks] = useState(10)
    const [markAsRead, setMarkAsRead] = useState(false)

    let temp = [...books]
    return (
        <div>
            <div className={styles.searchContainer}>
                <label><FaSistrix /> </label><input type="text" className={styles.search} placeholder='Search...'
                    onChange={(e) => setSearch(e.target.value)} />
            </div>
            {temp
                .filter(item => {
                    if (search == "") {
                        return item
                    }
                    else if (
                        item.name.toLowerCase().includes(search.toLowerCase()) ||
                        item.description.toLowerCase().includes(search.toLocaleLowerCase()) ||
                        item.author.toLowerCase().includes(search.toLocaleLowerCase())) {
                        console.log(item);
                        return item
                    }
                })
                .map((book, i) => {
                    if (i < moreBooks) {
                        return (<div key={i} className={styles.container}>
                            <img src={book.img} className={styles.img} />
                            <div className={styles.content}>
                                <h2>{book.name}</h2>
                                <h3 title='Author'>{book.author}</h3>
                                <button className={styles.addBtn} title='Add to Reading List' onClick={() => { book.isReading = true; setBooks(temp); setMarkAsRead(true) }}><FaPlus size='10px' /></button>
                                {book.isReading}
                                <p title='Description'>{book.description.slice(0, 250)}...</p>
                            </div>
                        </div>
                        )
                    }
                })}
            {temp.length > moreBooks ? <button className={styles.moreBooksBtn} title='More Books' onClick={() => setMoreBooks(moreBooks + 10)}><FaAngleDoubleDown size='20px' /></button> : ""}
        </div>
    )
}
