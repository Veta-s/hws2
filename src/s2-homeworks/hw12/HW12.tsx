import React, {useEffect} from 'react'
import s from './HW12.module.css'
import s2 from '../../s1-main/App.module.css'
import SuperSelect from '../hw07/common/c5-SuperSelect/SuperSelect'
import { useDispatch, useSelector } from 'react-redux'
import { changeThemeId} from './bll/themeReducer'
import {AppStoreType} from "../hw10/bll/store";

const themes = [
    { id: 1, value: 'light' },
    { id: 2, value: 'blue' },
    { id: 3, value: 'dark' },
]

const HW12 = () => {
    // Получаем themeId из Redux
    const themeId = useSelector((state: AppStoreType) => state.theme.themeId)
    const dispatch = useDispatch()
    console.log(themeId)
    const change = (id: number) => { // Дописываем функцию
        dispatch(changeThemeId(id))
    }


    // Используем useLayoutEffect для мгновенного обновления стилей
    useEffect(() => {
        document.documentElement.dataset.theme = themeId + ''
    }, [themeId])

    return (
        <div id={'hw12'} className={s2.hw} data-theme={themeId}>
            <div id={'hw12-text'} className={s2.hwTitle}>
                Homework #12
            </div>

            <div className={s2.hw}>
                <SuperSelect
                    id={'hw12-select-theme'}
                    className={s.select}
                    options={themes} // Передаем опции
                    value={themeId} // Передаем текущее значение
                    onChangeOption={change} // Передаем функцию для изменения значения
                />
            </div>
        </div>
    )
}

export default HW12