import React from 'react'
import Header from '../ui/Header'
import CreateTask from '../ui/CreateTask'
import AllTask from '../ui/AllTask'

const AdminDashboard = (props) => {
    return (
        <div className='h-screen w-full p-7'>
            <Header changeUser={props.changeUser} />
            <CreateTask />
            <AllTask />
        </div>
    )
}

export default AdminDashboard