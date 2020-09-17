import React from 'react';

function Action(props) {
    const { action } = props;
    console.log(action);
    var date = new Date(action.created_date);
    console.log(date);
    return (
        <div className="Action">
            <p>Action {props.id + 1}</p>
            <p>
                {action.user_id} - {action.status.name} - {action.expired_count}
                - {date.toDateString()}
            </p>
        </div>
    );
}

export default Action;
