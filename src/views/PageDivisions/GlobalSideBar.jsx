import React from "react";

// reactstrap components
import { Col } from "reactstrap";

import ChartCard from "./SubDivisions/ChartCard";

const GlobalSideBar = () => {

    const global_total_growth = {
        card_header:"TOTAL CASES GROWTH (GLOBAL)",
        color_class:"three",
        type:"global",
        data_type:"global_total_growth",
        chart_type:"line",
    }

    const global_total_breakdown = {
        card_header:"BREAKDOWN OF TOTAL CASES (GLOBAL)",
        color_class:"nine",
        type:"global",
        data_type:"global_total_breakdown",
        chart_type:"doughnut",
    }

    const global_new_vs_recovery = {
        card_header:"TOTAL VS ACTIVE CASES (LOCAL)",
        color_class:"ten",
        type:"global",
        data_type:"global_new_vs_recovery",
        chart_type:"line",
    }

    return (
        <React.Fragment>
            <Col md="6" xl="3" className="order-5 right-global">
                <ChartCard data={global_total_growth}/>
                <ChartCard data={global_total_breakdown}/>
                <ChartCard data={global_new_vs_recovery}/>
            </Col>
        </React.Fragment>
    );

}

export default GlobalSideBar;
