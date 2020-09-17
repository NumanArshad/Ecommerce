import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import common from "../../../assets/css/common_styles.module.css"
import { allCategory } from "../../actions/categoryActions"
import ReactPaginate from "react-paginate";

import Autocomplete from "react-autocomplete"
const lst = [
    { id: 1, name: "lwmk", Descriptiom: "lwlgmrmk ksfndne md n dk" }, { id: 1, name: "lwmk", Descriptiom: "lwdk" }, { id: 1, name: "lwmk", Descriptiom: "lwdk" }, { id: 1, name: "lwmk", Descriptiom: "lwdk" }
]
const Categories = () => {
    const [paginateState, setPaginate] = useState({ total_pages: 0 })
    const { total_pages } = paginateState
    const { categories } = useSelector(state => state.categoryReducer)
    const { loading } = useSelector(state => state.loadingReducer)
    const [bit, setBit] = useState(false)
    const [vl,setValue]=useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(allCategory(1))
    }, [dispatch])

    useEffect(() => {
        console.log("change loading state", loading)
        console.dir(categories)
        if (!loading && categories.length && !bit) {
            console.log("has been", Math.ceil(11 / 5))
            setPaginate(prevState => ({ ...prevState, total_pages: 3 }))
            setBit(true)
        }
    }, [loading, categories])

    const handlePageClick = (event) => {
        dispatch(allCategory(event.selected + 1))
    }

    
    return (

        <div className={common.table_container}>

            <table>
                <thead>
                    <tr><td>Id</td><td>Name</td><td>Descriptiom</td><td>Actions</td></tr>
                </thead>
                <tbody>

                    {categories.map(({ id, name, description }) => {
                        return (<tr><td>{id}</td><td>{name}</td> <td>{description}</td>
                            <td><button className={common.edit}>edit</button><button className={common.delete}>delete</button></td></tr>)
                    })}



                </tbody>


            </table>
            <Autocomplete
        items={[
          { id: 'foo', label: 'foo' },
          { id: 'bar', label: 'bar' },
          { id: 'baz', label: 'baz' },
        ]}
     shouldItemRender={(item, value) =>{
        
        return (value.length >0 && item.label.toLowerCase().indexOf(value.toLowerCase()) > -1)}}
        getItemValue={item => item.label}
        renderItem={(item, highlighted) =>{console.log(item,highlighted);
            return(
          <div
            key={item.id}
            style={{ backgroundColor: highlighted ? "red" : 'yellow'}}>
            {item.label}
          </div>)
        }
        }
    renderMenu={(items,value)=>(<div>{value===''?<span>Search value</span>:items.length===0 && value.length>2?
<span>no match found</span>:items}</div>)}
        value={vl}
        onChange={e => setValue(e.target.value )}
        onSelect={value =>{ setValue(value )}}
      />
            <ReactPaginate
                previousLabel={"prev"}
                nextLabel={"next"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={total_pages}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"} />
        </div>
    )
}
export default Categories