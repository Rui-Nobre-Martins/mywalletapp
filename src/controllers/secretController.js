function getSecret(req, res)  {
    
    if (req.cookies.LoggedIn) {
        const data = JSON.parse(req.cookies.LoggedIn);
        console.log(req.cookies.LoggedIn);
        console.log(data);
        res.json({
            status: "ok",
            message: `Hi ${data.userEmail} you are logged in` 
        })
    } else {
        res.status(401).end("please login first");
    }
    
}

module.exports = {
    getSecret
}