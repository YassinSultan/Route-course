import titleStyle from "./Title.module.css";

// eslint-disable-next-line react/prop-types
export default function Title({ text, white }) {
  return (
    <>
      <div className={`${titleStyle.title} py-3 text-center`}>
        <h2 className="text-uppercase fw-bolder">{text}</h2>
        <div className={`${titleStyle.icon} ${white ? titleStyle.white : ""}`}>
          <i className="fa fa-star" aria-hidden="true"></i>
        </div>
      </div>
    </>
  );
}
