import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperButton.module.css'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    xType?: string
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        xType,
        className,
        disabled,
        ...restProps // все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
    const finalClassName = `${s.button} ${ // Базовый класс
        xType === 'red' ? s.red : // Добавляем класс для красной кнопки, если xType === 'red'
            xType === 'secondary' ? s.secondary : s.default // Добавляем класс для вторичной кнопки, если xType === 'secondary'
    } ${
        disabled ? s.disabled : '' // Добавляем класс для состояния disabled, если кнопка неактивна
    } ${
        className ? ' ' + className : '' // Добавляем пользовательский класс, если он есть
    }`.trim(); // Удаляем лишние пробелы


    return (
        <button
            disabled={disabled}
            className={finalClassName}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        />
    )
}

export default SuperButton
