import React from 'react';
import {connect} from 'react-redux';

const DelName = ({delName}) => (
        <button type="button" onClick = {delName}>Delete</button>
    );
const mapDispatchToProps = (dispatch, ownProps) => (
    {
        delName: () => (dispatch({
            type: 'DEL_NAME'
        }))
    }
);

export default connect(null, mapDispatchToProps)(DelName);
    
