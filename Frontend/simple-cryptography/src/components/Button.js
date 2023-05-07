

const Button = ({color, type, variant, className, id, onClick, children}) => {

  return (
    <button 
        type= {type ? type : "button"} 
        variant={variant}className={className ? `btn-component ${className}` : "btn-component"}
        id={id} 
        onClick = {onClick}
        style={{backgroundColor: color}} 
    >
        {children}
    </button>
  )
}



export  default Button