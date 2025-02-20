import React from "react";
import { FcMultipleInputs } from "react-icons/fc";
const PostPopup = ({ handlePhotoPost }) => {
  return (
    <>
      <div className="model-popup">
        <h1 className="header">Create amazing post</h1>
        <input type="file" className="input-sec" />
        <div className="import-icon">
          <FcMultipleInputs />
        </div>
        <textarea
          placeholder="what did you learned today"
          className="text-input"
        ></textarea>
      </div>
      <footer className="modal-footer">
        <button className="save">save</button>
        <button className="close" onClick={handlePhotoPost}>
          Close
        </button>
      </footer>
    </>

    // <div
    //   className="modal fade"
    //   id="exampleModalCenter"
    //   tabIndex="-1"
    //   role="dialog"
    //   aria-labelledby="exampleModalCenterTitle"
    //   aria-hidden="true"
    // >
    //   <div className="modal-dialog modal-dialog-centered" role="document">
    //     <div className="modal-content">
    //       <div className="modal-header">
    //         <h5 className="modal-title" id="exampleModalLongTitle">
    //           Modal title
    //         </h5>
    //         <button
    //           type="button"
    //           className="close"
    //           data-dismiss="modal"
    //           aria-label="Close"
    //         >
    //           <span aria-hidden="true">&times;</span>
    //         </button>
    //       </div>
    //       <div className="modal-body">...</div>
    //       <div className="modal-footer">
    //         <button
    //           type="button"
    //           className="btn btn-secondary"
    //           data-dismiss="modal"
    //         >
    //           Close
    //         </button>
    //         <button type="button" className="btn btn-primary">
    //           Save changes
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default PostPopup;
