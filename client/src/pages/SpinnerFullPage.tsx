import { ClipLoader } from "react-spinners";

function SpinnerFullPage() {
  return (
    <div className="bg-background flex h-screen flex-col items-center">
      <div className="text-textSecondary bg-backgroundIcon w-full p-4 text-center text-2xl">
        The first load will take up to 30 seconds because the API is hosted on
        Render's free tier, which has cold starts. Thanks for your patience!
      </div>
      <div className="flex h-full items-center">
        <ClipLoader
          color="blue"
          size={250}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </div>
  );
}

export default SpinnerFullPage;
