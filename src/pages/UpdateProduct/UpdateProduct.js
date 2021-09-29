/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef, useEffect } from 'react';
import Input from '../../components/input/input';
import Button from '../../components/Button/Button';
import { Editor } from '@tinymce/tinymce-react';
import axios from '../../configs/axiosConfig';
import { updateProduct } from '../../redux/action/products';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import SidebarSeller from '../../components/AsideProfile/SidebarSeller';
function AddProduct() {
  const { id } = useParams();

  const tinyEditor = useRef(null);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setProducts({
      ...products,
      [e.target.name]: e.target.value,
    });
  };
  const { store_name } = useSelector((state) => state.user.userData.StoreData[0]);

  const [category, setCategory] = useState([]);
  const [products, setProducts] = useState({
    name: '',
    brand: store_name,
    description: '',
    stock: 1,
    categoryId: 1,
    image: null,
    price: 1,
    defaultImg: false,
    imagePreview: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProduct(products, id));
  };
  const getAllCategory = async () => {
    try {
      const response = await axios.get(`/category`);
      const allCategory = response.data.result;
      setCategory(allCategory);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllCategory();
    document.title = 'Perbarui Produk';
    getAllProductsByID();
  }, [id]);

  const handleInputFile = (e) => {
    console.log(e.nativeEvent);
    console.log(products.image);
    setProducts({
      ...products,
      defaultImg: true,
      image: e.target.files[0],
      imagePreview: URL.createObjectURL(e.target.files[0]),
    });
  };
  const getAllProductsByID = async () => {
    try {
      const response = await axios.get(`/products/${id}`);
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
        <SidebarSeller active="MYProduct" />
        <div className="main-panel">
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="container mb-5">
              <div className="card-as rounded-3">
                <div className="card-header-as bg-transparent" style={{ padding: '30px 30px 5px 30px' }}>
                  <div className="text-black-20px fw-bold">Inventory</div>
                </div>
                <hr className="limit-line"></hr>
                <div className="card-body-as">
                  <div className="row">
                    <div className="col-lg-8 col-md-12 col-12 order-lg-0 order-1">
                      <div className="col ms-4 mb-4">
                        <label htmlFor="name" className="text-start col-sm-3 col-form-label text-black-50">
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
                <div className="card-header-as bg-transparent" style={{ padding: '30px 30px 5px 30px' }}>
                  <div className="text-black-20px fw-bold">Item detail</div>
                </div>
                <hr className="limit-line"></hr>
                <div className="card-body-as">
                  <div className="row">
                    <div className="col-lg-8 col-md-12 col-12 order-lg-0 order-1">
                      <div className="col ms-4 mb-4">
                        <label htmlFor="price" className="text-start col-sm-3 col-form-label text-black-50">
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
                        <label htmlFor="stock" className="text-start col-sm-3 col-form-label text-black-50">
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
                        <label htmlFor="categoryId" className="text-start col-sm-3 col-form-label text-black-50">
                          Category
                        </label>
                        <div className="col-sm-9">
                          <select
                            id="categoryId"
                            className="custom-input"
                            onChange={handleChange}
                            placeholder="Category"
                            name="categoryId"
                          >
                            {category &&
                              category?.map((item) => {
                                return (
                                  <>
                                    <option key={item.id} name="category_id" value={item.id}>
                                      {item.category}
                                    </option>
                                  </>
                                );
                              })}
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-as mt-4 rounded-3">
                <div className="card-header-as bg-transparent" style={{ padding: '30px 30px 5px 30px' }}>
                  <div className="text-black-20px fw-bold">Photo of goods</div>
                </div>
                <hr className="limit-line"></hr>
                <div className="card-body-as">
                  <div className="row">
                    <div className="col-md-12 col-12 order-lg-0 order-1">
                      <div className="col ms-4 mb-4 me-4">
                        <div
                          style={{
                            border: '1px dashed #d4d4d4',
                            width: 'auto',
                          }}
                        >
                          <div className="col-sm-9 ms-4 me-4 mt-4 mb-4" style={{ width: 'auto' }}>
                            <div
                              style={{
                                maxWidth: '190px',
                                maxHeight: '190px',
                              }}
                            >
                              <img
                                src={!products.defaultImg ? products.image : products.imagePreview}
                                style={{
                                  maxWidth: '190px',
                                  maxHeight: '190px',
                                }}
                                alt="upload img"
                              ></img>
                            </div>
                            <label
                              className="p-2 mt-4"
                              style={{
                                margin: '0 auto',
                                width: '100%',
                                borderRadius: '10px',
                                textAlign: 'center',
                                border: '1px solid black',
                                cursor: 'pointer',
                              }}
                              htmlFor="image"
                            >
                              Select Image
                              <Input
                                id="image"
                                type="file"
                                name="image"
                                onChange={handleInputFile}
                                element="input"
                                style={{ display: 'none' }}
                              />
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-as mt-4 rounded-3">
                <div className="card-header-as bg-transparent" style={{ padding: '30px 30px 5px 30px' }}>
                  <div className="text-black-20px fw-bold">Description</div>
                </div>
                <hr className="limit-line"></hr>
                <div className="card-body-as">
                  <div className="row">
                    <div className="col-md-12 col-12 order-lg-0 order-1">
                      <div className="col ms-4 mb-4 me-4">
                        <div
                          style={{
                            width: 'auto',
                          }}
                        >
                          <div className="col-sm-9 ms-4 me-4 mt-4 mb-4" style={{ width: 'auto' }}>
                            <Editor
                              apiKey="0mk4qfdlq6ewh1qix0et7vd6noxgb49m5gsj4qj6wdb33h69"
                              onInit={(evt, editor) => (tinyEditor.current = editor)}
                              initialValue={products.description}
                              init={{
                                height: 400,
                                menubar: true,
                                plugins: [
                                  'advlist autolink lists link image charmap print preview anchor',
                                  'searchreplace visualblocks code fullscreen',
                                  'insertdatetime media table paste code help wordcount',
                                ],
                                toolbar:
                                  'undo redo | formatselect | ' +
                                  'bold italic backcolor | alignleft aligncenter ' +
                                  'alignright alignjustify | bullist numlist outdent indent | ' +
                                  'removeformat | help',
                                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                              }}
                              onSaveContent={(e) =>
                                setProducts({
                                  ...products,
                                  description: e.target
                                    .getContent()
                                    .replace(/(&nbsp;)*/g, '')
                                    .replace(/(<p>)*/g, '')
                                    .replace(/<(\/)?p[^>]*>/g, ''),
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
              <div className="offset-3 d-flex justify-content-end col-9" style={{ widht: '85%' }}>
                <Button type="submit" styling="btn-product-save">
                  Perbarui
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
