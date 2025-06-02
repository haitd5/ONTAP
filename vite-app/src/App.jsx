import "./App.css";
import Form from "./components/Form/Form";
import FormRegister from "./components/FormContact/FormContact";
import Heading from "./components/Heading/Heading";
import JobList from "./components/JobList/JobList";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import Profile from "./components/Profile/Profile";

function App() {
    return (
        <div className="container">
            {/* <Heading>We are learning CRA</Heading>
            <Heading>We are learning Vite</Heading>
            <FormRegister />
            <Profile />
            <JobList /> */}
            {/* <Form></Form> */}
            <Header></Header>
            <Heading>We are learning Vite</Heading>
            <JobList />
            <Footer></Footer>
        </div>
    );
}

export default App;
