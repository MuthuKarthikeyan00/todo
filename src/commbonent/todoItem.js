import react from 'react';

function Result(params) {
    return <div onClick={()=>{
        params.delet(params.id);
    }}>
        <li>
            {params.text}
        </li>
    </div>
}

export default Result;