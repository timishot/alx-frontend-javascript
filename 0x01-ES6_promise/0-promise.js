const getResponseFromAPi = () => new Promise((resolve, reject) => {
    // Sitimulating an asynchronous API call, e.g., fetching data
    setTimeout(()=>{
        const data = { message: "API resonse data" };

        //Simulating a successful resonse
        resolve(data);
    }, 1000)
})

export default getResponseFromAPi