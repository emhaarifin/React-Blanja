/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Input from "../../components/input/input";
import AvatarMini from "../../asset/profile-mini.png";
import Button from "../../components/Button/Button";
import IconPackage from "../../asset/profile/product.png";
import StoreIcon from "../../asset/profile/store.png";
import IconCart from "../../asset/profile/order.png";
import { Link } from "react-router-dom";
import CustomRadio from "../../components/CustomRadio/CustomRadio";
import { Editor } from "@tinymce/tinymce-react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
function AddProduct() {
  const url = "http://localhost:4000/";
  const { id } = useParams();

  const handleChange = (e) => {
    setProducts({
      ...products,
      [e.target.name]: e.target.value,
    });
  };
  const [products, setProducts] = useState({
    name: "",
    brand: "",
    description: "",
    stock: 0,
    categoryId: 2,
    image: "",
    price: 0,
  });

  let history = useHistory();

  const handleSubmit = async () => {
    try {
      await axios.put(`${url}products/${id}`, products);
      alert("res");
      return history.push("/profile/seller/product");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    document.title = "Perbarui Produk";
    getAllProductsByID();
  }, [id]);

  const getAllProductsByID = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/products/${id}`);
      const product = response.data.result[0];
      setProducts({
        name: product.name,
        brand: product.brand,
        description: product.description,
        stock: product.stock,
        categoryId: product.categoryId,
        image: product.image,
        price: product.price,
      });
    } catch {
      console.error();
    }
  };

  return (
    <div>
      <Navbar className="midlle-nav-login" />
      <div className="d-flex wrapper  flex-nowrap">
        <div className="sidebar  flex-column">
          <div className="user-profile d-flex flex-wrap mb-5">
            <img
              src={AvatarMini}
              className="user-profile-img"
              alt="user-profile-img"
            ></img>
            <div className="d-flex flex-column ps-3 pt-1">
              <div className="text-black-16px font-semi-bold">
                Johanes Mikael
              </div>
              <div className="text-black-14px text-black-50">
                <img src="../asset/img/icon/pensil.svg" alt=""></img> Ubah
                profile
              </div>
            </div>
          </div>
          <div>
            <ul className="sidebar-menu">
              <li>
                <input
                  type="checkbox"
                  className="sidebar-collapse"
                  id="sidebar-collapse1"
                ></input>
                <label
                  for="sidebar-collapse1"
                  className="d-flex align-items-center"
                >
                  <div className="sidebar-menu-icon-background store-icon">
                    <img
                      className="sidebar-menu-icon"
                      src={StoreIcon}
                      alt=""
                    ></img>
                  </div>
                  Store
                  <span className="arrow-menu ms-auto"></span>
                </label>
                <ul className="sidebar-submenu" id="submenu1">
                  <li>
                    <Link to="/profile/seller/">Store profile</Link>
                  </li>
                </ul>
              </li>
              <li>
                <input
                  type="checkbox"
                  className="sidebar-collapse"
                  id="sidebar-collapse2"
                ></input>
                <label
                  for="sidebar-collapse2"
                  className="d-flex align-items-center text-black-50"
                >
                  <div className="sidebar-menu-icon-background package-icon">
                    <img
                      className="sidebar-menu-icon"
                      src={IconPackage}
                      alt=""
                    ></img>
                  </div>
                  Product
                  <span className=" arrow-menu ms-auto"></span>
                </label>
                <ul className="sidebar-submenu" id="submenu2">
                  <li>
                    <Link
                      to="/profile/seller/product"
                      className="text-black-50"
                    >
                      My Products
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/profile/seller/add_product"
                      className="text-black-50"
                    >
                      Selling products
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <input
                  type="checkbox"
                  className="sidebar-collapse"
                  id="sidebar-collapse3"
                ></input>
                <label
                  for="sidebar-collapse3"
                  className="d-flex align-items-center text-black-50"
                >
                  <div className="sidebar-menu-icon-background cart-icon">
                    <img
                      className="sidebar-menu-icon"
                      src={IconCart}
                      alt=""
                    ></img>
                  </div>
                  Order
                  <span className=" arrow-menu ms-auto"></span>
                </label>
                <ul className="sidebar-submenu" id="submenu2">
                  <li>
                    <Link
                      to="/profile/seller/myorderseller"
                      className="text-black-50"
                    >
                      My order
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/profile/seller/myorderseller"
                      className="text-black-50"
                    >
                      Order cancel
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="main-panel">
          <div className="container mb-5">
            <div className="card-as rounded-3">
              <div
                className="card-header-as bg-transparent"
                style={{ padding: "30px 30px 5px 30px" }}
              >
                <div className="text-black-20px fw-bold">Inventory</div>
              </div>
              <hr className="limit-line"></hr>
              <div className="card-body-as">
                <div className="row">
                  <div className="col-lg-8 col-md-12 col-12 order-lg-0 order-1">
                    <div className="col ms-4 mb-4">
                      <label
                        htmlFor="name"
                        className="text-start col-sm-3 col-form-label text-black-50"
                      >
                        Name of goods
                      </label>
                      <div className="col-sm-9">
                        <Input
                          value={products.name}
                          id="name"
                          type="text"
                          name="name"
                          onChange={handleChange}
                          element="input"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-as mt-4 rounded-3">
              <div
                className="card-header-as bg-transparent"
                style={{ padding: "30px 30px 5px 30px" }}
              >
                <div className="text-black-20px fw-bold">Item detail</div>
              </div>
              <hr className="limit-line"></hr>
              <div className="card-body-as">
                <div className="row">
                  <div className="col-lg-8 col-md-12 col-12 order-lg-0 order-1">
                    <div className="col ms-4 mb-4">
                      <label
                        htmlFor="price"
                        className="text-start col-sm-3 col-form-label text-black-50"
                      >
                        Unit price
                      </label>
                      <div className="col-sm-9">
                        <Input
                          value={products.price}
                          id="price"
                          type="text"
                          name="price"
                          onChange={handleChange}
                          element="input"
                        />
                      </div>
                      <label
                        htmlFor="stock"
                        className="text-start col-sm-3 col-form-label text-black-50"
                      >
                        Stock
                      </label>
                      <div className="col-sm-9">
                        <Input
                          value={products.stock}
                          id="stock"
                          type="text"
                          name="stock"
                          onChange={handleChange}
                          element="input"
                        />
                      </div>
                      <div className="ms-2 col-sm-9">
                        <form>
                          <p className="text-black-50">Stock</p>
                          <div className="conditionStock d-flex mt-2">
                            <CustomRadio nameLabel="Baru" />
                            <CustomRadio
                              nameLabel="Bekas"
                              styling="add-margin-CR"
                            />
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-as mt-4 rounded-3">
              <div
                className="card-header-as bg-transparent"
                style={{ padding: "30px 30px 5px 30px" }}
              >
                <div className="text-black-20px fw-bold">Photo of goods</div>
              </div>
              <hr className="limit-line"></hr>
              <div className="card-body-as">
                <div className="row">
                  <div className="col-md-12 col-12 order-lg-0 order-1">
                    <div className="col ms-4 mb-4 me-4">
                      <div
                        style={{
                          border: "1px dashed #d4d4d4",
                          width: "auto",
                        }}
                      >
                        <div
                          className="col-sm-9 ms-4 me-4 mt-4 mb-4"
                          style={{ width: "auto" }}
                        >
                          <Input
                            id="image"
                            value={products.image}
                            type="text"
                            name="image"
                            onChange={handleChange}
                            element="input"
                            placeholder="url image product"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-as mt-4 rounded-3">
              <div
                className="card-header-as bg-transparent"
                style={{ padding: "30px 30px 5px 30px" }}
              >
                <div className="text-black-20px fw-bold">Description</div>
              </div>
              <hr className="limit-line"></hr>
              <div className="card-body-as">
                <div className="row">
                  <div className="col-md-12 col-12 order-lg-0 order-1">
                    <div className="col ms-4 mb-4 me-4">
                      <div
                        style={{
                          width: "auto",
                        }}
                      >
                        <div
                          className="col-sm-9 ms-4 me-4 mt-4 mb-4"
                          style={{ width: "auto" }}
                        >
                          <Editor
                            apiKey="0mk4qfdlq6ewh1qix0et7vd6noxgb49m5gsj4qj6wdb33h69"
                            init={{
                              height: 500,
                              menubar: false,
                              plugins: [
                                "advlist autolink lists link image charmap print preview anchor",
                                "searchreplace visualblocks code fullscreen",
                                "insertdatetime media table paste code help wordcount",
                              ],
                              toolbar:
                                "undo redo | formatselect | " +
                                "bold italic backcolor | alignleft aligncenter " +
                                "alignright alignjustify | bullist numlist outdent indent | " +
                                "removeformat | help",
                              content_style:
                                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                            }}
                            value={(e) =>
                              setProducts({
                                ...products,
                                description: e.target
                                  .getContent()
                                  .replace(/(&nbsp;)*/g, "")
                                  .replace(/(<p>)*/g, "")
                                  .replace(/<(\/)?p[^>]*>/g, ""),
                              })
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="offset-3 d-flex justify-content-end col-9"
              style={{ widht: "85%" }}
            >
              <Button
                type="submit"
                onClick={handleSubmit}
                styling="btn-product-save"
              >
                Perbarui
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
