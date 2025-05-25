import { ClipLoader } from "react-spinners";

function SpinnerFullPage() {
  return (
    <div className="bg-background flex h-screen items-center justify-center">
      <ClipLoader
        color="blue"
        size={250}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default SpinnerFullPage;
