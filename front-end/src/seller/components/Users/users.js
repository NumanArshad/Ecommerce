import React from "react"
import common from "../../../assets/css/common_styles.module.css"
const lst = [
    { id: 1, name: "lwmk",email:"lefkklem",contact:"0908494",city:"jfeb",postalCode:"ewhu",type:"seller" },   { id: 1, name: "lwmk",email:"lefkklem",contact:"0908494",city:"jfeb",postalCode:"ewhu",type:"seller" },
    { id: 1, name: "lwmk",email:"lefkklem",contact:"0908494",city:"jfeb",postalCode:"ewhu",type:"seller" },   { id: 1, name: "lwmk",email:"lefkklem",contact:"0908494",city:"jfeb",postalCode:"ewhu",type:"seller" }
]
const Users = () => {
    return (

        <div className={common.users_table_container}>
            <table>
                <thead>
                    <tr><td>Id</td><td>Name</td><td>Email</td><td>Contact</td><td>City</td><td>PostalCode</td><td>Type</td><td>Actions</td></tr>
                </thead>
                <tbody>

                    {lst.map(({ id, name, email,contact,city,postalCode,type }) => {
                        return (<tr><td>{id}</td><td>{name}</td> <td>{email}</td><td>{contact}</td><td>{city}</td><td>{postalCode}</td><td>{type}</td>
                            <td><button className={common.edit}>edit</button><button className={common.delete}>delete</button></td></tr>)
                    })}


                </tbody>


            </table>
        </div>
    )
}
export default Users