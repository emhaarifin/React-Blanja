import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import AsideProfile from "../../components/AsideProfile/AsideProfile";

function ShippingAddressCust() {
  useEffect(() => {
    document.title = "Atur Alamat Tujuan";
  });
  return (
    <>
      <div>
        <Navbar />
        <div className="d-flex wrapper  flex-nowrap">
          <AsideProfile />
          <div className="main-panel">
            <div className="container mb-5">
              <div className="card-as rounded-3">
                <div className="card-header-as bg-transparent">
                  <div className="text-black-20px fw-bold">
                    Choose Another Address
                  </div>
                  <div className="text-black-14px text-black-50">
                    Manage your shipping address
                  </div>
                  <hr className="limit-line"></hr>
                </div>
                <div className="card-body-as">
                  <div>
                    <div className="modal-dialog modal-lg">
                      <div className="container">
                        <div className="modal-content">
                          <div className="modal-header modal-header-address">
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div className="modal-body">
                            <div className="row">
                              <div className="col-12">
                                <div className="modal-address">
                                  <p className="modal__title">
                                    Choose another address
                                  </p>
                                  <div className="add-new-adress">
                                    <button
                                      type="button"
                                      className="btn__add-address"
                                      data-bs-toggle="modal"
                                      data-bs-target="#add-address"
                                      data-bs-dismiss="modal"
                                    >
                                      Add new address
                                    </button>
                                  </div>
                                  <div className="modal__shipping-adress">
                                    <div className="modal__adress">
                                      <p className="name-buyer">Andreas Jane</p>
                                      <p className="the-adress">
                                        Perumahan Sapphire Mediterania,
                                        Wiradadi, Kec. Sokaraja, Kabupaten
                                        Banyumas, Jawa Tengah, 53181 [Tokopedia
                                        Note: blok c 16] Sokaraja, Kab.
                                        Banyumas, 53181
                                      </p>
                                      <Link className="modal__change-adress">
                                        Change address
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="add-address"
        // data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="container">
            <div className="modal-content">
              <div className="modal-header modal-header-address">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-12">
                    <div className="modal-add-address">
                      <p className="modal__title">Add new address</p>
                      <div className="form-input">
                        <div className="row">
                          <div className="col-12">
                            <div className="form-input-address">
                              <p className="add-address-title">
                                Save address as (ex : home address, office
                                address)
                              </p>
                              <input type="text" className="input-item"></input>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="form-input-address">
                              <p className="add-address-title">
                                Recipient's name
                              </p>
                              <input type="text" className="input-item"></input>
                            </div>
                            <div className="form-input-address">
                              <p className="add-address-title">Address</p>
                              <input type="text" className="input-item"></input>
                            </div>
                            <div className="form-input-address">
                              <p className="add-address-title">
                                City of Subdistrict
                              </p>
                              <input type="text" className="input-item"></input>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="form-input-address">
                              <p className="add-address-title">
                                Recipient's telephone number
                              </p>
                              <input type="text" className="input-item"></input>
                            </div>
                            <div className="form-input-address">
                              <p className="add-address-title">Postal Code</p>
                              <input type="text" className="input-item"></input>
                            </div>
                          </div>
                          <div className="col-12 primary-address">
                            <input
                              type="checkbox"
                              className="set-primary-address"
                            ></input>
                            <p className="correct">Make it primary address</p>
                          </div>
                        </div>
                      </div>
                      <div className="footer-address">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Discard
                        </button>
                        <button type="button" className="btn btn-primary">
                          Apply
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShippingAddressCust;
