import React,{Fragment} from 'react'
type Props = {
    callback:(e:React.MouseEvent<HTMLButtonElement>)=>void;
    buttonText:string;
}
const Button:React.FC<Props> = ({callback,buttonText}) => {
    return (
        <Fragment>
            <button className='start' onClick={callback}>
            {buttonText}
          </button>
        </Fragment>
    )
}

export default Button
