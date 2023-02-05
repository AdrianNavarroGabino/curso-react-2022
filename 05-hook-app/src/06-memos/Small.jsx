import { memo } from 'react';

export const Small = memo(({ value }) => {
    console.log('me volvi a redibujar');

    return (
        <small>{ value }</small>
    )
})
