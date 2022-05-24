import React from 'react'

function TableComponent(props) {
    const { headList, bodyList } = props
    
    return (
        <table>
            <thead>
                <tr>
                    {headList.map((e, i) => (
                        <th key={`${e} - ${i}`}>
                            {e}
                        </th>
                    )
                    )}
                </tr>
            </thead>
            <tbody>
                <tr>
                    {bodyList.map((e, i) => (<td key={`${e} - ${i}`}>
                        {e}
                    </td>)
                    )}
                </tr>
            </tbody>
        </table>
    )
}

export default TableComponent