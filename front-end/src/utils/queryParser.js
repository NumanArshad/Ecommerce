import queryString from "query-string"

const updateQuery=queryParams=>{
    const parse=queryString.parse(queryParams)
    parse._limit=2
    return   queryString.stringify(parse)
}

export default updateQuery