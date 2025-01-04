import Title from "../Title/Title";

export default function Contact() {
  return (
    <>
      <section id="contact" className="contact-section min-vh-100 py-5 d-flex">
        <div className="container">
          <Title text="Contact" />
          <form action="" noValidate className="w-50 mx-auto">
            <div className="row">
              <div className="col-md-12 mb-5">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control border-0 border-bottom bg-transparent shadow-none"
                    id="userName"
                    placeholder="User Name"
                    required
                    autoComplete="name"
                  />
                </div>
              </div>
              <div className="col-md-12 mb-5">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control border-0 border-bottom bg-transparent shadow-none"
                    id="userAge"
                    placeholder="User Age"
                    required
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="col-md-12 mb-5">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control border-0 border-bottom bg-transparent shadow-none"
                    id="userEmail"
                    placeholder="User Email"
                    required
                    autoComplete="email"
                  />
                </div>
              </div>
              <div className="col-md-12 mb-5">
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control border-0 border-bottom bg-transparent shadow-none"
                    id="userPass"
                    placeholder="User Password"
                    required
                    autoComplete="current-password"
                  />
                </div>
              </div>
              <div className="col-12">
                <button
                  type="submit"
                  className="btn btn-primary secondary-bg-color border-0"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
