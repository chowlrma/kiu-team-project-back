import  Jwt  from "jsonwebtoken";
import {createError} from "../utils/error.js";

export const verifyToken=(req, res, next)=>{
    const token = req.cookies.access_token;
    if(!token){
        return next(createError(401, "You are not authenicated!"))
    }

    Jwt.verify(token, process.env.JWT,(err, user)=>{
        if(err) return next(createError(403, "Token is not valid!"));
        req.user = user;
        next()
    });
};

export const verifyUser = (req, res, next) => {
    verifyToken(req, res, ()=>{
        if(req.user.id === req.params.id || req.user.isAdmin){
            next(); 
        } else{
            return next(createError(403, "Token is not authorized"));
        }
    })
}
