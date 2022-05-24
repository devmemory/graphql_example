import { gql } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import './app.css'
import client from './client'
import TableComponent from './components/table'

function App() {
    const [value, setValue] = useState({ loading: true, data: undefined, error: undefined })

    useEffect(() => {
        async function init() {
            const res = await client.query({
                query: gql`
                {
                    books(id: 1) {
                        title
                        author
                        test {
                            user
                            userId
                        }
                    }
                    test(id: 0) {
                        user
                        userId
                    }
                }
            `})

            const loading = res.loading
            let error

            if (res.error || res.errors) {
                error = res.error + res.errors
            }

            const data = res.data

            setValue({ loading, error, data })
        }

        init()
    }, [])

    let component

    if (value.loading) {
        component = (<p className='p_detail'>Loading...</p>)
    }

    if (value.error) {
        component = (
            <div className='div_component'>
                <p className='p_detail'>Error!</p>
                {value.error}
            </div>
        )
    }

    if (value.data) {
        const tableData = {
            book: {
                headList: ['Id', 'User', 'author', 'title'],
                bodyList: [
                    value.data.books.test.userId,
                    value.data.books.test.user,
                    value.data.books.author,
                    value.data.books.title
                ]
            },
            test: {
                headList: ['Id', 'User'],
                bodyList: [
                    value.data.test.userId,
                    value.data.test.user
                ]
            }
        }

        component = (<div className='div_component'>
            <TableComponent headList={tableData.book.headList} bodyList={tableData.book.bodyList} />
            <TableComponent headList={tableData.test.headList} bodyList={tableData.test.bodyList} />
        </div>)
    }

    return (
        <div className='div_center'>
            {component}
        </div>
    )
}

export default App