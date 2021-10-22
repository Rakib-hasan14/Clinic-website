import { useEffect } from "react"
import { useState } from "react"

const useData = () => {
    const [departments , setDepartments] = useState([])

    useEffect(() => {
    fetch('/fakeData.json')
    .then(res => res.json())
    .then(data=> setDepartments(data))
    } ,[])


    return{
        departments , 
        setDepartments
    }
}

export default useData;