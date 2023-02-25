import React from 'react'
import iconUp from '../../assets/svg/upIcon.svg'
import iconDown from '../../assets/svg/downIcon.svg';
import iconNone from '../../assets/svg/noneIcon.svg';

const downIcon = iconDown
const upIcon = iconUp
const noneIcon = iconNone

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    return sort === '' ? down : sort === down ? up : sort === up ? '' : down;
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
        <img
            alt='icon'
            id={id + '-icon-' + sort}
            src={icon}
        />

        </span>
    )
}

export default SuperSort
