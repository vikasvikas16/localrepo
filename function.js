function fetchUser(UserId){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            if(UserId == 1){
                resolve({id :1 , name: 'John Doe'});
            }
            else{
                reject(new Error('User Not Found'));
            }
        },2000);
    })
}