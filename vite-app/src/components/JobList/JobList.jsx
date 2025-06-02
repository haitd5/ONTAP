import React, { Component } from "react";

const jobList = [
    {
        id: "task-01",
        name: "Java - Spring Boot",
        status: "Looking For",
        hrName: "Hai Tran",
        count: 5,
    },
    {
        id: "task-02",
        name: "ReactJS/Angular",
        status: "Done",
        hrName: "Nhu Lieu",
        count: 7,
    },
    {
        id: "task-03",
        name: "PHP/Laravel",
        status: "Looking For",
        hrName: "Bang Kieu",
        count: 9,
    },
    {
        id: "task-04",
        name: ".NET Core MVC",
        status: "Done",
        hrName: "Chi Thuan",
        count: 12,
    },
    {
        id: "task-05",
        name: "SQL",
        status: "Looking For",
        hrName: "La Hau",
        count: 3,
    },
];

function JobList() {
    // const handleClick = (job) => {
    //     console.log(job);
    // };
    return (
        <section>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>#ID</th>
                        <th>Task Name</th>
                        <th>Count</th>
                        <th>Status</th>
                        <th>HR Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {jobList.map((job) => (
                        //<TableRow
                        //    key={job.id}
                        //    id={job.id}
                        //    name={job.name}
                        //    count={job.count}
                        //    status={job.status}
                        //    hrName={job.hrName}
                        //    onClick={() => handleClick(job)}
                        ///>

                        //<TableRow key={job.id} {...job} onClick={() => handleClick(job)} />

                        <TableRow key={job.id} {...job} />
                    ))}
                </tbody>
            </table>
        </section>
    );
}

function TableRow(props) {
    const handleClick = (job) => {
        console.log(job);
    };
    return (
        <tr key={props.id}>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.count}</td>
            <td>
                <span className={`${props.status == "Done" ? "badge bg-success" : "badge bg-warning text-dark"}`}>
                    {props.status}
                </span>
            </td>
            <td>{props.hrName}</td>
            <td>
                <button className="btn btn-outline-primary btn-sm me-1">
                    <i className="fa fa-eye" onClick={() => handleClick(props)}></i>
                </button>
                <button className="btn btn-outline-danger btn-sm">
                    <i className="fa fa-trash"></i>
                </button>
            </td>
        </tr>
    );
}
export default JobList;
