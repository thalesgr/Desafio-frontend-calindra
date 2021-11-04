import React, { useState } from 'react';
import * as api from "../api/index";

export default function Home() {
    const [name, setName] = useState('');
    const [data, setData] = useState('');
    const [loading, setLoading] = useState(true);

    const handleChange = ({ target }) => {
        setName(target.value);
        console.log(name);
    };

    const handleClick = async () => {
        setLoading(true);
        const response = await api.searchData(name);
        setData(response);
        setLoading(false);
    };

    const renderProducts = () => {
        if(data === undefined) {
            return <h1>Digite algum produto antes da pesquisa.</h1>
        } else {
            return (
                <div className="cardList">
                    <h2>Resultados encontrados:</h2>
                    {data.map((produto) => <p className="card" key={produto.id}>{produto.name}</p>)}
                </div>
            )}
    }

 
    return (
        <div>
            <div className="searchDiv">
            <input className="input" placeholder="Digite o termo da pesquisa" type="text" id="searchInput" onChange={(e) => handleChange(e) } />
            <button className="btn" id="searchBtn" onClick={ handleClick }>Pesquisar</button>
            </div>
            <div className="results">
                { loading ? <span>Loading</span>: renderProducts()}
            </div>
        </div>
    );
};
