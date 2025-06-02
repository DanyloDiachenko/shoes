import Image from "next/image";
import styles from "./styles.module.scss";
import { team } from "./team";
import Link from "next/link";

export const Team = () => {
    return (
        <div className={`${styles.team} container`}>
            <h2 className={styles.title}>Meet Our Team</h2>
            <div className="row">
                {team.map((teamMember, index) => (
                    <div className={styles.column} key={index}>
                        <div className={styles.member}>
                            <figure className={styles.media}>
                                <Image
                                    src={teamMember.image}
                                    alt="member photo"
                                    width={768}
                                    height={1024}
                                />
                                <figcaption className={styles.overlay}>
                                    <div className={styles.overlayContent}>
                                        <h3 className={styles.memberTitle}>
                                            {teamMember.name}
                                            <span>{teamMember.position}</span>
                                        </h3>
                                        <p>{teamMember.description}</p>
                                        <div className={styles.socialIcons}>
                                            {teamMember.socialLinks.map(
                                                (socialLink, index) => (
                                                    <Link
                                                        key={index}
                                                        href={socialLink.link}
                                                        className={
                                                            styles.socialIcon
                                                        }
                                                        title={socialLink.title}
                                                        target="_blank"
                                                    >
                                                        {socialLink.icon}
                                                    </Link>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </figcaption>
                            </figure>
                            <div className={styles.memberContent}>
                                <h3 className={styles.memberTitle}>
                                    {teamMember.name}
                                    <span>{teamMember.position}</span>
                                </h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
