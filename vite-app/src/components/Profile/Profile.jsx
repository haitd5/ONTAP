import React from "react";

const profile = {
    name: "Hai Tran",
    age: 20,
    email: "haitran1606@gmail.com",
    mobile: "0932516694",
    gender: "male",
    avatar: "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg",
};

const Profile = () => {
    return (
        <section>
            <div className="card mb-3">
                <div className="row g-0 d-flex align-items-center justify-content-center">
                    <div className="col-md-4">
                        <img src={profile.avatar} className="img-fluid rouded-start w-50" alt=""></img>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{profile.name}</h5>
                            <ul className="list-group">
                                <li className="list-group-item">
                                    Age: <span className="fw-bolder">{profile.age}</span>
                                </li>
                                <li className="list-group-item">
                                    Gender: <span className="fw-bolder">{profile.gender}</span>
                                </li>
                                <li className="list-group-item">
                                    Email: <span className="fw-bolder">{profile.email}</span>
                                </li>
                                <li className="list-group-item">
                                    Mobile: <span className="fw-bolder">{profile.mobile}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Profile;
