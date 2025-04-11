import { ContactInformation } from "./ContactInformation";
import styles from "./styles.module.scss";

export const ContactInfoAndQuestions = () => {
    return (
        <div className="row">
            <ContactInformation />
            <div className="col-lg-6">
                <h2 className="title mb-1">Got Any Questions?</h2>
                <p className="mb-2">
                    Use the form below to get in touch with the sales team
                </p>

                <form action="#" className="contact-form mb-3">
                    <div className="row">
                        <div className="col-sm-6">
                            <label htmlFor="cname" className="sr-only">
                                Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="cname"
                                placeholder="Name *"
                                required={true}
                            />
                        </div>

                        <div className="col-sm-6">
                            <label htmlFor="cemail" className="sr-only">
                                Email
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="cemail"
                                placeholder="Email *"
                                required={true}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-6">
                            <label htmlFor="cphone" className="sr-only">
                                Phone
                            </label>
                            <input
                                type="tel"
                                className="form-control"
                                id="cphone"
                                placeholder="Phone"
                            />
                        </div>

                        <div className="col-sm-6">
                            <label htmlFor="csubject" className="sr-only">
                                Subject
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="csubject"
                                placeholder="Subject"
                            />
                        </div>
                    </div>

                    <label htmlFor="cmessage" className="sr-only">
                        Message
                    </label>
                    <textarea
                        className="form-control"
                        cols={30}
                        rows={4}
                        id="cmessage"
                        required={true}
                        placeholder="Message *"
                    ></textarea>

                    <button
                        type="submit"
                        className="btn btn-outline-primary-2 btn-minwidth-sm"
                    >
                        <span>SUBMIT</span>
                        <i className="icon-long-arrow-right"></i>
                    </button>
                </form>
            </div>
        </div>
    );
};
