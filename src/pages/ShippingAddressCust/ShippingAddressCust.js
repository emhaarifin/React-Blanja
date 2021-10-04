/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import SidebarCustommer from '../../components/AsideProfile/SidebarCustommer';

import { postAddress, getAddress } from '../../redux/action/user';
import { useSelector, useDispatch } from 'react-redux';
function ShippingAddressCust() {
  useEffect(() => {
    document.title = 'Atur Alamat Tujuan';
  });

  const dispatch = useDispatch();
  const dataUser = useSelector((state) => state.user);
  const sendData = {
    id_user: dataUser?.userData?.id,
    name_address: '',
    name_recipient: '',
    phone_recipient: '',
    address: '',
    postal_code: '',
    city: '',
  };
  const [address, setAddress] = useState(sendData);
  const changeAddress = (e) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    if (dataUser?.userData?.id !== '') {
      dispatch(getAddress());
    }
  }, []);

  return (
    <>
      <div>
        <Navbar />
        <div className="d-flex wrapper  flex-nowrap">
          <SidebarCustommer active="Shipping" />
          <div className="main-panel">
            <div className="container mb-5">
              <div className="card-as rounded-3">
                <div className="card-header-as bg-transparent">
                  <div className="text-black-20px fw-bold">Choose Another Address</div>
                  <div className="text-black-14px text-black-50">Manage your shipping address</div>
                  <hr className="limit-line"></hr>
                </div>
                <div className="card-body-as">
                  <div>
                    <div className="modal-dialog modal-lg">
                      <div className="container">
                        <div className="modal-content">
                          <div className="modal-header modal-header-address"></div>
                          <div className="modal-body">
                            <div className="row">
                              <div className="col-12">
                                <div className="modal-address">
                                  <p className="modal__title">Choose another address</p>
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
                                      <p className="name-buyer">{dataUser?.userData?.name}</p>
                                      {dataUser?.address?.length ? (
                                        dataUser?.address?.map((item) => {
                                          return (
                                            <>
                                              <p className="the-adress" key={item.id_address}>
                                                {`${item.name_address}, ${item.name_recipient}, ${item.phone_recipient}, ${item.address},${item.city}, ${item.postal_code}
                              `}
                                              </p>
                                            </>
                                          );
                                        })
                                      ) : (
                                        <p>Silahkan menambah alamat pengiriman</p>
                                      )}
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
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="container">
            <div className="modal-content">
              <div className="modal-header modal-header-address">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
                              <p className="add-address-title">Save address as (ex : home address, office address)</p>
                              <input
                                type="text"
                                name="name_address"
                                onChange={changeAddress}
                                className="input-item"
                              ></input>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="form-input-address">
                              <p className="add-address-title">Recipient's name</p>
                              <input
                                type="text"
                                name="name_recipient"
                                onChange={changeAddress}
                                className="input-item"
                              ></input>
                            </div>
                            <div className="form-input-address">
                              <p className="add-address-title">Address</p>
                              <input type="text" name="address" onChange={changeAddress} className="input-item"></input>
                            </div>
                            <div className="form-input-address">
                              <p className="add-address-title">City of Subdistrict</p>
                              <input type="text" name="city" onChange={changeAddress} className="input-item"></input>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="form-input-address">
                              <p className="add-address-title">Recipient's telephone number</p>
                              <input
                                type="text"
                                name="phone_recipient"
                                onChange={changeAddress}
                                className="input-item"
                              ></input>
                            </div>
                            <div className="form-input-address">
                              <p className="add-address-title">Postal Code</p>
                              <input
                                type="text"
                                name="postal_code"
                                onChange={changeAddress}
                                className="input-item"
                              ></input>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="footer-address">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                          Discard
                        </button>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            dispatch(postAddress(address));
                          }}
                          data-bs-dismiss="modal"
                          type="button"
                          className="btn btn-primary"
                        >
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
