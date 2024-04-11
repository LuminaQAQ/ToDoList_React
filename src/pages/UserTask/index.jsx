import React from 'react'
import { useParams } from 'react-router-dom';

export default function UserTaskView(props) {
    const params = useParams();

    const { categoryTitle } = params;
    return (
        <div>UserTaskView----{categoryTitle}</div>
    )
}
