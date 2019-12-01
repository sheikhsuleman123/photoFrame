import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Addphoto extends Component {
    render() {
        return (
            <div>
                <h1 className="h1"> <Link to="/"> Photo Frame </Link></h1>
                <div className="form">
                <form action="">
                    <input type="text" placeholder="Link"/>
                    <input type="text" placeholder="Description"/>
                    <button type="submit"> Submit</button>
                </form>
                </div>
            </div>
        )
    }
}
