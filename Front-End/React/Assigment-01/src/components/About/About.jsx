import Title from "../Title/Title";

export default function About() {
  return (
    <>
      <section
        id="about"
        className="about-section min-vh-100 py-5 d-flex justify-content-center align-items-center secondary-bg-color text-light"
      >
        <div className="container">
          <Title text="About Us" white={true} />
          <div className="row">
            <div className="col-12 col-md-6">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ea
                repellendus esse nostrum, doloribus laudantium fugit molestias
                eveniet porro magni sint repellat veniam aliquam. Animi rerum
                quibusdam enim quae quaerat.
              </p>
            </div>
            <div className="col-12 col-md-6">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ea
                repellendus esse nostrum, doloribus laudantium fugit molestias
                eveniet porro magni sint repellat veniam aliquam. Animi rerum
                quibusdam enim quae quaerat.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
