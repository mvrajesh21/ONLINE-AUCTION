import React from "react";
import './profile.css';
import { callApi, errorResponse, setSession, getSession } from './main';

class Profile extends React.Component {
    constructor() {
        super();
        this.sid = getSession("sid");
        if (this.sid === "")
            window.location.replace("/");

        var url = "http://localhost:5000/home/profile";
        var data = JSON.stringify({
            name: this.sid
        });
        callApi("POST", url, data, this.getProfile, errorResponse);
    }

    getProfile(res) {
        var data = JSON.parse(res);

        var H1 = document.getElementById("H1");
        var H2 = document.getElementById("H2");
        var H3 = document.getElementById("H3");
        var H4 = document.getElementById("H4");
        var H5 = document.getElementById("H5");
        var H6 = document.getElementById("H6");
        var H7 = document.getElementById("H7");

        H1.innerText = `${data[0].photo}`;
        H2.innerText = `${data[0].name}`;
        H3.innerText = `${data[0].Dept}`;
        H4.innerText = `${data[0].tenth}`;
        H5.innerText = `${data[0].inter}`;
        H6.innerText = `${data[0].cgpa}`;
        H7.innerText = `${data[0].salary}`;
    }

    logout() {
        setSession("sid", "", -1);
        window.location.replace("/");
    }

    render() {
        return (
            <div className="pfl">
                <button onClick={this.logout}>Logout</button>
                <table>
                    <tr>
                        <th>Photo</th>
                        <th>Name</th>
                        <th>Department</th>
                        <th>10th Marks</th>
                        <th>Inter</th>
                        <th>CGPA</th>
                        <th>Salary</th>
                    </tr>
                    <tr>
                        <td id="H1"></td>
                        <td id="H2"></td>
                        <td id="H3"></td>
                        <td id="H4"></td>
                        <td id="H5"></td>
                        <td id="H6"></td>
                        <td id="H7"></td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default Profile;
