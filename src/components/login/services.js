export const authenticateUser = async ( formValues ) => {
    const url = 'http://localhost:3001/login'; 
    const {user, password} = formValues;

    const data = {                          
        login: user,
        password: password
    };

    try{
    const response = await fetch(url, {
        method: 'POST',                       
        headers: {
            'Content-Type': 'application/json'   
        },
        body: JSON.stringify(data)             
    });

    const finalData = await response.json()

    return finalData;
    } catch(error){
        return 'error'
    }
}