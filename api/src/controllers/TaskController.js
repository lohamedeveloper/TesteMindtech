let tasks = [];
let task = {
    id: null, 
    title: null,
    description: null,
    completed: null,
    create_data: null,
    update_data: null,
    end_data: null,
}
let idCount = 0;

module.exports = {

    tasks(req, res) {
        return res.status(200).json(tasks);
    },
    create(req, res) {
        
        const {title, description} = req.body;

        if(title === null || title === '')
            return res.status(400).json('O campo titulo é obrigatório');

        idCount++;

        task = {
            id: idCount, 
            title: title,
            description: description,
            completed: false,
            create_data: date_task(),
            update_data: false,
            end_data: false,
        }
        tasks.push(task);
        
        return res.status(201).json(tasks);
    },
    edite(req, res) {
        
        var id = req.params.id;
        const {title, description} = req.body;

        if(title === null || title === '')
            return res.status(400).json('O campo titulo é obrigatório');

        if( id < 1 || id > idCount )
            return res.status(202).json([]);

        for(var i = 0; i < tasks.length; i++) {
            if(tasks[i].id == id){
                tasks[i].title = title;
                tasks[i].description = description;
                tasks[i].update_data = date_task();
                break;
            }
        }

        return res.status(201).json(tasks[i]);
    },
    read(req, res) {
        var id = req.params.id;

        if(id < 1 || id > idCount )
            return res.status(400).json([]);

        for(var i = 0; i < tasks.length; i++) {
            if(tasks[i].id == id) {
                break;
            }
        }
        
        return res.status(200).json(tasks[i]);
    },
    completed(req, res) {

        var id = req.params.id;

        if( id < 1 || id > idCount )
            return res.status(400).json([]);

        for(var i = 0; i < tasks.length; i++) {
            if(tasks[i].id == id) {
                tasks[i].end_data = date_task(); 
                tasks[i].completed = true;
                break;
            }
        }

        return res.status(201).json(tasks[i]);
    },
    delete(req, res) {
        
        var id = req.params.id;

        if( id < 1 || id > idCount )
            return res.status(400).json([]);
            
        for(var i = 0; i < tasks.length; i++) {
            if(tasks[i].id == id){
                break;
            }   
        }

        tasks.splice(i, 1);
        return res.status(200).json(id + ' tarefa deletada com sucesso !');

    },

}

/**functions */
function date_task()
{
    const current_date = new Date();
    let assemble_date = '';

    switch(current_date.getDay())
    {
        case 0:
             assemble_date = "Domingo" + ' ';
            break;
        case 1:
             assemble_date = 'Segunda-Feira' + ' ';
            break;
        
        case 2:
             assemble_date = 'Terça-Feira' + ' ';
            break;
        
        case 3:
             assemble_date = 'Quarta-Feira' + ' ';
            break;

        case 4:
             assemble_date = 'Quinta-Feira' + ' ';
            break;
        
        case 5:
             assemble_date = 'Sexta-Feira' + ' ';
            break;
        
        case 6:
             assemble_date = 'Sábado-Feira' + ' ';
            break;
        
        default:
            assemble_date = 'dia da semana invalida' + ' ';   
    }

    assemble_date = assemble_date + String(current_date.getDate()).padStart(2) + '/';
    assemble_date = assemble_date + (current_date.getMonth()+1) + '/';
    assemble_date = assemble_date + current_date.getUTCFullYear() + ' ';
    assemble_date = assemble_date + current_date.getHours() + 'hr:';
    assemble_date = assemble_date + current_date.getMinutes();
    
    return assemble_date;
}
