import React, { Component } from 'react';
import TabButton from '../../components/TabButton/TabButton';
import Search from '../../asset/search.png';
import NotFoundImg from '../../asset/profile/emptyImg.png';
import './SellerOrder.css';
import Navbar from '../../components/Navbar/Navbar';
import SidebarSeller from '../../components/AsideProfile/SidebarSeller';
class SellerOrder extends Component {
  constructor(properties) {
    super(properties);
    this.state = {
      toggleState: 1,
    };
  }
  componentDidMount() {
    document.title = 'Produk Yang Dibeli';
  }
  toggleTab(index) {
    this.setState({ toggleState: index });
  }
  render() {
    const { toggleState } = this.state;
    return (
      <>
        <div>
          <Navbar className="midlle-nav-login" />
          <div className="d-flex wrapper flex-nowrap">
            <SidebarSeller active="OrderSeller" subActive="MyOrderSeller" />
            <div className="main-panel">
              <div className="container mb-5">
                <div className="card-as rounded-3">
                  <div className="card-header-as bg-transparent">
                    <div className="text-black-20px fw-bold">My Order</div>
                  </div>
                  <div className="card-body-as" style={{ height: '70vh' }}>
                    <div>
                      <div className="ms-4 cardCustOrder toggle-profile">
                        <TabButton
                          toggleTab={() => this.toggleTab(1)}
                          typeTab={toggleState === 1 ? 'active-tab-profile' : 'non-active-tab-profile'}
                        >
                          All Item
                        </TabButton>
                        <TabButton
                          toggleTab={() => this.toggleTab(2)}
                          typeTab={toggleState === 2 ? 'active-tab-profile' : 'non-active-tab-profile'}
                        >
                          Get paid
                        </TabButton>
                        <TabButton
                          toggleTab={() => this.toggleTab(3)}
                          typeTab={toggleState === 3 ? 'active-tab-profile' : 'non-active-tab-profile'}
                        >
                          Processed
                        </TabButton>
                        <TabButton
                          toggleTab={() => this.toggleTab(4)}
                          typeTab={toggleState === 4 ? 'active-tab-profile' : 'non-active-tab-profile'}
                        >
                          Sent
                        </TabButton>
                        <TabButton
                          toggleTab={() => this.toggleTab(5)}
                          typeTab={toggleState === 5 ? 'active-tab-profile' : 'non-active-tab-profile'}
                        >
                          Completed
                        </TabButton>
                        <TabButton
                          toggleTab={() => this.toggleTab(6)}
                          typeTab={toggleState === 6 ? 'active-tab-profile' : 'non-active-tab-profile'}
                        >
                          Order cancel
                        </TabButton>
                      </div>
                      <div className="ms-4 mt-4">
                        <form class="search-profile">
                          <img className="icon-search-profile" src={Search} alt="" />
                          <input
                            type="search"
                            onChange={this.handleInputChange}
                            name="search-product"
                            id="search-product"
                            placeholder="Search"
                          />
                        </form>
                      </div>
                      <div className="no__order-image">
                        <div>
                          <img src={NotFoundImg} alt="not found data"></img>
                        </div>
                        <p>The are no orders yet</p>
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
}

export default SellerOrder;
