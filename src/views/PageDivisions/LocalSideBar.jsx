import React from "react";

// reactstrap components
import { Col } from "reactstrap";

import ChartCard from "./SubDivisions/ChartCard";

const LocalSideBar = () => {

    const local_recovery_data = {
        card_header:"Daily Recoveries (LOCAL)",
        color_class:"two",
        type:"local",
        data_type:"local_recovery",
        chart_type:"bar",
    }

    const local_total_breakdown = {
        card_header:"BREAKDOWN OF TOTAL CASES (LOCAL)",
        color_class:"nine",
        type:"local",
        data_type:"local_total_breakdown",
        chart_type:"doughnut",
    }

    const local_total_vs_active = {
        card_header:"TOTAL VS ACTIVE CASES (LOCAL)",
        color_class:"eighth",
        type:"local",
        data_type:"local_total_vs_active",
        chart_type:"line",
    }

    return (
        <React.Fragment>
            <Col md="6" xl="3" className="order-xl-4 order-4 left-local">
                <ChartCard data={local_recovery_data}/>
                <ChartCard data={local_total_breakdown}/>
                <ChartCard data={local_total_vs_active}/>
            </Col>
        </React.Fragment>
    );

}

export default LocalSideBar;
