import React from "react"
import common from "../../../assets/css/common_styles.module.css"
const lst = [
    { id: 1, name: "lwmk", Descriptiom: "lwlgmrmk ksfndne md n dk" }, { id: 1, name: "lwmk", Descriptiom: "lwdk" }, { id: 1, name: "lwmk", Descriptiom: "lwdk" }, { id: 1, name: "lwmk", Descriptiom: "lwdk" }
]
const Categories = () => {
    return (

        <div className={common.table_container}>
            <table>
                <thead>
                    <tr><td>Id</td><td>Name</td><td>Descriptiom</td><td>Actions</td></tr>
                </thead>
                <tbody>

                    {lst.map(({ id, name, Descriptiom }) => {
                        return (<tr><td>{id}</td><td>{name}</td> <td>{Descriptiom}</td>
                            <td><button className={common.edit}>edit</button><button className={common.delete}>delete</button></td></tr>)
                    })}


                </tbody>


            </table>
        </div>
    )
}
export default Categories