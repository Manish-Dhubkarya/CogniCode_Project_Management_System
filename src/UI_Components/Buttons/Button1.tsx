
interface Button1Props {
        width: string;
        height: string;
        value: string;
        gradientType?: string;
    }
const Button1: React.FC<Button1Props> = ({ width, height, value, gradientType }) => {
    const gradient =
    gradientType === 'gradient1'
      ? 'conic-gradient(from 90deg at 50% 50%, #011B40 0deg, #0348A6 360deg)'
      : 'conic-gradient(from 90deg at 50% 50%, #474747 0deg, #9A9A9A 360deg)';
  return (
   <div
      className={`${width} ${height} text-white text-[12px] px-6 py-1 cursor-pointer border border-black shadow-[2px_3px_4px_0px_black]`}
      style={{
        background: gradient,
      }}
    >
        {value}
    </div>
  )
}

export default Button1
