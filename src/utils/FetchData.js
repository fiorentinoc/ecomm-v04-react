function FetchData(aux) {
    const data = new Promise((resolve, reject)=>{
        if (aux) {
            setTimeout(() => {
                resolve({
                    name: "Casa",
                    img:"https://img10.naventcdn.com/aviso/"
                })
            }, 2000);
        } else {
            setTimeout(()=>{
                reject({
                    error: "No se Resolvió!!!"
                })
            })
        }
    })
    return data
}

export default FetchData