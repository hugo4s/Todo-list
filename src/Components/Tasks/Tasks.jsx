import { Trash, Article } from "phosphor-react";
import './Tasks.css'

function Tasks(props) {
    return (
        <div className="body">
            <div className="conteudo">
                <div className="criadas">
                    <p>Tarefas criadas</p>
                    <span>{props.tasks.length}</span>
                </div>
                <div className="concluidas">
                    <p>Concluídas</p>
                    <span>{props.getCompletedTasksCount()} de {props.tasks.length}</span>
                </div>
            </div>
            {props.tasks.length > 0 ? (
            <form>
                {props.tasks.map((task, index) => (
                    <div key={index}>
                        <div className="inlabel">
                            <input className="input" type="checkbox" id={`meuInput${index}`} checked={task.completed} onChange={() => props.onToggleTask(index)} />
                            <label htmlFor={`meuInput${index}`} >{task.text}</label>
                        </div>
                        <Trash id="Trash" size={16} onClick={() => props.deleteTask(index)} />
                    </div>
                ))}
                </form>) : (
                <div className="Manuel">
                    <Article id="Article" size={56} />
                    <div className="Samuel">
                        <strong>Você ainda não tem tarefas cadastradas</strong>
                        <p >Crie tarefas e organize seus itens a fazer</p>
                    </div>
                </div>)
                }
        </div>
    )
}

export { Tasks };