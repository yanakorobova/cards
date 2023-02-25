import React from 'react';
import SuperRadio from "../../common/SuperRadio/SuperRadio";
import SuperSelect from "../../common/SuperSelect/SuperSelect";
import SuperButton from "../../common/SuperButton/SuperButton";
import SuperRange from "../../common/SuperRange/SuperRange";
import SuperCheckbox from "../../common/SuperCheckbox/SuperCheckbox";
import SuperEditableSpan from "../../common/SuperEditableSpan/SuperEditableSpan";
import SuperInputText from "../../common/SuperInputText/SuperInputText";

export const SuperComponent = () => {
    return (
        <div>
            <SuperButton />
            <SuperCheckbox />
            <SuperEditableSpan />
            <SuperInputText />
            <SuperRadio />
            <SuperRange />
            <SuperSelect />
        </div>
    );
};

