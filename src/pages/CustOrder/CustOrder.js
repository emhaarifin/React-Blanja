import React, { useState, useEffect } from 'react';
import TabButton from '../../components/TabButton/TabButton';
import './CustOrder.css';
import Navbar from '../../components/Navbar/Navbar';
import SidebarCustommer from '../../components/AsideProfile/SidebarCustommer';
import { useDispatch, useSelector } from 'react-redux';
import { getAllOrder } from '../../redux/action/order';
import Skeleton from 'react-loading-skeleton';
function CustOrder() {
  const [toggleState, setToggleState] = useState(1);
  const [search, setSearch] = useState('');
  const toggleTab = (number, keyword) => {
    setToggleState(number);
    setSearch(keyword);
  };
  const { orderData } = useSelector((state) => state.orders);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllOrder(search));
  }, [dispatch, search]);
  return (
    <>
      <div>
        <Navbar />
        <div className="d-flex wrapper flex-nowrap">
          <SidebarCustommer active="Order" />
          <div className="main-panel">
            <div className="container mb-5">
              <div className="card-as rounded-3">
                <div className="card-header-as bg-transparent">
                  <div className="text-black-20px fw-bold">My Order</div>
                </div>
                <div className="card-body-as pb-5 ">
                  <div>
                    <div className="ms-4 cardCustOrder flex-wrap toggle-profile">
                      <TabButton
                        toggleTab={() => toggleTab(1, '')}
                        typeTab={toggleState === 1 ? 'active-tab-profile' : 'non-active-tab-profile'}
                      >
                        All Item
                      </TabButton>
                      <TabButton
                        toggleTab={() => toggleTab(2, 'Not yet paid')}
                        typeTab={toggleState === 2 ? 'active-tab-profile' : 'non-active-tab-profile'}
                      >
                        Not yet paid
                      </TabButton>
                      <TabButton
                        toggleTab={() => toggleTab(3, 'Packed')}
                        typeTab={toggleState === 3 ? 'active-tab-profile' : 'non-active-tab-profile'}
                      >
                        Packed
                      </TabButton>
                      <TabButton
                        toggleTab={() => toggleTab(4, 'Sent')}
                        typeTab={toggleState === 4 ? 'active-tab-profile' : 'non-active-tab-profile'}
                      >
                        Sent
                      </TabButton>
                      <TabButton
                        toggleTab={() => toggleTab(5, 'Completed')}
                        typeTab={toggleState === 5 ? 'active-tab-profile' : 'non-active-tab-profile'}
                      >
                        Completed
                      </TabButton>
                      <TabButton
                        toggleTab={() => toggleTab(6, 'Order cancel')}
                        typeTab={toggleState === 6 ? 'active-tab-profile' : 'non-active-tab-profile'}
                      >
                        Order cancel
                      </TabButton>
                    </div>
                  </div>
                  <table className="table ms-auto me-auto  table-sm table-bordered" style={{ width: '94%' }}>
                    <thead className="text-center">
                      <tr>
                        <th style={{ width: '20%' }}>Name</th>
                        <th style={{ width: '20%' }}>Category</th>
                        <th style={{ width: '20%' }}>Quantity</th>
                        <th style={{ width: '20%' }}>Total Price</th>
                        <th style={{ width: '20%' }}>Payment Method</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orderData &&
                        orderData.map((item) => {
                          return (
                            <>
                              <tr key={item.id}>
                                <td className="max-1-line">{`${item.name}` || <Skeleton />}</td>
                                <td>{`${item.category}` || <Skeleton />}</td>
                                <td>{`${item.qty}` || <Skeleton />}</td>
                                <td>{`${item.total}` || <Skeleton />}</td>
                                <td>{`${item.payment_method}` || <Skeleton />}</td>
                              </tr>
                            </>
                          );
                        })}
                    </tbody>
                  </table>
                  {/* // {orderData.length > 0 ? ( */}
                  {/* //   orderData.map((item) => { */}
                  {/* //     console.log(item);
                  //     return (
                  //       <>
                  //         <div className="ms-4 mt-5 me-4 d-flex" style={{ borderBottom: '1px solid black' }}>
                  //           <p>{`Name product: ${item.name}` || <Skeleton />}</p>
                  //           <p>{`Category: ${item.category}` || <Skeleton />}</p>
                  //           <p>{`Quantity: ${item.qty}` || <Skeleton />}</p>
                  //           <p>{`Rp. ${item.total}` || <Skeleton />}</p>
                  //           <p>{`Payment: ${item.payment_method}` || <Skeleton />}</p>
                  //         </div>
                  //       </>
                  //     );
                  //   })
                  // ) : (
                  //   <p
                  //     className="ms-4 "
                  //     style={{ height: '30vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                  //   >
                  //     Belum ada order
                  //   </p>
                  // )} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustOrder;
