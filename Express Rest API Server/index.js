const app = require("./app");



app.listen(5050, (err) => {
    if(err){
        console.log(err);
    }else{
        console.log("Running server at 5050 PORT");
    }
});

