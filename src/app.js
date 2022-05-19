import { gql } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import './app.css'
import client from './client'

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
        component = (<div className='div_component'>
            <table>
                <thead>
                    <tr>
                        <th>
                            Id
                        </th>
                        <th>
                            User
                        </th>
                        <th>
                            author
                        </th>
                        <th>
                            title
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            {value.data.books.test.userId}
                        </td>
                        <td>
                            {value.data.books.test.user}
                        </td>
                        <td>
                            {value.data.books.author}
                        </td>
                        <td>
                            {value.data.books.title}
                        </td>
                    </tr>
                </tbody>
            </table>

            <table>
                <thead>
                    <tr>
                        <th>
                            Id
                        </th>
                        <th>
                            User
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>
                            {value.data.test.userId}
                        </td>
                        <td>
                            {value.data.test.user}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>)
    }

    return (
        <div className='div_center'>
            {component}
        </div>
    )
}

export default App