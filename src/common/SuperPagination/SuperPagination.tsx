import React from 'react'

import s from './SuperPagination.module.css'
import SuperSelect from "../SuperSelect/SuperSelect";
import {Pagination} from "@mui/material";

export type SuperPaginationPropsType = {
    id?: string
    page: number
    itemsCountForPage: number
    totalCount: number
    onChange: (page: number, count: number) => void
}

const SuperPagination: React.FC<SuperPaginationPropsType> = (
    {
        page, itemsCountForPage, totalCount, onChange, id = 'hw15',
    }
) => {
    const lastPage = Math.ceil(totalCount / itemsCountForPage)

    const onChangeCallback = (event: any, page: number) => {
        onChange(page, itemsCountForPage)
    }

    const onChangeSelect = (event: any) => {
        onChange(page, +event.currentTarget.value)
    }

    return (
        <div className={s.pagination}>
            <Pagination
                id={id + '-pagination'}
                sx={{mr: '20px'}}
                page={page}
                count={lastPage}
                onChange={onChangeCallback}
                hideNextButton
                hidePrevButton
            />

            <span className={s.text1}>
                Показать
            </span>

            <SuperSelect
                id={id + '-pagination-select'}
                value={itemsCountForPage}
                options={[
                    {id: 4, value: 4},
                    {id: 7, value: 7},
                    {id: 10, value: 10},
                ]}
                onChange={onChangeSelect}
                className={s.select}
            />

            <span className={s.text2}>
                строки в таблице
            </span>
        </div>
    )
}

export default SuperPagination
