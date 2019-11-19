import React from "react";
import { connect } from "react-redux";
import Task from "../Task/index";

function Tasks(props) {
    return (
        <ul>
            {props.tasks.map((data, index)=>{
                return <Task name={data} key={index} index={index} />;
                
            })}
        </ul>
    )
}

function mapStateToProps(state) {
    return {
        tasks: state.tasks
    }
}

export default connect(mapStateToProps)(Tasks)