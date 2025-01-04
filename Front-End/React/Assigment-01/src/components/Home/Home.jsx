import avatar from "../../assets/avataaars.svg";
import Title from "../Title/Title";
export default function Home() {
  return (
    <>
      <div className="section min-vh-100 secondary-bg-color d-flex justify-content-center align-items-center text-light">
        <div className="container">
          <div className="image w-25 mx-auto">
            <img src={avatar} alt="avatar star" className="img-fluid" />
          </div>
          <Title text={"start Framework"} white={true} />
          <p className="text-center">
            Graphic Artist - Web Designer - Illustrator
          </p>
        </div>
      </div>
    </>
  );
}
