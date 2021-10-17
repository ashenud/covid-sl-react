import React from "react";

// reactstrap components
import { Col } from "reactstrap";

import ChartCard from "./SubDivisions/ChartCard";

const LocalTimeLine = () => {

    const daily_case_data = {
        card_header:"Daily Cases (LOCAL)",
        color_class:"one",
        type:"local",
        data_type:"daily_cases",
        chart_type:"bar",
    }

    return (
        <React.Fragment>
            <Col md="6" className="order-xl-2 order-3 chart-local-timeline">
                <ChartCard data={daily_case_data}/>
            </Col>
        </React.Fragment>
    );
}

export default LocalTimeLine;
