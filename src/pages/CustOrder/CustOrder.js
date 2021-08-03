import React, { Component } from "react";
import TabButton from "../../components/TabButton/TabButton";
import "./CustOrder.css";
import Navbar from "../../components/Navbar/Navbar";
import SidebarCustommer from "../../components/AsideProfile/SidebarCustommer";
class CustOrder extends Component {
  constructor(properties) {
    super(properties);
    this.state = {
      toggleState: 1,
    };
  }
  toggleTab(index) {
    this.setState({ toggleState: index });
  }

  componentDidMount() {
    document.title = "Riwayat order";
  }
  render() {
    const { toggleState } = this.state;
    return (
      <>
        <div>
          <Navbar />
          <div className="d-flex wrapper flex-nowrap">
            <SidebarCustommer />
            <div className="main-panel">
              <div className="container mb-5">
                <div className="card-as rounded-3">
                  <div className="card-header-as bg-transparent">
                    <div className="text-black-20px fw-bold">My Order</div>
                  </div>
                  <div className="card-body-as" style={{ height: "70vh" }}>
                    <div>
                      <div className="ms-4 cardCustOrder toggle-profile">
                        <TabButton
                          toggleTab={() => this.toggleTab(1)}
                          typeTab={
                            toggleState === 1
                              ? "active-tab-profile"
                              : "non-active-tab-profile"
                          }
                        >
                          All Item
                        </TabButton>
                        <TabButton
                          toggleTab={() => this.toggleTab(2)}
                          typeTab={
                            toggleState === 2
                              ? "active-tab-profile"
                              : "non-active-tab-profile"
                          }
                        >
                          Not yet paid
                        </TabButton>
                        <TabButton
                          toggleTab={() => this.toggleTab(3)}
                          typeTab={
                            toggleState === 3
                              ? "active-tab-profile"
                              : "non-active-tab-profile"
                          }
                        >
                          Packed
                        </TabButton>
                        <TabButton
                          toggleTab={() => this.toggleTab(4)}
                          typeTab={
                            toggleState === 4
                              ? "active-tab-profile"
                              : "non-active-tab-profile"
                          }
                        >
                          Sent
                        </TabButton>
                        <TabButton
                          toggleTab={() => this.toggleTab(5)}
                          typeTab={
                            toggleState === 5
                              ? "active-tab-profile"
                              : "non-active-tab-profile"
                          }
                        >
                          Completed
                        </TabButton>
                        <TabButton
                          toggleTab={() => this.toggleTab(6)}
                          typeTab={
                            toggleState === 6
                              ? "active-tab-profile"
                              : "non-active-tab-profile"
                          }
                        >
                          Order cancel
                        </TabButton>
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

export default CustOrder;
