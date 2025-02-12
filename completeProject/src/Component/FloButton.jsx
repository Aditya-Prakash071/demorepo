import { FloatButton } from "antd"
const FloButton =({
    shape="circle",
    insertPlace="insetInlineEnd",
    insertvalue="10",
    icons =null,
    type="primary",
    handleClick,
    badge={
        dot:true
    }
})=>{

    return (
        <>
          <FloatButton
      shape={shape}
      onClick={()=>{handleClick ? handleClick : null}}
      type= {type}
      style={{
         [insertPlace]: insertvalue,
      }}
      badge={
        badge
      }
      className="bg-red-100"
      icon={icons}
    />
        </>
    )
}

export default FloButton