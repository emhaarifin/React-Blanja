/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import './ProfileSeller.css';
import Input from '../../components/input/input';
import Button from '../../components/Button/Button';
import Navbar from '../../components/Navbar/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import SidebarSeller from '../../components/AsideProfile/SidebarSeller';
import { useHistory } from 'react-router-dom';

import { getUserById, updateProfile } from '../../redux/action/user';

function ProfileSeller() {
  const dispatch = useDispatch();
  const [reset, setReset] = useState(false);
  const { StoreData, phone_number, gender, email, name, avatar, id } = useSelector((state) => state.user.userData);

  const { store_name, store_description } = StoreData[0];
  const [form, setForm] = useState({
    store_name: store_name,
    email: email,
    phone_number: phone_number,
    gender: gender,
    store_description: store_description,
    avatar: null,
    defaultImg: false,
    imagePreview: null,
  });

  const changeText = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleInputFile = (e) => {
    setForm({
      ...form,
      defaultImg: true,
      avatar: e.target.files[0],
      imagePreview: URL.createObjectURL(e.target.files[0]),
    });
  };
  const history = useHistory();
  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    alert('Logout Success');
    history.push('/');
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(updateProfile(form, setReset));
  };
  useEffect(() => {
    document.title = 'Profile Seller';
    dispatch(getUserById(id));
  }, [reset]);
  return (
    <div>
      <Navbar className="midlle-nav-login" imagePreview={form.imagePreview} />
      <div className="d-flex wrapper  flex-nowrap">
        <SidebarSeller
          imgAvatar={
            form.imagePreview
              ? form.imagePreview
              : avatar
              ? avatar
              : 'https://res.cloudinary.com/emhaarifin/image/upload/v1632113374/Tele%20App/user-default_khw9y4.png'
          }
          nameUser={name}
        />
        <div className="main-panel">
          <div className="container mb-5">
            <div className="card-as rounded-3">
              <div className="card-header-as bg-transparent">
                <div className="text-black-20px fw-bold">My profile store</div>
                <div className="text-black-14px text-black-50">Manage your profile information</div>
                <hr className="limit-line"></hr>
              </div>
              <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="card-body-as">
                  <div className="row">
                    <div className="col-lg-8 col-md-12 col-12 order-lg-0 order-1">
                      <div className="row mb-3">
                        <label htmlFor="store_name" className="col-sm-3 col-form-label text-black-50">
                          Store Name
                        </label>
                        <div className="col-sm-9">
                          <Input
                            id="store_name"
                            name="store_name"
                            value={form.store_name}
                            type="text"
                            onChange={changeText}
                            element="input"
                          />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <label htmlFor="email" className="col-sm-3 col-form-label text-black-50">
                          Email
                        </label>
                        <div className="col-sm-9">
                          <Input
                            id="email"
                            type="text"
                            name="email"
                            value={form.email}
                            onChange={changeText}
                            element="input"
                          />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <label htmlFor="phone_number" className="col-sm-3 col-form-label text-black-50">
                          Phone number
                        </label>
                        <div className="col-sm-9">
                          <Input
                            type="number"
                            id="phone_number"
                            value={form.phone_number}
                            name="phone_number"
                            onChange={changeText}
                            element="input"
                          />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <label htmlFor="store_description" className="col-sm-3 col-form-label text-black-50">
                          Store description
                        </label>
                        <div className="col-sm-9">
                          <Input
                            type="text"
                            value={form.store_description}
                            element="textarea"
                            name="store_description"
                            onChange={changeText}
                            id="store_description"
                          />
                        </div>
                      </div>
                      <div className="row mb-3 mt-5">
                        <div className="offset-3 col-9">
                          <Button type="submit" styling="btn-profile-save">
                            Save
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-12 order-lg-0 order-0 d-flex flex-wrap justify-content-evenly">
                      <hr className="d-lg-block d-none" width="1" size="150"></hr>
                      <div className="d-flex flex-wrap flex-column align-items-center pb-3">
                        <img
                          className=" rounded-circle"
                          src={
                            form.imagePreview
                              ? form.imagePreview
                              : avatar
                              ? avatar
                              : 'https://res.cloudinary.com/emhaarifin/image/upload/v1632113374/Tele%20App/user-default_khw9y4.png'
                          }
                          width="110px"
                          height="110px"
                          alt="current-profile"
                        ></img>
                        <label htmlFor="avatar" className="btn-select-image">
                          <input
                            type="file"
                            id="avatar"
                            placeholder="Select image"
                            name="avatar"
                            onChange={handleInputFile}
                            style={{ display: 'none' }}
                          ></input>
                          Select Image
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <Button styling="btn-select-image" onClick={handleLogout}>
              Log Out
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileSeller;
