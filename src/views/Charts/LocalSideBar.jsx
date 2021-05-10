import React from "react";

// reactstrap components
import { Col } from "reactstrap";

import ChartCard from "./ChartCard";

const LocalSideBar = () => {

    const local_recovery_data = {
        card_header:"Daily Recoveries (LOCAL)",
        color_class:"one",
        type:"local_recovery",
        chart_type:"bar",
    }

    return (
        <React.Fragment>
            <Col md="6" xl="3" className="order-xl-4 order-5 left-local">
                <ChartCard data={local_recovery_data}/>
            </Col>
        </React.Fragment>
    );

}

export default LocalSideBar;
