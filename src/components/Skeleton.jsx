import Skeleton from '@material-ui/lab/Skeleton';

function SkeletonLoad() {
  return (
    <div className="skeleton-load">
      <Skeleton height={70} className="rect" />
      <Skeleton height={70} className="rect" />
      <Skeleton height={70} className="rect" />
    </div>
  );
}

export default SkeletonLoad;
