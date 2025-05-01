import { calculateTrendPercentage, cn } from "lib/utils";

const StatsCard = ({
  headerTitle,
  total,
  currentMonthCount,
  lastMonthCount,
}: StatsCard) => {
  const { trend, percentage } = calculateTrendPercentage(
    currentMonthCount,
    lastMonthCount
  );

  const isDecrement = trend === "decrement";

  return (
    <article className="stats-card">
      <h3 className="text-base font-medium">{headerTitle}</h3>

      <div className="content">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-semibold">{total}</h2>
          <div className="flex items-center gap-2">
            <figure className="flex items-center gap-1">
              <img
                src={
                  isDecrement
                    ? "/assets/icons/arrow-down-red.svg"
                    : "/assets/icons/arrow-up-green.svg"
                }
                alt="arrow"
                className="size-5"
              />
              <figcaption
                className={cn(
                  "text-sm font-semibold",
                  isDecrement ? "text-red-500" : "text-green-500"
                )}
              >
                {Math.round(percentage)}%
              </figcaption>
            </figure>
            <p className="text-sm font-medium text-gray-100 truncate">
              vs last month
            </p>
          </div>
        </div>
            <img
              src={`/assets/icons/${
                isDecrement ? "decrement" : "increment"
              }.svg`}
              alt="trend graph"
              className="xl:w-32 w-full h-full md:h-32 xl:h-full"
            />
      </div>
    </article>
  );
};

export default StatsCard;
