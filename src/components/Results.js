import React from 'react'

export default function Results({results}) {
    return (
        <div>{
            results.map((res)=>(
                <div key={res.id}>
                    {res.original_title}
                </div>
            ))
            }
            </div>
    )
}
