import Next from "@/svgs/next";
import "./button.css";
import MovieTicket from "@/svgs/movie-ticket";

const BuyTicket = ({
  children,
  type,
  onClick,
}: {
  children: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}) => {
  return (
    <button className="btn-primary" type={type ?? "submit"} onClick={onClick}>
      {children}
    </button>
  );
};

const BuyTicketTwo = ({
  children,
  type,
  onClick,
}: {
  children: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}) => {
  return (
    <button className="btn-secondary" type={type ?? "submit"} onClick={onClick}>
      {children}
    </button>
  );
};

const TransparentButton = ({
  children,
  type,
  onClick,
}: {
  children: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}) => {
  return (
    <button
      className="btn-transparent"
      type={type ?? "submit"}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const BorderButton = ({
  children,
  type,
  onClick,
}: {
  children: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}) => {
  return (
    <button className="btn-border" type={type ?? "submit"} onClick={onClick}>
      {children}
    </button>
  );
};

const TrailerButton = ({
  children,
  type,
  onClick,
}: {
  children: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}) => {
  return (
    <button
      className="btn-view-trailer"
      type={type ?? "submit"}
      onClick={onClick}
    >
      <div className="next-btn"></div>
      <Next />
      <p>{children}</p>
    </button>
  );
};

const ReviewButton = ({
  children,
  href,
}: {
  children?: string;
  href: string;
}) => {
  return (
    <a className="btn-review" href={href}>
      <div className="ticket-btn"></div>
      <MovieTicket />
      {children && <p>{children}</p>}
    </a>
  );
};

export {
  BuyTicket,
  BuyTicketTwo,
  TransparentButton,
  BorderButton,
  TrailerButton,
  ReviewButton,
};
