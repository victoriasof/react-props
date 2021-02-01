import React from 'react';
import { Student } from './Student';
import { Teacher } from './Teacher';

export const Listing = (props) => {
    return (
        <div>
            <h2>Listing component</h2>
            <h3>Students</h3>
            {props.students.map((student) => {
                return <Student key={student.id} student={student} /> 
            })}
            <h3>Teachers</h3>
            {props.teachers.map((teacher) => {
                return <Teacher key={teacher.id} teacher={teacher} />
            })}
        </div>
    )
}
