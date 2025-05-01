import { cn, getFirstWord } from "lib/utils";
import { Link, useLocation } from "react-router";
import {
  ChipListComponent,
  ChipsDirective,
  ChipDirective,
} from "@syncfusion/ej2-react-buttons";

const TripCard = ({
  id,
  name,
  imageUrl,
  tags,
  location,
  price,
}: TripCardProps) => {
  const { pathname } = useLocation();

  const linkPath =
    pathname === "/" || pathname.startsWith("/travel")
      ? `/travel/${id}`
      : `/trip/${id}`;

  return (
    <Link to={linkPath} className="trip-card">
      <img src={imageUrl} alt={name} />

      <article>
        <h2>{name}</h2>
        <figure>
          <img
            src="/assets/icons/location-mark.svg"
            alt="location"
            className="size-4"
          />
          <figcaption>{location}</figcaption>
        </figure>
      </article>

      <div className="mt-5 pl-[18px] pr-3.5 pb-5">
        <ChipListComponent id="travel-chip">
          <ChipsDirective>
            {tags.map((tag, idx) => (
              <ChipDirective
                key={idx}
                text={getFirstWord(tag)}
                cssClass={cn(
                  idx === 1
                    ? "!bg-pink-50 !text-pink-500"
                    : "!bg-success-50 !text-success-700"
                )}
              />
            ))}
          </ChipsDirective>
        </ChipListComponent>
      </div>

      <article className="tripCard-pill">{price}</article>
    </Link>
  );
};

export default TripCard;
