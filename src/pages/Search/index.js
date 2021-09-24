import React, { useState, useEffect } from 'react';
import axios from '../../configs/axiosConfiq';
import CardProduct from '../../components/CardProduct/CardProduct';
import Navbar from '../../components/Navbar/Navbar';
import { Link, useLocation } from 'react-router-dom';

import './Category.css';

function Index() {
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState('DESC');
  const [Refresh, setRefresh] = useState(false);
  const Location = useLocation();
  const [number, setNumber] = useState();
  const [sortBy, setSortBy] = useState('id');
  let Search = ``;

  if (Location.search !== '') {
    Search = `${Location.search}`;
  } else {
    Search = ``;
  }

  useEffect(() => {
    axios
      .get(`/products?page=${number}&search=${Search}&sortBy=${sortBy}&sort=${sort}`)
      .then((response) => {
        const { result } = response.data.data;
        setProducts(result);
        console.log(result);
      })
      .catch(console.error());
  }, [Refresh]);
  return (
    <div>
      <Navbar />
      <div className="container">
        <p className="heading-product"></p>
        {/* <nav className="breadcrumb" aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link style={{ color: '#9B9B9B' }} to="/">
                Home
              </Link>
            </li>
            <li className="breadcrumb-item">
              <Link style={{ color: '#9B9B9B' }} to="/">
                Category
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {categoryName}
            </li>
          </ol>
        </nav> */}
        <div className="card-product">
          <CardProduct products={products} />
        </div>
      </div>
    </div>
  );
}

export default Index;

// class Category extends Component {
//   state = {
//     categoryData: [],
//     isLoading: true,
//     pageNumber: 1,
//     categoryName: '',
//   };

//   async getCategoryProduct() {
//     const response = await axios.get(`http://localhost:4000/v1/category/${this.props.match.params.id}`);
//     try {
//       console.log(response.data.data);
//       this.setState({
//         categoryData: response.data.data,
//         isLoading: false,
//         categoryName: response.data.data[0].category,
//       });
//     } catch (error) {
//       this.setState({ error, isLoading: false });
//     }
//   }

//   componentDidMount() {
//     this.getCategoryProduct();
//   }

//   render() {
//     const { categoryData, categoryName } = this.state;
//     return (
//       <div>
//         <Navbar />
//         <div className="container">
//           <p className="heading-product"></p>
//           <nav className="breadcrumb" aria-label="breadcrumb">
//             <ol className="breadcrumb">
//               <li className="breadcrumb-item">
//                 <Link style={{ color: '#9B9B9B' }} to="/">
//                   Home
//                 </Link>
//               </li>
//               <li className="breadcrumb-item">
//                 <Link style={{ color: '#9B9B9B' }} to="/">
//                   Category
//                 </Link>
//               </li>
//               <li className="breadcrumb-item active" aria-current="page">
//                 {categoryName}
//               </li>
//             </ol>
//           </nav>
//           <div className="card-product">
//             <CardProduct products={categoryData} />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Category;
