const handleLogin = () => {
    console.log({
        user: document.getElementById("user_name").value,
        password: document.getElementById("password").value,
    });
};

const heading_text = "Form Login";
const loginForm = (
    <div className="container w-50">
        <h3
            style={{
                color: "red",
                backgroundColor: "yellow",
            }}
        >
            {heading_text}
        </h3>
        <div className="form-group">
            <label className="form-label mb-3">User</label>
            <input type="text" className="form-control mb-3" id="user_name"></input>
        </div>
        <div className="form-group">
            <label className="form-label mb-3">Password</label>
            <input type="password" className="form-control mb-3" id="password"></input>
        </div>
        <div className="form-group">
            <button type="button" className="btn btn-dark mb-3" onClick={handleLogin}>
                Login
            </button>
            <p>
                Not yet a Member? <a href="#">Register</a>
            </p>
        </div>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(loginForm);
