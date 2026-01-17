const user = {
    userName: "Mohan",
    loginCount: 20,
    signedIn: true,

    getUserDeatils: () => {
        console.log('Got deatils')
    }
}



console.log(user['userName'])
user.getUserDeatils()