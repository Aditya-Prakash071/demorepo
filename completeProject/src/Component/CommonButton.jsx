import {Button }  from 'antd'
const  CommonButton =({
    type="primary",
    children,
    handleClick,
    className,
    disabled = false,
    size = "middle",
    danger = false,
    iconPosition = 'end',
    icon = null,
    shape ='default',
    variant = 'filled' 
     })=>{
    return (
        <Button 
        type={type } 
        classNames={`rounded-md ${className ? className :''}`}
        onClick={()=>{handleClick() ? handleClick() :null}}
        className={className ?? 'bg-blue-500'}
        disabled={disabled}
        size={size}
        danger={danger}
        iconPosition= {iconPosition}
        icon ={ icon}
        shape={shape}
        variant={variant}
        >
            {children}
        </Button>
    )
}


export default CommonButton