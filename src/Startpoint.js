import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { get_user_details_action } from "./redux/actions/get_user_details"

const Start = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(get_user_details_action())
    }, [])
    const state = useSelector(state=>console.log(state,"SSSSSSSSSSSSSSSSSSSSS"))
    return (
        <div>
            Hello
        </div>
    )
}

export default Start