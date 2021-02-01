import React from 'react';

export const Teacher = (props) => {
    return (
        <div>
            <p>{props.teacher.id} {props.teacher.name} {props.teacher.field}</p>
            <h4>Teacher students</h4>
            {props.teacher.students.map((student)=> {
                return <p key={student.id}>{student.name}</p>
            })}
        </div>
    );
}

// export const Teacher = (props) => <p>{props.teacher.id} {props.teacher.name} {props.teacher.field}</p>