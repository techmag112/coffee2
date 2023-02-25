import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {About, Details, Main, Pleasure, Page404} from '../pages';

import useDBService from '../services/DBService';

import './style.css'; 

const App = () => {

    const {getDBCofee, getBestKind} = useDBService();
    const [mainDB, setMainDB] = useState([]);
    const [topDB, setTopDB] = useState([]);
    const [term, setTerm] = useState('');
    const [filter, setFilter] = useState('');
    
    // Загружаем базы из внешнего источника при первом формировании DOM
    useEffect(() => {
        updateData();
        // eslint-disable-next-line
    }, []);
    
    const updateData = () => {
        setMainDB(getDBCofee());
        setTopDB(getBestKind());
    }

    // Добавление на базу кофе фильтров
    const addFilter = (items, term, filter) => {
        let arr = [];
        if ((filter.length === 0) && (term.length === 0)) {
                    return items;
                } else {
                // Проверяем по фильтрам-кнопкам
                arr = items.filter(item => {
                    return item.country.indexOf(filter) > -1
                })
                    // Проверяем по фильтру-строке
                    return arr.filter(item => {
                             return item.country.indexOf(term) > -1
                    })
            }   
        }
       
// Обновить текст поиска
const onUpdateSearch = (term) => {
        setTerm(term);
    }
       
// Обновить фильтр по кнопкам
const onFilterSelect = (newFilter) => {
    if (filter === newFilter) {
        setFilter('');    
    } else {
        setFilter(newFilter);    
    }
}
       
// Оставить только видимые элементы базы кофе
const visibleData = addFilter(mainDB, term, filter); 

    return (
        <Router>    
                <div className="container">
                        <Routes>
                            <Route path="/" element={<Main arr={topDB}/>} />
                            <Route path="/about" element={<About visibleData={visibleData}
                                                                 filter={filter}
                                                                 onUpdateSearch={onUpdateSearch}
                                                                 onFilterSelect={onFilterSelect}
                                                         />} />
                            <Route path="/pleasure" element={<Pleasure arr={visibleData}/>} />
                            <Route path="/details/:id" element={<Details arr={visibleData}/>} />
                            <Route path="*" element={<Page404/>} />
                        </Routes>
                </div>
        </Router>
    )   
}


export default App;

