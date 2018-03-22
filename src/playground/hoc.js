// HOC higher order component - A component that rendres another component
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
        <h2>{props.nestoDrugo}</h2>
    </div>
);

const withAdminWartning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please don't share!</p> }
            <WrappedComponent {...props}/>
        </div>
    );
};
const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <div>
                    <p>This is private info. Please don't share!</p>
                    <WrappedComponent {...props} />
                </div>
            ) : (
                <p>Please login</p>
            ) }
        </div>
    );
};

// requireAuthentication

const AuthInfo = requireAuthentication(Info);
const AdminInfo = withAdminWartning(Info);


// ReactDOM.render(<AdminInfo isAdmin={true} info='There are the details' />, document.getElementById('root'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info='There are the details' />, document.getElementById('root'));