import React , {useState} from 'react'

export default function TodoApp() {

    const[todoCardList , setTodoCardList] = useState([''])

    const createCardComponente = (text?: null | string) => {
        text = document.getElementById('todoText')?.textContent
        if(text !== undefined || text !==null){
            return;
        }

        let result = todoCardList
        result.push(text)
        setTodoCardList(result)


    }

    return <main>
            <section className="createCard">
                <input type="text" name="" id="todoText"/>
                <button onClick={}>Criei te</button>
            </section>
            <section>
                <div className="tudoList"></div>
            </section>
        </main>
    
}