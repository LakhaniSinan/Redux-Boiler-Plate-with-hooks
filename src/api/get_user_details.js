import axios from "axios"

export const get_user_details = (params) => {
    return new Promise((resolve, reject) => {
        try {
            axios({
                method: "post",
                url: "https://minisolution-backend.herokuapp.com/api/register",
                data: {
                    "username": "testing232",
                    "password": "testing"
                }
            }).then(res=>{
                resolve(res)
            })
        }
        catch (err) {
            reject(err, "EEEEEEEEEEEEEEEEEEEEEEEEEEE")
        }
    })
}