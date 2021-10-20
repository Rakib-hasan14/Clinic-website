import { useState } from "react"

const useData = () => {
    const [departments , setDepartments] = useState([])

    fetch('./fakeData.json')
    .then(res => res.json())
    .then(data=> setDepartments(data))


    return{departments , setDepartments}
}

export default useData;