import ToDo from "../models/ToDo"

class ToDoController {
	
	getAllToDO (req, res) {
		const perPage = 5;
		const page = req.params.page || 1;

		ToDo.find({})
			.skip(perPage * page - perPage)
			.limit(perPage)
			.then( data => {
				ToDo.countDocuments().then( count => {
					res.send({
						data,
						page,
						pages: Math.ceil(count / perPage)
					});
				})
			});
	}

	// getOneToDo (req, res) {
	// 	ToDo.findOne({_id:req.params.id})
	// 		.then((post) => {
	// 			if(!post){
	// 				res.send("Can not get One To Do");
	// 			}else{
	// 				res.json(post);
	// 			}
	// 		})
	// }

	postOneToDO (req, res) {
		const data = req.body;
		const todo = new ToDo({ 
			title: data.title,  
			description: data.description,
			dateTo: data.dateTo	
		});
		todo.save()
			.then(() => {
				res.send(todo);
			});
	}

	deleteOneToDO (req, res) {
		ToDo.remove({ _id: req.params.id })
			.then((data) => {
				if(data){
					res.json(req.params.id);
				}else{
					res.send("Не удален");
				}
			})
	}

	putOneToDo (req, res) {
		ToDo.findByIdAndUpdate(req.params.id, req.body)
			.then(() => {
				return ToDo.findOne({_id: req.params.id})
			})
			.then(data => res.json(data))
	}
};

export default ToDoController; 