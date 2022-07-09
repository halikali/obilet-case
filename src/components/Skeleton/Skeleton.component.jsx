import "./Skeleton.style.scss";

const JourneyCardSkeleton = () => {
  return (
    <div className="skeleton">
      <span className="line line--1"></span>
      <span className="line line--2"></span>
      <span className="line line--3"></span>
      <span className="btn"></span>
    </div>
  );
};

export { JourneyCardSkeleton };
