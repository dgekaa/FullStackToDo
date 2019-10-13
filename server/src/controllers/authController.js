import User from "../models/user"
import bcrypt from "bcrypt-nodejs";

class authController {

	postRegistrForm (req, res) {
		const {login, password, repassword} = req.body;
		if(!login || !password || !repassword){
			res.json({
				ok: false,
				error: "Заполнить все поля",
				fields: ["login","password","repassword"]
			})
		}else if(login.length < 3 || login.length >15){
			res.json({
				ok: false,
				error: "Длина огина от 3 до 15 симаолов",
				fields: ["login"]
			})
		}else if(password !== repassword){
			res.json({
				ok: false,
				error: "Разные пароли",
				fields: ["password","repassword"]
			})
		}else{
			User.findOne({
				login
			})
				.then(user => {
					if(!user){
						bcrypt.hash(password, null, null, (err, hash) => {
							User.create({
								login,
								password: hash
							})
								.then(user => {
									console.log(user)
									res.json({
										ok: true
									})
								})
								.catch(err =>{
									res.json({
										ok: false,
										error: "Попробуйте позже"
									})
								})
						})
					}else{
						res.json({
							ok: false,
							error: "Имя занято",
							fields: ["login"]
						})
					}
				})			
		}
	}
};

export default authController; 