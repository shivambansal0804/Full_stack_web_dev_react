import React from 'react';

function Contact(props) {

    return (
        <div className="container">
            <div className="row row-content">
                <div className="col-12">
                    <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                    <h5>Our Address</h5>
                    <address>
                        121, Willy Wonka <br />
		              Chocolate factory,<br />
		              NEVERLAND<br />
                        <i className="fa fa-phone fa-lg"></i>: +91 86xxxxxxxx<br />
                        <i className="fa fa-fax fa-lg"></i>: +91 99xxxxxxxx<br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">talinFoods@food.net</a>
                    </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5></h5>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Contact;