import { useState } from "react";

export default function ModalSearch() {
  const [data, setData] = useState({
    menuName: "Search",
    menuIcon: "far fa-times-circle icon-close",
    heading: "What are you looking for?",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    btnText: "Search",
  });
  return (
    <div id="separch" className="modal fade p-0">
      <div className="modal-dialog dialog-animated">
        <div className="modal-content h-100">
          <div className="modal-header" data-dismiss="modal">
            {data.menuName} <i className={data.menuIcon} />
          </div>
          <div className="modal-body">
            <form className="row">
              <div className="col-12 align-self-center">
                <div className="row">
                  <div className="col-12 pb-3">
                    <h2 className="search-title mt-0 mb-3">{data.heading}</h2>
                    <p>{data.content}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 input-group mt-4">
                    <input type="text" placeholder="Enter your keywords" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 input-group align-self-center">
                    <button className="btn btn-bordered-white mt-3">
                      {data.btnText}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
