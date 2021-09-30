/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import './ProfileCust.css';
import Input from '../../components/input/input';
import Button from '../../components/Button/Button';
import CustomRadio from '../../components/CustomRadio/CustomRadio';
import Navbar from '../../components/Navbar/Navbar';
import SidebarCustommer from '../../components/AsideProfile/SidebarCustommer';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getUserById, updateProfile } from '../../redux/action/user';
import swal from 'sweetalert';

function ProfileCust() {
  const dispatch = useDispatch();

  const history = useHistory();

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    swal('success', 'Logout Success', 'success');
    history.push('/');
  };
  const [reset, setReset] = useState(false);
  const { phone_number, gender, email, name, avatar, id, date_of_birth } = useSelector(
    (state) => state?.user?.userData
  );

  const [form, setForm] = useState({
    name: name,
    email: email,
    phone_number: phone_number,
    gender: gender,
    avatar: null,
    date_of_birth: date_of_birth,
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(updateProfile(form, setReset));
  };
  useEffect(() => {
    document.title = 'Profile Custommer';
    if (reset) {
      dispatch(getUserById(id));
    }
  }, [reset]);
  return (
    <div>
      <Navbar imagePreview={form.imagePreview} />
      <div className="d-flex wrapper  flex-nowrap">
        <SidebarCustommer
          active="Profile"
          imgAvatar={
            form.imagePreview
              ? form.imagePreview
              : avatar
              ? avatar
              : 'https://res.cloudinary.com/emhaarifin/image/upload/v1632113374/Tele%20App/user-default_khw9y4.png'
          }
        />
        <div className="main-panel">
          <div className="container mb-5">
            <div className="card-as rounded-3">
              <div className="card-header-as bg-transparent">
                <div className="text-black-20px fw-bold">My profile</div>
                <div className="text-black-14px text-black-50">Manage your profile information</div>
                <hr className="limit-line"></hr>
              </div>

              <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="card-body-as">
                  <div className="row">
                    <div className="col-lg-8 col-md-12 col-12 order-lg-0 order-1">
                      <div className="row mb-3">
                        <label htmlFor="name" className="col-sm-3 col-form-label text-black-50">
                          Name
                        </label>
                        <div className="col-sm-9">
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            element="input"
                            value={form.name}
                            onChange={changeText}
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
                            element="input"
                            readOnly={true}
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
                            name="phone_number"
                            element="input"
                            value={form.phone_number}
                            onChange={changeText}
                          />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <label htmlFor="store_description" className="col-sm-3 col-form-label text-black-50">
                          Gender
                        </label>
                        <div className="col-sm-9 d-flex">
                          <CustomRadio
                            type="radio"
                            className="pick-gender"
                            id="laki-laki"
                            name="gender"
                            value="male"
                            checked={form.gender === 'male' ? true : false}
                            onChange={changeText}
                            nameLabel="Laki-Laki"
                          />
                          <CustomRadio
                            type="radio"
                            className="pick-gender"
                            id="perempuan"
                            name="gender"
                            checked={form.gender === 'female' ? true : false}
                            onChange={changeText}
                            value="female"
                            styling="add-margin-CR"
                            nameLabel="Perempuan"
                          />
                        </div>
                      </div>

                      {/* <div className="row mb-3">
                        <label htmlFor="store_description" className="col-sm-3 col-form-label text-black-50">
                          Date of birth
                        </label>
                        <div className="col-sm-9">
                          <div className="date-of-birth">
                            <Input
                              element="input"
                              type="date"
                              name="date_of_birth"
                              value={date_of_birth}
                              onChange={changeText}
                            />
                          </div>
                        </div>
                      </div> */}
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
                          Select Image
                          <input
                            type="file"
                            id="avatar"
                            placeholder="Select image"
                            name="avatar"
                            onChange={handleInputFile}
                            style={{ display: 'none' }}
                          />
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

export default ProfileCust;
