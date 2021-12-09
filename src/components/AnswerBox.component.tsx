// Place where user can give answer by typing
import React,{Fragment} from 'react'
type Props = {
    callback: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder:string;
}
const AnswerBox:React.FC<Props> = ({callback,placeholder}) => {
    return (
        <Fragment>
            <input type="text" placeholder={placeholder} onChange={callback} required/>
        </Fragment>
    )
}

export default AnswerBox
