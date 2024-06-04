// import { fa-lightbulb } from "@fortawesome/free-solid-svg-icons";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FrequentlyAskedQuestions = () => {
  return (
    <section className="py-5">
      <div className="container-fluid">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 text-center">
              <h1>Frequently Asked Questions</h1>
            </div>
            <div className="col-lg-6 col-12 mt-2">
              <h5>
                {" "}
                {/* <FontAwesomeIcon icon="fas fa-lightbulb" /> */}
                <i
                  className="fas fa-lightbulb"
                  style={{ color: "#FAB005" }}
                ></i>{" "}
                What Services Do You Offer?{" "}
              </h5>
              <p className="ms-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Reprehenderit, accusamus!
              </p>
              <h5>
                {" "}
                <i
                  className="fa-solid fa-lightbulb"
                  style={{ color: "#FAB005" }}
                ></i>{" "}
                How long does your maternal care plan take?{" "}
              </h5>
              <p className="ms-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                dolores possimus reiciendis. Dolores, iste commodi.
              </p>
              <h5>
                {" "}
                <i
                  className="fa-solid fa-lightbulb"
                  style={{ color: "#FAB005" }}
                ></i>{" "}
                Are your services free?{" "}
              </h5>
              <p className="ms-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </p>
            </div>

            <div className="col-lg-6 col-12 mt-2">
              <h5>
                {" "}
                <i
                  className="fa-solid fa-lightbulb"
                  style={{ color: "#FAB005" }}
                ></i>{" "}
                Are there any other services?{" "}
              </h5>
              <p className="ms-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolorem pariatur deserunt fugiat repellat a id animi nobis harum
                ut est!
              </p>
              <h5>
                {" "}
                <i
                  className="fa-solid fa-lightbulb"
                  style={{ color: "#FAB005" }}
                ></i>{" "}
                Do you provide free support post-maternity?{" "}
              </h5>
              <p className="ms-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                molestiae.
              </p>
              <h5>
                {" "}
                <i
                  className="fa-solid fa-lightbulb"
                  style={{ color: "#FAB005" }}
                ></i>{" "}
                Do you have luxurious services?{" "}
              </h5>
              <p className="ms-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas placeat dolorem velit incidunt illo ut.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrequentlyAskedQuestions;
