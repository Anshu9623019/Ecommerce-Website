import React from 'react';
import  Base  from "../core/Base";
import {isAuthenticated} from '../auth/helper/index'
import { Link } from "react-router-dom";

function AdminDashBoard() {

    const {user: {name,email,role}
            } = isAuthenticated();

    const adminLeftSide = () =>{
        return (
            <div className="card">
                <h4 className="card-header bg-dark text-white">
                    Admin Navigation
                </h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        <Link to="/admin/create/category" className="nav-link text-success">Create Categories</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/admin/categories" className="nav-link text-success">Manage Categories</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/admin/create/product" className="nav-link text-success">Create Product</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/admin/product" className="nav-link text-success">Manage Product</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/admin/order" className="nav-link text-success">Manage Order</Link>
                    </li>
                </ul>
            </div>
        )
    }

    const adminRightSide = () =>{
        return (
            <div className="card mb-4">
                <h4 className="card-header">
                    Admin Info
                    <ul className="list-group">
                        <li className="list-group-item">
                            <span className="badge bg-success mr-2">Name: </span> {name}
                        </li>
                        <li className="list-group-item">
                            <span className="badge bg-success mr-2">Email: </span> {email}
                        </li>
                        {/* <li className="list-group-item">
                            <span className="badge bg-success mr-2">Role: {role}</span>
                        </li> */}
                        <li className="list-group-item">
                            <span className="badge bg-danger">Admin area</span>
                        </li>
                    </ul>
                </h4>
            </div>
        )
    }

    return (
        <Base title="Welcome to min area" description="Manage all your product here" className="container bg-success p-4">
            <h1>This is profile page</h1>
            <div className="row">
                <div className="col-3">
                {adminLeftSide()}
                </div>
                <div className="col-9">
                {adminRightSide()}
                </div>
            </div>
        </Base>
    )
}

export default AdminDashBoard;