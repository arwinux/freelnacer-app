import { RotatingLines } from 'react-loader-spinner';

function Loading({ width = '28', height = '28', color = 'white' }) {
  return (
    <RotatingLines
      visible={true}
      height={width}
      width={height}
      color={color}
      strokeWidth="5"
      animationDuration="0.75"
      ariaLabel="rotating-lines-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
}

export default Loading;
