import React from 'react'

// добавить в проект иконки и импортировать
const downIcon = '[\\/]'
const upIcon = '[/\\]'
const noneIcon = '[--]'

export type SuperSortPropsType = {
    id?: string;
    sort: string;
    value: string;
    onChange: (newSort: string) => void;
};

export const pureChange = (sort: string, down: string, up: string) => {
    if (sort === down) {
        return up; // Если текущее состояние — сортировка по убыванию, переключаем на сортировку по возрастанию
    } else if (sort === up) {
        return ''; // Если текущее состояние — сортировка по возрастанию, отключаем сортировку
    } else {
        return down; // Если сортировка отключена, включаем сортировку по убыванию
    }
};

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value; // Значение для сортировки по возрастанию
    const down = '1' + value; // Значение для сортировки по убыванию

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up)); // Вызываем onChange с новым значением сортировки
    };

    // Определяем, какую иконку отображать
    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon;

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
            style={{ cursor: 'pointer' }} // Добавляем стиль для указателя мыши
        >
            <img
                id={id + '-icon-' + sort}
                src={icon}
                alt="sort icon" // Добавляем альтернативный текст для доступности
                style={{ width: '16px', height: '16px' }} // Задаем размер иконки
            />
        </span>
    );
};

export default SuperSort;