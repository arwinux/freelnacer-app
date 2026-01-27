import { ThreeDots } from 'react-loader-spinner';

function LoadingPage() {
  return (
    <div className="w-full mt-44 flex justify-center items-center">
      <div className="size-20 sm:size-32">
        <ThreeDots
          visible={true}
          color="#f97316"
          radius="9"
          ariaLabel="three-dots-loading"
        />
      </div>
    </div>
  );
}

export default LoadingPage;
