import React from 'react'

export const Student = (props) => {
    return <p>{props.student.id} {props.student.name} {props.student.house}</p>
}
