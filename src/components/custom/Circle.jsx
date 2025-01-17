export const Circle = ({deg, radius, classes}) => {
    return (
      <div style={{
        background:`conic-gradient(from ${deg}deg, rgb(81, 184, 132)30%, rgb(1, 46, 23))`,
        width:radius,
        height:radius
      }} className={`${classes} absolute z-[0] rounded-full `}></div>
    )
  }
  