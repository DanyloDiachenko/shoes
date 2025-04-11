import { Input } from "@/components/UI/Input";
import styles from "./styles.module.scss";
import { Textarea } from "@/components/UI/Textarea";
import { Button } from "@/components/UI/Button";
import { IoIosArrowRoundForward } from "react-icons/io";

export const Questions = () => {
    return (
        <div className={styles.questions}>
            <h2 className={styles.title}>Got Any Questions?</h2>
            <p className={styles.description}>
                Use the form below to get in touch with the sales team
            </p>
            <form action="#" className={styles.form}>
                <div className="row">
                    <div className={styles.column}>
                        <label htmlFor="cname" className="sr-only">
                            Name
                        </label>
                        {/* <input
                            type="text"
                            className="form-control"
                            id="cname"
                            placeholder="Name *"
                            required={true}
                        /> */}
                        <Input
                            type="text"
                            placeholder="Name *"
                            id="cname"
                            required
                        />
                    </div>
                    <div className={styles.column}>
                        <label htmlFor="cemail" className="sr-only">
                            Email
                        </label>
                        <Input
                            type="email"
                            id="cemail"
                            placeholder="Email *"
                            required
                        />
                    </div>
                </div>
                <div className="row">
                    <div className={styles.column}>
                        <label htmlFor="cphone" className="sr-only">
                            Phone
                        </label>
                        <Input type="tel" id="cphone" placeholder="Phone" />
                    </div>
                    <div className={styles.column}>
                        <label htmlFor="csubject" className="sr-only">
                            Subject
                        </label>
                        <Input
                            type="text"
                            id="csubject"
                            placeholder="Subject"
                        />
                    </div>
                </div>
                <label htmlFor="cmessage" className="sr-only">
                    Message
                </label>
                {/* <textarea
                    className="form-control"
                    cols={30}
                    rows={4}
                    id="cmessage"
                    required={true}
                    placeholder="Message *"
                ></textarea> */}
                <Textarea
                    placeholder="Message *"
                    id="cmessage"
                    required
                    cols={30}
                    rows={4}
                />
                {/*  <button
                    type="submit"
                    className="btn btn-outline-primary-2 btn-minwidth-sm"
                >
                    <span>SUBMIT</span>
                    <i className="icon-long-arrow-right"></i>
                </button> */}
                <Button type="submit" colorType="btnOutlinePrimary2">
                    <span>SUBMIT</span>
                    <IoIosArrowRoundForward size={20} />
                </Button>
            </form>
        </div>
    );
};
